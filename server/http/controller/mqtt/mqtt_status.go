// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-07-02 23:41:34
// 生成路径: github.com/xiaodingding/iotfast/internal/app/controller/mqtt_status.go
// 生成人：dwx
// ==========================================================================

package controller

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/mqtt"
	"github.com/xiaodingding/iotfast/internal/app/mqtt/service"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
)

type mqttStatusController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var MqttStatus = mqttStatusController{}

// List 列表
func (c *mqttStatusController) List(ctx context.Context, req *mqtt.MqttStatusSearchReq) (res *mqtt.MqttStatusSearchRes, err error) {
	res = &mqtt.MqttStatusSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.MqttStatus().List(ctx, req)
	return
}

// Add 添加
func (c *mqttStatusController) Add(ctx context.Context, req *mqtt.MqttStatusAddReq) (res *mqtt.MqttStatusAddRes, err error) {
	err = service.MqttStatus().Add(ctx, req)
	return
}

// Get 获取
func (c *mqttStatusController) Get(ctx context.Context, req *mqtt.MqttStatusGetReq) (res *mqtt.MqttStatusGetRes, err error) {
	res = &mqtt.MqttStatusGetRes{}
	res.MqttStatus, err = service.MqttStatus().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *mqttStatusController) Edit(ctx context.Context, req *mqtt.MqttStatusEditReq) (res *mqtt.MqttStatusEditRes, err error) {
	err = service.MqttStatus().Edit(ctx, req)
	return
}

// Delete 删除
func (c *mqttStatusController) Delete(ctx context.Context, req *mqtt.MqttStatusDeleteReq) (res *mqtt.MqttStatusDeleteRes, err error) {
	err = service.MqttStatus().DeleteByIds(ctx, req.Ids)
	return
}

// ChangeStatus 修改状态
func (c *mqttStatusController) ChangeStatus(ctx context.Context, req *mqtt.MqttStatusStatusReq) (res *mqtt.MqttStatusStatusRes, err error) {
	res = &mqtt.MqttStatusStatusRes{}
	err = service.MqttStatus().ChangeStatus(ctx, req)
	return
}
