// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/controller/device_label.go
// 生成人：dwx
// ==========================================================================

package device

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/device"
	"github.com/xiaodingding/iotfast/internal/app/device/service"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
)

type deviceLabelController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var DeviceLabel = deviceLabelController{}

// List 列表
func (c *deviceLabelController) List(ctx context.Context, req *device.DeviceLabelSearchReq) (res *device.DeviceLabelSearchRes, err error) {
	res = &device.DeviceLabelSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.DeviceLabel().List(ctx, req)
	return
}

// Add 添加
func (c *deviceLabelController) Add(ctx context.Context, req *device.DeviceLabelAddReq) (res *device.DeviceLabelAddRes, err error) {
	err = service.DeviceLabel().Add(ctx, req)
	return
}

// Get 获取
func (c *deviceLabelController) Get(ctx context.Context, req *device.DeviceLabelGetReq) (res *device.DeviceLabelGetRes, err error) {
	res = &device.DeviceLabelGetRes{}
	res.DeviceLabel, err = service.DeviceLabel().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *deviceLabelController) Edit(ctx context.Context, req *device.DeviceLabelEditReq) (res *device.DeviceLabelEditRes, err error) {
	err = service.DeviceLabel().Edit(ctx, req)
	return
}

// Delete 删除
func (c *deviceLabelController) Delete(ctx context.Context, req *device.DeviceLabelDeleteReq) (res *device.DeviceLabelDeleteRes, err error) {
	err = service.DeviceLabel().DeleteByIds(ctx, req.Ids)
	return
}
