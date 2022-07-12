package device

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/device"
	libCodec "github.com/xiaodingding/iotfast/library/libCodec"
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
	msg, err := libCodec.HttpCodec().Encode(ctx, req)
	if err != nil {
		return nil, err
	}
	err = libCodec.HttpCodec().Save(ctx, msg)

	return
}

// Get 获取
func (c *deviceDataController) Get(ctx context.Context, req *device.DeviceDataGetReq) (res *device.DeviceDataGetRes, err error) {

	return
}
