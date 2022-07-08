// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-27 23:24:19
// 生成路径: github.com/xiaodingding/iotfast/internal/app/controller/mqtt_topic_record.go
// 生成人：dwx
// ==========================================================================

package controller

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/mqtt"
	"github.com/xiaodingding/iotfast/internal/app/mqtt/service"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
)

type mqttTopicRecordController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var MqttTopicRecord = mqttTopicRecordController{}

// List 列表
func (c *mqttTopicRecordController) List(ctx context.Context, req *mqtt.MqttTopicRecordSearchReq) (res *mqtt.MqttTopicRecordSearchRes, err error) {
	res = &mqtt.MqttTopicRecordSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.MqttTopicRecord().List(ctx, req)
	return
}

// Add 添加
func (c *mqttTopicRecordController) Add(ctx context.Context, req *mqtt.MqttTopicRecordAddReq) (res *mqtt.MqttTopicRecordAddRes, err error) {
	err = service.MqttTopicRecord().Add(ctx, req)
	return
}

// Get 获取
func (c *mqttTopicRecordController) Get(ctx context.Context, req *mqtt.MqttTopicRecordGetReq) (res *mqtt.MqttTopicRecordGetRes, err error) {
	res = &mqtt.MqttTopicRecordGetRes{}
	res.MqttTopicRecord, err = service.MqttTopicRecord().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *mqttTopicRecordController) Edit(ctx context.Context, req *mqtt.MqttTopicRecordEditReq) (res *mqtt.MqttTopicRecordEditRes, err error) {
	err = service.MqttTopicRecord().Edit(ctx, req)
	return
}

// Delete 删除
func (c *mqttTopicRecordController) Delete(ctx context.Context, req *mqtt.MqttTopicRecordDeleteReq) (res *mqtt.MqttTopicRecordDeleteRes, err error) {
	err = service.MqttTopicRecord().DeleteByIds(ctx, req.Ids)
	return
}
