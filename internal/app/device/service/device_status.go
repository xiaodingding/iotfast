// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/service/device_status.go
// 生成人：dwx
// ==========================================================================

package service

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/device"
	deviceConsts "github.com/xiaodingding/iotfast/internal/app/device/consts"
	"github.com/xiaodingding/iotfast/internal/app/device/dao"
	"github.com/xiaodingding/iotfast/internal/app/device/model/entity"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
	"github.com/xiaodingding/iotfast/library/libErr"

	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

//type deviceStatus struct {
//}
//var DeviceStatus = new(deviceStatus)
type IDeviceStatus interface {
	List(ctx context.Context, req *device.DeviceStatusSearchReq) (total, page int, list []*entity.DeviceStatus, err error)
	Get(ctx context.Context, id int) (info *entity.DeviceStatus, err error)
	Add(ctx context.Context, req *device.DeviceStatusAddReq) (err error)
	Edit(ctx context.Context, req *device.DeviceStatusEditReq) error
	DeleteByIds(ctx context.Context, ids []int) (err error)
	ChangeStatus(ctx context.Context, deviceId int, status int) error
}
type deviceStatusImpl struct {
}

var deviceStatusService = deviceStatusImpl{}

func DeviceStatus() IDeviceStatus {
	return &deviceStatusService
}

// List 获取任务列表
func (s *deviceStatusImpl) List(ctx context.Context, req *device.DeviceStatusSearchReq) (total, page int, list []*entity.DeviceStatus, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	m := dao.DeviceStatus.Ctx(ctx)
	if req.DeviceId != "" {
		m = m.Where(dao.DeviceStatus.Columns().DeviceId+" = ?", req.DeviceId)
	}
	if req.Status != "" {
		m = m.Where(dao.DeviceStatus.Columns().Status+" = ?", req.Status)
	}
	if req.TimeOut != "" {
		m = m.Where(dao.DeviceStatus.Columns().TimeOut+" = ?", req.TimeOut)
	}
	if req.UpTime != "" {
		m = m.Where(dao.DeviceStatus.Columns().UpTime+" = ?", req.UpTime)
	}
	if req.DownTime != "" {
		m = m.Where(dao.DeviceStatus.Columns().DownTime+" = ?", req.DownTime)
	}
	if req.LastDataUpdateTime != "" {
		m = m.Where(dao.DeviceStatus.Columns().LastDataUpdateTime+" = ?", req.LastDataUpdateTime)
	}
	err = g.Try(func() {
		total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取DeviceStatus列表失败")
		if err != nil {
			g.Log().Error(ctx, err)
			err = gerror.New("获取总行数失败")
			return
		}
		order := "status_id asc"
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
func (s *deviceStatusImpl) Get(ctx context.Context, id int) (info *entity.DeviceStatus, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.DeviceStatus.Ctx(ctx).Where(dao.DeviceStatus.Columns().Id, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
	}
	return
}

// Add 添加
func (s *deviceStatusImpl) Add(ctx context.Context, req *device.DeviceStatusAddReq) (err error) {
	_, err = dao.DeviceStatus.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *deviceStatusImpl) Edit(ctx context.Context, req *device.DeviceStatusEditReq) error {
	_, err := dao.DeviceStatus.Ctx(ctx).FieldsEx(dao.DeviceStatus.Columns().Id).Where(dao.DeviceStatus.Columns().Id, req.Id).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *deviceStatusImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.DeviceStatus.Ctx(ctx).Delete(dao.DeviceStatus.Columns().Id+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}

// ChangeStatus 修改状态
func (s *deviceStatusImpl) ChangeStatus(ctx context.Context, deviceId int, status int) error {
	if status == deviceConsts.DeviceStatusOffLine {
		_, err := dao.DeviceStatus.Ctx(ctx).Where(dao.DeviceStatus.Columns().DeviceId+" = ?", deviceId).Update(g.Map{
			dao.DeviceStatus.Columns().Status:   status,
			dao.DeviceStatus.Columns().DownTime: gtime.Now().Timestamp(),
		})
		return err
	} else if status == deviceConsts.DeviceStatusOnLine {
		_, err := dao.DeviceStatus.Ctx(ctx).Where(dao.DeviceStatus.Columns().DeviceId+" = ?", deviceId).Update(g.Map{
			dao.DeviceStatus.Columns().Status: status,
			dao.DeviceStatus.Columns().UpTime: gtime.Now().Timestamp(),
		})
		return err
	} else if status == deviceConsts.DeviceStatusDataUp {
		_, err := dao.DeviceStatus.Ctx(ctx).Where(dao.DeviceStatus.Columns().DeviceId+" = ?", deviceId).Update(g.Map{
			dao.DeviceStatus.Columns().Status:             status,
			dao.DeviceStatus.Columns().LastDataUpdateTime: gtime.Now().Timestamp(),
		})
		return err
	} else {
		return gerror.Newf("not support status:%v", status)
	}

}
