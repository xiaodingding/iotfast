// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-07-16 15:59:37
// 生成路径: iotfast/internal/app/service/link_serial.go
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

//type linkSerial struct {
//}
//var LinkSerial = new(linkSerial)
type ILinkSerial interface {
	List(ctx context.Context, req *link.LinkSerialSearchReq) (total, page int, list []*entity.LinkSerial, err error)
	Get(ctx context.Context, id int) (info *entity.LinkSerial, err error)
	Add(ctx context.Context, req *link.LinkSerialAddReq) (err error)
	Edit(ctx context.Context, req *link.LinkSerialEditReq) error
	DeleteByIds(ctx context.Context, ids []int) (err error)
}
type linkSerialImpl struct {
}

var linkSerialService = linkSerialImpl{}

func LinkSerial() ILinkSerial {
	return &linkSerialService
}

// List 获取任务列表
func (s *linkSerialImpl) List(ctx context.Context, req *link.LinkSerialSearchReq) (total, page int, list []*entity.LinkSerial, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	m := dao.LinkSerial.Ctx(ctx)
	if req.Name != "" {
		m = m.Where(dao.LinkSerial.Columns().Name+" like ?", "%"+req.Name+"%")
	}
	if req.Mark != "" {
		m = m.Where(dao.LinkSerial.Columns().Mark+" = ?", req.Mark)
	}
	if req.SerialName != "" {
		m = m.Where(dao.LinkSerial.Columns().SerialName+" like ?", "%"+req.SerialName+"%")
	}
	if req.SerialBaund != "" {
		m = m.Where(dao.LinkSerial.Columns().SerialBaund+" = ?", req.SerialBaund)
	}
	if req.SerialParity != "" {
		m = m.Where(dao.LinkSerial.Columns().SerialParity+" = ?", req.SerialParity)
	}
	if req.SerialData != "" {
		m = m.Where(dao.LinkSerial.Columns().SerialData+" = ?", req.SerialData)
	}
	if req.SerialStop != "" {
		m = m.Where(dao.LinkSerial.Columns().SerialStop+" = ?", req.SerialStop)
	}
	err = g.Try(func() {
		total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取LinkSerial列表失败")
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
func (s *linkSerialImpl) Get(ctx context.Context, id int) (info *entity.LinkSerial, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.LinkSerial.Ctx(ctx).Where(dao.LinkSerial.Columns().Id, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
	}
	return
}

// Add 添加
func (s *linkSerialImpl) Add(ctx context.Context, req *link.LinkSerialAddReq) (err error) {
	_, err = dao.LinkSerial.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *linkSerialImpl) Edit(ctx context.Context, req *link.LinkSerialEditReq) error {
	_, err := dao.LinkSerial.Ctx(ctx).FieldsEx(dao.LinkSerial.Columns().Id, dao.LinkSerial.Columns().CreatedAt).Where(dao.LinkSerial.Columns().Id, req.Id).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *linkSerialImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.LinkSerial.Ctx(ctx).Delete(dao.LinkSerial.Columns().Id+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}
