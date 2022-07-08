/*
* @desc:后台路由
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/18 17:34
 */

package router

import (
	commonService "github.com/xiaodingding/iotfast/internal/app/common/service"
	controller "github.com/xiaodingding/iotfast/server/http/controller/common"

	"github.com/gogf/gf/v2/net/ghttp"
)

func BindCommonController(group *ghttp.RouterGroup) {
	group.Group("/pub", func(group *ghttp.RouterGroup) {
		group.Middleware(commonService.Middleware().MiddlewareCORS)
		group.Group("/captcha", func(group *ghttp.RouterGroup) {
			group.Bind(
				controller.Captcha,
			)
		})
	})
}
