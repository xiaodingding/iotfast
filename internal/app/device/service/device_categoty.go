// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:16
// 生成路径: iotfast/internal/app/service/device_categoty.go
// 生成人：dwx
// ==========================================================================

package service

import (
	"context"
	"iotfast/api/v1/device"
	"iotfast/internal/app/device/dao"
	"iotfast/internal/app/device/model/entity"
	systemConsts "iotfast/internal/app/system/consts"
	"iotfast/library/libErr"

	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
)

//type deviceCategoty struct {
//}
//var DeviceCategoty = new(deviceCategoty)
type IDeviceCategoty interface {
	List(ctx context.Context, req *device.DeviceCategotySearchReq) (total, page int, list []*entity.DeviceCategoty, err error)
	Get(ctx context.Context, id int) (info *entity.DeviceCategoty, err error)
	KindGet(ctx context.Context, kindId int) (list []*entity.DeviceCategoty, err error)
	Add(ctx context.Context, req *device.DeviceCategotyAddReq) (err error)
	Edit(ctx context.Context, req *device.DeviceCategotyEditReq) error
	DeleteByIds(ctx context.Context, ids []int) (err error)
}
type deviceCategotyImpl struct {
}

var deviceCategotyService = deviceCategotyImpl{}

func DeviceCategoty() IDeviceCategoty {
	return &deviceCategotyService
}

// List 获取任务列表
func (s *deviceCategotyImpl) List(ctx context.Context, req *device.DeviceCategotySearchReq) (total, page int, list []*entity.DeviceCategoty, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	m := dao.DeviceCategoty.Ctx(ctx)
	if req.KindId != 0 {
		m = m.Where(dao.DeviceCategoty.Columns().KindId+" = ?", req.KindId)
	}
	if req.Name != "" {
		m = m.Where(dao.DeviceCategoty.Columns().Name+" like ?", "%"+req.Name+"%")
	}
	if req.Mark != "" {
		m = m.Where(dao.DeviceCategoty.Columns().Mark+" = ?", req.Mark)
	}
	if req.DataType != "" {
		m = m.Where(dao.DeviceCategoty.Columns().DataType+" = ?", req.DataType)
	}
	if req.Unit != "" {
		m = m.Where(dao.DeviceCategoty.Columns().Unit+" = ?", req.Unit)
	}
	if req.Ratio != "" {
		m = m.Where(dao.DeviceCategoty.Columns().Ratio+" = ?", req.Ratio)
	}
	if req.Format != "" {
		m = m.Where(dao.DeviceCategoty.Columns().Format+" = ?", req.Format)
	}
	if req.HomeShow != "" {
		m = m.Where(dao.DeviceCategoty.Columns().HomeShow+" = ?", req.HomeShow)
	}
	err = g.Try(func() {
		total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取DeviceCategoty列表失败")
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

func (s *deviceCategotyImpl) KindGet(ctx context.Context, kindId int) (list []*entity.DeviceCategoty, err error) {
	m := dao.DeviceCategoty.Ctx(ctx)
	if kindId != 0 {
		m = m.Where(dao.DeviceCategoty.Columns().KindId+" = ?", kindId)
	}

	err = g.Try(func() {
		order := "id asc"
		err = m.Order(order).Scan(&list)
		if err != nil {
			g.Log().Error(ctx, err)
			err = gerror.New("获取数据失败")
		}
	})
	return
}

// Get 通过id获取
func (s *deviceCategotyImpl) Get(ctx context.Context, id int) (info *entity.DeviceCategoty, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.DeviceCategoty.Ctx(ctx).Where(dao.DeviceCategoty.Columns().Id, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
	}
	return
}

// Add 添加
func (s *deviceCategotyImpl) Add(ctx context.Context, req *device.DeviceCategotyAddReq) (err error) {
	_, err = dao.DeviceCategoty.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *deviceCategotyImpl) Edit(ctx context.Context, req *device.DeviceCategotyEditReq) error {
	_, err := dao.DeviceCategoty.Ctx(ctx).FieldsEx(dao.DeviceCategoty.Columns().Id, dao.DeviceCategoty.Columns().CreatedAt).Where(dao.DeviceCategoty.Columns().Id, req.Id).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *deviceCategotyImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.DeviceCategoty.Ctx(ctx).Delete(dao.DeviceCategoty.Columns().Id+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}
