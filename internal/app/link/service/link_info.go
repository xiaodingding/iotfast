// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-07-16 15:38:13
// 生成路径: iotfast/internal/app/service/link_info.go
// 生成人：dwx
// ==========================================================================

package service

import (
	"context"

	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/xiaodingding/iotfast/api/v1/link"
	"github.com/xiaodingding/iotfast/internal/app/link/dao"
	"github.com/xiaodingding/iotfast/internal/app/link/model/entity"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
	"github.com/xiaodingding/iotfast/library/libErr"
)

//type linkInfo struct {
//}
//var LinkInfo = new(linkInfo)
type ILinkInfo interface {
	List(ctx context.Context, req *link.LinkInfoSearchReq) (total, page int, list []*entity.LinkInfo, err error)
	Get(ctx context.Context, id int) (info *entity.LinkInfo, err error)
	Add(ctx context.Context, req *link.LinkInfoAddReq) (err error)
	Edit(ctx context.Context, req *link.LinkInfoEditReq) error
	DeleteByIds(ctx context.Context, ids []int) (err error)
}
type linkInfoImpl struct {
}

var linkInfoService = linkInfoImpl{}

func LinkInfo() ILinkInfo {
	return &linkInfoService
}

// List 获取任务列表
func (s *linkInfoImpl) List(ctx context.Context, req *link.LinkInfoSearchReq) (total, page int, list []*entity.LinkInfo, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	m := dao.LinkInfo.Ctx(ctx)
	if req.Name != "" {
		m = m.Where(dao.LinkInfo.Columns().Name+" like ?", "%"+req.Name+"%")
	}
	if req.Mark != "" {
		m = m.Where(dao.LinkInfo.Columns().Mark+" = ?", req.Mark)
	}
	err = g.Try(func() {
		total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取LinkInfo列表失败")
		if err != nil {
			g.Log().Error(ctx, err)
			err = gerror.New("获取总行数失败")
			return
		}
		order := "id asc"
		if req.OrderBy != "" {
			order = req.OrderBy
		}
		err = m.Page(page, req.PageSize).Order(order).Scan(&list)
		if err != nil {
			g.Log().Error(ctx, err)
			err = gerror.New("获取数据失败")
		}
	})
	return
}

// Get 通过id获取
func (s *linkInfoImpl) Get(ctx context.Context, id int) (info *entity.LinkInfo, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.LinkInfo.Ctx(ctx).Where(dao.LinkInfo.Columns().Id, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
	}
	return
}

// Add 添加
func (s *linkInfoImpl) Add(ctx context.Context, req *link.LinkInfoAddReq) (err error) {
	_, err = dao.LinkInfo.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *linkInfoImpl) Edit(ctx context.Context, req *link.LinkInfoEditReq) error {
	_, err := dao.LinkInfo.Ctx(ctx).FieldsEx(dao.LinkInfo.Columns().Id, dao.LinkInfo.Columns().CreatedAt).Where(dao.LinkInfo.Columns().Id, req.Id).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *linkInfoImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.LinkInfo.Ctx(ctx).Delete(dao.LinkInfo.Columns().Id+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}
