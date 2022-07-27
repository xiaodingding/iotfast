package server

import (
	"fmt"
	"io/ioutil"
	"net"
	"os"
	"path"
	"runtime"
	"sync"
	"time"

	"github.com/xiaodingding/iotfast/library/libUtils"
	"github.com/xiaodingding/iotfast/plugin/common"

	"github.com/gogf/gf/v2/frame/g"
	// "net/rpc"
)

type connection interface {
	addr() string
	retries() int
}

type tcpConn int

func (t *tcpConn) addr() string {
	if *t < 1024 {
		// Only use unprivileged ports
		*t = 1023
	}

	*t = *t + 1
	return fmt.Sprintf("127.0.0.1:%d", *t)
}

func (t *tcpConn) retries() int {
	return 500
}

type unixConn string

func (u *unixConn) addr() string {
	// return fmt.Sprintf("%s%s%d", os.TempDir(), "/iotfast_plugin_", rand.Int())
	return os.TempDir() + "/iotfast_plugin"
}

func (u *unixConn) retries() int {
	return 4
}

type PublicMsg struct {
	clientId string
	msg      *common.TopMessage
}

// server represents a mqtt server instance.
// Create a server by using New()
type server struct {
	mu sync.RWMutex //gard sessions clients & offlineClients map
	// status int32        //server status
	// sessions clients stores the  online sessions clients
	sessions    map[string]*sessionClient
	plugins     map[string]*Plugin
	tcpListener net.Listener //tcp listeners
	conn        connection
	proto       string
	unixdir     string
	pluginDir   string //插件的文件夹地址
	netAddr     string //最终的地址
	pubMsg      chan PublicMsg
	msgId       uint32
	topics      *Topic //topic
}

func defaultServer() *server {
	srv := &server{
		// status:         serverStatusInit,
		sessions:  make(map[string]*sessionClient),
		plugins:   make(map[string]*Plugin),
		proto:     "unix",
		unixdir:   os.TempDir() + "github.com/xiaodingding/iotfast/plugin",
		conn:      new(unixConn),
		pluginDir: ".",
		topics:    TopicNew(),
	}
	// srv.publishService = &publishService{server: srv}
	return srv
}

func (srv *server) newClient(c net.Conn) (*sessionClient, error) {
	client := &sessionClient{
		server:         srv,
		version:        0,
		keepalive:      30,
		ConnID:         0,
		rwc:            c,
		clientId:       string(libUtils.GetRandomUUID()),
		in:             make(chan common.IMessage, 8),
		out:            make(chan common.IMessage, 8),
		Packet:         common.NewDataPack(),
		Subscriptions:  make(map[string]byte),
		register:       srv.registerClient,
		unregister:     srv.unRegisterClient,
		subTopic:       srv.subTopic,
		unsubTopic:     srv.unsubTopic,
		deliverMessage: srv.deliverMessage,
	}
	client.setConnecting()

	return client, nil
}

// Session returns the client for given clientID
func (srv *server) Session(clientId string) Session {
	srv.mu.Lock()
	defer srv.mu.Unlock()
	return srv.sessions[clientId]
}

func (srv *server) unRegisterClient(client *sessionClient) {
	srv.mu.Lock()
	defer srv.mu.Unlock()

	if _, ok := srv.sessions[client.clientId]; ok {
		delete(srv.sessions, client.clientId)
		fmt.Printf("client id(%s) have been unregister \n", client.clientId)
	} else {
		fmt.Printf("client id(%s) not register \n", client.clientId)
	}
}

func (srv *server) subTopic(filter, client string, qos byte) bool {
	srv.mu.Lock()
	defer srv.mu.Unlock()

	q := srv.topics.Subscribe(filter, client, qos)
	if q {
		fmt.Printf("client id(%s) subTopic(%s) Qos(%d) successful \n", client, filter, qos)
	} else {
		fmt.Printf("client id(%s) unsubTopic(%s) failed \n", client, filter)
	}

	return q
}

