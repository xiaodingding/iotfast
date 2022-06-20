/*
* @desc:字典类型
* @url:www.ddsiot.cn
* @Author: dwx<dwxdyx@qq.com>
* @Date:   2022/5/18 11:55
 */

package service

import (
	"context"
	"iotfast/api/v1/system"
	commonService "iotfast/internal/app/common/service"
	"iotfast/internal/app/system/consts"
	systemConsts "iotfast/internal/app/system/consts"
	"iotfast/internal/app/system/dao"
	"iotfast/internal/app/system/model"
	"iotfast/internal/app/system/model/do"
	"iotfast/internal/app/system/model/entity"
	"iotfast/library/libErr"

	"github.com/gogf/gf/v2/container/garray"
	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/util/gconv"
)

type IDictType interface {
	List(ctx context.Context, req *system.DictTypeSearchReq) (res *system.DictTypeSearchRes, err error)
	Add(ctx context.Context, req *system.DictTypeAddReq, userId uint64) (err error)
	Get(ctx context.Context, req *system.DictTypeGetReq) (dictType *entity.SysDictType, err error)
	Edit(ctx context.Context, req *system.DictTypeEditReq, userId uint64) (err error)
	Delete(ctx context.Context, dictIds []int) (err error)
}

type dictTypeImpl struct {
}

var dictTypeService = dictTypeImpl{}

func DictType() IDictType {
	return &dictTypeService
}

// List 字典类型列表
func (s *dictTypeImpl) List(ctx context.Context, req *system.DictTypeSearchReq) (res *system.DictTypeSearchRes, err error) {
	res = new(system.DictTypeSearchRes)
	err = g.Try(func() {
		m := dao.SysDictType.Ctx(ctx)
		if req.DictName != "" {
			m = m.Where(dao.SysDictType.Columns().DictName+" like ?", "%"+req.DictName+"%")
		}
		if req.DictType != "" {
			m = m.Where(dao.SysDictType.Columns().DictType+" like ?", "%"+req.DictType+"%")
		}
		if req.Status != "" {
			m = m.Where(dao.SysDictType.Columns().Status+" = ", gconv.Int(req.Status))
		}
		res.Total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取字典类型失败")
		if req.PageNum == 0 {
			req.PageNum = 1
		}
		res.CurrentPage = req.PageNum
		if req.PageSize == 0 {
			req.PageSize = systemConsts.PageSize
		}
		err = m.Fields(model.SysDictTypeInfoRes{}).Page(req.PageNum, req.PageSize).
			Order(dao.SysDictType.Columns().DictId + " asc").Scan(&res.DictTypeList)
		libErr.ErrPrint(ctx, err, "获取字典类型失败")
	})
	return
}

// Add 添加字典类型
func (s *dictTypeImpl) Add(ctx context.Context, req *system.DictTypeAddReq, userId uint64) (err error) {
	err = g.Try(func() {
		err = s.ExistsDictType(ctx, req.DictType)
		libErr.ErrPrint(ctx, err)
		_, err = dao.SysDictType.Ctx(ctx).Insert(do.SysDictType{
			DictName: req.DictName,
			DictType: req.DictType,
			Status:   req.Status,
			CreateBy: userId,
			Remark:   req.Remark,
		})
		libErr.ErrPrint(ctx, err, "添加字典类型失败")
		//清除缓存
		commonService.Cache().RemoveByTag(ctx, consts.CacheSysDictTag)
	})
	return
}

// Edit 修改字典类型
func (s *dictTypeImpl) Edit(ctx context.Context, req *system.DictTypeEditReq, userId uint64) (err error) {
	err = g.DB().Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {
		err = g.Try(func() {
			err = s.ExistsDictType(ctx, req.DictType, req.DictId)
			libErr.ErrPrint(ctx, err)
			dictType := (*entity.SysDictType)(nil)
			e := dao.SysDictType.Ctx(ctx).Fields(dao.SysDictType.Columns().DictType).WherePri(req.DictId).Scan(&dictType)
			libErr.ErrPrint(ctx, e, "获取字典类型失败")
			libErr.NilErrPanic(dictType, "字典类型不存在")
			//修改字典类型
			_, e = dao.SysDictType.Ctx(ctx).TX(tx).WherePri(req.DictId).Update(do.SysDictType{
				DictName: req.DictName,
				DictType: req.DictType,
				Status:   req.Status,
				UpdateBy: userId,
				Remark:   req.Remark,
			})
			libErr.ErrPrint(ctx, e, "修改字典类型失败")
			//修改字典数据
			_, e = dao.SysDictData.Ctx(ctx).TX(tx).Data(do.SysDictData{DictType: req.DictType}).
				Where(dao.SysDictData.Columns().DictType, dictType.DictType).Update()
			libErr.ErrPrint(ctx, e, "修改字典数据失败")
			//清除缓存
			commonService.Cache().RemoveByTag(ctx, consts.CacheSysDictTag)
		})
		return err
	})
	return
}

func (s *dictTypeImpl) Get(ctx context.Context, req *system.DictTypeGetReq) (dictType *entity.SysDictType, err error) {
	err = g.Try(func() {
		err = dao.SysDictType.Ctx(ctx).Where(dao.SysDictType.Columns().DictId, req.DictId).Scan(&dictType)
		libErr.ErrPrint(ctx, err, "获取字典类型失败")
	})
	return
}

// ExistsDictType 检查类型是否已经存在
func (s *dictTypeImpl) ExistsDictType(ctx context.Context, dictType string, dictId ...int64) (err error) {
	err = g.Try(func() {
		m := dao.SysDictType.Ctx(ctx).Fields(dao.SysDictType.Columns().DictId).
			Where(dao.SysDictType.Columns().DictType, dictType)
		if len(dictId) > 0 {
			m = m.Where(dao.SysDictType.Columns().DictId+" !=? ", dictId[0])
		}
		res, e := m.One()
		libErr.ErrPrint(ctx, e, "sql err")
		if !res.IsEmpty() {
			libErr.ErrPrint(ctx, gerror.New("字典类型已存在"))
		}
	})
	return
}

// Delete 删除字典类型
func (s *dictTypeImpl) Delete(ctx context.Context, dictIds []int) (err error) {
	err = g.DB().Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {
		err = g.Try(func() {
			discs := ([]*entity.SysDictType)(nil)
			err = dao.SysDictType.Ctx(ctx).Fields(dao.SysDictType.Columns().DictType).
				Where(dao.SysDictType.Columns().DictId+" in (?) ", dictIds).Scan(&discs)
			libErr.ErrPrint(ctx, err, "删除失败")
			types := garray.NewStrArray()
			for _, dt := range discs {
				types.Append(dt.DictType)
			}
			if types.Len() > 0 {
				_, err = dao.SysDictType.Ctx(ctx).TX(tx).Delete(dao.SysDictType.Columns().DictId+" in (?) ", dictIds)
				libErr.ErrPrint(ctx, err, "删除类型失败")
				_, err = dao.SysDictData.Ctx(ctx).TX(tx).Delete(dao.SysDictData.Columns().DictType+" in (?) ", types.Slice())
				libErr.ErrPrint(ctx, err, "删除字典数据失败")
			}
			//清除缓存
			commonService.Cache().RemoveByTag(ctx, consts.CacheSysDictTag)
		})
		return err
	})
	return
}
