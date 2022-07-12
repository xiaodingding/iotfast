// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/do/device_kind.go
// 生成人：dwx
// ==========================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

// DeviceKind is the golang structure for table device_kind.
type DeviceKind struct {
	g.Meta    `orm:"table: device_kind, do:true"`
	Id        interface{} // 设备种类主键
	Name      interface{} // 设备种类名称
	Mark      interface{} // 设备名称标记
	TimeOut   interface{} // 超时时间
	CreatedAt *gtime.Time // 创建时间
	UpdatedAt *gtime.Time // 修改时间
}
