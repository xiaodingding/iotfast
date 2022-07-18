// ==========================================================================
// 物联网快速开发自动生成API操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-07-16 15:38:13
// 生成路径:/api/v1/link/link_info.go
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

// LinkInfoSearchReq 分页请求参数
type LinkInfoSearchReq struct {
	g.Meta    `path:"/linkInfo/list" tags:"连接信息管理" method:"get" summary:"连接信息管理列表"`
	Name      string `p:"name"`      //连接名称
	Mark      string `p:"mark"`      //连接标记
	BeginTime string `p:"beginTime"` //开始时间
	EndTime   string `p:"endTime"`   //结束时间
	commonApi.PageReq
}
type LinkInfoSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.LinkInfo `json:"list"`
}
type LinkInfoGetReq struct {
	g.Meta `path:"/linkInfo/get" tags:"连接信息管理" method:"get" summary:"获取连接信息管理数据"`
	Id     int `p:"id"`
}
type LinkInfoGetRes struct {
	g.Meta `mime:"application/json"`
	*entity.LinkInfo
}

// LinkInfoAddReq 添加操作请求参数
type LinkInfoAddReq struct {
	g.Meta `path:"/linkInfo/add" tags:"连接信息管理" method:"post" summary:"添加连接信息管理"`
	Name   string `p:"name" v:"required#连接名称不能为空"`
	Mark   string `p:"mark" `
}
type LinkInfoAddRes struct {
}

// LinkInfoEditReq 修改操作请求参数
type LinkInfoEditReq struct {
	g.Meta `path:"/linkInfo/edit" tags:"连接信息管理" method:"put" summary:"修改连接信息管理"`
	Id     int    `p:"id" v:"required#主键ID不能为空"`
	Name   string `p:"name" v:"required#连接名称不能为空"`
	Mark   string `p:"mark" `
}
type LinkInfoEditRes struct {
}
type LinkInfoDeleteReq struct {
	g.Meta `path:"/linkInfo/delete" tags:"连接信息管理" method:"delete" summary:"删除连接信息管理"`
	Ids    []int `p:"ids"`
}
type LinkInfoDeleteRes struct {
}
