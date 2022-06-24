// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:16
// 生成路径: iotfast/internal/app/model/do/device_categoty.go
// 生成人：dwx
// ==========================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

// DeviceCategoty is the golang structure for table device_categoty.
type DeviceCategoty struct {
	g.Meta    `orm:"table: device_categoty, do:true"`
	Id        interface{} // 主键
	KindId    interface{} // 数据模板的主键
	Name      interface{} // 数据名称
	Mark      interface{} // 数据标识
	DataType  interface{} // 数据类型
	Unit      interface{} // 数据单位
	Ratio     interface{} // 变比系数
	Format    interface{} // 格式化显示
	HomeShow  interface{} // 首页是否展示
	Remark    interface{} // 备注
	CreatedAt *gtime.Time // 创建时间
	UpdatedAt *gtime.Time // 修改时间
}
