// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-27 23:24:18
// 生成路径: iotfast/internal/app/controller/mqtt_msg_record.go
// 生成人：dwx
// ==========================================================================

package controller

import (
	"context"
	"iotfast/api/v1/mqtt"
	"iotfast/internal/app/mqtt/service"
	systemConsts "iotfast/internal/app/system/consts"
)

type mqttMsgRecordController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var MqttMsgRecord = mqttMsgRecordController{}

// List 列表
func (c *mqttMsgRecordController) List(ctx context.Context, req *mqtt.MqttMsgRecordSearchReq) (res *mqtt.MqttMsgRecordSearchRes, err error) {
	res = &mqtt.MqttMsgRecordSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.MqttMsgRecord().List(ctx, req)
	return
}

// Add 添加
func (c *mqttMsgRecordController) Add(ctx context.Context, req *mqtt.MqttMsgRecordAddReq) (res *mqtt.MqttMsgRecordAddRes, err error) {
	err = service.MqttMsgRecord().Add(ctx, req)
	return
}

// Get 获取
func (c *mqttMsgRecordController) Get(ctx context.Context, req *mqtt.MqttMsgRecordGetReq) (res *mqtt.MqttMsgRecordGetRes, err error) {
	res = &mqtt.MqttMsgRecordGetRes{}
	res.MqttMsgRecord, err = service.MqttMsgRecord().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *mqttMsgRecordController) Edit(ctx context.Context, req *mqtt.MqttMsgRecordEditReq) (res *mqtt.MqttMsgRecordEditRes, err error) {
	err = service.MqttMsgRecord().Edit(ctx, req)
	return
}

// Delete 删除
func (c *mqttMsgRecordController) Delete(ctx context.Context, req *mqtt.MqttMsgRecordDeleteReq) (res *mqtt.MqttMsgRecordDeleteRes, err error) {
	err = service.MqttMsgRecord().DeleteByIds(ctx, req.Ids)
	return
}
