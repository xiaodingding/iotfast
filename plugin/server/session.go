package server

import (
	"context"
	"encoding/json"
	"errors"

	// "errors"

	"io"
	"net"
	"sync"
	"sync/atomic"
	"time"

	"github.com/xiaodingding/iotfast/plugin/common"

	"github.com/gogf/gf/v2/frame/g"
	// "github.com/gogf/gf/v2/internal/json"
)

// Session status
const (
	Connecting = iota
	Connected
	Closed
)

// const (
// 	readBufferSize  = 1024
// 	writeBufferSize = 1024
// )

// var (
// 	bufioReaderPool sync.Pool
// 	bufioWriterPool sync.Pool
// )

type Session interface {
	Version() int
	// ConnectedAt returns the connected time
	ConnectedAt() time.Time
	// Connection returns the raw net.Conn
	Connection() net.Conn
	// Close closes the client connection.
	Close()
	// Disconnect sends a disconnect packet to client, it is use to close v5 client.
	Disconnect()
}

// client represents a MQTT client and implements the Session interface
type sessionClient struct {
	connectedAt int64
	server      *server
	Packet      common.Packet

	//topic
	Subscriptions Subscriptions // a map of the subscription filters a client maintains.

	clientId string
	//当前连接的ID 也可以称作为SessionID，ID全局唯一
	ConnID uint32
	status int32
	//当前连接的socket TCP套接字
	rwc net.Conn //raw tcp connection

	registed bool //是否已经注册

	//告知该链接已经退出/停止的channel
	ctx    context.Context
	cancel context.CancelFunc

	//有缓冲管道，用于读、写两个goroutine之间的消息通信
	in  chan common.IMessage
	out chan common.IMessage

	sync.RWMutex
	//链接属性

	keepalive int
	version   int

	register func(client *sessionClient) (err error)
	// unregister requests the broker to remove the client from the "active client list" when the client is disconnected.
	unregister func(client *sessionClient)

	subTopic   func(filter, client string, qos byte) bool
	unsubTopic func(filter, client string) bool

	deliverMessage func(srcClientID string, msg *common.TopMessage)
}

//Status returns client's status
func (client *sessionClient) Status() int32 {
	return atomic.LoadInt32(&client.status)
}

// IsConnected returns whether the client is connected or not.
func (client *sessionClient) IsConnected() bool {
	return client.Status() == Connected
}

func (client *sessionClient) setConnecting() {
	atomic.StoreInt32(&client.status, Connecting)
}

func (client *sessionClient) Stop() {
	client.cancel()
}

//SendMsg 直接将Message数据发送数据给远程的TCP客户端
func (client *sessionClient) SendMsg(msgID uint32, ctr byte, data []byte) error {
	client.RLock()
	defer client.RUnlock()
	if !client.IsConnected() {
		return errors.New("connection closed when send msg")
	}

	//将data封包，并且发送
	dp := client.Packet
	msg, err := dp.Pack(common.NewMsgPackage(msgID, ctr, data))
	if err != nil {
		g.Log().Printf(client.ctx, "Pack error msg ID = %v \n", msgID)
		return errors.New("Pack error msg ")
	}

	//写回客户端
	_, err = client.rwc.Write(msg)
	return err
}

//SendBuffMsg  发生BuffMsg
func (client *sessionClient) SendBuffMsg(msgID uint32, ctr byte, data []byte) error {
	client.RLock()
	defer client.RUnlock()
	// idleTimeout := time.NewTimer(5 * time.Millisecond)
	// defer idleTimeout.Stop()

	if !client.IsConnected() {
		return errors.New("Connection closed when send buff msg")
	}

	//将data封包，并且发送
	msg := common.NewMsgPackage(msgID, ctr, data)

	client.out <- msg

	// 发送超时
	// select {
	// case <-idleTimeout.C:
	// 	return errors.New("send buff msg timeout")
	// case client.out <- msg:
	// 	return nil
	// }
	//写回客户端
	//c.out <- msg

	return nil
}

