package client

import (
	"context"
	"encoding/json"
	"errors"
	"io"
	"iotfast/plugin/common"
	plugin "iotfast/plugin/common"
	"net"
	"sync"
	"time"

	"github.com/gogf/gf/v2/frame/g"
)

type Client struct {

	//告知该链接已经退出/停止的channel
	ctx    context.Context
	cancel context.CancelFunc
	Exit   chan struct{}

	cfg   *plugin.PluginCfg
	Topic string
	name  string
	Id    uint32

	//有缓冲管道，用于读、写两个goroutine之间的消息通信
	In     chan common.IMessage
	out    chan common.IMessage
	Packet common.Packet
	sync.RWMutex

	registed bool //是否已经注册

	//当前连接的socket TCP套接字
	rwc net.Conn //raw tcp connection

	handleMsg func(msg plugin.IMessage)
}

func NewClient(config *plugin.PluginCfg, Topic string, handleMsg func(msg plugin.IMessage)) (c *Client) {
	c = &Client{
		Topic:     Topic,
		cfg:       config,
		In:        make(chan common.IMessage, 8),
		out:       make(chan common.IMessage, 8),
		Packet:    common.NewDataPack(),
		Id:        0,
		handleMsg: handleMsg,
		Exit:      make(chan struct{}),
	}

	c.ctx, c.cancel = context.WithCancel(context.Background())
	return
}

func (client *Client) readLoop() {
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
				if client.registed {
					if client.handleMsg != nil {
						client.handleMsg(msg)
					}
				} else {
					client.In <- msg
				}
				g.Log().Printf(client.ctx, "recv msg id:%v, ver:%d, proto:%d, ctr:%d", msg.GetMsgID(), msg.GetVer(), msg.GetProtocol(), msg.GetControl())
			} else {
				g.Log().Printf(client.ctx, "Recv data failed crc check failed")
				return
			}

		}
	}

}

