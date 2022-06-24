// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: iotfast/internal/app/controller/device_kind.go
// 生成人：dwx
// ==========================================================================

package controller

import (
	"context"
	"iotfast/api/v1/device"
	"iotfast/internal/app/device/service"
	systemConsts "iotfast/internal/app/system/consts"
)

type deviceKindController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var DeviceKind = deviceKindController{}

// List 列表
func (c *deviceKindController) List(ctx context.Context, req *device.DeviceKindSearchReq) (res *device.DeviceKindSearchRes, err error) {
	res = &device.DeviceKindSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.DeviceKind().List(ctx, req)
	return
}

// Add 添加
func (c *deviceKindController) Add(ctx context.Context, req *device.DeviceKindAddReq) (res *device.DeviceKindAddRes, err error) {
	err = service.DeviceKind().Add(ctx, req)
	return
}

// Get 获取
func (c *deviceKindController) Get(ctx context.Context, req *device.DeviceKindGetReq) (res *device.DeviceKindGetRes, err error) {
	res = &device.DeviceKindGetRes{}
	res.DeviceKind, err = service.DeviceKind().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *deviceKindController) Edit(ctx context.Context, req *device.DeviceKindEditReq) (res *device.DeviceKindEditRes, err error) {
	err = service.DeviceKind().Edit(ctx, req)
	return
}

// Delete 删除
func (c *deviceKindController) Delete(ctx context.Context, req *device.DeviceKindDeleteReq) (res *device.DeviceKindDeleteRes, err error) {
	err = service.DeviceKind().DeleteByIds(ctx, req.Ids)
	return
}
