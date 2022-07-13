package device

import (
	"context"

	"github.com/gogf/gf/frame/g"
	"github.com/xiaodingding/iotfast/api/v1/device"
	"github.com/xiaodingding/iotfast/library/libCodec"
)

type deviceDataController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var DeviceData = deviceDataController{}

// Add 添加
func (c *deviceDataController) Add(ctx context.Context, req *device.DeviceDataAddReq) (res *device.DeviceDataAddRes, err error) {

	g.Log().Print(ctx, "before req:", req)

	var dataReq *device.DeviceDataAddReq
	if err := c.Request.Parse(&dataReq); err != nil {
		return nil, err
	}

	g.Log().Print(ctx, "after dataReq:", dataReq)
	httpParse, err := libCodec.Open("http")
	if err != nil {
		return nil, err
	}
	msg, err := httpParse.Encode(ctx, req)
	err = httpParse.Save(ctx, msg)

	return
}

// Get 获取
func (c *deviceDataController) Get(ctx context.Context, req *device.DeviceDataGetReq) (res *device.DeviceDataGetRes, err error) {

	return
}
