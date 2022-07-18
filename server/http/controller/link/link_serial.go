// ==========================================================================
// 物联网快速开发自动生成控制器相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-07-16 15:59:37
// 生成路径: iotfast/internal/app/controller/link_serial.go
// 生成人：dwx
// ==========================================================================

package link

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/link"
	"github.com/xiaodingding/iotfast/internal/app/link/service"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
)

type linkSerialController struct {
	//
	//sysApi.SystemBase
	//
	BaseController
}

var LinkSerial = linkSerialController{}

// List 列表
func (c *linkSerialController) List(ctx context.Context, req *link.LinkSerialSearchReq) (res *link.LinkSerialSearchRes, err error) {
	res = &link.LinkSerialSearchRes{}
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	res.CurrentPage = req.PageNum
	res.Total, _, res.List, err = service.LinkSerial().List(ctx, req)
	return
}

// Add 添加
func (c *linkSerialController) Add(ctx context.Context, req *link.LinkSerialAddReq) (res *link.LinkSerialAddRes, err error) {
	err = service.LinkSerial().Add(ctx, req)
	return
}

// Get 获取
func (c *linkSerialController) Get(ctx context.Context, req *link.LinkSerialGetReq) (res *link.LinkSerialGetRes, err error) {
	res = &link.LinkSerialGetRes{}
	res.LinkSerial, err = service.LinkSerial().Get(ctx, req.Id)
	return
}

// Edit 修改
func (c *linkSerialController) Edit(ctx context.Context, req *link.LinkSerialEditReq) (res *link.LinkSerialEditRes, err error) {
	err = service.LinkSerial().Edit(ctx, req)
	return
}

// Delete 删除
func (c *linkSerialController) Delete(ctx context.Context, req *link.LinkSerialDeleteReq) (res *link.LinkSerialDeleteRes, err error) {
	err = service.LinkSerial().DeleteByIds(ctx, req.Ids)
	return
}
