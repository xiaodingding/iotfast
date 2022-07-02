package main

import (
	"encoding/json"
	"fmt"
	client "iotfast/plugin/client"
	"iotfast/plugin/common"
	plugin "iotfast/plugin/common"
	"os"
	"time"

	"github.com/gogf/gf/text/gstr"
)

func handleMsg(msg plugin.IMessage) {

	pmsg, err := common.TopMsgUnpack(msg.GetData())
	if err != nil {
		fmt.Println("message unpack to topic msg err:", err)
	}
	fmt.Println("==>handle Recv Msg:msg id:", msg.GetMsgID(), ", TopicName", string(pmsg.TopicName), ", data=", string(pmsg.Data))
}

func main() {

	var id uint32
	var err error
	cfg := plugin.PluginCfg{
		Proto:      "unix",
		Unixdir:    os.TempDir() + "/iotfast_plugin",
		ServerAddr: "127.0.0.1:1099",
		Name:       "test",
		Params:     "",
	}

	time.Sleep(1)

	topic := "/device/adc"

	if len(os.Args) > 1 {
		var param = os.Args[1]
		// fmt.Println("get param:", param)
		param = gstr.Replace(param, "'", "\"")
		err = json.Unmarshal([]byte(param), &cfg)
		if err != nil {
			fmt.Println("get cmd param unmarshal err:", err)
			return
		}
		fmt.Println("gcmd get param:", param, "err:", err, "cfg:", cfg)
	}

	clt := client.NewClient(&cfg, topic, handleMsg)
	err = clt.ConnectWithTimeOut(10)
	if err != nil {
		fmt.Printf("link to server(%s) faild err:%v \n", cfg.ServerAddr, err)
		time.Sleep(1)
		return
	}

	fmt.Printf("client start run\n")
	clt.Start()

	msg := common.TopMessage{}
	ticker := time.NewTicker(time.Second * 1)
	defer func() {
		ticker.Stop()
		clt.Stop()
		fmt.Printf("client stop run\n")
	}()

	fmt.Printf("client start work\n")

	for {

		select {
		case p := <-clt.In:
			pmsg, err := common.TopMsgUnpack(p.GetData())
			if err != nil {
				fmt.Println("message unpack to topic msg err:", err)
			}
			fmt.Println("==>Select Recv Msg:msg id:", p.GetMsgID(), ", TopicName", string(pmsg.TopicName), ", data=", string(pmsg.Data))

		case <-ticker.C:
			id = id + 1
			msg.Data = []byte(fmt.Sprintf("id:%d", id))
			msg.TopicName = []byte(topic)
			msg.Qos = 0
			msg.Retain = 0
			// err = clt.SendTopicMsg(id, &msg)

			err = clt.SendTopicMsgDirect(id, &msg)
			if err != nil {
				fmt.Printf("send data error:%v \n", err)
				return
			}
		case <-clt.Exit:
			fmt.Println("client have  been exit ")
			return
		}

	}

}
