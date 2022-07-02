// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-02 23:41:34
// 生成路径: iotfast/internal/app/model/entity/mqtt_topic.go
// 生成人：dwx
// ==========================================================================

package entity

import "github.com/gogf/gf/v2/os/gtime"

// MqttTopic is the golang structure for table mqtt_topic.
type MqttTopic struct {
	Id        int         `orm:"id,primary" json:"id"`        // 主键
	Name      string      `orm:"name" json:"name"`            // 设备名称
	Topic     string      `orm:"topic" json:"topic"`          // 订阅的Topic信息
	Qos       int         `orm:"qos" json:"qos"`              // 等级
	CreatedAt *gtime.Time `orm:"created_at" json:"createdAt"` // 创建时间
	UpdatedAt *gtime.Time `orm:"updated_at" json:"updatedAt"` // 修改时间
}
