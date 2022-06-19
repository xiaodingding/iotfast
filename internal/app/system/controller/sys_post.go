/*
* @desc:岗位管理
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/4/7 23:12
 */

package controller

import (
	"context"
	"iotfast/api/v1/system"
	"iotfast/internal/app/system/service"
)

var Post = postController{}

type postController struct {
	BaseController
}

// List 岗位列表
func (c *postController) List(ctx context.Context, req *system.PostSearchReq) (res *system.PostSearchRes, err error) {
	res, err = service.Post().List(ctx, req)
	return
}

// Add 添加岗位
func (c *postController) Add(ctx context.Context, req *system.PostAddReq) (res *system.PostAddRes, err error) {
	err = service.Post().Add(ctx, req)
	return
}

// Edit 修改岗位
func (c *postController) Edit(ctx context.Context, req *system.PostEditReq) (res *system.PostEditRes, err error) {
	err = service.Post().Edit(ctx, req)
	return
}

// Delete 删除岗位
func (c *postController) Delete(ctx context.Context, req *system.PostDeleteReq) (res *system.PostDeleteRes, err error) {
	err = service.Post().Delete(ctx, req.Ids)
	return
}
