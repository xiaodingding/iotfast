// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-27 23:24:19
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/do/mqtt_topic_record.go
// 生成人：dwx
// ==========================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
)

// MqttTopicRecord is the golang structure for table mqtt_topic_record.
type MqttTopicRecord struct {
	g.Meta    `orm:"table: mqtt_topic_record, do:true"`
	Id        interface{} // 主键
	Name      interface{} // 设备名称
	Topic     interface{} // Topic
	Qos       interface{} // Qos
	Remark    interface{} // 备注
	CreatTime interface{} // 创建时间
}
