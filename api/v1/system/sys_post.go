/*
* @desc:岗位相关参数
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/4/7 23:09
* @Ref: 参考于https://gitee.com/tiger1103/gfast/
 */

package system

import (
	commonApi "github.com/xiaodingding/iotfast/api/v1/common"
	"github.com/xiaodingding/iotfast/internal/app/system/model/entity"

	"github.com/gogf/gf/v2/frame/g"
)

type PostSearchReq struct {
	g.Meta   `path:"/post/list" tags:"岗位管理" method:"get" summary:"岗位列表"`
	PostCode string `p:"postCode"` //岗位编码
	PostName string `p:"postName"` //岗位名称
	Status   string `p:"status"`   //状态
	commonApi.PageReq
}

type PostSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	PostList []*entity.SysPost `json:"postList"`
}

type PostAddReq struct {
	g.Meta   `path:"/post/add" tags:"岗位管理" method:"post" summary:"添加岗位"`
	PostCode string `p:"postCode" v:"required#岗位编码不能为空"`
	PostName string `p:"postName" v:"required#岗位名称不能为空"`
	PostSort int    `p:"postSort" v:"required#岗位排序不能为空"`
	Status   uint   `p:"status" v:"required#状态不能为空"`
	Remark   string `p:"remark"`
}

type PostAddRes struct {
}

type PostEditReq struct {
	g.Meta   `path:"/post/edit" tags:"岗位管理" method:"put" summary:"修改岗位"`
	PostId   int64  `p:"postId" v:"required#id必须"`
	PostCode string `p:"postCode" v:"required#岗位编码不能为空"`
	PostName string `p:"postName" v:"required#岗位名称不能为空"`
	PostSort int    `p:"postSort" v:"required#岗位排序不能为空"`
	Status   uint   `p:"status" v:"required#状态不能为空"`
	Remark   string `p:"remark"`
}

type PostEditRes struct {
}

type PostDeleteReq struct {
	g.Meta `path:"/post/delete" tags:"岗位管理" method:"delete" summary:"删除岗位"`
	Ids    []int `p:"ids"`
}

type PostDeleteRes struct {
}
