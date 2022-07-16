// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/service/device_info.go
// 生成人：dwx
// ==========================================================================

package service

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/device"
	deviceConsts "github.com/xiaodingding/iotfast/internal/app/device/consts"
	"github.com/xiaodingding/iotfast/internal/app/device/dao"
	"github.com/xiaodingding/iotfast/internal/app/device/model"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
	"github.com/xiaodingding/iotfast/library/libErr"

	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

//type deviceInfo struct {
//}
//var DeviceInfo = new(deviceInfo)
type IDeviceInfo interface {
	List(ctx context.Context, req *device.DeviceInfoSearchReq) (total, page int, list []*model.DeviceInfoExtern, err error)
	Get(ctx context.Context, id int) (info *model.DeviceInfoExtern, err error)
	GetAllInfo(ctx context.Context, id int, sn string) (info *model.DeviceAllInfo, err error)
	Add(ctx context.Context, req *device.DeviceInfoAddReq) (err error)
	Edit(ctx context.Context, req *device.DeviceInfoEditReq) error
	Auth(ctx context.Context, sn, pwd string) (status bool, err error)
	UpdateStatus(ctx context.Context, sn string, status int) (err error)
	DeleteByIds(ctx context.Context, ids []int) (err error)
}
type deviceInfoImpl struct {
}

var deviceInfoService = deviceInfoImpl{}

func DeviceInfo() IDeviceInfo {
	return &deviceInfoService
}

