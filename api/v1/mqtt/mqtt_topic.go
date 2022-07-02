// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-07-02 23:41:34
// 生成路径:/api/v1/mqtt/mqtt_topic.go
// 生成人：dwx
// ==========================================================================

package mqtt

import (
	commonApi "iotfast/api/v1/common"
	//"iotfast/internal/app/mqtt/model"
	"iotfast/internal/app/mqtt/model/entity"

	"github.com/gogf/gf/v2/frame/g"
)

// Fill with you ideas below.

// MqttTopicSearchReq 分页请求参数
type MqttTopicSearchReq struct {
	g.Meta    `path:"/mqttTopic/list" tags:"MQTT客户端的订阅信息" method:"get" summary:"MQTT客户端的订阅信息列表"`
	Name      string `p:"name"`      //设备名称
	Topic     string `p:"topic"`     //订阅的Topic信息
	Qos       string `p:"qos"`       //等级
	BeginTime string `p:"beginTime"` //开始时间
	EndTime   string `p:"endTime"`   //结束时间
	commonApi.PageReq
}
type MqttTopicSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.MqttTopic `json:"list"`
}
type MqttTopicGetReq struct {
	g.Meta `path:"/mqttTopic/get" tags:"MQTT客户端的订阅信息" method:"get" summary:"获取MQTT客户端的订阅信息数据"`
	Id     int `p:"id"`
}
type MqttTopicGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.MqttTopic
}

// MqttTopicAddReq 添加操作请求参数
type MqttTopicAddReq struct {
	g.Meta `path:"/mqttTopic/add" tags:"MQTT客户端的订阅信息" method:"post" summary:"添加MQTT客户端的订阅信息"`
	Name   string `p:"name" v:"required#设备名称不能为空"`
	Topic  string `p:"topic" `
	Qos    int    `p:"qos" `
}
type MqttTopicAddRes struct {
}

// MqttTopicEditReq 修改操作请求参数
type MqttTopicEditReq struct {
	g.Meta `path:"/mqttTopic/edit" tags:"MQTT客户端的订阅信息" method:"put" summary:"修改MQTT客户端的订阅信息"`
	Id     int    `p:"id" v:"required#主键ID不能为空"`
	Name   string `p:"name" v:"required#设备名称不能为空"`
	Topic  string `p:"topic" `
	Qos    int    `p:"qos" `
}
type MqttTopicEditRes struct {
}
type MqttTopicDeleteReq struct {
	g.Meta `path:"/mqttTopic/delete" tags:"MQTT客户端的订阅信息" method:"delete" summary:"删除MQTT客户端的订阅信息"`
	Ids    []int `p:"ids"`
}
type MqttTopicDeleteRes struct {
}
