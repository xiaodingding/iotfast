// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-15 22:11:03
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/do/mqtt_status.go
// 生成人：dwx
// ==========================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

// MqttStatus is the golang structure for table mqtt_status.
type MqttStatus struct {
	g.Meta    `orm:"table: mqtt_status, do:true"`
	Id        interface{} // 主键
	Name      interface{} // 设备名称
	ClientId  interface{} // MQTT连接的客户端Id
	Status    interface{} // MQTT连接的状态
	UserName  interface{} // 登录名
	CreatedAt *gtime.Time // 创建时间
	UpdatedAt *gtime.Time // 修改时间
}
