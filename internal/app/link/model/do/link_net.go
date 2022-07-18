// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-16 15:59:37
// 生成路径: iotfast/internal/app/model/do/link_net.go
// 生成人：dwx
// ==========================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

// LinkNet is the golang structure for table link_net.
type LinkNet struct {
	g.Meta     `orm:"table: link_net, do:true"`
	Id         interface{} // 主键
	Name       interface{} // 连接名称
	Mark       interface{} // 串口标记
	RemoteType interface{} // 远程类型
	RemoteAddr interface{} // 远程地址
	RemotePort interface{} // 远程端口号
	Timeout    interface{} // 超时时间
	CreatedAt  *gtime.Time // 创建时间
	UpdatedAt  *gtime.Time // 修改时间
}
