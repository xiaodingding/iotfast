package device

import (

	//"github.com/xiaodingding/iotfast/internal/app/device/model"

	"github.com/gogf/gf/v2/frame/g"
)

type DeviceDataGetReq struct {
	g.Meta    `path:"/deviceData/get" tags:"设备数据API" method:"get" summary:"设备API"`
	DeviceId  int    `p:"deviceId" `
	DeviceSn  string `p:"deviceSn" `
	DevicePwd string `p:"devicePwd" `
}

type DeviceDataGetRes struct {
	g.Meta `mime:"application/json"`
	g.MapStrStr
}

// DeviceCategoryDataAddReq 添加操作请求参数
type DeviceDataAddReq struct {
	g.Meta    `path:"/deviceData/add" tags:"设备数据API" method:"post" summary:"设备API"`
	DeviceId  int         `p:"deviceId" `
	DeviceSn  string      `p:"deviceSn" `
	DevicePwd string      `p:"devicePwd" `
	Time      string      `p:"time" `
	Event     interface{} `p:"event" `
	Property  interface{} `p:"property" `
}
type DeviceDataAddRes struct {
}
