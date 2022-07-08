// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/entity/device_label_data.go
// 生成人：dwx
// ==========================================================================

package entity

// DeviceLabelData is the golang structure for table device_label_data.
type DeviceLabelData struct {
	Id       int `orm:"id,primary" json:"id"`      // 主键
	LabelId  int `orm:"label_id" json:"labelId"`   // 标签主键
	DeviceId int `orm:"device_id" json:"deviceId"` // 设备主键
}
