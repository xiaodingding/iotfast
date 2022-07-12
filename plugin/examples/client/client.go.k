package main

import (
	"encoding/json"
	"fmt"
	"io"
	"iotfast/plugin/common"
	plugin "iotfast/plugin/common"
	"net"
	"os"
	"time"

	"github.com/gogf/gf/text/gstr"
)

/*
	模拟客户端
*/
func main() {

	var id uint32
	cfg := plugin.PluginCfg{}

	time.Sleep(1)

	var param = os.Args[1]
	// fmt.Println("get param:", param)

	param = gstr.Replace(param, "'", "\"")

	err := json.Unmarshal([]byte(param), &cfg)

	fmt.Println("gcmd get param:", param, "err:", err, "cfg:", cfg)

	regis := plugin.RegisterCfg{
		Topic: "/device/adc",
		Name:  cfg.Name,
		Id:    cfg.Id,
	}

	// var pcfg *plugin.PluginCfg
	// if err := gconv.Struct(param, &pcfg); err != nil {
	// 	panic(err)
	// }
	// g.Dump(pcfg)

	// json.Unmarshal( []byte(param.to), &cfg)

	// if err := j.Scan(cfg); err != nil {
	// 	fmt.Println("param error will exit,err:", err)
	// 	return
	// }

	// conn, err := net.Dial("tcp", "127.0.0.1:1024")
	fmt.Printf("cfg:%v, proto:%s, addr:%s \n", cfg, cfg.Proto, cfg.ServerAddr)
	conn, err := net.Dial(cfg.Proto, cfg.ServerAddr)
	if err != nil {
		fmt.Println("client start err, exit!", err)
		return
	}
	dp := plugin.NewDataPack()

	id = 0
	register_status := false

	var topMsg common.TopMessage

	// TopMsgPack(msg*TopMessage)([]byte, error)

	for {
		//发封包message消息
		if register_status == true {
			topMsg.Data = []byte(fmt.Sprintf("Zinx client Demo Test MsgID=%d \n", id))
			topMsg.TopicName = regis.Topic
			topMsg.Qos = regis.Qos
			topMsg.Retain = 0

			id = id + 1

			data, err := common.TopMsgPack(&topMsg)
			if err != nil {
				fmt.Println("write error err ", err)
				return
			}

			msg, _ := dp.Pack(plugin.NewMsgPackage(id, plugin.ControlData, data))

			_, err = conn.Write(msg)
			if err != nil {
				fmt.Println("write to server error err ", err)
				return
			}

			//先读出流中的head部分
			headData := make([]byte, dp.GetHeadLen())
			_, err = io.ReadFull(conn, headData) //ReadFull 会把msg填充满为止
			if err != nil {
				fmt.Println("from server read head error")
				break
			}
			//将headData字节流 拆包到msg中
			msgHead, err := dp.Unpack(headData)
			if err != nil {
				fmt.Println("from server unpack err:", err)
				return
			}

			if msgHead.GetDataLen() > 0 {
				//msg 是有data数据的，需要再次读取data数据
				Data := make([]byte, msgHead.GetDataLen())

				//根据dataLen从io中读取字节流
				_, err := io.ReadFull(conn, Data)
				if err != nil {
					fmt.Println("from server unpack data err:", err)
					return
				}
				msgHead.SetData(Data)

				crc := make([]byte, msgHead.GetCRCLen())
				_, err = io.ReadFull(conn, crc)
				if err != nil {
					fmt.Println("from server read crc data err:", err)
					return
				}

				if msgHead.CheckDataCRC(crc) {
					fmt.Println("==>Recv Msg: ID=", msgHead.GetMsgID(), ", len=", msgHead.GetDataLen(), ", data=", string(msgHead.GetData()))
				} else {
					fmt.Println("from server Recv data failed crc check failed")
				}
			}

			time.Sleep(5 * time.Second)

		} else {
			dg, err := json.Marshal(regis)
			if err != nil {
				fmt.Println("send to server marshal data err:", err)
				return
			}
			msg, _ := dp.Pack(plugin.NewMsgPackage(id, plugin.ControlRegister, []byte(dg)))

			_, err = conn.Write(msg)
			if err != nil {
				fmt.Println("write to server error err ", err)
				return
			}

			//先读出流中的head部分
			headData := make([]byte, dp.GetHeadLen())
			_, err = io.ReadFull(conn, headData) //ReadFull 会把msg填充满为止
			if err != nil {
				fmt.Println("from server read head error")
				break
			}
			//将headData字节流 拆包到msg中
			msgHead, err := dp.Unpack(headData)
			if err != nil {
				fmt.Println("from server unpack err:", err)
				return
			}

			if msgHead.GetDataLen() > 0 {
				//msg 是有data数据的，需要再次读取data数据
				Data := make([]byte, msgHead.GetDataLen())

				//根据dataLen从io中读取字节流
				_, err := io.ReadFull(conn, Data)
				if err != nil {
					fmt.Println("from server read remain data err:", err)
					return
				}
				msgHead.SetData(Data)

				crc := make([]byte, msgHead.GetCRCLen())
				_, err = io.ReadFull(conn, crc)
				if err != nil {
					fmt.Println("from server read crc data err:", err)
					return
				}

				if msgHead.CheckDataCRC(crc) {

					if msgHead.GetControl() == plugin.ControlRegister {
						register_status = true
						fmt.Println("==>Recv Msg: ID=", msgHead.GetMsgID(), ", len=", msgHead.GetDataLen(), ", data=", string(msgHead.GetData()), "register successful")
					} else {
						fmt.Println("==>Recv Msg: ID=", msgHead.GetMsgID(), ", len=", msgHead.GetDataLen(), ", data=", string(msgHead.GetData()), "register failed")
					}
				} else {
					fmt.Println("from server Recv data failed crc check failed")
				}
			}
			time.Sleep(1 * time.Second)
		}

	}
}
