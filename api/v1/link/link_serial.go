// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-07-16 15:59:37
// 生成路径:/api/v1/link/link_serial.go
// 生成人：dwx
// ==========================================================================

package link

import (
	commonApi "github.com/xiaodingding/iotfast/api/v1/common"
	//"github.com/xiaodingding/iotfast/internal/app/link/model"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/xiaodingding/iotfast/internal/app/link/model/entity"
)

// Fill with you ideas below.

// LinkSerialSearchReq 分页请求参数
type LinkSerialSearchReq struct {
	g.Meta       `path:"/linkSerial/list" tags:"串口连接信息管理" method:"get" summary:"串口连接信息管理列表"`
	Name         string `p:"name"`         //连接名称
	Mark         string `p:"mark"`         //串口标记
	SerialName   string `p:"serialName"`   //串口号
	SerialBaund  string `p:"serialBaund"`  //串口波特率
	SerialParity string `p:"serialParity"` //串口校验位
	SerialData   string `p:"serialData"`   //串口数据位
	SerialStop   string `p:"serialStop"`   //串口停止位
	BeginTime    string `p:"beginTime"`    //开始时间
	EndTime      string `p:"endTime"`      //结束时间
	commonApi.PageReq
}
type LinkSerialSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.LinkSerial `json:"list"`
}
type LinkSerialGetReq struct {
	g.Meta `path:"/linkSerial/get" tags:"串口连接信息管理" method:"get" summary:"获取串口连接信息管理数据"`
	Id     int `p:"id"`
}
type LinkSerialGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.LinkSerial
}

// LinkSerialAddReq 添加操作请求参数
type LinkSerialAddReq struct {
	g.Meta       `path:"/linkSerial/add" tags:"串口连接信息管理" method:"post" summary:"添加串口连接信息管理"`
	Name         string `p:"name" v:"required#连接名称不能为空"`
	Mark         string `p:"mark" `
	SerialName   string `p:"serialName" v:"required#串口号不能为空"`
	SerialBaund  int    `p:"serialBaund" `
	SerialParity int    `p:"serialParity" `
	SerialData   int    `p:"serialData" `
	SerialStop   int    `p:"serialStop" `
}
type LinkSerialAddRes struct {
}

// LinkSerialEditReq 修改操作请求参数
type LinkSerialEditReq struct {
	g.Meta       `path:"/linkSerial/edit" tags:"串口连接信息管理" method:"put" summary:"修改串口连接信息管理"`
	Id           int    `p:"id" v:"required#主键ID不能为空"`
	Name         string `p:"name" v:"required#连接名称不能为空"`
	Mark         string `p:"mark" `
	SerialName   string `p:"serialName" v:"required#串口号不能为空"`
	SerialBaund  int    `p:"serialBaund" `
	SerialParity int    `p:"serialParity" `
	SerialData   int    `p:"serialData" `
	SerialStop   int    `p:"serialStop" `
}
type LinkSerialEditRes struct {
}
type LinkSerialDeleteReq struct {
	g.Meta `path:"/linkSerial/delete" tags:"串口连接信息管理" method:"delete" summary:"删除串口连接信息管理"`
	Ids    []int `p:"ids"`
}
type LinkSerialDeleteRes struct {
}
