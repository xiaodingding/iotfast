// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-21 22:06:16
// 生成路径:/api/v1/device/device_categoty.go
// 生成人：dwx
// ==========================================================================

package device

import (
	commonApi "iotfast/api/v1/common"
	//"iotfast/internal/app/device/model"
	"iotfast/internal/app/device/model/entity"

	"github.com/gogf/gf/v2/frame/g"
)

// Fill with you ideas below.

// DeviceCategotySearchReq 分页请求参数
type DeviceCategotySearchReq struct {
	g.Meta    `path:"/deviceCategoty/list" tags:"设备类别" method:"get" summary:"设备类别列表"`
	KindId    int    `p:"kindId"`    //数据模板的主键
	Name      string `p:"name"`      //数据名称
	Mark      string `p:"mark"`      //数据标识
	DataType  string `p:"dataType"`  //数据类型
	Unit      string `p:"unit"`      //数据单位
	Ratio     string `p:"ratio"`     //变比系数
	Format    string `p:"format"`    //格式化显示
	HomeShow  string `p:"homeShow"`  //首页是否展示
	BeginTime string `p:"beginTime"` //开始时间
	EndTime   string `p:"endTime"`   //结束时间
	commonApi.PageReq
}
type DeviceCategotySearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.DeviceCategoty `json:"list"`
	Kind *entity.DeviceKind       `json:"kind"`
}
type DeviceCategotyGetReq struct {
	g.Meta `path:"/deviceCategoty/get" tags:"设备类别" method:"get" summary:"获取设备类别数据"`
	Id     int `p:"id"`
}
type DeviceCategotyGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.DeviceCategoty
}

// DeviceCategotyAddReq 添加操作请求参数
type DeviceCategotyAddReq struct {
	g.Meta   `path:"/deviceCategoty/add" tags:"设备类别" method:"post" summary:"添加设备类别"`
	KindId   int    `p:"kindId" `
	Name     string `p:"name" v:"required#数据名称不能为空"`
	Mark     string `p:"mark" `
	DataType int    `p:"dataType" `
	Unit     string `p:"unit" `
	Ratio    string `p:"ratio" `
	Format   string `p:"format" `
	HomeShow int    `p:"homeShow" `
	Remark   string `p:"remark" `
}
type DeviceCategotyAddRes struct {
}

// DeviceCategotyEditReq 修改操作请求参数
type DeviceCategotyEditReq struct {
	g.Meta   `path:"/deviceCategoty/edit" tags:"设备类别" method:"put" summary:"修改设备类别"`
	Id       int    `p:"id" v:"required#主键ID不能为空"`
	KindId   int    `p:"kindId" `
	Name     string `p:"name" v:"required#数据名称不能为空"`
	Mark     string `p:"mark" `
	DataType int    `p:"dataType" `
	Unit     string `p:"unit" `
	Ratio    string `p:"ratio" `
	Format   string `p:"format" `
	HomeShow int    `p:"homeShow" `
	Remark   string `p:"remark" `
}
type DeviceCategotyEditRes struct {
}
type DeviceCategotyDeleteReq struct {
	g.Meta `path:"/deviceCategoty/delete" tags:"设备类别" method:"delete" summary:"删除设备类别"`
	Ids    []int `p:"ids"`
}
type DeviceCategotyDeleteRes struct {
}
