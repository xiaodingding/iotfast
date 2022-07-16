// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-15 22:11:03
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/do/mqtt_topic.go
// 生成人：dwx
// ==========================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

// MqttTopic is the golang structure for table mqtt_topic.
type MqttTopic struct {
	g.Meta       `orm:"table: mqtt_topic, do:true"`
	Id           interface{} // 主键
	Name         interface{} // 设备名称
	ClientId     interface{} // 客户端Id
	Topic        interface{} // 订阅的Topic信息
	Qos          interface{} // 等级
	RetainAsPub  interface{} // Retain As Published option
	RetainHandle interface{} // Retain Handling option
	CreatedAt    *gtime.Time // 创建时间
	UpdatedAt    *gtime.Time // 修改时间
}
