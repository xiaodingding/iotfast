/*
* @desc:demo
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/2 15:28
 */

package router

import (
	commonService "github.com/xiaodingding/iotfast/internal/app/common/service"
	controller "github.com/xiaodingding/iotfast/server/http/controller/demo"

	"github.com/gogf/gf/v2/net/ghttp"
)

func BindDemoController(group *ghttp.RouterGroup) {
	group.Group("/demo", func(group *ghttp.RouterGroup) {
		group.Middleware(commonService.Middleware().MiddlewareCORS)
		group.Bind(
			controller.Demo,
		)
	})

}
