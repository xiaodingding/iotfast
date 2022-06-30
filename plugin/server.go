package plugin

import (
	"fmt"
	"net"
	"os"
	"sync"
	"time"

	// "net/rpc"

	"go.uber.org/zap"
)

var zaplog *zap.Logger

func init() {
	zaplog = zap.NewNop()
}

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
	return os.TempDir() + ("/iotfast_plugin")
}

func (u *unixConn) retries() int {
	return 4
}

// server represents a mqtt server instance.
// Create a server by using New()
type server struct {
	wg       sync.WaitGroup
	initOnce sync.Once
	stopOnce sync.Once
	mu       sync.RWMutex //gard clients & offlineClients map
	status   int32        //server status
	// clients stores the  online clients
	clients     map[string]*client
	tcpListener []net.Listener //tcp listeners
	errOnce     sync.Once
	err         error
	exitChan    chan struct{}
	exitedChan  chan struct{}

	conn    connection
	proto   string
	unixdir string
}

// sessionExpireCheck 判断是否超时
// sessionExpireCheck check and terminate expired sessions
func (srv *server) sessionExpireCheck() {
	// now := time.Now()
	srv.mu.Lock()

	srv.mu.Unlock()
}

// server event loop
func (srv *server) eventLoop() {
	sessionExpireTimer := time.NewTicker(time.Second * 20)
	defer func() {
		sessionExpireTimer.Stop()
		srv.wg.Done()
	}()
	for {
		select {
		case <-srv.exitChan:
			return
		case <-sessionExpireTimer.C:
			srv.sessionExpireCheck()
		}

	}
}

func defaultServer() *server {
	srv := &server{
		// status:         serverStatusInit,
		exitChan:   make(chan struct{}),
		exitedChan: make(chan struct{}),
		clients:    make(map[string]*client),
		proto:      "unix",
		unixdir:    os.TempDir() + "iotfast/plugin",
		conn:       new(unixConn),
	}
	// srv.publishService = &publishService{server: srv}
	return srv
}

func (srv *server) newClient(c net.Conn) (*client, error) {
	// srv.configMu.Lock()
	// cfg := srv.config
	// srv.configMu.Unlock()
	client := &client{
		server:    srv,
		close:     make(chan struct{}),
		closed:    make(chan struct{}),
		connected: make(chan struct{}),
		error:     make(chan error, 1),
		version:   0,
		keepalive: 30,
	}
	client.setConnecting()

	return client, nil
}

// Client returns the client for given clientID
func (srv *server) Client(clientID string) Client {
	srv.mu.Lock()
	defer srv.mu.Unlock()
	return srv.clients[clientID]
}

func (srv *server) serveTCP(l net.Listener) {
	defer func() {
		l.Close()
	}()
	var tempDelay time.Duration
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
			zaplog.Error("new client fail", zap.Error(err))
			return
		}
		go client.serve()
	}
}

func (srv *server) Start() {
	listener, err := net.Listen(srv.proto, srv.conn.addr())
	if err != nil {
		zaplog.Error("create service fail", zap.Error(err))
	}

	srv.serveTCP(listener)
}
