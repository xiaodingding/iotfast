// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: iotfast/internal/app/controller/device_info.go
// 生成人：dwx
// ==========================================================================

package controller

import (
	"context"
	"iotfast/api/v1/device"
	"iotfast/internal/app/device/service"
	systemConsts "iotfast/internal/app/system/consts"
)

type deviceInfoController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var DeviceInfo = deviceInfoController{}

// List 列表
func (c *deviceInfoController) List(ctx context.Context, req *device.DeviceInfoSearchReq) (res *device.DeviceInfoSearchRes, err error) {
	res = &device.DeviceInfoSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.DeviceInfo().List(ctx, req)
	return
}

// Add 添加
func (c *deviceInfoController) Add(ctx context.Context, req *device.DeviceInfoAddReq) (res *device.DeviceInfoAddRes, err error) {
	err = service.DeviceInfo().Add(ctx, req)
	return
}

// Get 获取
func (c *deviceInfoController) Get(ctx context.Context, req *device.DeviceInfoGetReq) (res *device.DeviceInfoGetRes, err error) {
	res = &device.DeviceInfoGetRes{}
	res.DeviceInfoExtern, err = service.DeviceInfo().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *deviceInfoController) Edit(ctx context.Context, req *device.DeviceInfoEditReq) (res *device.DeviceInfoEditRes, err error) {
	err = service.DeviceInfo().Edit(ctx, req)
	return
}

// Delete 删除
func (c *deviceInfoController) Delete(ctx context.Context, req *device.DeviceInfoDeleteReq) (res *device.DeviceInfoDeleteRes, err error) {
	err = service.DeviceInfo().DeleteByIds(ctx, req.Ids)
	return
}
