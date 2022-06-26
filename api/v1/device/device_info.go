// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径:/api/v1/device/device_info.go
// 生成人：dwx
// ==========================================================================

package device

import (
	commonApi "iotfast/api/v1/common"
	//"iotfast/internal/app/model"
	"iotfast/internal/app/device/model"
	"iotfast/internal/app/device/model/entity"

	"github.com/gogf/gf/v2/frame/g"
)

// Fill with you ideas below.

// DeviceInfoSearchReq 分页请求参数
type DeviceInfoSearchReq struct {
	g.Meta   `path:"/deviceInfo/list" tags:"设备信息" method:"get" summary:"设备信息列表"`
	Name     string `p:"name"`     //设备名称
	Group    string `p:"group"`    //设备组
	Sn       string `p:"sn"`       //SN
	Pwd      string `p:"pwd"`      //密码
	Kind     string `p:"kind"`     //设备类别
	Logo     string `p:"logo"`     //logo
	Monitor  string `p:"monitor"`  //是否监视
	Status   int    `p:"status"`   // 状态
	Location string `p:"location"` //地理位置
	//CreatedAt  *gtime.Time `p:"createdAt"` //创建时间
	BeginTime string `p:"beginTime"` //开始时间
	EndTime   string `p:"endTime"`   //结束时间
	commonApi.PageReq
}
type DeviceInfoSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*model.DeviceInfoExtern `json:"list"`
}
type DeviceInfoGetReq struct {
	g.Meta `path:"/deviceInfo/get" tags:"设备信息" method:"get" summary:"获取设备信息数据"`
	Id     int `p:"id"`
}
type DeviceInfoGetRes struct {
	g.Meta       `mime:"application/json"`
	Info         *model.DeviceInfoExtern  `json:"info"`
	Kind         *entity.DeviceKind       `json:"kind"`
	CategoryList []*entity.DeviceCategoty `json:"categoryList"`
}

// DeviceInfoAddReq 添加操作请求参数
type DeviceInfoAddReq struct {
	g.Meta   `path:"/deviceInfo/add" tags:"设备信息" method:"post" summary:"添加设备信息"`
	Name     string `p:"name" v:"required#设备名称不能为空"`
	Group    int    `p:"group" v:"required#设备组不能为空"`
	Sn       string `p:"sn" v:"required#SN不能为空"`
	Pwd      string `p:"pwd" `
	Kind     int    `p:"kind" v:"required#设备类别不能为空"`
	Logo     string `p:"logo" `
	Monitor  int    `p:"monitor" `
	Location int    `p:"location" `
}
type DeviceInfoAddRes struct {
}

// DeviceInfoEditReq 修改操作请求参数
type DeviceInfoEditReq struct {
	g.Meta   `path:"/deviceInfo/edit" tags:"设备信息" method:"put" summary:"修改设备信息"`
	Id       int    `p:"id" v:"required#主键ID不能为空"`
	Name     string `p:"name" v:"required#设备名称不能为空"`
	Group    int    `p:"group" v:"required#设备组不能为空"`
	Sn       string `p:"sn" v:"required#SN不能为空"`
	Pwd      string `p:"pwd" `
	Kind     int    `p:"kind" v:"required#设备类别不能为空"`
	Logo     string `p:"logo" `
	Monitor  int    `p:"monitor" `
	Location int    `p:"location" `
}
type DeviceInfoEditRes struct {
}
type DeviceInfoDeleteReq struct {
	g.Meta `path:"/deviceInfo/delete" tags:"设备信息" method:"delete" summary:"删除设备信息"`
	Ids    []int `p:"ids"`
}
type DeviceInfoDeleteRes struct {
}
