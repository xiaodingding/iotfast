// ==========================================================================
// 物联网快速开发自动生成dao操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: iotfast/internal/app/device/dao/device_label.go
// 生成人：dwx
// ==========================================================================


package dao
import (
    "iotfast/internal/app/device/dao/internal"    
   // "github.com/gogf/gf/v2/os/gtime"    
)
// internaldeviceLabelDao is internal type for wrapping internal DAO implements.
type internalDeviceLabelDao = *internal.DeviceLabelDao
// deviceLabelDao is the manager for logic model data accessing and custom defined data operations functions management.
// You can define custom methods on it to extend its functionality as you wish.
type deviceLabelDao struct {
	internalDeviceLabelDao
}
var (
    // DeviceLabel is globally public accessible object for table tools_gen_table operations.
    DeviceLabel = deviceLabelDao{
        internal.NewDeviceLabelDao(),
    }
)