func (client *Client) writeLoop() {
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

				// g.Log().Printf(client.ctx, "send message id:%v ,ver:%v ,protocol:%v", data.GetMsgID(), data.GetVer(), data.GetProtocol())
				if err != nil {
					g.Log().Errorf(client.ctx, "send messag packet data err:%v", err)
					continue
				}
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

//SendMsg 直接将Message数据发送数据给远程的TCP客户端
func (client *Client) SendMsg(msgID uint32, ctr byte, data []byte) error {
	client.RLock()
	defer client.RUnlock()
	if client.registed != true {
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
func (client *Client) SendBuffMsg(msgID uint32, ctr byte, data []byte) error {
	client.RLock()
	defer client.RUnlock()
	// idleTimeout := time.NewTimer(5 * time.Millisecond)
	// defer idleTimeout.Stop()

	if client.registed != true {
		return errors.New("Connection closed when send buff msg")
	}

	//将data封包，并且发送
	msg := common.NewMsgPackage(msgID, ctr, data)

	client.out <- msg

	return nil
}

func (c *Client) SendTopicMsg(id uint32, msg *common.TopMessage) error {
	c.RLock()
	defer c.RUnlock()

	if c.registed != true {
		return errors.New("not register to server")
	}

	data, err := common.TopMsgPack(msg)
	if err != nil {
		return err
	}

	pmsg := common.NewMsgPackage(id, common.ControlData, data)

	c.out <- pmsg

	g.Log().Printf(c.ctx, "send message chan id:%v ,ver:%v ,protocol:%v", pmsg.GetMsgID(), pmsg.GetVer(), pmsg.GetProtocol())

	return nil
}

func (c *Client) SendTopicMsgDirect(id uint32, msg *common.TopMessage) error {
	c.RLock()
	defer c.RUnlock()

	if c.registed != true {
		return errors.New("not register to server")
	}

	data, err := common.TopMsgPack(msg)
	if err != nil {
		g.Log().Errorf(c.ctx, "topic msg pack err:%v", err)
		return err
	}

	pmsg := common.NewMsgPackage(id, common.ControlData, data)

	//将data封包，并且发送
	dp := c.Packet
	bydata, err := dp.Pack(pmsg)
	if err != nil {
		g.Log().Printf(c.ctx, "Pack error msg ID = %v \n", pmsg.GetMsgID())
		return errors.New("Pack error msg ")
	}

	g.Log().Printf(c.ctx, "send message direct id:%v ,ver:%v ,protocol:%v", pmsg.GetMsgID(), pmsg.GetVer(), pmsg.GetProtocol())

	//写回客户端
	_, err = c.rwc.Write(bydata)
	return err
}

func (c *Client) register() (bool, error) {

	// defer func() {
	// 	if re := recover(); re != nil {
	// 		g.Log().Printf(c.ctx, "register cover err:%v", re)
	// 	}
	// }()

	regis := plugin.RegisterCfg{
		Topic: c.Topic,
		Name:  c.name,
		Id:    c.Id,
	}
	dg, err := json.Marshal(regis)
	if err != nil {
		g.Log().Errorf(c.ctx, "send to server marshal data err:%v", err)
		return false, err
	}
	dp := plugin.NewDataPack()
	msg, _ := dp.Pack(plugin.NewMsgPackage(c.Id, plugin.ControlRegister, dg))

	_, err = c.rwc.Write(msg)
	if err != nil {
		g.Log().Errorf(c.ctx, "write to server error err:%v ", err)
		return false, err
	}

	//先读出流中的head部分
	headData := make([]byte, dp.GetHeadLen())
	_, err = io.ReadFull(c.rwc, headData) //ReadFull 会把msg填充满为止
	if err != nil {
		g.Log().Errorf(c.ctx, "from server read head error:%v", err)
		return false, err
	}
	//将headData字节流 拆包到msg中
	msgHead, err := dp.Unpack(headData)
	if err != nil {
		g.Log().Errorf(c.ctx, "from server unpack err:", err)
		return false, err
	}

	if msgHead.GetDataLen() > 0 {
		//msg 是有data数据的，需要再次读取data数据
		Data := make([]byte, msgHead.GetDataLen())

		//根据dataLen从io中读取字节流
		_, err = io.ReadFull(c.rwc, Data)
		if err != nil {
			g.Log().Errorf(c.ctx, "from server read remain data err:", err)
			return false, err
		}
		msgHead.SetData(Data)

		crc := make([]byte, msgHead.GetCRCLen())
		_, err = io.ReadFull(c.rwc, crc)
		if err != nil {
			g.Log().Printf(c.ctx, "from server read crc data err:", err)
			return false, err
		}

		if msgHead.CheckDataCRC(crc) {
			if msgHead.GetControl() == plugin.ControlRegister {
				g.Log().Print(c.ctx, "==>Recv Msg: ID=", msgHead.GetMsgID(), ", len=", msgHead.GetDataLen(), ", data=", string(msgHead.GetData()), "register successful")
				return true, nil
			} else {
				g.Log().Print(c.ctx, "==>Recv Msg: ID=", msgHead.GetMsgID(), ", len=", msgHead.GetDataLen(), ", data=", string(msgHead.GetData()), "register failed")
			}
		} else {
			g.Log().Printf(c.ctx, "from server Recv data failed crc check failed")
		}
	}
	return false, nil
}

func (c *Client) ConnectWithTimeOut(timeout int) (err error) {

	var serverAddr string
	if c.cfg.Proto == "unix" {
		serverAddr = c.cfg.Unixdir
	} else if c.cfg.Proto == "tcp" {
		serverAddr = c.cfg.ServerAddr
	} else {
		g.Log().Errorf(c.ctx, "not support network type %v ", c.cfg.Proto)
		return
	}
	c.rwc, err = net.DialTimeout(c.cfg.Proto, serverAddr, time.Duration(timeout)*time.Second)
	if err != nil {
		g.Log().Errorf(c.ctx, "client start err: %v ", err)
		return
	}

	tout := time.NewTimer(time.Duration(timeout) * time.Second)
	defer tout.Stop()

	for {
		select {
		case <-tout.C:
			g.Log().Printf(c.ctx, "client connect to server for register timeout")
			return errors.New("register to server time out")
		default:
			ok, err := c.register()
			if ok == true {
				c.registed = true
				return nil
			}

			if err != nil {
				g.Log().Errorf(c.ctx, "register err: %v ", err)
			}
			time.Sleep(1 * time.Second)
		}
	}
	return nil
}

func (client *Client) Stop() {
	client.cancel()
}

func (c *Client) Start() error {

	if c.registed != true {
		return errors.New("client not register")
	}

	//1 开启用户从客户端读取数据流程的Goroutine
	go c.readLoop()
	//2 开启用于写回客户端数据流程的Goroutine
	go c.writeLoop()
	//按照用户传递进来的创建连接时需要处理的业务，执行钩子方法
	// client.CallOnConnStart(c)

	return nil
}
