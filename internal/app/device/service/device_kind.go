// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/service/device_kind.go
// 生成人：dwx
// ==========================================================================

package service

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/device"
	"github.com/xiaodingding/iotfast/internal/app/device/dao"
	"github.com/xiaodingding/iotfast/internal/app/device/model/entity"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
	"github.com/xiaodingding/iotfast/library/libErr"

	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
)

//type deviceKind struct {
//}
//var DeviceKind = new(deviceKind)
type IDeviceKind interface {
	List(ctx context.Context, req *device.DeviceKindSearchReq) (total, page int, list []*entity.DeviceKind, err error)
	Get(ctx context.Context, id int) (info *entity.DeviceKind, err error)
	Add(ctx context.Context, req *device.DeviceKindAddReq) (err error)
	Edit(ctx context.Context, req *device.DeviceKindEditReq) error
	DeleteByIds(ctx context.Context, ids []int) (err error)
}
type deviceKindImpl struct {
}

var deviceKindService = deviceKindImpl{}

func DeviceKind() IDeviceKind {
	return &deviceKindService
}

// List 获取任务列表
func (s *deviceKindImpl) List(ctx context.Context, req *device.DeviceKindSearchReq) (total, page int, list []*entity.DeviceKind, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	m := dao.DeviceKind.Ctx(ctx)
	if req.Name != "" {
		m = m.Where(dao.DeviceKind.Columns().Name+" like ?", "%"+req.Name+"%")
	}
	if req.Mark != "" {
		m = m.Where(dao.DeviceKind.Columns().Mark+" = ?", req.Mark)
	}
	if req.TimeOut != "" {
		m = m.Where(dao.DeviceKind.Columns().TimeOut+" = ?", req.TimeOut)
	}
	if req.BeginTime != "" {
		m = m.Where(dao.DeviceKind.Columns().CreatedAt+" >= ", req.BeginTime)
	}
	if req.EndTime != "" {
		m = m.Where(dao.DeviceKind.Columns().CreatedAt+" <= ", req.EndTime)
	}
	if req.Id != 0 {
		m = m.Where(dao.DeviceKind.Columns().Id+" = ?", req.Id)
	}
	g.Log().Printf(ctx, "req param:%v \n", req)
	err = g.Try(func() {
		total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取DeviceKind列表失败")
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
func (s *deviceKindImpl) Get(ctx context.Context, id int) (info *entity.DeviceKind, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.DeviceKind.Ctx(ctx).Where(dao.DeviceKind.Columns().Id, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
	}
	return
}

// Add 添加
func (s *deviceKindImpl) Add(ctx context.Context, req *device.DeviceKindAddReq) (err error) {
	_, err = dao.DeviceKind.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *deviceKindImpl) Edit(ctx context.Context, req *device.DeviceKindEditReq) error {
	_, err := dao.DeviceKind.Ctx(ctx).FieldsEx(dao.DeviceKind.Columns().Id, dao.DeviceKind.Columns().CreatedAt).Where(dao.DeviceKind.Columns().Id, req.Id).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *deviceKindImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.DeviceKind.Ctx(ctx).Delete(dao.DeviceKind.Columns().Id+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}
