// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-07-16 15:59:37
// 生成路径: iotfast/internal/app/controller/link_net.go
// 生成人：dwx
// ==========================================================================

package link

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/link"
	"github.com/xiaodingding/iotfast/internal/app/link/service"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
)

type linkNetController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var LinkNet = linkNetController{}

// List 列表
func (c *linkNetController) List(ctx context.Context, req *link.LinkNetSearchReq) (res *link.LinkNetSearchRes, err error) {
	res = &link.LinkNetSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.LinkNet().List(ctx, req)
	return
}

// Add 添加
func (c *linkNetController) Add(ctx context.Context, req *link.LinkNetAddReq) (res *link.LinkNetAddRes, err error) {
	err = service.LinkNet().Add(ctx, req)
	return
}

// Get 获取
func (c *linkNetController) Get(ctx context.Context, req *link.LinkNetGetReq) (res *link.LinkNetGetRes, err error) {
	res = &link.LinkNetGetRes{}
	res.LinkNet, err = service.LinkNet().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *linkNetController) Edit(ctx context.Context, req *link.LinkNetEditReq) (res *link.LinkNetEditRes, err error) {
	err = service.LinkNet().Edit(ctx, req)
	return
}

// Delete 删除
func (c *linkNetController) Delete(ctx context.Context, req *link.LinkNetDeleteReq) (res *link.LinkNetDeleteRes, err error) {
	err = service.LinkNet().DeleteByIds(ctx, req.Ids)
	return
}
