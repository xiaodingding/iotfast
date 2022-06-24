// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: iotfast/internal/app/model/do/device_info.go
// 生成人：dwx
// ==========================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

// DeviceInfo is the golang structure for table device_info.
type DeviceInfo struct {
	g.Meta    `orm:"table: device_info, do:true"`
	Id        interface{} // 主键
	Name      interface{} // 设备名称
	Group     interface{} // 设备组
	Sn        interface{} // SN
	Pwd       interface{} // 密码
	Kind      interface{} // 设备类别
	Logo      interface{} // logo
	Monitor   interface{} // 是否监视
	Location  interface{} // 地理位置
	CreatedAt *gtime.Time // 创建时间
	UpdatedAt *gtime.Time // 修改时间
}
