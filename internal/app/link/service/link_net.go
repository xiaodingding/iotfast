// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-07-16 15:59:37
// 生成路径: iotfast/internal/app/service/link_net.go
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

//type linkNet struct {
//}
//var LinkNet = new(linkNet)
type ILinkNet interface {
	List(ctx context.Context, req *link.LinkNetSearchReq) (total, page int, list []*entity.LinkNet, err error)
	Get(ctx context.Context, id int) (info *entity.LinkNet, err error)
	Add(ctx context.Context, req *link.LinkNetAddReq) (err error)
	Edit(ctx context.Context, req *link.LinkNetEditReq) error
	DeleteByIds(ctx context.Context, ids []int) (err error)
}
type linkNetImpl struct {
}

var linkNetService = linkNetImpl{}

func LinkNet() ILinkNet {
	return &linkNetService
}

// List 获取任务列表
func (s *linkNetImpl) List(ctx context.Context, req *link.LinkNetSearchReq) (total, page int, list []*entity.LinkNet, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	m := dao.LinkNet.Ctx(ctx)
	if req.Name != "" {
		m = m.Where(dao.LinkNet.Columns().Name+" like ?", "%"+req.Name+"%")
	}
	if req.Mark != "" {
		m = m.Where(dao.LinkNet.Columns().Mark+" = ?", req.Mark)
	}
	if req.RemoteType != "" {
		m = m.Where(dao.LinkNet.Columns().RemoteType+" = ?", req.RemoteType)
	}
	if req.RemoteAddr != "" {
		m = m.Where(dao.LinkNet.Columns().RemoteAddr+" = ?", req.RemoteAddr)
	}
	if req.RemotePort != "" {
		m = m.Where(dao.LinkNet.Columns().RemotePort+" = ?", req.RemotePort)
	}
	if req.Timeout != "" {
		m = m.Where(dao.LinkNet.Columns().Timeout+" = ?", req.Timeout)
	}
	err = g.Try(func() {
		total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取LinkNet列表失败")
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
func (s *linkNetImpl) Get(ctx context.Context, id int) (info *entity.LinkNet, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.LinkNet.Ctx(ctx).Where(dao.LinkNet.Columns().Id, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
	}
	return
}

// Add 添加
func (s *linkNetImpl) Add(ctx context.Context, req *link.LinkNetAddReq) (err error) {
	_, err = dao.LinkNet.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *linkNetImpl) Edit(ctx context.Context, req *link.LinkNetEditReq) error {
	_, err := dao.LinkNet.Ctx(ctx).FieldsEx(dao.LinkNet.Columns().Id, dao.LinkNet.Columns().CreatedAt).Where(dao.LinkNet.Columns().Id, req.Id).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *linkNetImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.LinkNet.Ctx(ctx).Delete(dao.LinkNet.Columns().Id+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}
