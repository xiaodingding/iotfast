// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-27 23:24:18
// 生成路径:/api/v1/mqtt/mqtt_msg_record.go
// 生成人：dwx
// ==========================================================================

package mqtt

import (
	commonApi "github.com/xiaodingding/iotfast/api/v1/common"
	//"github.com/xiaodingding/iotfast/internal/app/mqtt/model"
	"github.com/xiaodingding/iotfast/internal/app/mqtt/model/entity"

	"github.com/gogf/gf/v2/frame/g"
)

// Fill with you ideas below.

// MqttMsgRecordSearchReq 分页请求参数
type MqttMsgRecordSearchReq struct {
	g.Meta     `path:"/mqttMsgRecord/list" tags:"MQTT的消息记录" method:"get" summary:"MQTT的消息记录列表"`
	DeviceSn   string `p:"deviceSn"`   //设备序列号
	TopicId    string `p:"topicId"`    //Topic的主键
	ClientName string `p:"clientName"` //客户端名称
	ClientId   string `p:"clientId"`   //客户端ID
	Qos        string `p:"qos"`        //Qos
	Payload    string `p:"payload"`    //传递的数据
	CreatTime  string `p:"creatTime"`  //创建时间
	BeginTime  string `p:"beginTime"`  //开始时间
	EndTime    string `p:"endTime"`    //结束时间
	commonApi.PageReq
}
type MqttMsgRecordSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.MqttMsgRecord `json:"list"`
}
type MqttMsgRecordGetReq struct {
	g.Meta `path:"/mqttMsgRecord/get" tags:"MQTT的消息记录" method:"get" summary:"获取MQTT的消息记录数据"`
	Id     int `p:"id"`
}
type MqttMsgRecordGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.MqttMsgRecord
}

// MqttMsgRecordAddReq 添加操作请求参数
type MqttMsgRecordAddReq struct {
	g.Meta     `path:"/mqttMsgRecord/add" tags:"MQTT的消息记录" method:"post" summary:"添加MQTT的消息记录"`
	DeviceSn   string `p:"deviceSn" `
	TopicId    int    `p:"topicId" `
	ClientName string `p:"clientName" v:"required#客户端名称不能为空"`
	ClientId   string `p:"clientId" `
	Qos        int    `p:"qos" `
	Payload    string `p:"payload" `
	CreatTime  uint   `p:"creatTime" v:"required#创建时间不能为空"`
}
type MqttMsgRecordAddRes struct {
}

// MqttMsgRecordEditReq 修改操作请求参数
type MqttMsgRecordEditReq struct {
	g.Meta     `path:"/mqttMsgRecord/edit" tags:"MQTT的消息记录" method:"put" summary:"修改MQTT的消息记录"`
	Id         int    `p:"id" v:"required#主键ID不能为空"`
	DeviceSn   string `p:"deviceSn" `
	TopicId    int    `p:"topicId" `
	ClientName string `p:"clientName" v:"required#客户端名称不能为空"`
	ClientId   string `p:"clientId" `
	Qos        int    `p:"qos" `
	Payload    string `p:"payload" `
	CreatTime  uint   `p:"creatTime" v:"required#创建时间不能为空"`
}
type MqttMsgRecordEditRes struct {
}
type MqttMsgRecordDeleteReq struct {
	g.Meta `path:"/mqttMsgRecord/delete" tags:"MQTT的消息记录" method:"delete" summary:"删除MQTT的消息记录"`
	Ids    []int `p:"ids"`
}
type MqttMsgRecordDeleteRes struct {
}
