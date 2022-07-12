// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-27 23:24:18
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/do/mqtt_msg_record.go
// 生成人：dwx
// ==========================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
)

// MqttMsgRecord is the golang structure for table mqtt_msg_record.
type MqttMsgRecord struct {
	g.Meta     `orm:"table: mqtt_msg_record, do:true"`
	Id         interface{} // 主键
	DeviceSn   interface{} // 设备序列号
	TopicId    interface{} // Topic的主键
	ClientName interface{} // 客户端名称
	ClientId   interface{} // 客户端ID
	Qos        interface{} // Qos
	Payload    interface{} // 传递的数据
	CreatTime  interface{} // 创建时间
}
