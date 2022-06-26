// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:16
// 生成路径: iotfast/internal/app/controller/device_categoty.go
// 生成人：dwx
// ==========================================================================

package controller

import (
	"context"
	"iotfast/api/v1/device"
	"iotfast/internal/app/device/service"
	systemConsts "iotfast/internal/app/system/consts"
)

type deviceCategotyController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var DeviceCategoty = deviceCategotyController{}

// List 列表
func (c *deviceCategotyController) List(ctx context.Context, req *device.DeviceCategotySearchReq) (res *device.DeviceCategotySearchRes, err error) {
	res = &device.DeviceCategotySearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.DeviceCategoty().List(ctx, req)
	res.Kind, err = service.DeviceKind().Get(ctx, req.KindId)
	return
}

// Add 添加
func (c *deviceCategotyController) Add(ctx context.Context, req *device.DeviceCategotyAddReq) (res *device.DeviceCategotyAddRes, err error) {
	err = service.DeviceCategoty().Add(ctx, req)
	return
}

// Get 获取
func (c *deviceCategotyController) Get(ctx context.Context, req *device.DeviceCategotyGetReq) (res *device.DeviceCategotyGetRes, err error) {
	res = &device.DeviceCategotyGetRes{}
	res.DeviceCategoty, err = service.DeviceCategoty().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *deviceCategotyController) Edit(ctx context.Context, req *device.DeviceCategotyEditReq) (res *device.DeviceCategotyEditRes, err error) {
	err = service.DeviceCategoty().Edit(ctx, req)
	return
}

// Delete 删除
func (c *deviceCategotyController) Delete(ctx context.Context, req *device.DeviceCategotyDeleteReq) (res *device.DeviceCategotyDeleteRes, err error) {
	err = service.DeviceCategoty().DeleteByIds(ctx, req.Ids)
	return
}
