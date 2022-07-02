/*
* @desc:demo
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/2 15:28
 */

package router

import (
	commonService "iotfast/internal/app/common/service"
	controller "iotfast/internal/app/mqtt/controller"

	"github.com/gogf/gf/v2/net/ghttp"
)

func BindMqttController(group *ghttp.RouterGroup) {
	group.Group("/mqtt", func(group *ghttp.RouterGroup) {
		group.Middleware(commonService.Middleware().MiddlewareCORS)
		group.Bind(
			controller.MqttMsgRecord,
			controller.MqttTopicRecord,
			controller.MqttStatus,
			controller.MqttTopic,
		)
	})

}