func (srv *server) GetMsgID() uint32 {
	id := srv.msgId
	srv.msgId = srv.msgId + 1
	return id
}

func (srv *server) deliverMessage(srcClientID string, msg *common.TopMessage) {
	srv.mu.Lock()
	defer srv.mu.Unlock()
	var pulic PublicMsg
	pulic.clientId = srcClientID
	pulic.msg = msg
	srv.pubMsg <- pulic
}

func (srv *server) unsubTopic(filter, client string) bool {
	srv.mu.Lock()
	defer srv.mu.Unlock()

	q := srv.topics.Unsubscribe(filter, client)
	if q {
		fmt.Printf("client id(%s) unsubTopic(%s) successful \n", client, filter)
	} else {
		fmt.Printf("client id(%s) unsubTopic(%s) failed \n", client, filter)
	}

	return q
}

// 已经判断是成功了，注册
func (srv *server) registerClient(client *sessionClient) (err error) {
	srv.mu.Lock()
	defer srv.mu.Unlock()
	srv.sessions[client.clientId] = client

	fmt.Printf("client id(%s) register successful\n", client.clientId)
	return nil
}

func (srv *server) unRegisterPlugin(p *Plugin) {
	srv.mu.Lock()
	defer srv.mu.Unlock()

	if _, ok := srv.plugins[p.GetId()]; ok {
		delete(srv.plugins, p.GetId())
		fmt.Printf("plugin id(%s) have been unregister \n", p.GetId())
	} else {
		fmt.Printf("plugin id(%s) not register \n", p.GetId())
	}
}

// 已经判断是成功了，注册
func (srv *server) registerPlugin(p *Plugin) (err error) {
	srv.mu.Lock()
	defer srv.mu.Unlock()
	srv.plugins[p.GetId()] = p
	fmt.Printf("plugin id(%s) register successful\n", p.GetId())
	return nil
}

func (srv *server) eventLoop() {
	for {
		select {
		case p := <-srv.pubMsg:
			clients := srv.topics.Subscribers(string(p.msg.TopicName))
			g.Log().Printf(nil, "recv public msg to deliver client id:%s, clients:%v", p.clientId, clients)
			for id, qos := range clients {
				if p.msg.Qos >= qos {
					if _, ok := srv.sessions[id]; ok {
						srv.sessions[id].SendTopicMsg(srv.GetMsgID(), p.msg)
					} else {
						g.Log().Printf(nil, "client id:%v, qos:%v not find session", id, qos)
					}
				} else {
					g.Log().Printf(nil, "msg.Qos(%d) and subtopic qos(%d) not match", p.msg.Qos, qos)
				}
			}
		}
	}
}
func (srv *server) serveTCP(l net.Listener) {
	defer func() {
		l.Close()
		srv.Stop()
	}()
	var tempDelay time.Duration
	fmt.Println("server plugin start successful")
	srv.tcpListener = l

	for {
		rw, e := l.Accept()
		if e != nil {
			if ne, ok := e.(net.Error); ok && ne.Temporary() {
				if tempDelay == 0 {
					tempDelay = 5 * time.Millisecond
				} else {
					tempDelay *= 2
				}
				if max := 1 * time.Second; tempDelay > max {
					tempDelay = max
				}
				time.Sleep(tempDelay)
				continue
			}
			return
		}
		client, err := srv.newClient(rw)
		if err != nil {
			fmt.Println("new client fail:", err)
			return
		}
		fmt.Println("will start client thread server")
		go client.serve()
	}
}

func (srv *server) Stop() {
	srv.tcpListener.Close()

	for _, p := range srv.plugins {
		p.Stop()
	}

	for _, s := range srv.sessions {
		s.Stop()
	}
}

