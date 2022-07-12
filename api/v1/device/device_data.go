package device

import (

	//"github.com/xiaodingding/iotfast/internal/app/device/model"

	"github.com/gogf/gf/v2/frame/g"
)

type DeviceDataGetReq struct {
	g.Meta    `path:"/deviceData/get" tags:"设备数据" method:"get" summary:"获取设备数据"`
	DeviceId  int    `p:"deviceId" json:"deviceId"`
	DeviceSn  string `p:"deviceSn" json:"deviceSn"`
	DevicePwd string `p:"devicePwd" json:"devicePwd"`
}

type DeviceDataGetRes struct {
	g.Meta `mime:"application/json"`
	g.MapStrStr
}

// DeviceCategoryDataAddReq 添加操作请求参数
type DeviceDataAddReq struct {
	g.Meta    `path:"/deviceData/add" tags:"设备数据" method:"post" summary:"添加设备数据"`
	DeviceId  int         `p:"deviceId" json:"deviceId"`
	DeviceSn  string      `p:"deviceSn" json:"deviceSn"`
	DevicePwd string      `p:"devicePwd" json:"devicePwd"`
	Time      string      `p:"time" json:"time"`
	Event     interface{} `p:"event" json:"event"`
	Property  interface{} `p:"property" json:"property"`
}
type DeviceDataAddRes struct {
}
