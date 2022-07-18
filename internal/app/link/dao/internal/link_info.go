// ==========================================================================
// 物联网快速开发自动生成dao internal操作代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-16 15:38:13
// 生成路径: iotfast/internal/app/dao/internal/link_info.go
// 生成人：dwx
// ==========================================================================


package internal
import (
    "context"
    "github.com/gogf/gf/v2/database/gdb"
    "github.com/gogf/gf/v2/frame/g"
)
// LinkInfoDao is the manager for logic model data accessing and custom defined data operations functions management.
type LinkInfoDao struct {
    table   string         // Table is the underlying table name of the DAO.
    group   string         // Group is the database configuration group name of current DAO.
    columns LinkInfoColumns // Columns is the short type for Columns, which contains all the column names of Table for convenient usage.
}
// LinkInfoColumns defines and stores column names for table link_info.
type LinkInfoColumns struct {    
    Id  string  // 主键    
    Name  string  // 连接名称    
    Mark  string  // 连接标记    
    CreatedAt  string  // 创建时间    
    UpdatedAt  string  // 修改时间    
}
var linkInfoColumns = LinkInfoColumns{    
    Id:  "id",    
    Name:  "name",    
    Mark:  "mark",    
    CreatedAt:  "created_at",    
    UpdatedAt:  "updated_at",    
}
// NewLinkInfoDao creates and returns a new DAO object for table data access.
func NewLinkInfoDao() *LinkInfoDao {
	return &LinkInfoDao{
        group:    "default",
        table: "link_info",
        columns:linkInfoColumns,
	}
}
// DB retrieves and returns the underlying raw database management object of current DAO.
func (dao *LinkInfoDao) DB() gdb.DB {
	return g.DB(dao.group)
}
// Table returns the table name of current dao.
func (dao *LinkInfoDao) Table() string {
    return dao.table
}
// Columns returns all column names of current dao.
func (dao *LinkInfoDao) Columns() LinkInfoColumns {
    return dao.columns
}
// Group returns the configuration group name of database of current dao.
func (dao *LinkInfoDao) Group() string {
    return dao.group
}
// Ctx creates and returns the Model for current DAO, It automatically sets the context for current operation.
func (dao *LinkInfoDao) Ctx(ctx context.Context) *gdb.Model {
	return dao.DB().Model(dao.table).Safe().Ctx(ctx)
}
// Transaction wraps the transaction logic using function f.
// It rollbacks the transaction and returns the error from function f if it returns non-nil error.
// It commits the transaction and returns nil if function f returns nil.
//
// Note that, you should not Commit or Rollback the transaction in function f
// as it is automatically handled by this function.
func (dao *LinkInfoDao) Transaction(ctx context.Context, f func(ctx context.Context, tx *gdb.TX) error) (err error) {
	return dao.Ctx(ctx).Transaction(ctx, f)
}