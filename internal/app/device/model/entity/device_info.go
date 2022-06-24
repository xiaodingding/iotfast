// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: iotfast/internal/app/model/entity/device_info.go
// 生成人：dwx
// ==========================================================================

package entity

import "github.com/gogf/gf/v2/os/gtime"

// DeviceInfo is the golang structure for table device_info.
type DeviceInfo struct {
	Id        int         `orm:"id,primary" json:"id"`        // 主键
	Name      string      `orm:"name" json:"name"`            // 设备名称
	Group     int         `orm:"group" json:"group"`          // 设备组
	Sn        string      `orm:"sn" json:"sn"`                // SN
	Pwd       string      `orm:"pwd" json:"pwd"`              // 密码
	Kind      int         `orm:"kind" json:"kind"`            // 设备类别
	Logo      string      `orm:"logo" json:"logo"`            // logo
	Monitor   int         `orm:"monitor" json:"monitor"`      // 是否监视
	Location  int         `orm:"location" json:"location"`    // 地理位置
	CreatedAt *gtime.Time `orm:"created_at" json:"createdAt"` // 创建时间
	UpdatedAt *gtime.Time `orm:"updated_at" json:"updatedAt"` // 修改时间
}
