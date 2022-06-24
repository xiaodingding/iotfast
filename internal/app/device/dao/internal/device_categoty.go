// ==========================================================================
// 物联网快速开发自动生成dao internal操作代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:16
// 生成路径: iotfast/internal/app/dao/internal/device_categoty.go
// 生成人：dwx
// ==========================================================================


package internal
import (
    "context"
    "github.com/gogf/gf/v2/database/gdb"
    "github.com/gogf/gf/v2/frame/g"
)
// DeviceCategotyDao is the manager for logic model data accessing and custom defined data operations functions management.
type DeviceCategotyDao struct {
    table   string         // Table is the underlying table name of the DAO.
    group   string         // Group is the database configuration group name of current DAO.
    columns DeviceCategotyColumns // Columns is the short type for Columns, which contains all the column names of Table for convenient usage.
}
// DeviceCategotyColumns defines and stores column names for table device_categoty.
type DeviceCategotyColumns struct {    
    Id  string  // 主键    
    KindId  string  // 数据模板的主键    
    Name  string  // 数据名称    
    Mark  string  // 数据标识    
    DataType  string  // 数据类型    
    Unit  string  // 数据单位    
    Ratio  string  // 变比系数    
    Format  string  // 格式化显示    
    HomeShow  string  // 首页是否展示    
    Remark  string  // 备注    
    CreatedAt  string  // 创建时间    
    UpdatedAt  string  // 修改时间    
}
var deviceCategotyColumns = DeviceCategotyColumns{    
    Id:  "id",    
    KindId:  "kind_id",    
    Name:  "name",    
    Mark:  "mark",    
    DataType:  "data_type",    
    Unit:  "unit",    
    Ratio:  "ratio",    
    Format:  "format",    
    HomeShow:  "home_show",    
    Remark:  "remark",    
    CreatedAt:  "created_at",    
    UpdatedAt:  "updated_at",    
}
// NewDeviceCategotyDao creates and returns a new DAO object for table data access.
func NewDeviceCategotyDao() *DeviceCategotyDao {
	return &DeviceCategotyDao{
        group:    "default",
        table: "device_categoty",
        columns:deviceCategotyColumns,
	}
}
// DB retrieves and returns the underlying raw database management object of current DAO.
func (dao *DeviceCategotyDao) DB() gdb.DB {
	return g.DB(dao.group)
}
// Table returns the table name of current dao.
func (dao *DeviceCategotyDao) Table() string {
    return dao.table
}
// Columns returns all column names of current dao.
func (dao *DeviceCategotyDao) Columns() DeviceCategotyColumns {
    return dao.columns
}
// Group returns the configuration group name of database of current dao.
func (dao *DeviceCategotyDao) Group() string {
    return dao.group
}
// Ctx creates and returns the Model for current DAO, It automatically sets the context for current operation.
func (dao *DeviceCategotyDao) Ctx(ctx context.Context) *gdb.Model {
	return dao.DB().Model(dao.table).Safe().Ctx(ctx)
}
// Transaction wraps the transaction logic using function f.
// It rollbacks the transaction and returns the error from function f if it returns non-nil error.
// It commits the transaction and returns nil if function f returns nil.
//
// Note that, you should not Commit or Rollback the transaction in function f
// as it is automatically handled by this function.
func (dao *DeviceCategotyDao) Transaction(ctx context.Context, f func(ctx context.Context, tx *gdb.TX) error) (err error) {
	return dao.Ctx(ctx).Transaction(ctx, f)
}