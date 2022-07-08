// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径:/api/v1/device/device_label.go
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

// DeviceLabelSearchReq 分页请求参数
type DeviceLabelSearchReq struct {
	g.Meta    `path:"/deviceLabel/list" tags:"设备标签" method:"get" summary:"设备标签列表"`
	Name      string `p:"name"`      //标签内容
	BeginTime string `p:"beginTime"` //开始时间
	EndTime   string `p:"endTime"`   //结束时间
	commonApi.PageReq
}
type DeviceLabelSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.DeviceLabel `json:"list"`
}
type DeviceLabelGetReq struct {
	g.Meta `path:"/deviceLabel/get" tags:"设备标签" method:"get" summary:"获取设备标签数据"`
	Id     int `p:"id"`
}
type DeviceLabelGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.DeviceLabel
}

// DeviceLabelAddReq 添加操作请求参数
type DeviceLabelAddReq struct {
	g.Meta `path:"/deviceLabel/add" tags:"设备标签" method:"post" summary:"添加设备标签"`
	Name   string `p:"name" v:"required#标签内容不能为空"`
}
type DeviceLabelAddRes struct {
}

// DeviceLabelEditReq 修改操作请求参数
type DeviceLabelEditReq struct {
	g.Meta `path:"/deviceLabel/edit" tags:"设备标签" method:"put" summary:"修改设备标签"`
	Id     int    `p:"id" v:"required#主键ID不能为空"`
	Name   string `p:"name" v:"required#标签内容不能为空"`
}
type DeviceLabelEditRes struct {
}
type DeviceLabelDeleteReq struct {
	g.Meta `path:"/deviceLabel/delete" tags:"设备标签" method:"delete" summary:"删除设备标签"`
	Ids    []int `p:"ids"`
}
type DeviceLabelDeleteRes struct {
}
