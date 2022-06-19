// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-18 13:58:41
// 生成路径: iotfast/internal/app/system/service/job.go
// 生成人：dwx
// ==========================================================================

package service

import (
	"context"
	"iotfast/api/v1/system"
	systemConsts "iotfast/internal/app/system/consts"
	"iotfast/internal/app/system/dao"
	"iotfast/internal/app/system/model/entity"
	"iotfast/library/liberr"

	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
)

//type job struct {
//}
//var SysJob = new(job)
type ISysJob interface {
	List(ctx context.Context, req *system.SysJobSearchReq) (total, page int, list []*entity.SysJob, err error)
	Get(ctx context.Context, id int64) (info *entity.SysJob, err error)
	Add(ctx context.Context, req *system.SysJobAddReq) (err error)
	Edit(ctx context.Context, req *system.SysJobEditReq) error
	DeleteByIds(ctx context.Context, ids []int) (err error)
	ChangeStatus(ctx context.Context, req *system.SysJobStatusReq) error
}
type jobImpl struct {
}

var jobService = jobImpl{}

func SysJob() ISysJob {
	return &jobService
}

// List 获取任务列表
func (s *jobImpl) List(ctx context.Context, req *system.SysJobSearchReq) (total, page int, list []*entity.SysJob, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	m := dao.SysJob.Ctx(ctx)
	if req.JobName != "" {
		m = m.Where(dao.SysJob.Columns().JobName+" like ?", "%"+req.JobName+"%")
	}
	if req.JobGroup != "" {
		m = m.Where(dao.SysJob.Columns().JobGroup+" = ?", req.JobGroup)
	}
	if req.Status != "" {
		m = m.Where(dao.SysJob.Columns().Status+" = ?", req.Status)
	}
	err = g.Try(func() {
		total, err = m.Count()
		liberr.ErrIsNil(ctx, err, "获取SysJob列表失败")
		if err != nil {
			g.Log().Error(ctx, err)
			err = gerror.New("获取总行数失败")
			return
		}
		order := "job_id asc"
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
func (s *jobImpl) Get(ctx context.Context, id int64) (info *entity.SysJob, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.SysJob.Ctx(ctx).Where(dao.SysJob.Columns().JobId, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
	}
	return
}

// Add 添加
func (s *jobImpl) Add(ctx context.Context, req *system.SysJobAddReq) (err error) {
	_, err = dao.SysJob.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *jobImpl) Edit(ctx context.Context, req *system.SysJobEditReq) error {
	_, err := dao.SysJob.Ctx(ctx).FieldsEx(dao.SysJob.Columns().JobId, dao.SysJob.Columns().CreatedAt).Where(dao.SysJob.Columns().JobId, req.JobId).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *jobImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.SysJob.Ctx(ctx).Delete(dao.SysJob.Columns().JobId+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}

// ChangeStatus 修改状态
func (s *jobImpl) ChangeStatus(ctx context.Context, req *system.SysJobStatusReq) error {
	_, err := dao.SysJob.Ctx(ctx).WherePri(req.JobId).Update(g.Map{
		dao.SysJob.Columns().Status: req.Status,
	})
	return err
}
