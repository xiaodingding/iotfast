// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-21 22:06:16
// 生成路径: iotfast/internal/app/service/device_category_data.go
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

	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/util/gconv"
)

//type deviceCategoryData struct {
//}
//var DeviceCategoryData = new(deviceCategoryData)
type IDeviceCategoryData interface {
	List(ctx context.Context, req *device.DeviceCategoryDataSearchReq) (total, page int, list []*entity.DeviceCategoryData, err error)
	Get(ctx context.Context, id int) (info *entity.DeviceCategoryData, err error)
	Recent(ctx context.Context, req *device.DeviceCategoryDataRecentReq, columns string) (total int, result []*device.DeviceCategoryDataComm, err error)
	History(ctx context.Context, req *device.DeviceCategoryDataHistoryReq, columns string) (total int, result []*device.DeviceCategoryDataComm, err error)
	Add(ctx context.Context, req *device.DeviceCategoryDataAddReq) (err error)
	Edit(ctx context.Context, req *device.DeviceCategoryDataEditReq) error
	DeleteByIds(ctx context.Context, ids []int) (err error)
}
type deviceCategoryDataImpl struct {
}

var deviceCategoryDataService = deviceCategoryDataImpl{}

func DeviceCategoryData() IDeviceCategoryData {
	return &deviceCategoryDataService
}

