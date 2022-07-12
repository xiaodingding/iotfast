// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/do/device_status.go
// 生成人：dwx
// ==========================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
)

// DeviceStatus is the golang structure for table device_status.
type DeviceStatus struct {
    g.Meta         `orm:"table: device_status, do:true"`    
         Id       interface{}        // 主键    
         DeviceId    interface{}           // 设备ID    
         Status    interface{}           // 状态    
         TimeOut    interface{}           // 超时时间    
         UpTime    interface{}           // 上线时间    
         DownTime    interface{}           // 离线时间    
         LastDataUpdateTime    interface{}           // 最新一次数据更新时间    
}