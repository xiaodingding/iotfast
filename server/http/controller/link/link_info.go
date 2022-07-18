// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-07-16 15:38:13
// 生成路径: iotfast/internal/app/controller/link_info.go
// 生成人：dwx
// ==========================================================================

package link

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/link"
	"github.com/xiaodingding/iotfast/internal/app/link/service"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
)

type linkInfoController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var LinkInfo = linkInfoController{}

// List 列表
func (c *linkInfoController) List(ctx context.Context, req *link.LinkInfoSearchReq) (res *link.LinkInfoSearchRes, err error) {
	res = &link.LinkInfoSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.LinkInfo().List(ctx, req)
	return
}

// Add 添加
func (c *linkInfoController) Add(ctx context.Context, req *link.LinkInfoAddReq) (res *link.LinkInfoAddRes, err error) {
	err = service.LinkInfo().Add(ctx, req)
	return
}

// Get 获取
func (c *linkInfoController) Get(ctx context.Context, req *link.LinkInfoGetReq) (res *link.LinkInfoGetRes, err error) {
	res = &link.LinkInfoGetRes{}
	res.LinkInfo, err = service.LinkInfo().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *linkInfoController) Edit(ctx context.Context, req *link.LinkInfoEditReq) (res *link.LinkInfoEditRes, err error) {
	err = service.LinkInfo().Edit(ctx, req)
	return
}

// Delete 删除
func (c *linkInfoController) Delete(ctx context.Context, req *link.LinkInfoDeleteReq) (res *link.LinkInfoDeleteRes, err error) {
	err = service.LinkInfo().DeleteByIds(ctx, req.Ids)
	return
}
