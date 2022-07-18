// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-16 15:59:37
// 生成路径: iotfast/internal/app/model/do/link_serial.go
// 生成人：dwx
// ==========================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

// LinkSerial is the golang structure for table link_serial.
type LinkSerial struct {
	g.Meta       `orm:"table: link_serial, do:true"`
	Id           interface{} // 主键
	Name         interface{} // 连接名称
	Mark         interface{} // 串口标记
	SerialName   interface{} // 串口号
	SerialBaund  interface{} // 串口波特率
	SerialParity interface{} // 串口校验位
	SerialData   interface{} // 串口数据位
	SerialStop   interface{} // 串口停止位
	CreatedAt    *gtime.Time // 创建时间
	UpdatedAt    *gtime.Time // 修改时间
}
