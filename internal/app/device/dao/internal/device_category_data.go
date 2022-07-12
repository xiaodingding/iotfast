// ==========================================================================
// 物联网快速开发自动生成dao internal操作代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:16
// 生成路径: github.com/xiaodingding/iotfast/internal/app/dao/internal/device_category_data.go
// 生成人：dwx
// ==========================================================================

package internal

import (
	"context"

	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/frame/g"
)

// DeviceCategoryDataDao is the manager for logic model data accessing and custom defined data operations functions management.
type DeviceCategoryDataDao struct {
    table   string         // Table is the underlying table name of the DAO.
    group   string         // Group is the database configuration group name of current DAO.
    columns DeviceCategoryDataColumns // Columns is the short type for Columns, which contains all the column names of Table for convenient usage.
}
// DeviceCategoryDataColumns defines and stores column names for table device_category_data.
type DeviceCategoryDataColumns struct {    
    Id  string  // 主键    
    CategoryId  string  // 数据类别主键    
    DeviceId  string  // 设备主键    
    DataInt  string  // int型数据    
    DataStr  string  // 字符串型数据    
    DataDouble  string  // double型数据    
    CreatedAt  string  // 创建时间    
}
var deviceCategoryDataColumns = DeviceCategoryDataColumns{    
    Id:  "id",    
    CategoryId:  "category_id",    
    DeviceId:  "device_id",    
    DataInt:  "data_int",    
    DataStr:  "data_str",    
    DataDouble:  "data_double",    
    CreatedAt:  "created_at",    
}
// NewDeviceCategoryDataDao creates and returns a new DAO object for table data access.
func NewDeviceCategoryDataDao() *DeviceCategoryDataDao {
	return &DeviceCategoryDataDao{
        group:    "default",
        table: "device_category_data",
        columns:deviceCategoryDataColumns,
	}
}
// DB retrieves and returns the underlying raw database management object of current DAO.
func (dao *DeviceCategoryDataDao) DB() gdb.DB {
	return g.DB(dao.group)
}
// Table returns the table name of current dao.
func (dao *DeviceCategoryDataDao) Table() string {
    return dao.table
}
// Columns returns all column names of current dao.
func (dao *DeviceCategoryDataDao) Columns() DeviceCategoryDataColumns {
    return dao.columns
}
// Group returns the configuration group name of database of current dao.
func (dao *DeviceCategoryDataDao) Group() string {
    return dao.group
}
// Ctx creates and returns the Model for current DAO, It automatically sets the context for current operation.
func (dao *DeviceCategoryDataDao) Ctx(ctx context.Context) *gdb.Model {
	return dao.DB().Model(dao.table).Safe().Ctx(ctx)
}
// Transaction wraps the transaction logic using function f.
// It rollbacks the transaction and returns the error from function f if it returns non-nil error.
// It commits the transaction and returns nil if function f returns nil.
//
// Note that, you should not Commit or Rollback the transaction in function f
// as it is automatically handled by this function.
func (dao *DeviceCategoryDataDao) Transaction(ctx context.Context, f func(ctx context.Context, tx *gdb.TX) error) (err error) {
	return dao.Ctx(ctx).Transaction(ctx, f)
}