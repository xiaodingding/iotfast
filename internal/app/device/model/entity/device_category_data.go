// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:16
// 生成路径: iotfast/internal/app/model/entity/device_category_data.go
// 生成人：dwx
// ==========================================================================

package entity

import "github.com/gogf/gf/v2/os/gtime"

// DeviceCategoryData is the golang structure for table device_category_data.
type DeviceCategoryData struct {
	Id         int         `orm:"id,primary" json:"id"`          // 主键
	CategoryId int         `orm:"category_id" json:"categoryId"` // 数据类别主键
	DeviceId   int         `orm:"device_id" json:"deviceId"`     // 设备主键
	DataInt    uint        `orm:"data_int" json:"dataInt"`       // int型数据
	DataStr    string      `orm:"data_str" json:"dataStr"`       // 字符串型数据
	DataDouble float64     `orm:"data_double" json:"dataDouble"` // double型数据
	CreatedAt  *gtime.Time `orm:"created_at" json:"createdAt"`   // 创建时间
}
