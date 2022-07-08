// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/service/device_label_data.go
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

//type deviceLabelData struct {
//}
//var DeviceLabelData = new(deviceLabelData)
type IDeviceLabelData interface {
	List(ctx context.Context, req *device.DeviceLabelDataSearchReq) (total, page int, list []*entity.DeviceLabelData, err error)
	Get(ctx context.Context, id int) (info *entity.DeviceLabelData, err error)
	Add(ctx context.Context, req *device.DeviceLabelDataAddReq) (err error)
	Edit(ctx context.Context, req *device.DeviceLabelDataEditReq) error
	DeleteByIds(ctx context.Context, ids []int) (err error)
}
type deviceLabelDataImpl struct {
}

var deviceLabelDataService = deviceLabelDataImpl{}

func DeviceLabelData() IDeviceLabelData {
	return &deviceLabelDataService
}

// List 获取任务列表
func (s *deviceLabelDataImpl) List(ctx context.Context, req *device.DeviceLabelDataSearchReq) (total, page int, list []*entity.DeviceLabelData, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	m := dao.DeviceLabelData.Ctx(ctx)
	if req.LabelId != "" {
		m = m.Where(dao.DeviceLabelData.Columns().LabelId+" = ?", req.LabelId)
	}
	if req.DeviceId != "" {
		m = m.Where(dao.DeviceLabelData.Columns().DeviceId+" = ?", req.DeviceId)
	}
	err = g.Try(func() {
		total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取DeviceLabelData列表失败")
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
func (s *deviceLabelDataImpl) Get(ctx context.Context, id int) (info *entity.DeviceLabelData, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.DeviceLabelData.Ctx(ctx).Where(dao.DeviceLabelData.Columns().Id, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
	}
	return
}

// Add 添加
func (s *deviceLabelDataImpl) Add(ctx context.Context, req *device.DeviceLabelDataAddReq) (err error) {
	_, err = dao.DeviceLabelData.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *deviceLabelDataImpl) Edit(ctx context.Context, req *device.DeviceLabelDataEditReq) error {
	_, err := dao.DeviceLabelData.Ctx(ctx).FieldsEx(dao.DeviceLabelData.Columns().Id).Where(dao.DeviceLabelData.Columns().Id, req.Id).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *deviceLabelDataImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.DeviceLabelData.Ctx(ctx).Delete(dao.DeviceLabelData.Columns().Id+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}
