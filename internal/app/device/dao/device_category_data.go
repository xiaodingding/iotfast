// ==========================================================================
// 物联网快速开发自动生成dao操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-21 22:06:16
// 生成路径: github.com/xiaodingding/iotfast/internal/app/device/dao/device_category_data.go
// 生成人：dwx
// ==========================================================================

package dao

import (
	"github.com/xiaodingding/iotfast/internal/app/device/dao/internal"
	// "github.com/gogf/gf/v2/os/gtime"
)

// internaldeviceCategoryDataDao is internal type for wrapping internal DAO implements.
type internalDeviceCategoryDataDao = *internal.DeviceCategoryDataDao

// deviceCategoryDataDao is the manager for logic model data accessing and custom defined data operations functions management.
// You can define custom methods on it to extend its functionality as you wish.
type deviceCategoryDataDao struct {
	internalDeviceCategoryDataDao
}

var (
	// DeviceCategoryData is globally public accessible object for table tools_gen_table operations.
	DeviceCategoryData = deviceCategoryDataDao{
		internal.NewDeviceCategoryDataDao(),
	}
)
