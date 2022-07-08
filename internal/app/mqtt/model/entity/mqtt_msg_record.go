// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-27 23:24:18
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/entity/mqtt_msg_record.go
// 生成人：dwx
// ==========================================================================

package entity

// MqttMsgRecord is the golang structure for table mqtt_msg_record.
type MqttMsgRecord struct {
	Id         int    `orm:"id,primary" json:"id"`          // 主键
	DeviceSn   string `orm:"device_sn" json:"deviceSn"`     // 设备序列号
	TopicId    int    `orm:"topic_id" json:"topicId"`       // Topic的主键
	ClientName string `orm:"client_name" json:"clientName"` // 客户端名称
	ClientId   string `orm:"client_id" json:"clientId"`     // 客户端ID
	Qos        int    `orm:"qos" json:"qos"`                // Qos
	Payload    string `orm:"payload" json:"payload"`        // 传递的数据
	CreatTime  uint   `orm:"creat_time" json:"creatTime"`   // 创建时间
}
