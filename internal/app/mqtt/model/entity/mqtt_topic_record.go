// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-27 23:24:19
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/entity/mqtt_topic_record.go
// 生成人：dwx
// ==========================================================================

package entity

// MqttTopicRecord is the golang structure for table mqtt_topic_record.
type MqttTopicRecord struct {
	Id        int    `orm:"id,primary" json:"id"`        // 主键
	Name      string `orm:"name" json:"name"`            // 设备名称
	Topic     string `orm:"topic" json:"topic"`          // Topic
	Qos       int    `orm:"qos" json:"qos"`              // Qos
	Remark    string `orm:"remark" json:"remark"`        // 备注
	CreatTime uint   `orm:"creat_time" json:"creatTime"` // 创建时间
}
