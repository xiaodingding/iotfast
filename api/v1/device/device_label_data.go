// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径:/api/v1/device/device_label_data.go
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

// DeviceLabelDataSearchReq 分页请求参数
type DeviceLabelDataSearchReq struct {
	g.Meta    `path:"/deviceLabelData/list" tags:"设备标签数据" method:"get" summary:"设备标签数据列表"`
	LabelId   string `p:"labelId"`   //标签主键
	DeviceId  string `p:"deviceId"`  //设备主键
	BeginTime string `p:"beginTime"` //开始时间
	EndTime   string `p:"endTime"`   //结束时间
	commonApi.PageReq
}
type DeviceLabelDataSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.DeviceLabelData `json:"list"`
}
type DeviceLabelDataGetReq struct {
	g.Meta `path:"/deviceLabelData/get" tags:"设备标签数据" method:"get" summary:"获取设备标签数据数据"`
	Id     int `p:"id"`
}
type DeviceLabelDataGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.DeviceLabelData
}

// DeviceLabelDataAddReq 添加操作请求参数
type DeviceLabelDataAddReq struct {
	g.Meta   `path:"/deviceLabelData/add" tags:"设备标签数据" method:"post" summary:"添加设备标签数据"`
	LabelId  int `p:"labelId" `
	DeviceId int `p:"deviceId" `
}
type DeviceLabelDataAddRes struct {
}

// DeviceLabelDataEditReq 修改操作请求参数
type DeviceLabelDataEditReq struct {
	g.Meta   `path:"/deviceLabelData/edit" tags:"设备标签数据" method:"put" summary:"修改设备标签数据"`
	Id       int `p:"id" v:"required#主键ID不能为空"`
	LabelId  int `p:"labelId" `
	DeviceId int `p:"deviceId" `
}
type DeviceLabelDataEditRes struct {
}
type DeviceLabelDataDeleteReq struct {
	g.Meta `path:"/deviceLabelData/delete" tags:"设备标签数据" method:"delete" summary:"删除设备标签数据"`
	Ids    []int `p:"ids"`
}
type DeviceLabelDataDeleteRes struct {
}