// List 获取任务列表
func (s *deviceCategoryDataImpl) List(ctx context.Context, req *device.DeviceCategoryDataSearchReq) (total, page int, list []*entity.DeviceCategoryData, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	m := dao.DeviceCategoryData.Ctx(ctx)
	if req.CategoryId != 0 {
		m = m.Where(dao.DeviceCategoryData.Columns().CategoryId+" = ?", req.CategoryId)
	}
	if req.DeviceId != 0 {
		m = m.Where(dao.DeviceCategoryData.Columns().DeviceId+" = ?", req.DeviceId)
	}
	if req.DataInt != "" {
		m = m.Where(dao.DeviceCategoryData.Columns().DataInt+" = ?", req.DataInt)
	}
	if req.DataStr != "" {
		m = m.Where(dao.DeviceCategoryData.Columns().DataStr+" = ?", req.DataStr)
	}
	if req.BeginTime != "" {
		m = m.Where(dao.DeviceCategoryData.Columns().CreatedAt+" >= ", req.BeginTime)
	}
	if req.EndTime != "" {
		m = m.Where(dao.DeviceCategoryData.Columns().CreatedAt+" <= ", req.EndTime)
	}
	err = g.Try(func() {
		total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取DeviceCategoryData列表失败")
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

func (s *deviceCategoryDataImpl) Recent(ctx context.Context, req *device.DeviceCategoryDataRecentReq, columns string) (total int, result []*device.DeviceCategoryDataComm, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	db := g.DB().Ctx(ctx)

	sql := ""
	if req.CategoryId != 0 {
		sql += gdb.FormatSqlWithArgs(" and "+dao.DeviceCategoryData.Columns().CategoryId+"=?", []interface{}{req.CategoryId}) //m.Where(dao.DeviceCategoryData.Columns().CategoryId+" = ?", req.CategoryId)
	}
	if req.DeviceId != 0 {
		sql += gdb.FormatSqlWithArgs(" and "+dao.DeviceCategoryData.Columns().DeviceId+"=?", []interface{}{req.DeviceId})
	}
	if req.BeginTime != "" {
		sql += gdb.FormatSqlWithArgs(" and date_format("+dao.DeviceCategoryData.Columns().CreatedAt+",'%y%m%d') >= date_format(?,'%y%m%d')", []interface{}{req.BeginTime})
	}
	if req.EndTime != "" {
		sql += gdb.FormatSqlWithArgs(" and date_format("+dao.DeviceCategoryData.Columns().CreatedAt+",'%y%m%d') <= date_format(?,'%y%m%d')", []interface{}{req.EndTime})
	}

	countSql := "select count(1) from " + dao.DeviceCategoryData.Table() + " where id!=0 " + sql
	total, err = db.GetCount(ctx, countSql)

	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("读取总表数失败")
		return
	}

	sql += " order by id asc limit  " + gconv.String(req.PageNum-1) + "," + gconv.String(req.PageSize)
	if columns != "" {
		err = db.GetScan(ctx, &result, "select "+columns+" as data , id, created_at from "+dao.DeviceCategoryData.Table()+" where id!=0 "+sql)
	} else {
		err = db.GetScan(ctx, &result, "select "+dao.DeviceCategoryData.Columns().DataInt+" as data , id,created_at from "+dao.DeviceCategoryData.Table()+" where id!=0 "+sql)
	}

	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("读取数据失败")
	}
	return
}

func (s *deviceCategoryDataImpl) History(ctx context.Context, req *device.DeviceCategoryDataHistoryReq, columns string) (total int, result []*device.DeviceCategoryDataComm, err error) {
	db := g.DB().Ctx(ctx)

	sql := ""
	if req.CategoryId != 0 {
		sql += gdb.FormatSqlWithArgs(" and "+dao.DeviceCategoryData.Columns().CategoryId+"=?", []interface{}{req.CategoryId}) //m.Where(dao.DeviceCategoryData.Columns().CategoryId+" = ?", req.CategoryId)
	}
	if req.DeviceId != 0 {
		sql += gdb.FormatSqlWithArgs(" and "+dao.DeviceCategoryData.Columns().DeviceId+"=?", []interface{}{req.DeviceId})
	}
	if req.BeginTime != "" {
		sql += gdb.FormatSqlWithArgs(" and date_format("+dao.DeviceCategoryData.Columns().CreatedAt+",'%y%m%d') >= date_format(?,'%y%m%d')", []interface{}{req.BeginTime})
	}
	if req.EndTime != "" {
		sql += gdb.FormatSqlWithArgs(" and date_format("+dao.DeviceCategoryData.Columns().CreatedAt+",'%y%m%d') <= date_format(?,'%y%m%d')", []interface{}{req.EndTime})
	}

	countSql := "select count(1) from " + dao.DeviceCategoryData.Table() + " where id!=0 " + sql
	total, err = db.GetCount(ctx, countSql)

	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("读取总表数失败")
		return
	}

	if req.PageNum > 0 && req.PageSize > 0 {
		sql += " order by id asc limit  " + gconv.String(req.PageNum-1) + "," + gconv.String(req.PageSize)
	} else {
		sql += " order by id asc "
	}

	if columns != "" {
		err = db.GetScan(ctx, &result, "select "+columns+" as data , id, created_at from "+dao.DeviceCategoryData.Table()+" where id!=0 "+sql)
	} else {
		err = db.GetScan(ctx, &result, "select "+dao.DeviceCategoryData.Columns().DataInt+" as data , id, created_at from "+dao.DeviceCategoryData.Table()+" where id!=0 "+sql)
	}

	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("读取数据失败")
	}
	return
}

// Get 通过id获取
func (s *deviceCategoryDataImpl) Get(ctx context.Context, id int) (info *entity.DeviceCategoryData, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.DeviceCategoryData.Ctx(ctx).Where(dao.DeviceCategoryData.Columns().Id, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
	}
	return
}

// Add 添加
func (s *deviceCategoryDataImpl) Add(ctx context.Context, req *device.DeviceCategoryDataAddReq) (err error) {
	_, err = dao.DeviceCategoryData.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *deviceCategoryDataImpl) Edit(ctx context.Context, req *device.DeviceCategoryDataEditReq) error {
	_, err := dao.DeviceCategoryData.Ctx(ctx).FieldsEx(dao.DeviceCategoryData.Columns().Id, dao.DeviceCategoryData.Columns().CreatedAt).Where(dao.DeviceCategoryData.Columns().Id, req.Id).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *deviceCategoryDataImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.DeviceCategoryData.Ctx(ctx).Delete(dao.DeviceCategoryData.Columns().Id+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}
