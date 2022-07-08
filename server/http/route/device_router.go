/*
* @desc:后台路由
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/18 17:34
 */

package router

import (
	commonService "github.com/xiaodingding/iotfast/internal/app/common/service"
	controller "github.com/xiaodingding/iotfast/server/http/controller/device"

	"github.com/gogf/gf/v2/net/ghttp"
)

func BindDeviceController(group *ghttp.RouterGroup) {
	group.Group("/device", func(group *ghttp.RouterGroup) {
		group.Middleware(commonService.Middleware().MiddlewareCORS)
		////登录验证拦截
		//service.GfToken().Middleware(group)
		//context拦截器
		//group.Middleware(service.Middleware().Ctx, service.Middleware().Auth)
		group.Bind(
			controller.DeviceInfo,
			controller.DeviceCategoty,
			controller.DeviceCategoryData,
			controller.DeviceGroup,
			controller.DeviceKind,
			controller.DeviceLabel,
			controller.DeviceLabelData,
			controller.DeviceStatus,
		)
	})
}
