// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-18 13:58:41
// 生成路径:/api/v1/system/sys_job.go
// 生成人：dwx
// ==========================================================================

package system

import (
	commonApi "iotfast/api/v1/common"
	//"iotfast/internal/app/system/model"
	"iotfast/internal/app/system/model/entity"

	"github.com/gogf/gf/v2/frame/g"
)

// Fill with you ideas below.

// SysJobSearchReq 分页请求参数
type SysJobSearchReq struct {
	g.Meta        `path:"/job/list" tags:"定时任务调度" method:"get" summary:"定时任务调度列表"`
	JobId         string `p:"jobId"`         //任务ID
	JobName       string `p:"jobName"`       //任务名称
	JobGroup      string `p:"jobGroup"`      //任务组名
	MisfirePolicy string `p:"misfirePolicy"` //计划执行策略（1多次执行 2执行一次）
	Concurrent    string `p:"concurrent"`    //是否并发执行（0允许 1禁止）
	Status        string `p:"status"`        //状态（0正常 1暂停）
	commonApi.PageReq
}
type SysJobSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.SysJob `json:"list"`
}
type SysJobGetReq struct {
	g.Meta `path:"/job/get" tags:"定时任务调度" method:"get" summary:"获取定时任务调度数据"`
	Id     int `p:"id"`
}
type SysJobGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.SysJob
}

// SysJobAddReq 添加操作请求参数
type SysJobAddReq struct {
	g.Meta         `path:"/job/add" tags:"定时任务调度" method:"post" summary:"添加定时任务调度"`
	JobParams      string `p:"jobParams" `
	InvokeTarget   string `p:"invokeTarget" v:"required#调用目标字符串不能为空"`
	CronExpression string `p:"cronExpression" `
	MisfirePolicy  int    `p:"misfirePolicy" `
	Concurrent     int    `p:"concurrent" `
	Status         int    `p:"status" v:"required#状态（0正常 1暂停）不能为空"`
	CreateBy       uint64 `p:"createBy" `
	UpdateBy       uint64 `p:"updateBy" `
	Remark         string `p:"remark" `
}
type SysJobAddRes struct {
}

// SysJobEditReq 修改操作请求参数
type SysJobEditReq struct {
	g.Meta         `path:"/job/edit" tags:"定时任务调度" method:"put" summary:"修改定时任务调度"`
	JobId          int64  `p:"jobId" v:"required#主键ID不能为空"`
	JobParams      string `p:"jobParams" `
	InvokeTarget   string `p:"invokeTarget" v:"required#调用目标字符串不能为空"`
	CronExpression string `p:"cronExpression" `
	MisfirePolicy  int    `p:"misfirePolicy" `
	Concurrent     int    `p:"concurrent" `
	Status         int    `p:"status" v:"required#状态（0正常 1暂停）不能为空"`
	CreateBy       uint64 `p:"createBy" `
	UpdateBy       uint64 `p:"updateBy" `
	Remark         string `p:"remark" `
}
type SysJobEditRes struct {
}

// SysJobStatusReq 设置用户状态参数
type SysJobStatusReq struct {
	g.Meta `path:"/job/status" tags:"定时任务调度" method:"put" summary:"修改定时任务调度状态"`
	JobId  int64 `p:"jobId" v:"required#主键ID不能为空"`
	Status int   `p:"status" v:"required#状态（0正常 1暂停）不能为空"`
}
type SysJobStatusRes struct {
}
type SysJobDeleteReq struct {
	g.Meta `path:"/job/delete" tags:"定时任务调度" method:"delete" summary:"删除定时任务调度"`
	Ids    []int `p:"ids"`
}
type SysJobDeleteRes struct {
}
