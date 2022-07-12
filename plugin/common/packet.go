package common

import (
	"bytes"
	"encoding/binary"
	"fmt"
)

type Packet interface {
	Unpack(binaryData []byte) (IMessage, error)
	Pack(msg IMessage) ([]byte, error)
	GetHeadLen() uint32
}

const defaultHeaderLen uint32 = (8 + 4)
const HeadCRC8Len uint32 = 1

//DataPack 封包拆包类实例，暂时不需要成员
type DataPack struct{}

//NewDataPack 封包拆包实例初始化方法
func NewDataPack() Packet {
	return &DataPack{}
}

//GetHeadLen 获取包头长度方法
func (dp *DataPack) GetHeadLen() uint32 {
	//ID uint32(4字节) +  DataLen uint32(4字节)
	return defaultHeaderLen
}

//Pack 封包方法(压缩数据)
func (dp *DataPack) Pack(msg IMessage) ([]byte, error) {
	//创建一个存放bytes字节的缓冲
	dataBuff := bytes.NewBuffer([]byte{})

	//写dataLen
	if err := binary.Write(dataBuff, binary.LittleEndian, msg.GetDataLen()); err != nil {
		return nil, err
	}

	//写msgID
	if err := binary.Write(dataBuff, binary.LittleEndian, msg.GetMsgID()); err != nil {
		return nil, err
	}

	//写Version
	if err := binary.Write(dataBuff, binary.LittleEndian, msg.GetVer()); err != nil {
		return nil, err
	}

	//写protocol
	if err := binary.Write(dataBuff, binary.LittleEndian, msg.GetProtocol()); err != nil {
		return nil, err
	}

	//写control
	if err := binary.Write(dataBuff, binary.LittleEndian, msg.GetControl()); err != nil {
		return nil, err
	}

	//写headCRC
	var HeadCRC byte
	HeadCRC = msg.GetHeadCRC(dataBuff.Bytes())
	if err := binary.Write(dataBuff, binary.LittleEndian, HeadCRC); err != nil {
		return nil, err
	}
	// g.Log().Printf(nil, "Pack HeadCRC:%v ,ID:%v, Control:%v", HeadCRC, msg.GetMsgID(), msg.GetControl())

	//写data数据
	if err := binary.Write(dataBuff, binary.LittleEndian, msg.GetData()); err != nil {
		return nil, err
	}

	//写crc校验
	if err := binary.Write(dataBuff, binary.LittleEndian, msg.GetDataCRC()); err != nil {
		return nil, err
	}

	return dataBuff.Bytes(), nil
}

//Unpack 拆包方法(解压数据)
func (dp *DataPack) Unpack(binaryData []byte) (IMessage, error) {
	//创建一个从输入二进制数据的ioReader
	dataBuff := bytes.NewReader(binaryData)

	//只解压head的信息，得到dataLen和msgID
	msg := &Message{}

	//读dataLen
	if err := binary.Read(dataBuff, binary.LittleEndian, &msg.DataLen); err != nil {
		return nil, err
	}

	//读msgID
	if err := binary.Read(dataBuff, binary.LittleEndian, &msg.ID); err != nil {
		return nil, err
	}

	//读Version
	if err := binary.Read(dataBuff, binary.LittleEndian, &msg.Version); err != nil {
		return nil, err
	}

	//读Protocol
	if err := binary.Read(dataBuff, binary.LittleEndian, &msg.Protocol); err != nil {
		return nil, err
	}

	//读Control
	if err := binary.Read(dataBuff, binary.LittleEndian, &msg.Control); err != nil {
		return nil, err
	}

	var HeadCRC byte
	if err := binary.Read(dataBuff, binary.LittleEndian, &HeadCRC); err != nil {
		return nil, err
	}

	var calcCRC byte
	calcCRC = msg.GetHeadCRC(binaryData)
	// g.Log().Printf(nil, "Unpack HeadCRC:%v, calcCRC:%v, ID:%v, Control:%v", HeadCRC, calcCRC, msg.ID, msg.Control)
	if HeadCRC != calcCRC {
		return nil, fmt.Errorf("head crc check failed HeadCRC:%v, calcCRC:%v", HeadCRC, calcCRC)
	}

	//判断dataLen的长度是否超出我们允许的最大包长度
	// if utils.GlobalObject.MaxPacketSize > 0 && msg.DataLen > utils.GlobalObject.MaxPacketSize {
	// 	return nil, errors.New("too large msg data received")
	// }

	//这里只需要把head的数据拆包出来就可以了，然后再通过head的长度，再从conn读取一次数据
	return msg, nil
}

type TopMessage struct {
	TopicName []byte
	TopicLen  uint16
	Data      []byte
	DataLen   uint32
	Retain    byte
	Qos       byte
}

//Pack 封包方法(压缩数据)
func TopMsgPack(msg *TopMessage) ([]byte, error) {

	//创建一个存放bytes字节的缓冲
	topBuff := bytes.NewBuffer([]byte{})

	//写dataLen
	msg.TopicLen = (uint16)(len(msg.TopicName))
	if err := binary.Write(topBuff, binary.LittleEndian, msg.TopicLen); err != nil {
		return nil, err
	}

	if err := binary.Write(topBuff, binary.LittleEndian, msg.TopicName); err != nil {
		return nil, err
	}

	msg.DataLen = (uint32)(len(msg.Data))
	if err := binary.Write(topBuff, binary.LittleEndian, msg.DataLen); err != nil {
		return nil, err
	}

	if err := binary.Write(topBuff, binary.LittleEndian, msg.Data); err != nil {
		return nil, err
	}

	if err := binary.Write(topBuff, binary.LittleEndian, msg.Qos); err != nil {
		return nil, err
	}

	if err := binary.Write(topBuff, binary.LittleEndian, msg.Retain); err != nil {
		return nil, err
	}

	return topBuff.Bytes(), nil
}

//Unpack 拆包方法(解压数据)
func TopMsgUnpack(binaryData []byte) (*TopMessage, error) {
	//创建一个从输入二进制数据的ioReader
	topBuff := bytes.NewReader(binaryData)

	//只解压head的信息，得到dataLen和msgID
	msg := &TopMessage{}

	//读TopicLen
	if err := binary.Read(topBuff, binary.LittleEndian, &msg.TopicLen); err != nil {
		return nil, err
	}

	msg.TopicLen = binary.LittleEndian.Uint16(binaryData)

	msg.TopicName = make([]byte, msg.TopicLen)
	if err := binary.Read(topBuff, binary.LittleEndian, &msg.TopicName); err != nil {
		return nil, err
	}

	if err := binary.Read(topBuff, binary.LittleEndian, &msg.DataLen); err != nil {
		return nil, err
	}

	msg.Data = make([]byte, msg.DataLen)
	if err := binary.Read(topBuff, binary.LittleEndian, &msg.Data); err != nil {
		return nil, err
	}

	if err := binary.Read(topBuff, binary.LittleEndian, &msg.Qos); err != nil {
		return nil, err
	}

	if err := binary.Read(topBuff, binary.LittleEndian, &msg.Retain); err != nil {
		return nil, err
	}

	return msg, nil
}

// 反序异或 x^8+x^5+x^4+x^0
func GetCrc8(buf []byte) (crc byte) {
	for i := 0; i < len(buf); i++ {
		crc ^= buf[i]
		for j := 8; j > 0; j-- {
			if crc&0x01 > 0 {
				crc = (crc >> 1) ^ 0x8c
			} else {
				crc = crc >> 1
			}
		}
	}

	return
}
