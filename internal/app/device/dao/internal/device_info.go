// ==========================================================================
// 物联网快速开发自动生成dao internal操作代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/dao/internal/device_info.go
// 生成人：dwx
// ==========================================================================

package internal

import (
	"context"

	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/frame/g"
)

// DeviceInfoDao is the manager for logic model data accessing and custom defined data operations functions management.
type DeviceInfoDao struct {
    table   string         // Table is the underlying table name of the DAO.
    group   string         // Group is the database configuration group name of current DAO.
    columns DeviceInfoColumns // Columns is the short type for Columns, which contains all the column names of Table for convenient usage.
}
// DeviceInfoColumns defines and stores column names for table device_info.
type DeviceInfoColumns struct {    
    Id  string  // 主键    
    Name  string  // 设备名称    
    Group  string  // 设备组    
    Sn  string  // SN    
    Pwd  string  // 密码    
    Kind  string  // 设备类别    
    Logo  string  // logo    
    Monitor  string  // 是否监视    
    Location  string  // 地理位置    
    CreatedAt  string  // 创建时间    
    UpdatedAt  string  // 修改时间    
}
var deviceInfoColumns = DeviceInfoColumns{    
    Id:  "id",    
    Name:  "name",    
    Group:  "group",    
    Sn:  "sn",    
    Pwd:  "pwd",    
    Kind:  "kind",    
    Logo:  "logo",    
    Monitor:  "monitor",    
    Location:  "location",    
    CreatedAt:  "created_at",    
    UpdatedAt:  "updated_at",    
}
// NewDeviceInfoDao creates and returns a new DAO object for table data access.
func NewDeviceInfoDao() *DeviceInfoDao {
	return &DeviceInfoDao{
        group:    "default",
        table: "device_info",
        columns:deviceInfoColumns,
	}
}
// DB retrieves and returns the underlying raw database management object of current DAO.
func (dao *DeviceInfoDao) DB() gdb.DB {
	return g.DB(dao.group)
}
// Table returns the table name of current dao.
func (dao *DeviceInfoDao) Table() string {
    return dao.table
}
// Columns returns all column names of current dao.
func (dao *DeviceInfoDao) Columns() DeviceInfoColumns {
    return dao.columns
}
// Group returns the configuration group name of database of current dao.
func (dao *DeviceInfoDao) Group() string {
    return dao.group
}
// Ctx creates and returns the Model for current DAO, It automatically sets the context for current operation.
func (dao *DeviceInfoDao) Ctx(ctx context.Context) *gdb.Model {
	return dao.DB().Model(dao.table).Safe().Ctx(ctx)
}
// Transaction wraps the transaction logic using function f.
// It rollbacks the transaction and returns the error from function f if it returns non-nil error.
// It commits the transaction and returns nil if function f returns nil.
//
// Note that, you should not Commit or Rollback the transaction in function f
// as it is automatically handled by this function.
func (dao *DeviceInfoDao) Transaction(ctx context.Context, f func(ctx context.Context, tx *gdb.TX) error) (err error) {
	return dao.Ctx(ctx).Transaction(ctx, f)
}