func (client *sessionClient) SendTopicMsg(msgID uint32, msg *common.TopMessage) error {
	client.RLock()
	defer client.RUnlock()

	if !client.IsConnected() {
		g.Log().Print(client.ctx, "client not connect")
		return errors.New("Connection closed when send buff msg")
	}

	data, err := common.TopMsgPack(msg)
	if err != nil {
		g.Log().Printf(client.ctx, "msg pack err:%v", err)
		return err
	}

	pmsg := common.NewMsgPackage(msgID, common.ControlData, data)

	client.out <- pmsg

	g.Log().Printf(client.ctx, "send topic msg to client:%v, TopicName:%v", client.clientId, string(msg.TopicName))
	return nil
}

func (client *sessionClient) internalClose() {
	client.unregister(client)

	if client.unsubTopic != nil {
		// cl.subTopic(filter, cl.clientId, qos)
		for k, _ := range client.Subscriptions {
			client.unsubTopic(k, client.clientId)
		}

	} else {
		g.Log().Print(client.ctx, "session subtopic func is nil")
	}

}

func (client *sessionClient) Close() {

	//如果用户注册了该链接的关闭回调业务，那么在此刻应该显示调用
	// c.TCPServer.CallOnConnStop(c)

	client.Lock()
	defer client.Unlock()

	g.Log().Printf(client.ctx, "Conn Stop()...ConnID = %v \n", client.ConnID)

	client.registed = false

	//如果当前链接已经关闭
	if client.status == Closed {

	} else {

		if client.rwc != nil {
			_ = client.rwc.Close()
		}

		// client.Subscription(regCfg.Topic, regCfg.Qos)
		// delete(cl.Subscriptions, filter)
		// clean(client.Subscriptions)

		//关闭该链接全部管道
		close(client.in)
		close(client.out)
		atomic.StoreInt32(&client.status, Closed)
	}

}

func (client *sessionClient) ConnectedAt() time.Time {
	return time.Unix(atomic.LoadInt64(&client.connectedAt), 0)
}

func (client *sessionClient) Version() int {
	return client.version
}

// Connection returns the raw net.Conn
func (client *sessionClient) Connection() net.Conn {
	return client.rwc
}

func (client *sessionClient) Disconnect() {
	// client.write(disconnect)
}

// NoteSubscription makes a note of a subscription for the client.
func (cl *sessionClient) Subscription(filter string, qos byte) {
	cl.Lock()
	cl.Subscriptions[filter] = qos
	if cl.subTopic != nil {
		cl.subTopic(filter, cl.clientId, qos)
	} else {
		g.Log().Print(cl.ctx, "session subtopic func is nil")
	}

	cl.Unlock()
}

// ForgetSubscription forgests a subscription note for the client.
func (cl *sessionClient) ForgetSubscription(filter string) {
	cl.Lock()
	delete(cl.Subscriptions, filter)
	cl.Unlock()
}

func (client *sessionClient) MsgHandler(p common.IMessage) error {
	// g.Log().Printf(client.ctx,"id:%d, data_len:%d, data:%v ", msg.GetMsgID(), msg.GetDataLen(), string(msg.GetData()))
	g.Log().Printf(client.ctx, "id:%v, ver:%d, proto:%d, ctr:%d", p.GetMsgID(), p.GetVer(), p.GetProtocol(), p.GetControl())
	//client.out <- p

	msg, err := common.TopMsgUnpack(p.GetData())
	if err != nil {
		g.Log().Errorf(client.ctx, "byte to topic msg unpack err:%v", err)
		return err
	}
	g.Log().Printf(client.ctx, "recv topic msg TopicName:%s, TopicLen:%d, Data:%s ,DataLen:%d ,Qos:%d ,Retain:%d",
		string(msg.TopicName), msg.TopicLen, string(msg.Data), msg.DataLen, msg.Qos, msg.Retain)

	if client.deliverMessage != nil {
		client.deliverMessage(client.clientId, msg)
	}

	return nil
}

