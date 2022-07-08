// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-27 23:24:19
// 生成路径:/api/v1/mqtt/mqtt_topic_record.go
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

// MqttTopicRecordSearchReq 分页请求参数
type MqttTopicRecordSearchReq struct {
	g.Meta    `path:"/mqttTopicRecord/list" tags:"MQTT需要进行记录的Topic" method:"get" summary:"MQTT需要进行记录的Topic列表"`
	Name      string `p:"name"`      //设备名称
	Topic     string `p:"topic"`     //Topic
	Qos       string `p:"qos"`       //Qos
	CreatTime string `p:"creatTime"` //创建时间
	BeginTime string `p:"beginTime"` //开始时间
	EndTime   string `p:"endTime"`   //结束时间
	commonApi.PageReq
}
type MqttTopicRecordSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.MqttTopicRecord `json:"list"`
}
type MqttTopicRecordGetReq struct {
	g.Meta `path:"/mqttTopicRecord/get" tags:"MQTT需要进行记录的Topic" method:"get" summary:"获取MQTT需要进行记录的Topic数据"`
	Id     int `p:"id"`
}
type MqttTopicRecordGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.MqttTopicRecord
}

// MqttTopicRecordAddReq 添加操作请求参数
type MqttTopicRecordAddReq struct {
	g.Meta    `path:"/mqttTopicRecord/add" tags:"MQTT需要进行记录的Topic" method:"post" summary:"添加MQTT需要进行记录的Topic"`
	Name      string `p:"name" v:"required#设备名称不能为空"`
	Topic     string `p:"topic" `
	Qos       int    `p:"qos" `
	Remark    string `p:"remark" `
	CreatTime uint   `p:"creatTime" v:"required#创建时间不能为空"`
}
type MqttTopicRecordAddRes struct {
}

// MqttTopicRecordEditReq 修改操作请求参数
type MqttTopicRecordEditReq struct {
	g.Meta    `path:"/mqttTopicRecord/edit" tags:"MQTT需要进行记录的Topic" method:"put" summary:"修改MQTT需要进行记录的Topic"`
	Id        int    `p:"id" v:"required#主键ID不能为空"`
	Name      string `p:"name" v:"required#设备名称不能为空"`
	Topic     string `p:"topic" `
	Qos       int    `p:"qos" `
	Remark    string `p:"remark" `
	CreatTime uint   `p:"creatTime" v:"required#创建时间不能为空"`
}
type MqttTopicRecordEditRes struct {
}
type MqttTopicRecordDeleteReq struct {
	g.Meta `path:"/mqttTopicRecord/delete" tags:"MQTT需要进行记录的Topic" method:"delete" summary:"删除MQTT需要进行记录的Topic"`
	Ids    []int `p:"ids"`
}
type MqttTopicRecordDeleteRes struct {
}
