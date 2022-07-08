/*
* @desc:登录
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/4/27 21:51
* @Ref: 参考于https://gitee.com/tiger1103/gfast/
 */

package system

import (
	"github.com/xiaodingding/iotfast/internal/app/system/model"

	"github.com/gogf/gf/v2/frame/g"
)

type UserLoginReq struct {
	g.Meta     `path:"/login" tags:"登录" method:"post" summary:"用户登录"`
	Username   string `p:"username" v:"required#用户名不能为空"`
	Password   string `p:"password" v:"required#密码不能为空"`
	VerifyCode string `p:"verifyCode" v:"required#验证码不能为空"`
	VerifyKey  string `p:"verifyKey"`
}

type UserLoginRes struct {
	g.Meta      `mime:"application/json"`
	UserInfo    *model.LoginUserRes `json:"userInfo"`
	Token       string              `json:"token"`
	MenuList    []*model.UserMenus  `json:"menuList"`
	Permissions []string            `json:"permissions"`
}

type UserLoginOutReq struct {
	g.Meta        `path:"/loginOut" tags:"登录" method:"delete" summary:"退出登录"`
	Authorization string `p:"Authorization" in:"header" dc:"Bearer {{token}}"`
}

type UserLoginOutRes struct {
}
