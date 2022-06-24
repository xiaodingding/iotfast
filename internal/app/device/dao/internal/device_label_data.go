// ==========================================================================
// 物联网快速开发自动生成dao internal操作代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: iotfast/internal/app/dao/internal/device_label_data.go
// 生成人：dwx
// ==========================================================================


package internal
import (
    "context"
    "github.com/gogf/gf/v2/database/gdb"
    "github.com/gogf/gf/v2/frame/g"
)
// DeviceLabelDataDao is the manager for logic model data accessing and custom defined data operations functions management.
type DeviceLabelDataDao struct {
    table   string         // Table is the underlying table name of the DAO.
    group   string         // Group is the database configuration group name of current DAO.
    columns DeviceLabelDataColumns // Columns is the short type for Columns, which contains all the column names of Table for convenient usage.
}
// DeviceLabelDataColumns defines and stores column names for table device_label_data.
type DeviceLabelDataColumns struct {    
    Id  string  // 主键    
    LabelId  string  // 标签主键    
    DeviceId  string  // 设备主键    
}
var deviceLabelDataColumns = DeviceLabelDataColumns{    
    Id:  "id",    
    LabelId:  "label_id",    
    DeviceId:  "device_id",    
}
// NewDeviceLabelDataDao creates and returns a new DAO object for table data access.
func NewDeviceLabelDataDao() *DeviceLabelDataDao {
	return &DeviceLabelDataDao{
        group:    "default",
        table: "device_label_data",
        columns:deviceLabelDataColumns,
	}
}
// DB retrieves and returns the underlying raw database management object of current DAO.
func (dao *DeviceLabelDataDao) DB() gdb.DB {
	return g.DB(dao.group)
}
// Table returns the table name of current dao.
func (dao *DeviceLabelDataDao) Table() string {
    return dao.table
}
// Columns returns all column names of current dao.
func (dao *DeviceLabelDataDao) Columns() DeviceLabelDataColumns {
    return dao.columns
}
// Group returns the configuration group name of database of current dao.
func (dao *DeviceLabelDataDao) Group() string {
    return dao.group
}
// Ctx creates and returns the Model for current DAO, It automatically sets the context for current operation.
func (dao *DeviceLabelDataDao) Ctx(ctx context.Context) *gdb.Model {
	return dao.DB().Model(dao.table).Safe().Ctx(ctx)
}
// Transaction wraps the transaction logic using function f.
// It rollbacks the transaction and returns the error from function f if it returns non-nil error.
// It commits the transaction and returns nil if function f returns nil.
//
// Note that, you should not Commit or Rollback the transaction in function f
// as it is automatically handled by this function.
func (dao *DeviceLabelDataDao) Transaction(ctx context.Context, f func(ctx context.Context, tx *gdb.TX) error) (err error) {
	return dao.Ctx(ctx).Transaction(ctx, f)
}