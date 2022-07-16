// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/controller/device_status.go
// 生成人：dwx
// ==========================================================================

package device

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/device"
	"github.com/xiaodingding/iotfast/internal/app/device/service"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
)

type deviceStatusController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var DeviceStatus = deviceStatusController{}

// List 列表
func (c *deviceStatusController) List(ctx context.Context, req *device.DeviceStatusSearchReq) (res *device.DeviceStatusSearchRes, err error) {
	res = &device.DeviceStatusSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.DeviceStatus().List(ctx, req)
	return
}

// Add 添加
func (c *deviceStatusController) Add(ctx context.Context, req *device.DeviceStatusAddReq) (res *device.DeviceStatusAddRes, err error) {
	err = service.DeviceStatus().Add(ctx, req)
	return
}

// Get 获取
func (c *deviceStatusController) Get(ctx context.Context, req *device.DeviceStatusGetReq) (res *device.DeviceStatusGetRes, err error) {
	res = &device.DeviceStatusGetRes{}
	res.DeviceStatus, err = service.DeviceStatus().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *deviceStatusController) Edit(ctx context.Context, req *device.DeviceStatusEditReq) (res *device.DeviceStatusEditRes, err error) {
	err = service.DeviceStatus().Edit(ctx, req)
	return
}

// Delete 删除
func (c *deviceStatusController) Delete(ctx context.Context, req *device.DeviceStatusDeleteReq) (res *device.DeviceStatusDeleteRes, err error) {
	err = service.DeviceStatus().DeleteByIds(ctx, req.Ids)
	return
}

// ChangeStatus 修改状态
func (c *deviceStatusController) ChangeStatus(ctx context.Context, req *device.DeviceStatusStatusReq) (res *device.DeviceStatusStatusRes, err error) {
	res = &device.DeviceStatusStatusRes{}
	err = service.DeviceStatus().ChangeStatus(ctx, req.Id, req.Status)
	return
}
