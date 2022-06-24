// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: iotfast/internal/app/controller/device_label_data.go
// 生成人：dwx
// ==========================================================================

package controller

import (
	"context"
	"iotfast/api/v1/device"
	"iotfast/internal/app/device/service"
	systemConsts "iotfast/internal/app/system/consts"
)

type deviceLabelDataController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var DeviceLabelData = deviceLabelDataController{}

// List 列表
func (c *deviceLabelDataController) List(ctx context.Context, req *device.DeviceLabelDataSearchReq) (res *device.DeviceLabelDataSearchRes, err error) {
	res = &device.DeviceLabelDataSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.DeviceLabelData().List(ctx, req)
	return
}

// Add 添加
func (c *deviceLabelDataController) Add(ctx context.Context, req *device.DeviceLabelDataAddReq) (res *device.DeviceLabelDataAddRes, err error) {
	err = service.DeviceLabelData().Add(ctx, req)
	return
}

// Get 获取
func (c *deviceLabelDataController) Get(ctx context.Context, req *device.DeviceLabelDataGetReq) (res *device.DeviceLabelDataGetRes, err error) {
	res = &device.DeviceLabelDataGetRes{}
	res.DeviceLabelData, err = service.DeviceLabelData().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *deviceLabelDataController) Edit(ctx context.Context, req *device.DeviceLabelDataEditReq) (res *device.DeviceLabelDataEditRes, err error) {
	err = service.DeviceLabelData().Edit(ctx, req)
	return
}

// Delete 删除
func (c *deviceLabelDataController) Delete(ctx context.Context, req *device.DeviceLabelDataDeleteReq) (res *device.DeviceLabelDataDeleteRes, err error) {
	err = service.DeviceLabelData().DeleteByIds(ctx, req.Ids)
	return
}
