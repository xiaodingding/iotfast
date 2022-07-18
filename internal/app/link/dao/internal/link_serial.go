// ==========================================================================
// 物联网快速开发自动生成dao internal操作代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-16 15:59:37
// 生成路径: iotfast/internal/app/dao/internal/link_serial.go
// 生成人：dwx
// ==========================================================================

package internal

import (
	"context"

	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/frame/g"
)

// LinkSerialDao is the manager for logic model data accessing and custom defined data operations functions management.
type LinkSerialDao struct {
	table   string            // Table is the underlying table name of the DAO.
	group   string            // Group is the database configuration group name of current DAO.
	columns LinkSerialColumns // Columns is the short type for Columns, which contains all the column names of Table for convenient usage.
}

// LinkSerialColumns defines and stores column names for table link_serial.
type LinkSerialColumns struct {
	Id           string // 主键
	Name         string // 连接名称
	Mark         string // 串口标记
	SerialName   string // 串口号
	SerialBaund  string // 串口波特率
	SerialParity string // 串口校验位
	SerialData   string // 串口数据位
	SerialStop   string // 串口停止位
	CreatedAt    string // 创建时间
	UpdatedAt    string // 修改时间
}

var linkSerialColumns = LinkSerialColumns{
	Id:           "id",
	Name:         "name",
	Mark:         "mark",
	SerialName:   "serial_name",
	SerialBaund:  "serial_baund",
	SerialParity: "serial_parity",
	SerialData:   "serial_data",
	SerialStop:   "serial_stop",
	CreatedAt:    "created_at",
	UpdatedAt:    "updated_at",
}

// NewLinkSerialDao creates and returns a new DAO object for table data access.
func NewLinkSerialDao() *LinkSerialDao {
	return &LinkSerialDao{
		group:   "default",
		table:   "link_serial",
		columns: linkSerialColumns,
	}
}

// DB retrieves and returns the underlying raw database management object of current DAO.
func (dao *LinkSerialDao) DB() gdb.DB {
	return g.DB(dao.group)
}

// Table returns the table name of current dao.
func (dao *LinkSerialDao) Table() string {
	return dao.table
}

// Columns returns all column names of current dao.
func (dao *LinkSerialDao) Columns() LinkSerialColumns {
	return dao.columns
}

// Group returns the configuration group name of database of current dao.
func (dao *LinkSerialDao) Group() string {
	return dao.group
}

// Ctx creates and returns the Model for current DAO, It automatically sets the context for current operation.
func (dao *LinkSerialDao) Ctx(ctx context.Context) *gdb.Model {
	return dao.DB().Model(dao.table).Safe().Ctx(ctx)
}

// Transaction wraps the transaction logic using function f.
// It rollbacks the transaction and returns the error from function f if it returns non-nil error.
// It commits the transaction and returns nil if function f returns nil.
//
// Note that, you should not Commit or Rollback the transaction in function f
// as it is automatically handled by this function.
func (dao *LinkSerialDao) Transaction(ctx context.Context, f func(ctx context.Context, tx *gdb.TX) error) (err error) {
	return dao.Ctx(ctx).Transaction(ctx, f)
}
