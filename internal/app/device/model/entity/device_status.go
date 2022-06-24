// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: iotfast/internal/app/model/entity/device_status.go
// 生成人：dwx
// ==========================================================================

package entity

// DeviceStatus is the golang structure for table device_status.
type DeviceStatus struct {
	Id                 int  `orm:"status_id,primary" json:"status_id"`              // 主键
	DeviceId           int  `orm:"device_id" json:"deviceId"`                       // 设备ID
	Status             int  `orm:"status" json:"status"`                            // 状态
	TimeOut            int  `orm:"time_out" json:"timeOut"`                         // 超时时间
	UpTime             int  `orm:"up_time" json:"upTime"`                           // 上线时间
	DownTime           int  `orm:"down_time" json:"downTime"`                       // 离线时间
	LastDataUpdateTime uint `orm:"last_data_update_time" json:"lastDataUpdateTime"` // 最新一次数据更新时间
}
