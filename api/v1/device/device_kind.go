// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径:/api/v1/device/device_kind.go
// 生成人：dwx
// ==========================================================================

package device

import (
	commonApi "github.com/xiaodingding/iotfast/api/v1/common"
	//"github.com/xiaodingding/iotfast/internal/app/device/model"
	"github.com/xiaodingding/iotfast/internal/app/device/model/entity"

	"github.com/gogf/gf/v2/frame/g"
)

// Fill with you ideas below.

// DeviceKindSearchReq 分页请求参数
type DeviceKindSearchReq struct {
	g.Meta    `path:"/deviceKind/list" tags:"设备种类" method:"get" summary:"设备种类列表"`
	Id        int    `p:"id"`        //Id
	Name      string `p:"name"`      //设备种类名称
	Mark      string `p:"mark"`      //设备名称标记
	TimeOut   string `p:"timeOut"`   //超时时间
	BeginTime string `p:"beginTime"` //开始时间
	EndTime   string `p:"endTime"`   //结束时间
	commonApi.PageReq
}
type DeviceKindSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.DeviceKind `json:"list"`
}
type DeviceKindGetReq struct {
	g.Meta `path:"/deviceKind/get" tags:"设备种类" method:"get" summary:"获取设备种类数据"`
	Id     int `p:"id"`
}
type DeviceKindGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.DeviceKind
}

// DeviceKindAddReq 添加操作请求参数
type DeviceKindAddReq struct {
	g.Meta  `path:"/deviceKind/add" tags:"设备种类" method:"post" summary:"添加设备种类"`
	Name    string `p:"name" v:"required#设备种类名称不能为空"`
	Mark    string `p:"mark" `
	TimeOut int    `p:"timeOut" v:"required#超时时间不能为空"`
}
type DeviceKindAddRes struct {
}

// DeviceKindEditReq 修改操作请求参数
type DeviceKindEditReq struct {
	g.Meta  `path:"/deviceKind/edit" tags:"设备种类" method:"put" summary:"修改设备种类"`
	Id      int    `p:"id" v:"required#主键ID不能为空"`
	Name    string `p:"name" v:"required#设备种类名称不能为空"`
	Mark    string `p:"mark" `
	TimeOut int    `p:"timeOut" v:"required#超时时间不能为空"`
}
type DeviceKindEditRes struct {
}
type DeviceKindDeleteReq struct {
	g.Meta `path:"/deviceKind/delete" tags:"设备种类" method:"delete" summary:"删除设备种类"`
	Ids    []int `p:"ids"`
}
type DeviceKindDeleteRes struct {
}
