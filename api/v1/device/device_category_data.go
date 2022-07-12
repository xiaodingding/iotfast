// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-21 22:06:16
// 生成路径:/api/v1/device/device_category_data.go
// 生成人：dwx
// ==========================================================================

package device

import (
	commonApi "github.com/xiaodingding/iotfast/api/v1/common"
	//"github.com/xiaodingding/iotfast/internal/app/device/model"

	"github.com/xiaodingding/iotfast/internal/app/device/model/entity"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

// Fill with you ideas below.

// DeviceCategoryDataSearchReq 分页请求参数
type DeviceCategoryDataSearchReq struct {
	g.Meta     `path:"/deviceCategoryData/list" tags:"设备数据" method:"get" summary:"设备数据列表"`
	CategoryId int     `p:"categoryId"` //数据类别主键
	DeviceId   int     `p:"deviceId"`   //设备主键
	DataInt    string  `p:"dataInt"`    //int型数据
	DataStr    string  `p:"dataStr"`    //字符串型数据
	DataDouble float64 `p:"dataDouble"` //double型数据
	BeginTime  string  `p:"beginTime"`  //开始时间
	EndTime    string  `p:"endTime"`    //结束时间
	Top        int     `p:"top"`        //最新的多少个
	commonApi.PageReq
}

type DeviceCategoryDataSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.DeviceCategoryData `json:"list"`
}

type DeviceCategoryDataRecentReq struct {
	g.Meta     `path:"/deviceCategoryData/recent" tags:"设备数据" method:"get" summary:"设备最近数据列表"`
	CategoryId int    `p:"categoryId"` //数据类别主键
	DeviceId   int    `p:"deviceId"`   //设备主键
	BeginTime  string `p:"beginTime"`  //开始时间
	EndTime    string `p:"endTime"`    //结束时间
	commonApi.PageReq
}

type DeviceCategoryDataComm struct {
	Id   int         `orm:"id,primary" json:"id"`   // 主键
	Data interface{} `orm:"data" json:"data"`       // 字符串型数据
	Time *gtime.Time `orm:"created_at" json:"time"` // 修改时间
}

type DeviceCategoryDataRecentRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	Data []*DeviceCategoryDataComm
}

type DeviceCategoryDataHistoryReq struct {
	g.Meta     `path:"/deviceCategoryData/history" tags:"设备数据" method:"get" summary:"设备历史数据列表"`
	CategoryId int    `p:"categoryId"` //数据类别主键
	DeviceId   int    `p:"deviceId"`   //设备主键
	BeginTime  string `p:"beginTime"`  //开始时间
	EndTime    string `p:"endTime"`    //结束时间
	commonApi.PageReq
}

type DeviceCategoryDataHistoryRes struct {
	g.Meta `mime:"application/json"`
	Total  int `json:"total"`
	Data   []*DeviceCategoryDataComm
}

type DeviceCategoryDataGetReq struct {
	g.Meta `path:"/deviceCategoryData/get" tags:"设备数据" method:"get" summary:"获取设备数据"`
	Id     int `p:"id"`
}
type DeviceCategoryDataGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.DeviceCategoryData
}

// DeviceCategoryDataAddReq 添加操作请求参数
type DeviceCategoryDataAddReq struct {
	g.Meta     `path:"/deviceCategoryData/add" tags:"设备数据" method:"post" summary:"添加设备数据"`
	CategoryId int     `p:"categoryId" v:"required#数据类别主键不能为空"`
	DeviceId   int     `p:"deviceId" v:"required#设备主键不能为空"`
	DataInt    uint    `p:"dataInt" `
	DataStr    string  `p:"dataStr" `
	DataDouble float64 `p:"dataDouble" `
}
type DeviceCategoryDataAddRes struct {
}

// DeviceCategoryDataEditReq 修改操作请求参数
type DeviceCategoryDataEditReq struct {
	g.Meta     `path:"/deviceCategoryData/edit" tags:"设备数据" method:"put" summary:"修改设备数据"`
	Id         int     `p:"id" v:"required#主键ID不能为空"`
	CategoryId int     `p:"categoryId" v:"required#数据类别主键不能为空"`
	DeviceId   int     `p:"deviceId" v:"required#设备主键不能为空"`
	DataInt    uint    `p:"dataInt" `
	DataStr    string  `p:"dataStr" `
	DataDouble float64 `p:"dataDouble" `
}
type DeviceCategoryDataEditRes struct {
}
type DeviceCategoryDataDeleteReq struct {
	g.Meta `path:"/deviceCategoryData/delete" tags:"设备数据" method:"delete" summary:"删除设备数据"`
	Ids    []int `p:"ids"`
}
type DeviceCategoryDataDeleteRes struct {
}
