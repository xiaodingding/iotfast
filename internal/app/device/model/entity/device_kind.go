// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/entity/device_kind.go
// 生成人：dwx
// ==========================================================================

package entity

import "github.com/gogf/gf/v2/os/gtime"

// DeviceKind is the golang structure for table device_kind.
type DeviceKind struct {
	Id        int         `orm:"id,primary" json:"id"`        // 设备种类主键
	Name      string      `orm:"name" json:"name"`            // 设备种类名称
	Mark      string      `orm:"mark" json:"mark"`            // 设备名称标记
	TimeOut   int         `orm:"time_out" json:"timeOut"`     // 超时时间
	CreatedAt *gtime.Time `orm:"created_at" json:"createdAt"` // 创建时间
	UpdatedAt *gtime.Time `orm:"updated_at" json:"updatedAt"` // 修改时间
}