// List 获取任务列表
func (s *deviceInfoImpl) List(ctx context.Context, req *device.DeviceInfoSearchReq) (total, page int, list []*model.DeviceInfoExtern, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}

	m := dao.DeviceInfo.Ctx(ctx)
	if req.Name != "" {
		m = m.Where(dao.DeviceInfo.Columns().Name+" like ?", "%"+req.Name+"%")
	}
	if req.Group != "" {
		m = m.Where(dao.DeviceInfo.Columns().Group+" = ?", req.Group)
	}
	if req.Sn != "" {
		m = m.Where(dao.DeviceInfo.Columns().Sn+" = ?", req.Sn)
	}
	if req.Pwd != "" {
		m = m.Where(dao.DeviceInfo.Columns().Pwd+" = ?", req.Pwd)
	}
	if req.Kind != "" {
		m = m.Where(dao.DeviceInfo.Columns().Kind+" = ?", req.Kind)
	}
	if req.Logo != "" {
		m = m.Where(dao.DeviceInfo.Columns().Logo+" = ?", req.Logo)
	}
	if req.Monitor != "" {
		m = m.Where(dao.DeviceInfo.Columns().Monitor+" = ?", req.Monitor)
	}
	if req.Location != "" {
		m = m.Where(dao.DeviceInfo.Columns().Location+" = ?", req.Location)
	}
	if req.BeginTime != "" {
		m = m.Where(dao.DeviceInfo.Columns().CreatedAt+" >=", req.BeginTime)
	}
	if req.EndTime != "" {
		m = m.Where(dao.DeviceInfo.Columns().CreatedAt+" <", req.EndTime)
	}
	err = g.Try(func() {
		total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取DeviceInfo列表失败")
		if err != nil {
			g.Log().Error(ctx, err)
			err = gerror.New("获取总行数失败")
			return
		}
		m = m.LeftJoin(dao.DeviceStatus.Table(), dao.DeviceStatus.Table()+"."+dao.DeviceStatus.Columns().Id+"="+dao.DeviceInfo.Table()+"."+dao.DeviceInfo.Columns().Id)
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
	/*
		db := g.DB()
		sql := ""
		if req.Name != "" {
			sql += gdb.FormatSqlWithArgs(dao.DeviceInfo.Columns().Name+" like ?", []interface{}{req.Name})
		}
		if req.Group != "" {
			sql += gdb.FormatSqlWithArgs(dao.DeviceInfo.Columns().Group+" = ?", []interface{}{req.Group})
		}
		if req.Sn != "" {
			sql += gdb.FormatSqlWithArgs(dao.DeviceInfo.Columns().Sn+" = ?", []interface{}{req.Sn})
		}
		if req.Pwd != "" {
			sql += gdb.FormatSqlWithArgs(dao.DeviceInfo.Columns().Pwd+" = ?", []interface{}{req.Pwd})
		}
		if req.Kind != "" {
			sql += gdb.FormatSqlWithArgs(dao.DeviceInfo.Columns().Kind+" = ?", []interface{}{req.Kind})
		}
		if req.Logo != "" {
			sql += gdb.FormatSqlWithArgs(dao.DeviceInfo.Columns().Logo+" = ?", []interface{}{req.Logo})
		}
		if req.Monitor != "" {
			sql += gdb.FormatSqlWithArgs(dao.DeviceInfo.Columns().Monitor+" = ?", []interface{}{req.Monitor})
		}
		if req.Location != "" {
			sql += gdb.FormatSqlWithArgs(dao.DeviceInfo.Columns().Location+" = ?", []interface{}{req.Location})
		}
		if req.BeginTime != "" {
			sql += gdb.FormatSqlWithArgs(dao.DeviceInfo.Columns().CreatedAt+" >=", []interface{}{req.BeginTime})
		}
		if req.EndTime != "" {
			sql += gdb.FormatSqlWithArgs(dao.DeviceInfo.Columns().CreatedAt+" <", []interface{}{req.EndTime})
		}

		countSql := "select count(1) " + sql
		total, err = db.GetCount(ctx, countSql)
		if err != nil {
			g.Log().Error(ctx, err)
			err = gerror.New("读取总表数失败")
			return
		}

		page = (req.PageNum - 1) * req.PageSize
		sql += " order by id asc limit  " + gconv.String(page) + "," + gconv.String(req.PageSize)
		err = db.GetScan(ctx, &list, sql)
		if err != nil {
			g.Log().Error(ctx, err)
			return 0, 0, nil, gerror.New("查询列信息失败")
		}
	*/
	return
}

func (s *deviceInfoImpl) Auth(ctx context.Context, sn, pwd string) (status bool, err error) {
	var deviceInfo *model.DeviceInfoExtern
	err = dao.DeviceInfo.Ctx(ctx).Where("sn=? and pwd=?", sn, pwd).Scan(&deviceInfo)
	if err != nil {
		g.Log().Error(ctx, err)
		return
	}

	if deviceInfo == nil || deviceInfo.Id < 1 {
		return false, gerror.New("设备SN或密码错误")
	}

	return true, nil
}

// Get 通过id获取
func (s *deviceInfoImpl) Get(ctx context.Context, id int) (info *model.DeviceInfoExtern, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.DeviceInfo.Ctx(ctx).LeftJoin(dao.DeviceStatus.Table(), dao.DeviceStatus.Table()+"."+dao.DeviceStatus.Columns().Id+"="+dao.DeviceInfo.Table()+"."+dao.DeviceInfo.Columns().Id).Where(dao.DeviceInfo.Columns().Id, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
		return
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
		return
	}
	return
}

func (s *deviceInfoImpl) GetAllInfo(ctx context.Context, id int, sn string) (info *model.DeviceAllInfo, err error) {
	info = &model.DeviceAllInfo{}
	if id == 0 && len(sn) < 1 {
		err = gerror.New("参数错误")
		return
	}

	g.Log().Printf(ctx, "id:%v, sn:%v", id, sn)

	if id != 0 {
		err = dao.DeviceInfo.Ctx(ctx).LeftJoin(dao.DeviceStatus.Table(), dao.DeviceStatus.Table()+"."+dao.DeviceStatus.Columns().DeviceId+"="+dao.DeviceInfo.Table()+"."+dao.DeviceInfo.Columns().Id).Where(dao.DeviceInfo.Columns().Id, id).Scan(&info.Info)
	} else if len(sn) > 0 {
		err = dao.DeviceInfo.Ctx(ctx).LeftJoin(dao.DeviceStatus.Table(), dao.DeviceStatus.Table()+"."+dao.DeviceStatus.Columns().DeviceId+"="+dao.DeviceInfo.Table()+"."+dao.DeviceInfo.Columns().Id).Where(dao.DeviceInfo.Columns().Sn, sn).Scan(&info.Info)
	} else {
		err = gerror.New("参数错误")
		return
	}

	if err != nil {
		g.Log().Error(ctx, err)
		return
	}

	if info == nil || err != nil {
		g.Log().Error(ctx, "get device info err", err, info)
		err = gerror.New("获取信息失败")
		return
	}

	info.Kind, err = DeviceKind().Get(ctx, info.Info.Kind)
	if err != nil || info.Kind == nil {
		g.Log().Error(ctx, "get device kind err", err, info.Kind)
		err = gerror.New("get device kind is nil")
		return
	}
	info.CategoryList, err = DeviceCategoty().KindGet(ctx, info.Info.Kind)
	if err != nil || info.CategoryList == nil {
		g.Log().Error(ctx, "get device CategoryList err", err, info.CategoryList)
		err = gerror.New("get device categoryList is nil")
		return
	}
	return
}

// Add 添加
func (s *deviceInfoImpl) Add(ctx context.Context, req *device.DeviceInfoAddReq) (err error) {
	_, err = dao.DeviceInfo.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *deviceInfoImpl) Edit(ctx context.Context, req *device.DeviceInfoEditReq) error {
	_, err := dao.DeviceInfo.Ctx(ctx).FieldsEx(dao.DeviceInfo.Columns().Id, dao.DeviceInfo.Columns().CreatedAt).Where(dao.DeviceInfo.Columns().Id, req.Id).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *deviceInfoImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.DeviceInfo.Ctx(ctx).Delete(dao.DeviceInfo.Columns().Id+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}

func (s *deviceInfoImpl) UpdateStatus(ctx context.Context, sn string, status int) (err error) {
	var info *model.DeviceInfoExtern
	// err = dao.DeviceInfo.Ctx(ctx).Where(dao.DeviceInfo.Columns().Sn+" = ?", sn).Scan(&info)
	err = dao.DeviceInfo.Ctx(ctx).LeftJoin(dao.DeviceStatus.Table(), dao.DeviceStatus.Table()+"."+dao.DeviceStatus.Columns().DeviceId+"="+dao.DeviceInfo.Table()+"."+dao.DeviceInfo.Columns().Id).Where(dao.DeviceInfo.Columns().Sn, sn).Scan(&info)
	if err != nil {
		return err
	}

	if info != nil {
		if status == deviceConsts.DeviceStatusOnLine {
			if info.StatusId > 0 {
				_, err = dao.DeviceStatus.Ctx(ctx).Where(dao.DeviceStatus.Columns().DeviceId+" = ?", info.Id).Update(g.Map{
					dao.DeviceStatus.Columns().Status:   status,
					dao.DeviceStatus.Columns().UpTime:   gtime.Now().Timestamp(),
					dao.DeviceStatus.Columns().DownTime: gtime.Now().Timestamp(),
				})
			} else {
				_, err = dao.DeviceStatus.Ctx(ctx).Where(dao.DeviceStatus.Columns().DeviceId+" = ?", info.Id).FieldsEx(dao.DeviceStatus.Columns().Id).Insert(g.Map{
					dao.DeviceStatus.Columns().Status:   status,
					dao.DeviceStatus.Columns().DeviceId: info.Id,
					dao.DeviceStatus.Columns().UpTime:   gtime.Now().Timestamp(),
					dao.DeviceStatus.Columns().DownTime: 0,
					dao.DeviceStatus.Columns().TimeOut:  deviceConsts.DeviceTimeOutDefault,
				})
			}

		} else if status == deviceConsts.DeviceStatusOffLine {
			_, err = dao.DeviceStatus.Ctx(ctx).Where(dao.DeviceStatus.Columns().DeviceId+" = ?", info.Id).Update(g.Map{
				dao.DeviceStatus.Columns().Status:   status,
				dao.DeviceStatus.Columns().DownTime: gtime.Now().Timestamp(),
			})
		} else if status == deviceConsts.DeviceStatusDataUp {
			_, err = dao.DeviceStatus.Ctx(ctx).Where(dao.DeviceStatus.Columns().DeviceId+" = ?", info.Id).Update(g.Map{
				dao.DeviceStatus.Columns().Status:             status,
				dao.DeviceStatus.Columns().LastDataUpdateTime: gtime.Now().Timestamp(),
			})
		}
		return err
	} else {
		return gerror.New("not find device")
	}
}
