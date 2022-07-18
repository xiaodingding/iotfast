// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-07-16 15:59:37
// 生成路径:/api/v1/link/link_net.go
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

// LinkNetSearchReq 分页请求参数
type LinkNetSearchReq struct {
	g.Meta     `path:"/linkNet/list" tags:"网络连接信息管理" method:"get" summary:"网络连接信息管理列表"`
	Name       string `p:"name"`       //连接名称
	Mark       string `p:"mark"`       //串口标记
	RemoteType string `p:"remoteType"` //远程类型
	RemoteAddr string `p:"remoteAddr"` //远程地址
	RemotePort string `p:"remotePort"` //远程端口号
	Timeout    string `p:"timeout"`    //超时时间
	BeginTime  string `p:"beginTime"`  //开始时间
	EndTime    string `p:"endTime"`    //结束时间
	commonApi.PageReq
}
type LinkNetSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.LinkNet `json:"list"`
}
type LinkNetGetReq struct {
	g.Meta `path:"/linkNet/get" tags:"网络连接信息管理" method:"get" summary:"获取网络连接信息管理数据"`
	Id     int `p:"id"`
}
type LinkNetGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.LinkNet
}

// LinkNetAddReq 添加操作请求参数
type LinkNetAddReq struct {
	g.Meta     `path:"/linkNet/add" tags:"网络连接信息管理" method:"post" summary:"添加网络连接信息管理"`
	Name       string `p:"name" v:"required#连接名称不能为空"`
	Mark       string `p:"mark" `
	RemoteType int    `p:"remoteType" `
	RemoteAddr string `p:"remoteAddr" `
	RemotePort string `p:"remotePort" `
	Timeout    int    `p:"timeout" `
}
type LinkNetAddRes struct {
}

// LinkNetEditReq 修改操作请求参数
type LinkNetEditReq struct {
	g.Meta     `path:"/linkNet/edit" tags:"网络连接信息管理" method:"put" summary:"修改网络连接信息管理"`
	Id         int    `p:"id" v:"required#主键ID不能为空"`
	Name       string `p:"name" v:"required#连接名称不能为空"`
	Mark       string `p:"mark" `
	RemoteType int    `p:"remoteType" `
	RemoteAddr string `p:"remoteAddr" `
	RemotePort string `p:"remotePort" `
	Timeout    int    `p:"timeout" `
}
type LinkNetEditRes struct {
}
type LinkNetDeleteReq struct {
	g.Meta `path:"/linkNet/delete" tags:"网络连接信息管理" method:"delete" summary:"删除网络连接信息管理"`
	Ids    []int `p:"ids"`
}
type LinkNetDeleteRes struct {
}
