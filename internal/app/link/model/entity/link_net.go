// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-16 15:59:37
// 生成路径: iotfast/internal/app/model/entity/link_net.go
// 生成人：dwx
// ==========================================================================

package entity

import "github.com/gogf/gf/v2/os/gtime"

// LinkNet is the golang structure for table link_net.
type LinkNet struct {
	Id         int         `orm:"id,primary" json:"id"`          // 主键
	Name       string      `orm:"name" json:"name"`              // 连接名称
	Mark       string      `orm:"mark" json:"mark"`              // 串口标记
	RemoteType int         `orm:"remote_type" json:"remoteType"` // 远程类型
	RemoteAddr string      `orm:"remote_addr" json:"remoteAddr"` // 远程地址
	RemotePort string      `orm:"remote_port" json:"remotePort"` // 远程端口号
	Timeout    int         `orm:"timeout" json:"timeout"`        // 超时时间
	CreatedAt  *gtime.Time `orm:"created_at" json:"createdAt"`   // 创建时间
	UpdatedAt  *gtime.Time `orm:"updated_at" json:"updatedAt"`   // 修改时间
}
