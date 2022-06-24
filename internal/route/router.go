/*
* @desc:路由绑定
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/18 16:23
 */

package router

import (
	"github.com/gogf/gf/v2/net/ghttp"
)

func BindController(group *ghttp.RouterGroup) {
	group.Group("/api/v1", func(group *ghttp.RouterGroup) {
		group.Middleware(ghttp.MiddlewareHandlerResponse)
		// 绑定后台路由
		BindCommonController(group)
		// 绑定测试路由
		BindDemoController(group)
		// 绑定公共路由
		BindSystemController(group)

		BindDeviceController(group)
	})

}
