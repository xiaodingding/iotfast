// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-16 15:59:37
// 生成路径: iotfast/internal/app/model/entity/link_serial.go
// 生成人：dwx
// ==========================================================================

package entity

import "github.com/gogf/gf/v2/os/gtime"

// LinkSerial is the golang structure for table link_serial.
type LinkSerial struct {
	Id           int         `orm:"id,primary" json:"id"`              // 主键
	Name         string      `orm:"name" json:"name"`                  // 连接名称
	Mark         string      `orm:"mark" json:"mark"`                  // 串口标记
	SerialName   string      `orm:"serial_name" json:"serialName"`     // 串口号
	SerialBaund  int         `orm:"serial_baund" json:"serialBaund"`   // 串口波特率
	SerialParity string      `orm:"serial_parity" json:"serialParity"` // 串口校验位
	SerialData   int         `orm:"serial_data" json:"serialData"`     // 串口数据位
	SerialStop   int         `orm:"serial_stop" json:"serialStop"`     // 串口停止位
	CreatedAt    *gtime.Time `orm:"created_at" json:"createdAt"`       // 创建时间
	UpdatedAt    *gtime.Time `orm:"updated_at" json:"updatedAt"`       // 修改时间
}
