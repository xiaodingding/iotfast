/*
* @desc:系统参数配置
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/4/18 21:17
 */

package controller

import (
	"context"
	"iotfast/api/v1/system"
	systemService "iotfast/internal/app/system/service"
)

var Config = configController{}

type configController struct {
	BaseController
}

// List 系统参数列表
func (c *configController) List(ctx context.Context, req *system.ConfigSearchReq) (res *system.ConfigSearchRes, err error) {
	res, err = systemService.Config().List(ctx, req)
	return
}

// Add 添加系统参数
func (c *configController) Add(ctx context.Context, req *system.ConfigAddReq) (res *system.ConfigAddRes, err error) {
	err = systemService.Config().Add(ctx, req, systemService.Context().GetUserId(ctx))
	return
}

// Get 获取系统参数
func (c *configController) Get(ctx context.Context, req *system.ConfigGetReq) (res *system.ConfigGetRes, err error) {
	res, err = systemService.Config().Get(ctx, req.Id)
	return
}

// Edit 修改系统参数
func (c *configController) Edit(ctx context.Context, req *system.ConfigEditReq) (res *system.ConfigEditRes, err error) {
	err = systemService.Config().Edit(ctx, req, systemService.Context().GetUserId(ctx))
	return
}

// Delete 删除系统参数
func (c *configController) Delete(ctx context.Context, req *system.ConfigDeleteReq) (res *system.ConfigDeleteRes, err error) {
	err = systemService.Config().Delete(ctx, req.Ids)
	return
}
