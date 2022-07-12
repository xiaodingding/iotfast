// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-07-02 23:41:34
// 生成路径: github.com/xiaodingding/iotfast/internal/app/controller/mqtt_topic.go
// 生成人：dwx
// ==========================================================================

package controller

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/mqtt"
	"github.com/xiaodingding/iotfast/internal/app/mqtt/service"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
)

type mqttTopicController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var MqttTopic = mqttTopicController{}

// List 列表
func (c *mqttTopicController) List(ctx context.Context, req *mqtt.MqttTopicSearchReq) (res *mqtt.MqttTopicSearchRes, err error) {
	res = &mqtt.MqttTopicSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.MqttTopic().List(ctx, req)
	return
}

// Add 添加
func (c *mqttTopicController) Add(ctx context.Context, req *mqtt.MqttTopicAddReq) (res *mqtt.MqttTopicAddRes, err error) {
	err = service.MqttTopic().Add(ctx, req)
	return
}

// Get 获取
func (c *mqttTopicController) Get(ctx context.Context, req *mqtt.MqttTopicGetReq) (res *mqtt.MqttTopicGetRes, err error) {
	res = &mqtt.MqttTopicGetRes{}
	res.MqttTopic, err = service.MqttTopic().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *mqttTopicController) Edit(ctx context.Context, req *mqtt.MqttTopicEditReq) (res *mqtt.MqttTopicEditRes, err error) {
	err = service.MqttTopic().Edit(ctx, req)
	return
}

// Delete 删除
func (c *mqttTopicController) Delete(ctx context.Context, req *mqtt.MqttTopicDeleteReq) (res *mqtt.MqttTopicDeleteRes, err error) {
	err = service.MqttTopic().DeleteByIds(ctx, req.Ids)
	return
}
