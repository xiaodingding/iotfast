package common

import (
	"hash/crc32"
)

const (
	ControlLogin = iota
	ControlRegister
	ControlData
	ControlHeart
	ControlError
	ControlClosed
)

const (
	ProtocolTopic = iota //byte
	ProtocolRPC
)

const (
	ClientStaConnect = iota //connect
	ClientStaLogin
	ClientStaRegister
	ClientStaData
	ClientStaClose
)

type IMessage interface {
	GetMsgID() uint32       //获取消息ID
	GetData() []byte        //获取消息内容
	GetDataLen() uint32     //设置消息数据段长度
	GetHeadCRC([]byte) byte //数据帧头
	GetDataCRC() uint32     //数据内容数据校验
	GetCRCLen() uint32
	CheckDataCRC([]byte) bool
	GetVer() byte
	GetProtocol() byte
	GetControl() byte

	SetMsgID(uint32)   //设计消息ID
	SetData([]byte)    //设计消息内容
	SetDataLen(uint32) //设置消息数据段长度
}

//Message 消息
type Message struct {
	DataLen  uint32 //消息的长度
	ID       uint32 //消息的ID
	Version  byte   //版本号
	Protocol byte   //协议类型
	Control  byte   //控制
	HeadCRC  byte   //头验证
	Data     []byte //消息的内容
	DataCRC  uint32
}

//NewMsgPackage 创建一个Message消息包
func NewMsgPackage(ID uint32, ctr byte, data []byte) IMessage {
	return &Message{
		DataLen:  uint32(len(data)),
		ID:       ID,
		Data:     data,
		Version:  1,
		Protocol: ProtocolTopic,
		Control:  ctr,
	}
}

func NewMsgPackageWithProtocol(ID uint32, ctr byte, Protocol byte, data []byte) IMessage {
	return &Message{
		DataLen:  uint32(len(data)),
		ID:       ID,
		Data:     data,
		Version:  1,
		Protocol: Protocol,
		Control:  ctr,
	}
}

//GetDataLen 获取消息数据段长度
func (msg *Message) GetDataLen() uint32 {
	//msg.DataLen = uint32(len(msg.Data))
	return msg.DataLen
}
func (msg *Message) GetHeadCRC(data []byte) byte {
	var headcrc byte
	headcrc = GetCrc8(data[:defaultHeaderLen-HeadCRC8Len])
	// fmt.Println("crc8 data:", data[:defaultHeaderLen-HeadCRC8Len])
	return headcrc
}
func (msg *Message) GetDataCRC() uint32 {
	crc := crc32.ChecksumIEEE(msg.Data)
	return crc
}

func (msg *Message) GetVer() byte {
	return msg.Version
}

func (msg *Message) GetProtocol() byte {
	return msg.Protocol
}

func (msg *Message) GetControl() byte {
	return msg.Control
}

func (msg *Message) CheckDataCRC([]byte) bool {
	old := crc32.ChecksumIEEE(msg.Data)
	return old == msg.GetDataCRC()
}

func (msg *Message) GetCRCLen() uint32 {
	return 4
}

//GetMsgID 获取消息ID
func (msg *Message) GetMsgID() uint32 {
	return msg.ID
}

//GetData 获取消息内容
func (msg *Message) GetData() []byte {
	return msg.Data
}

//SetDataLen 设置消息数据段长度
func (msg *Message) SetDataLen(len uint32) {
	msg.DataLen = len
}

//SetMsgID 设计消息ID
func (msg *Message) SetMsgID(msgID uint32) {
	msg.ID = msgID
}

//SetData 设计消息内容
func (msg *Message) SetData(data []byte) {
	msg.Data = data
}
