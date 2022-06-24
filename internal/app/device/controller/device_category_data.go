// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:16
// 生成路径: iotfast/internal/app/controller/device_category_data.go
// 生成人：dwx
// ==========================================================================

package controller

import (
	"context"
	"iotfast/api/v1/device"
	"iotfast/internal/app/device/service"
	systemConsts "iotfast/internal/app/system/consts"
)

type deviceCategoryDataController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var DeviceCategoryData = deviceCategoryDataController{}

// List 列表
func (c *deviceCategoryDataController) List(ctx context.Context, req *device.DeviceCategoryDataSearchReq) (res *device.DeviceCategoryDataSearchRes, err error) {
	res = &device.DeviceCategoryDataSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.DeviceCategoryData().List(ctx, req)
	return
}

// Add 添加
func (c *deviceCategoryDataController) Add(ctx context.Context, req *device.DeviceCategoryDataAddReq) (res *device.DeviceCategoryDataAddRes, err error) {
	err = service.DeviceCategoryData().Add(ctx, req)
	return
}

// Get 获取
func (c *deviceCategoryDataController) Get(ctx context.Context, req *device.DeviceCategoryDataGetReq) (res *device.DeviceCategoryDataGetRes, err error) {
	res = &device.DeviceCategoryDataGetRes{}
	res.DeviceCategoryData, err = service.DeviceCategoryData().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *deviceCategoryDataController) Edit(ctx context.Context, req *device.DeviceCategoryDataEditReq) (res *device.DeviceCategoryDataEditRes, err error) {
	err = service.DeviceCategoryData().Edit(ctx, req)
	return
}

// Delete 删除
func (c *deviceCategoryDataController) Delete(ctx context.Context, req *device.DeviceCategoryDataDeleteReq) (res *device.DeviceCategoryDataDeleteRes, err error) {
	err = service.DeviceCategoryData().DeleteByIds(ctx, req.Ids)
	return
}
