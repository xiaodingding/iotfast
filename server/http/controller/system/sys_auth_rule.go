/*
* @desc:菜单
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/16 10:36
 */

package controller

import (
	"context"
	"iotfast/api/v1/system"
	"iotfast/internal/app/system/model"
	"iotfast/internal/app/system/service"
)

var Menu = menuController{}

type menuController struct {
	BaseController
}

func (c *menuController) List(ctx context.Context, req *system.RuleSearchReq) (res *system.RuleListRes, err error) {
	var list []*model.SysAuthRuleInfoRes
	res = &system.RuleListRes{
		Rules: make([]*model.SysAuthRuleTreeRes, 0),
	}
	list, err = service.Rule().GetMenuListSearch(ctx, req)
	if req.Title != "" || req.Component != "" {
		for _, menu := range list {
			res.Rules = append(res.Rules, &model.SysAuthRuleTreeRes{
				SysAuthRuleInfoRes: menu,
			})
		}
	} else {
		res.Rules = service.Rule().GetMenuListTree(0, list)
	}
	return
}

func (c *menuController) Add(ctx context.Context, req *system.RuleAddReq) (res *system.RuleAddRes, err error) {
	err = service.Rule().Add(ctx, req)
	return
}

// GetAddParams 获取菜单添加及编辑相关参数
func (c *menuController) GetAddParams(ctx context.Context, req *system.RuleGetParamsReq) (res *system.RuleGetParamsRes, err error) {
	// 获取角色列表
	res = new(system.RuleGetParamsRes)
	res.Roles, err = service.Role().GetRoleList(ctx)
	if err != nil {
		return
	}
	res.Menus, err = service.Rule().GetIsMenuList(ctx)
	return
}

// Get 获取菜单信息
func (c *menuController) Get(ctx context.Context, req *system.RuleInfoReq) (res *system.RuleInfoRes, err error) {
	res = new(system.RuleInfoRes)
	res.Rule, err = service.Rule().Get(ctx, req.Id)
	if err != nil {
		return
	}
	res.RoleIds, err = service.Rule().GetMenuRoles(ctx, req.Id)
	return
}

// Update 菜单修改
func (c *menuController) Update(ctx context.Context, req *system.RuleUpdateReq) (res *system.RuleUpdateRes, err error) {
	err = service.Rule().Update(ctx, req)
	return
}

// Delete 删除菜单
func (c *menuController) Delete(ctx context.Context, req *system.RuleDeleteReq) (res *system.RuleDeleteRes, err error) {
	err = service.Rule().DeleteMenuByIds(ctx, req.Ids)
	return
}
