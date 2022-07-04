/*
* @desc:登录
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/4/27 21:52
 */

package controller

import (
	"context"
	"iotfast/api/v1/system"
	commonService "iotfast/internal/app/common/service"
	"iotfast/internal/app/system/model"
	"iotfast/internal/app/system/service"
	"iotfast/library/libUtils"

	"github.com/gogf/gf/v2/crypto/gmd5"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/util/gconv"
	"github.com/gogf/gf/v2/util/gmode"
)

var (
	Login = loginController{}
)

type loginController struct {
	BaseController
}

func (c *loginController) Login(ctx context.Context, req *system.UserLoginReq) (res *system.UserLoginRes, err error) {
	var (
		user        *model.LoginUserRes
		token       string
		permissions []string
		menuList    []*model.UserMenus
	)
	//判断验证码是否正确
	debug := gmode.IsDevelop()
	if !debug {
		if !commonService.Captcha().VerifyString(req.VerifyKey, req.VerifyCode) {
			err = gerror.New("验证码输入错误")
			return
		}
	}
	ip := libUtils.GetClientIp(ctx)
	userAgent := libUtils.GetUserAgent(ctx)
	user, err = service.User().GetAdminUserByUsernamePassword(ctx, req)
	if err != nil {
		// 保存登录失败的日志信息
		service.SysLoginLog().Invoke(ctx, &model.LoginLogParams{
			Status:    0,
			Username:  req.Username,
			Ip:        ip,
			UserAgent: userAgent,
			Msg:       err.Error(),
			Module:    "系统后台",
		})
		return
	}
	err = service.User().UpdateLoginInfo(ctx, user.Id, ip)
	if err != nil {
		return
	}
	// 报存登录成功的日志信息
	service.SysLoginLog().Invoke(ctx, &model.LoginLogParams{
		Status:    1,
		Username:  req.Username,
		Ip:        ip,
		UserAgent: userAgent,
		Msg:       "登录成功",
		Module:    "系统后台",
	})
	key := gconv.String(user.Id) + "-" + gmd5.MustEncryptString(user.UserName) + gmd5.MustEncryptString(user.UserPassword)
	if g.Cfg().MustGet(ctx, "gfToken.multiLogin").Bool() {
		key = gconv.String(user.Id) + "-" + gmd5.MustEncryptString(user.UserName) + gmd5.MustEncryptString(user.UserPassword+ip+userAgent)
	}
	user.UserPassword = ""
	token, err = service.GfToken().GenerateToken(ctx, key, user)
	if err != nil {
		return
	}
	//获取用户菜单数据
	menuList, permissions, err = service.User().GetAdminRules(ctx, user.Id)
	if err != nil {
		return
	}
	res = &system.UserLoginRes{
		UserInfo:    user,
		Token:       token,
		MenuList:    menuList,
		Permissions: permissions,
	}
	return
}

// LoginOut 退出登录
func (c *loginController) LoginOut(ctx context.Context, req *system.UserLoginOutReq) (res *system.UserLoginOutRes, err error) {
	err = service.GfToken().RemoveToken(ctx, service.GfToken().GetRequestToken(g.RequestFromCtx(ctx)))
	return
}
