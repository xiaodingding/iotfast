// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径:/api/v1/device/device_group.go
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

// DeviceGroupSearchReq 分页请求参数
type DeviceGroupSearchReq struct {
	g.Meta    `path:"/deviceGroup/list" tags:"设备分组" method:"get" summary:"设备分组列表"`
	Id        int    `p:"id"`        //Id
	Name      string `p:"name"`      //组名
	BeginTime string `p:"beginTime"` //开始时间
	EndTime   string `p:"endTime"`   //结束时间
	commonApi.PageReq
}
type DeviceGroupSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.DeviceGroup `json:"list"`
}
type DeviceGroupGetReq struct {
	g.Meta `path:"/deviceGroup/get" tags:"设备分组" method:"get" summary:"获取设备分组数据"`
	Id     int `p:"id"`
}
type DeviceGroupGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.DeviceGroup
}

// DeviceGroupAddReq 添加操作请求参数
type DeviceGroupAddReq struct {
	g.Meta `path:"/deviceGroup/add" tags:"设备分组" method:"post" summary:"添加设备分组"`
	Name   string `p:"name" v:"required#组名不能为空"`
}
type DeviceGroupAddRes struct {
}

// DeviceGroupEditReq 修改操作请求参数
type DeviceGroupEditReq struct {
	g.Meta `path:"/deviceGroup/edit" tags:"设备分组" method:"put" summary:"修改设备分组"`
	Id     int    `p:"id" v:"required#主键ID不能为空"`
	Name   string `p:"name" v:"required#组名不能为空"`
}
type DeviceGroupEditRes struct {
}
type DeviceGroupDeleteReq struct {
	g.Meta `path:"/deviceGroup/delete" tags:"设备分组" method:"delete" summary:"删除设备分组"`
	Ids    []int `p:"ids"`
}
type DeviceGroupDeleteRes struct {
}
