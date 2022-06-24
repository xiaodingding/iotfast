// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: iotfast/internal/app/controller/device_group.go
// 生成人：dwx
// ==========================================================================

package controller

import (
	"context"
	"iotfast/api/v1/device"
	"iotfast/internal/app/device/service"
	systemConsts "iotfast/internal/app/system/consts"
)

type deviceGroupController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var DeviceGroup = deviceGroupController{}

// List 列表
func (c *deviceGroupController) List(ctx context.Context, req *device.DeviceGroupSearchReq) (res *device.DeviceGroupSearchRes, err error) {
	res = &device.DeviceGroupSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.DeviceGroup().List(ctx, req)
	return
}

// Add 添加
func (c *deviceGroupController) Add(ctx context.Context, req *device.DeviceGroupAddReq) (res *device.DeviceGroupAddRes, err error) {
	err = service.DeviceGroup().Add(ctx, req)
	return
}

// Get 获取
func (c *deviceGroupController) Get(ctx context.Context, req *device.DeviceGroupGetReq) (res *device.DeviceGroupGetRes, err error) {
	res = &device.DeviceGroupGetRes{}
	res.DeviceGroup, err = service.DeviceGroup().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *deviceGroupController) Edit(ctx context.Context, req *device.DeviceGroupEditReq) (res *device.DeviceGroupEditRes, err error) {
	err = service.DeviceGroup().Edit(ctx, req)
	return
}

// Delete 删除
func (c *deviceGroupController) Delete(ctx context.Context, req *device.DeviceGroupDeleteReq) (res *device.DeviceGroupDeleteRes, err error) {
	err = service.DeviceGroup().DeleteByIds(ctx, req.Ids)
	return
}
