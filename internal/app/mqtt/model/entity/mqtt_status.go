// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-15 22:11:03
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/entity/mqtt_status.go
// 生成人：dwx
// ==========================================================================

package entity

import "github.com/gogf/gf/v2/os/gtime"

// MqttStatus is the golang structure for table mqtt_status.
type MqttStatus struct {
	Id        int         `orm:"id,primary" json:"id"`        // 主键
	Name      string      `orm:"name" json:"name"`            // 设备名称
	ClientId  string      `orm:"clientId" json:"clientId"`    // MQTT连接的客户端Id
	Status    int         `orm:"status" json:"status"`        // MQTT连接的状态
	UserName  string      `orm:"userName" json:"userName"`    // 登录名
	CreatedAt *gtime.Time `orm:"created_at" json:"createdAt"` // 创建时间
	UpdatedAt *gtime.Time `orm:"updated_at" json:"updatedAt"` // 修改时间
}
