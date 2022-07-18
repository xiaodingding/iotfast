/*
* @desc:后台路由
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/18 17:34
 */

package router

import (
	commonService "github.com/xiaodingding/iotfast/internal/app/common/service"
	controller "github.com/xiaodingding/iotfast/server/http/controller/link"

	"github.com/gogf/gf/v2/net/ghttp"
)

func BindLinkController(group *ghttp.RouterGroup) {
	group.Group("/link", func(group *ghttp.RouterGroup) {
		group.Middleware(commonService.Middleware().MiddlewareCORS)
		////登录验证拦截
		//service.GfToken().Middleware(group)
		//context拦截器
		//group.Middleware(service.Middleware().Ctx, service.Middleware().Auth)
		group.Bind(
			controller.LinkInfo,
			controller.LinkNet,
			controller.LinkSerial,
		)
	})
}
