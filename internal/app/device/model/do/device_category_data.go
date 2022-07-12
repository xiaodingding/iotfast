// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:16
// 生成路径: github.com/xiaodingding/iotfast/internal/app/model/do/device_category_data.go
// 生成人：dwx
// ==========================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

// DeviceCategoryData is the golang structure for table device_category_data.
type DeviceCategoryData struct {
    g.Meta         `orm:"table: device_category_data, do:true"`    
         Id       interface{}        // 主键    
         CategoryId    interface{}           // 数据类别主键    
         DeviceId    interface{}           // 设备主键    
         DataInt    interface{}           // int型数据    
         DataStr    interface{}           // 字符串型数据    
         DataDouble    interface{}           // double型数据    
         CreatedAt    *gtime.Time           // 创建时间    
}