func (srv *server) AddPlugin(path string, cfg common.PluginCfg) *Plugin {
	p := &Plugin{
		exe:         path,
		cfg:         cfg,
		running:     false,
		initTimeout: 2 * time.Second,
		exitTimeout: 2 * time.Second,
		waitCh:      make(chan error),
		register:    srv.registerPlugin,
		unregister:  srv.unRegisterPlugin,
	}
	return p
}

func (srv *server) PluginStart(p *Plugin) {
	p.Start()
}

func (srv *server) pluginInit(fileList []string) {
	srv.mu.Lock()
	defer srv.mu.Unlock()

	for _, f := range fileList {
		cfg := common.PluginCfg{
			Proto:      srv.proto,
			Unixdir:    srv.unixdir,
			ServerAddr: srv.netAddr,
			Name:       path.Base(f),
			Params:     "",
		}

		p := &Plugin{
			exe:         f,
			cfg:         cfg,
			running:     false,
			initTimeout: 2 * time.Second,
			exitTimeout: 2 * time.Second,
			waitCh:      make(chan error),
			id:          libUtils.GetRandomUUID(),
			// register:    srv.registerPlugin,
			unregister: srv.unRegisterPlugin,
		}
		srv.plugins[p.GetId()] = p

		go p.Start()
	}
}

func (srv *server) Discover() {
	var fileList []string
	files, err := ioutil.ReadDir(srv.pluginDir)
	if err != nil {
		fmt.Println("read dir error:", err)
	}
	for _, f := range files {
		// fmt.Println("file:", f)

		if runtime.GOOS == "linux" {
			file_mode := f.Mode()
			// fmt.Println("file_mode:", file_mode)

			perm := file_mode.Perm()
			// fmt.Println("permission:", uint32(perm))

			// 73: 000 001 001 001
			flag := perm & os.FileMode(73)

			if uint32(flag) == uint32(73) {
				fmt.Printf("file:%s have exec permission \n", f.Name())
				fileList = append(fileList, srv.pluginDir+"/"+f.Name())
			}
		} else if runtime.GOOS == "windows" {
			ext := path.Ext(f.Name()) //
			if ext == ".exe" {
				fmt.Printf("file:%s have exec permission \n", f.Name())
				fileList = append(fileList, srv.pluginDir+"\\"+f.Name())
			}
		} else {
			fmt.Println("not support os type:", runtime.GOOS)
		}

	}

	fmt.Println("fileList:", fileList)
	if len(fileList) > 0 {
		srv.pluginInit(fileList)
	}

}

func (srv *server) Start() {
	var listener net.Listener
	var err error

	for i := 0; i < srv.conn.retries(); i++ {
		netAddr := srv.conn.addr()
		listener, err = net.Listen(srv.proto, netAddr)
		if err == nil {
			fmt.Printf("using proto:%s, netAddr:%s ,err:%v, creat server successful \n", srv.proto, netAddr, err)
			srv.netAddr = netAddr
			break
		} else {
			fmt.Printf("using proto:%s, netAddr:%s ,err:%v, creat server failed \n", srv.proto, netAddr, err)
		}
	}

	// srv.Discover()
	interAppOpen(nil)
	go srv.eventLoop()
	srv.serveTCP(listener)

}

func NewServer(proto string, path string) *server {
	var conn connection

	if proto == "unix" {
		conn = new(unixConn)
	} else {
		conn = new(tcpConn)
	}

	srv := &server{
		// status:         serverStatusInit,
		sessions:  make(map[string]*sessionClient),
		plugins:   make(map[string]*Plugin),
		proto:     proto,
		unixdir:   os.TempDir() + "/iotfast_plugin",
		conn:      conn,
		pluginDir: path,
		topics:    TopicNew(),
		pubMsg:    make(chan PublicMsg, 10),
	}

	if proto == "unix" {
		if err := os.Remove(srv.unixdir); err != nil {
			fmt.Println("Cannot remove temporary socket: ", err)
		}
	}

	// srv.publishService = &publishService{server: srv}
	return srv
}

func Server() *server {
	return defaultServer()
}
