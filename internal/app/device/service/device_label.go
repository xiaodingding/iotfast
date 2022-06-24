// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: iotfast/internal/app/service/device_label.go
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

//type deviceLabel struct {
//}
//var DeviceLabel = new(deviceLabel)
type IDeviceLabel interface {
	List(ctx context.Context, req *device.DeviceLabelSearchReq) (total, page int, list []*entity.DeviceLabel, err error)
	Get(ctx context.Context, id int) (info *entity.DeviceLabel, err error)
	Add(ctx context.Context, req *device.DeviceLabelAddReq) (err error)
	Edit(ctx context.Context, req *device.DeviceLabelEditReq) error
	DeleteByIds(ctx context.Context, ids []int) (err error)
}
type deviceLabelImpl struct {
}

var deviceLabelService = deviceLabelImpl{}

func DeviceLabel() IDeviceLabel {
	return &deviceLabelService
}

// List 获取任务列表
func (s *deviceLabelImpl) List(ctx context.Context, req *device.DeviceLabelSearchReq) (total, page int, list []*entity.DeviceLabel, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	m := dao.DeviceLabel.Ctx(ctx)
	if req.Name != "" {
		m = m.Where(dao.DeviceLabel.Columns().Name+" like ?", "%"+req.Name+"%")
	}
	err = g.Try(func() {
		total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取DeviceLabel列表失败")
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
func (s *deviceLabelImpl) Get(ctx context.Context, id int) (info *entity.DeviceLabel, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.DeviceLabel.Ctx(ctx).Where(dao.DeviceLabel.Columns().Id, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
	}
	return
}

// Add 添加
func (s *deviceLabelImpl) Add(ctx context.Context, req *device.DeviceLabelAddReq) (err error) {
	_, err = dao.DeviceLabel.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *deviceLabelImpl) Edit(ctx context.Context, req *device.DeviceLabelEditReq) error {
	_, err := dao.DeviceLabel.Ctx(ctx).FieldsEx(dao.DeviceLabel.Columns().Id, dao.DeviceLabel.Columns().CreatedAt).Where(dao.DeviceLabel.Columns().Id, req.Id).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *deviceLabelImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.DeviceLabel.Ctx(ctx).Delete(dao.DeviceLabel.Columns().Id+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}