func (client *sessionClient) readLoop() {
	defer func() {
		if re := recover(); re != nil {
			g.Log().Printf(client.ctx, "recover seror:%v", re)
		}

		g.Log().Print(client.ctx, client.rwc.RemoteAddr().String(), "[conn Reader exit!]")
		client.Stop()
	}()

	g.Log().Printf(client.ctx, "[Reader Goroutine is running]")

	// 创建拆包解包的对象
	for {
		select {
		case <-client.ctx.Done():
			return
		default:
			//读取客户端的Msg head
			headData := make([]byte, client.Packet.GetHeadLen())
			if _, err := io.ReadFull(client.rwc, headData); err != nil {
				g.Log().Errorf(client.ctx, "read msg head error:%v", err)
				return
			}
			// g.Log().Printf(client.ctx,"read headData %+v\n", headData)

			//拆包，得到msgID 和 datalen 放在msg中
			msg, err := client.Packet.Unpack(headData)
			if err != nil {
				g.Log().Errorf(client.ctx, "unpack error:%v", err)
				return
			}

			// g.Log().Printf(client.ctx,"read DataLen %v\n", msg.GetDataLen())

			//根据 dataLen 读取 data，放在msg.Data中
			var data []byte
			if msg.GetDataLen() > 0 {
				data = make([]byte, msg.GetDataLen())
				if _, err := io.ReadFull(client.rwc, data); err != nil {
					g.Log().Errorf(client.ctx, "read msg data error:%v", err)
					return
				}
			}

			crc := make([]byte, msg.GetCRCLen())
			_, err = io.ReadFull(client.rwc, crc)
			if err != nil {
				g.Log().Errorf(client.ctx, "server read crc data err:%v", err)
				return
			}

			// g.Log().Printf(client.ctx,"read crc %+v\n", crc)

			if msg.CheckDataCRC(crc) {
				msg.SetData(data)

				if client.registed == true {
					client.MsgHandler(msg)
				} else {
					client.in <- msg
				}

			} else {
				g.Log().Printf(client.ctx, "Recv data failed crc check failed")
				return
			}

		}
	}

}

func (client *sessionClient) writeLoop() {
	// srv := client.server
	dp := common.NewDataPack()
	defer func() {
		if re := recover(); re != nil {
			g.Log().Printf(client.ctx, "write loop recover err:%v", re)
		}
		g.Log().Print(client.ctx, client.rwc.RemoteAddr().String(), "[conn Writer exit!]")
		client.Stop()
	}()

	g.Log().Printf(client.ctx, "[Writer Goroutine is running]")

	for {
		select {
		case data := <-client.out:
			if data != nil {
				//有数据要写给客户端
				bydata, err := dp.Pack(data)
				if _, err = client.rwc.Write(bydata); err != nil {
					g.Log().Errorf(client.ctx, "Send Buff Data error:%v, Conn Writer exit", err)
					return
				}
			}
		case <-client.ctx.Done():
			return
		}
	}
}

func (client *sessionClient) connectWithTimeOut() (ok bool) {
	timeout := time.NewTimer(10 * time.Second)
	defer timeout.Stop()
	ok = false

	for {
		select {
		case p := <-client.in:
			if p != nil {
				regCfg := common.RegisterCfg{}
				g.Log().Printf(client.ctx, "id:%v, ver:%d, proto:%d, ctr:%d, data:%s", p.GetMsgID(), p.GetVer(), p.GetProtocol(), p.GetControl(), string(p.GetData()))
				if p.GetControl() == common.ControlRegister {
					err := json.Unmarshal(p.GetData(), &regCfg)
					if err != nil {
						g.Log().Printf(client.ctx, "get register param error")
					}
					if len(regCfg.Topic) > 1 {
						g.Log().Printf(client.ctx, "register succseeful cfg:%v", regCfg)
						client.Subscription(regCfg.Topic, regCfg.Qos)
						client.out <- p
						return true
					} else {
						g.Log().Printf(client.ctx, "register fail cfg:%v", regCfg)
					}
				}
			}
		case <-client.ctx.Done():
			return
		case <-timeout.C:
			g.Log().Printf(client.ctx, "client(%s) connect to register timeout", client.clientId)
			return
		}
	}
	return true
}

//server goroutine结束的条件:1客户端断开连接 或 2发生错误
func (client *sessionClient) serve() {
	defer client.internalClose()

	g.Log().Print(client.ctx, "client have been create successful")
	client.ctx, client.cancel = context.WithCancel(context.Background())
	//1 开启用户从客户端读取数据流程的Goroutine
	go client.readLoop()
	//2 开启用于写回客户端数据流程的Goroutine
	go client.writeLoop()
	//按照用户传递进来的创建连接时需要处理的业务，执行钩子方法
	// client.CallOnConnStart(c)

	if ok := client.connectWithTimeOut(); ok {
		client.register(client)
		client.registed = true
		atomic.StoreInt32(&client.status, Connected)
	} else {
		client.Close()
	}

	select {
	case <-client.ctx.Done():
		client.Close()
		return
	}

}
