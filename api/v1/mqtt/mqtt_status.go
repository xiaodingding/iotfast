// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-07-02 23:41:34
// 生成路径:/api/v1/mqtt/mqtt_status.go
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

// MqttStatusSearchReq 分页请求参数
type MqttStatusSearchReq struct {
	g.Meta    `path:"/mqttStatus/list" tags:"MQTT客户端连接状态" method:"get" summary:"MQTT客户端连接状态列表"`
	Name      string `p:"name"`      //设备名称
	ClientId  string `p:"clientId"`  //MQTT连接的客户端Id
	Status    string `p:"status"`    //MQTT连接的状态
	UserName  string `p:"userName"`  //登录名
	Topic     string `p:"topic"`     //订阅的Topic信息
	BeginTime string `p:"beginTime"` //开始时间
	EndTime   string `p:"endTime"`   //结束时间
	commonApi.PageReq
}
type MqttStatusSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.MqttStatus `json:"list"`
}
type MqttStatusGetReq struct {
	g.Meta `path:"/mqttStatus/get" tags:"MQTT客户端连接状态" method:"get" summary:"获取MQTT客户端连接状态数据"`
	Id     int `p:"id"`
}
type MqttStatusGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.MqttStatus
}

// MqttStatusAddReq 添加操作请求参数
type MqttStatusAddReq struct {
	g.Meta   `path:"/mqttStatus/add" tags:"MQTT客户端连接状态" method:"post" summary:"添加MQTT客户端连接状态"`
	Name     string `p:"name" v:"required#设备名称不能为空"`
	ClientId string `p:"clientId" `
	Status   int    `p:"status" v:"required#MQTT连接的状态不能为空"`
	UserName string `p:"userName" `
	Topic    string `p:"topic" `
}
type MqttStatusAddRes struct {
}

// MqttStatusEditReq 修改操作请求参数
type MqttStatusEditReq struct {
	g.Meta   `path:"/mqttStatus/edit" tags:"MQTT客户端连接状态" method:"put" summary:"修改MQTT客户端连接状态"`
	Id       int    `p:"id" v:"required#主键ID不能为空"`
	Name     string `p:"name" v:"required#设备名称不能为空"`
	ClientId string `p:"clientId" `
	Status   int    `p:"status" v:"required#MQTT连接的状态不能为空"`
	UserName string `p:"userName" `
	Topic    string `p:"topic" `
}
type MqttStatusEditRes struct {
}

// MqttStatusStatusReq 设置用户状态参数
type MqttStatusStatusReq struct {
	g.Meta `path:"/mqttStatus/status" tags:"MQTT客户端连接状态" method:"put" summary:"修改MQTT客户端连接状态状态"`
	Id     int `p:"id" v:"required#主键ID不能为空"`
	Status int `p:"status" v:"required#MQTT连接的状态不能为空"`
}
type MqttStatusStatusRes struct {
}
type MqttStatusDeleteReq struct {
	g.Meta `path:"/mqttStatus/delete" tags:"MQTT客户端连接状态" method:"delete" summary:"删除MQTT客户端连接状态"`
	Ids    []int `p:"ids"`
}
type MqttStatusDeleteRes struct {
}
