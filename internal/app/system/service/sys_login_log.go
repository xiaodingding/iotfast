/*
* @desc:登录日志处理
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/8 11:42
 */

package service

import (
	"context"
	"iotfast/api/v1/system"
	"iotfast/internal/app/system/consts"
	"iotfast/internal/app/system/dao"
	"iotfast/internal/app/system/model"
	"iotfast/library/libErr"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/grpool"
	"github.com/gogf/gf/v2/util/gconv"
)

type ISysLoginLog interface {
	Invoke(ctx context.Context, data *model.LoginLogParams)
	List(ctx context.Context, req *system.LoginLogSearchReq) (res *system.LoginLogSearchRes, err error)
	DeleteLoginLogByIds(ctx context.Context, ids []int) (err error)
	ClearLoginLog(ctx context.Context) (err error)
}

type sysLoginLogImpl struct {
	Pool *grpool.Pool
}

var (
	sysLoginLogService = sysLoginLogImpl{
		Pool: grpool.New(100),
	}
)

func SysLoginLog() ISysLoginLog {
	return &sysLoginLogService
}

func (s *sysLoginLogImpl) Invoke(ctx context.Context, data *model.LoginLogParams) {
	s.Pool.Add(
		ctx,
		func(ctx context.Context) {
			//写入日志数据
			User().LoginLog(ctx, data)
		},
	)
}

func (s *sysLoginLogImpl) List(ctx context.Context, req *system.LoginLogSearchReq) (res *system.LoginLogSearchRes, err error) {
	res = new(system.LoginLogSearchRes)
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	res.CurrentPage = req.PageNum
	if req.PageSize == 0 {
		req.PageSize = consts.PageSize
	}
	m := dao.SysLoginLog.Ctx(ctx)
	order := "info_id DESC"
	if req.LoginName != "" {
		m = m.Where("login_name like ?", "%"+req.LoginName+"%")
	}
	if req.Status != "" {
		m = m.Where("status", gconv.Int(req.Status))
	}
	if req.Ipaddr != "" {
		m = m.Where("ipaddr like ?", "%"+req.Ipaddr+"%")
	}
	if req.LoginLocation != "" {
		m = m.Where("login_location like ?", "%"+req.LoginLocation+"%")
	}
	if len(req.DateRange) != 0 {
		m = m.Where("login_time >=? AND login_time <=?", req.DateRange[0], req.DateRange[1])
	}
	if req.SortName != "" {
		if req.SortOrder != "" {
			order = req.SortName + " " + req.SortOrder
		} else {
			order = req.SortName + " DESC"
		}
	}
	err = g.Try(func() {
		res.Total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取日志失败")
		err = m.Page(req.PageNum, req.PageSize).Order(order).Scan(&res.List)
		libErr.ErrPrint(ctx, err, "获取日志数据失败")
	})
	return
}

func (s *sysLoginLogImpl) DeleteLoginLogByIds(ctx context.Context, ids []int) (err error) {
	err = g.Try(func() {
		_, err = dao.SysLoginLog.Ctx(ctx).Delete("info_id in (?)", ids)
		libErr.ErrPrint(ctx, err, "删除失败")
	})
	return
}

func (s *sysLoginLogImpl) ClearLoginLog(ctx context.Context) (err error) {
	err = g.Try(func() {
		_, err = g.DB().Ctx(ctx).Exec(ctx, "truncate "+dao.SysLoginLog.Table())
		libErr.ErrPrint(ctx, err, "清除失败")
	})
	return
}
