// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-18 13:58:41
// 生成路径: github.com/xiaodingding/iotfast/internal/app/system/controller/job.go
// 生成人：dwx
// ==========================================================================

package controller

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/system"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
	"github.com/xiaodingding/iotfast/internal/app/system/service"
)

type sysJobController struct {
	//
	//SystemBase
	//
	BaseController
}

var SysJob = sysJobController{}

// List 列表
func (c *sysJobController) List(ctx context.Context, req *system.SysJobSearchReq) (res *system.SysJobSearchRes, err error) {
	res = &system.SysJobSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.SysJob().List(ctx, req)
	return
}

// Add 添加
func (c *sysJobController) Add(ctx context.Context, req *system.SysJobAddReq) (res *system.SysJobAddRes, err error) {
	err = service.SysJob().Add(ctx, req)
	return
}

// Get 获取
func (c *sysJobController) Get(ctx context.Context, req *system.SysJobGetReq) (res *system.SysJobGetRes, err error) {
	res = &system.SysJobGetRes{}
	res.SysJob, err = service.SysJob().Get(ctx, int64(req.Id))
	return
}

// Edit 修改
func (c *sysJobController) Edit(ctx context.Context, req *system.SysJobEditReq) (res *system.SysJobEditRes, err error) {
	err = service.SysJob().Edit(ctx, req)
	return
}

// Delete 删除
func (c *sysJobController) Delete(ctx context.Context, req *system.SysJobDeleteReq) (res *system.SysJobDeleteRes, err error) {
	err = service.SysJob().DeleteByIds(ctx, req.Ids)
	return
}

// ChangeStatus 修改状态
func (c *sysJobController) ChangeStatus(ctx context.Context, req *system.SysJobStatusReq) (res *system.SysJobStatusRes, err error) {
	res = &system.SysJobStatusRes{}
	err = service.SysJob().ChangeStatus(ctx, req)
	return
}
