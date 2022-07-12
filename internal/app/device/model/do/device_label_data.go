// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/do/device_label_data.go
// 生成人：dwx
// ==========================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
)

// DeviceLabelData is the golang structure for table device_label_data.
type DeviceLabelData struct {
	g.Meta   `orm:"table: device_label_data, do:true"`
	Id       interface{} // 主键
	LabelId  interface{} // 标签主键
	DeviceId interface{} // 设备主键
}
