// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/do/device_label.go
// 生成人：dwx
// ==========================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

// DeviceLabel is the golang structure for table device_label.
type DeviceLabel struct {
	g.Meta    `orm:"table: device_label, do:true"`
	Id        interface{} // 主键
	Name      interface{} // 标签内容
	CreatedAt *gtime.Time // 创建时间
	UpdatedAt *gtime.Time // 修改时间
}
