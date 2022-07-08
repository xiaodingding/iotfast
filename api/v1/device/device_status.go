// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径:/api/v1/device/device_status.go
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

// DeviceStatusSearchReq 分页请求参数
type DeviceStatusSearchReq struct {
	g.Meta             `path:"/deviceStatus/list" tags:"设备状态" method:"get" summary:"设备状态列表"`
	DeviceId           string `p:"deviceId"`           //设备ID
	Status             string `p:"status"`             //状态
	TimeOut            string `p:"timeOut"`            //超时时间
	UpTime             string `p:"upTime"`             //上线时间
	DownTime           string `p:"downTime"`           //离线时间
	LastDataUpdateTime string `p:"lastDataUpdateTime"` //最新一次数据更新时间
	BeginTime          string `p:"beginTime"`          //开始时间
	EndTime            string `p:"endTime"`            //结束时间
	commonApi.PageReq
}
type DeviceStatusSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.DeviceStatus `json:"list"`
}
type DeviceStatusGetReq struct {
	g.Meta `path:"/deviceStatus/get" tags:"设备状态" method:"get" summary:"获取设备状态数据"`
	Id     int `p:"id"`
}
type DeviceStatusGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.DeviceStatus
}

// DeviceStatusAddReq 添加操作请求参数
type DeviceStatusAddReq struct {
	g.Meta             `path:"/deviceStatus/add" tags:"设备状态" method:"post" summary:"添加设备状态"`
	DeviceId           int  `p:"deviceId" v:"required#设备ID不能为空"`
	Status             int  `p:"status" v:"required#状态不能为空"`
	TimeOut            int  `p:"timeOut" v:"required#超时时间不能为空"`
	UpTime             int  `p:"upTime" `
	DownTime           int  `p:"downTime" `
	LastDataUpdateTime uint `p:"lastDataUpdateTime" v:"required#最新一次数据更新时间不能为空"`
}
type DeviceStatusAddRes struct {
}

// DeviceStatusEditReq 修改操作请求参数
type DeviceStatusEditReq struct {
	g.Meta             `path:"/deviceStatus/edit" tags:"设备状态" method:"put" summary:"修改设备状态"`
	Id                 int  `p:"id" v:"required#主键ID不能为空"`
	DeviceId           int  `p:"deviceId" v:"required#设备ID不能为空"`
	Status             int  `p:"status" v:"required#状态不能为空"`
	TimeOut            int  `p:"timeOut" v:"required#超时时间不能为空"`
	UpTime             int  `p:"upTime" `
	DownTime           int  `p:"downTime" `
	LastDataUpdateTime uint `p:"lastDataUpdateTime" v:"required#最新一次数据更新时间不能为空"`
}
type DeviceStatusEditRes struct {
}

// DeviceStatusStatusReq 设置用户状态参数
type DeviceStatusStatusReq struct {
	g.Meta `path:"/deviceStatus/status" tags:"设备状态" method:"put" summary:"修改设备状态状态"`
	Id     int `p:"id" v:"required#主键ID不能为空"`
	Status int `p:"status" v:"required#状态不能为空"`
}
type DeviceStatusStatusRes struct {
}
type DeviceStatusDeleteReq struct {
	g.Meta `path:"/deviceStatus/delete" tags:"设备状态" method:"delete" summary:"删除设备状态"`
	Ids    []int `p:"ids"`
}
type DeviceStatusDeleteRes struct {
}
