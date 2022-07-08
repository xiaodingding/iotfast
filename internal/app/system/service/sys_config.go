/*
* @desc:系统参数配置
* @url:www.ddsiot.cn
* @Author: dwx<dwxdyx@qq.com>
* @Date:   2022/5/18 11:55
* @Ref: 参考于https://gitee.com/tiger1103/gfast/
 */

package service

import (
	"context"
	"errors"

	"github.com/xiaodingding/iotfast/api/v1/system"
	commonService "github.com/xiaodingding/iotfast/internal/app/common/service"
	"github.com/xiaodingding/iotfast/internal/app/system/consts"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
	"github.com/xiaodingding/iotfast/internal/app/system/dao"
	"github.com/xiaodingding/iotfast/internal/app/system/model/do"
	"github.com/xiaodingding/iotfast/internal/app/system/model/entity"
	"github.com/xiaodingding/iotfast/library/libErr"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/util/gconv"
)

type IConfig interface {
	List(ctx context.Context, req *system.ConfigSearchReq) (res *system.ConfigSearchRes, err error)
	Add(ctx context.Context, req *system.ConfigAddReq, userId uint64) (err error)
	Get(ctx context.Context, id int) (res *system.ConfigGetRes, err error)
	Edit(ctx context.Context, req *system.ConfigEditReq, userId uint64) (err error)
	Delete(ctx context.Context, ids []int) (err error)
}

type configTmpl struct {
}

var configService = configTmpl{}

func Config() IConfig {
	return &configService
}

// List 系统参数列表
func (s *configTmpl) List(ctx context.Context, req *system.ConfigSearchReq) (res *system.ConfigSearchRes, err error) {
	res = new(system.ConfigSearchRes)
	err = g.Try(func() {
		m := dao.SysConfig.Ctx(ctx)
		if req != nil {
			if req.ConfigName != "" {
				m = m.Where("config_name like ?", "%"+req.ConfigName+"%")
			}
			if req.ConfigType != "" {
				m = m.Where("config_type = ", gconv.Int(req.ConfigType))
			}
			if req.ConfigKey != "" {
				m = m.Where("config_key like ?", "%"+req.ConfigKey+"%")
			}
			if len(req.DateRange) > 0 {
				m = m.Where("created_at >= ? AND created_at<=?", req.DateRange[0], req.DateRange[1])
			}
		}
		res.Total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取数据失败")
		if req.PageNum == 0 {
			req.PageNum = 1
		}
		res.CurrentPage = req.PageNum
		if req.PageSize == 0 {
			req.PageSize = systemConsts.PageSize
		}
		err = m.Page(req.PageNum, req.PageSize).Order("config_id asc").Scan(&res.List)
		libErr.ErrPrint(ctx, err, "获取数据失败")
	})
	return
}

func (s *configTmpl) Add(ctx context.Context, req *system.ConfigAddReq, userId uint64) (err error) {
	err = g.Try(func() {
		err = s.CheckConfigKeyUnique(ctx, req.ConfigKey)
		libErr.ErrPrint(ctx, err)
		_, err = dao.SysConfig.Ctx(ctx).Insert(do.SysConfig{
			ConfigName:  req.ConfigName,
			ConfigKey:   req.ConfigKey,
			ConfigValue: req.ConfigValue,
			ConfigType:  req.ConfigType,
			CreateBy:    userId,
			Remark:      req.Remark,
		})
		libErr.ErrPrint(ctx, err, "添加系统参数失败")
		//清除缓存
		commonService.Cache().RemoveByTag(ctx, consts.CacheSysConfigTag)
	})
	return
}

// CheckConfigKeyUnique 验证参数键名是否存在
func (s *configTmpl) CheckConfigKeyUnique(ctx context.Context, configKey string, configId ...int64) (err error) {
	err = g.Try(func() {
		data := (*entity.SysConfig)(nil)
		m := dao.SysConfig.Ctx(ctx).Fields(dao.SysConfig.Columns().ConfigId).Where(dao.SysConfig.Columns().ConfigKey, configKey)
		if len(configId) > 0 {
			m = m.Where(dao.SysConfig.Columns().ConfigId+" != ?", configId[0])
		}
		err = m.Scan(&data)
		libErr.ErrPrint(ctx, err, "校验失败")
		if data != nil {
			libErr.ErrPrint(ctx, errors.New("参数键名重复"))
		}
	})
	return
}

// Get 获取系统参数
func (s *configTmpl) Get(ctx context.Context, id int) (res *system.ConfigGetRes, err error) {
	res = new(system.ConfigGetRes)
	err = g.Try(func() {
		err = dao.SysConfig.Ctx(ctx).WherePri(id).Scan(&res.Data)
		libErr.ErrPrint(ctx, err, "获取系统参数失败")
	})
	return
}

// Edit 修改系统参数
func (s *configTmpl) Edit(ctx context.Context, req *system.ConfigEditReq, userId uint64) (err error) {
	err = g.Try(func() {
		err = s.CheckConfigKeyUnique(ctx, req.ConfigKey, req.ConfigId)
		libErr.ErrPrint(ctx, err)
		_, err = dao.SysConfig.Ctx(ctx).WherePri(req.ConfigId).Update(do.SysConfig{
			ConfigName:  req.ConfigName,
			ConfigKey:   req.ConfigKey,
			ConfigValue: req.ConfigValue,
			ConfigType:  req.ConfigType,
			UpdateBy:    userId,
			Remark:      req.Remark,
		})
		libErr.ErrPrint(ctx, err, "修改系统参数失败")
		//清除缓存
		commonService.Cache().RemoveByTag(ctx, consts.CacheSysConfigTag)
	})
	return
}

// Delete 删除系统参数
func (s *configTmpl) Delete(ctx context.Context, ids []int) (err error) {
	err = g.Try(func() {
		_, err = dao.SysConfig.Ctx(ctx).Delete(dao.SysConfig.Columns().ConfigId+" in (?)", ids)
		libErr.ErrPrint(ctx, err, "删除失败")
		//清除缓存
		commonService.Cache().RemoveByTag(ctx, consts.CacheSysConfigTag)
	})
	return
}
