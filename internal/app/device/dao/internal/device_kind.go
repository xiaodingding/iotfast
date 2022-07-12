// ==========================================================================
// 物联网快速开发自动生成dao internal操作代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/dao/internal/device_kind.go
// 生成人：dwx
// ==========================================================================

package internal

import (
	"context"

	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/frame/g"
)

// DeviceKindDao is the manager for logic model data accessing and custom defined data operations functions management.
type DeviceKindDao struct {
	table   string            // Table is the underlying table name of the DAO.
	group   string            // Group is the database configuration group name of current DAO.
	columns DeviceKindColumns // Columns is the short type for Columns, which contains all the column names of Table for convenient usage.
}

// DeviceKindColumns defines and stores column names for table device_kind.
type DeviceKindColumns struct {
	Id        string // 设备种类主键
	Name      string // 设备种类名称
	Mark      string // 设备名称标记
	TimeOut   string // 超时时间
	CreatedAt string // 创建时间
	UpdatedAt string // 修改时间
}

var deviceKindColumns = DeviceKindColumns{
	Id:        "id",
	Name:      "name",
	Mark:      "mark",
	TimeOut:   "time_out",
	CreatedAt: "created_at",
	UpdatedAt: "updated_at",
}

// NewDeviceKindDao creates and returns a new DAO object for table data access.
func NewDeviceKindDao() *DeviceKindDao {
	return &DeviceKindDao{
		group:   "default",
		table:   "device_kind",
		columns: deviceKindColumns,
	}
}

// DB retrieves and returns the underlying raw database management object of current DAO.
func (dao *DeviceKindDao) DB() gdb.DB {
	return g.DB(dao.group)
}

// Table returns the table name of current dao.
func (dao *DeviceKindDao) Table() string {
	return dao.table
}

// Columns returns all column names of current dao.
func (dao *DeviceKindDao) Columns() DeviceKindColumns {
	return dao.columns
}

// Group returns the configuration group name of database of current dao.
func (dao *DeviceKindDao) Group() string {
	return dao.group
}

// Ctx creates and returns the Model for current DAO, It automatically sets the context for current operation.
func (dao *DeviceKindDao) Ctx(ctx context.Context) *gdb.Model {
	return dao.DB().Model(dao.table).Safe().Ctx(ctx)
}

// Transaction wraps the transaction logic using function f.
// It rollbacks the transaction and returns the error from function f if it returns non-nil error.
// It commits the transaction and returns nil if function f returns nil.
//
// Note that, you should not Commit or Rollback the transaction in function f
// as it is automatically handled by this function.
func (dao *DeviceKindDao) Transaction(ctx context.Context, f func(ctx context.Context, tx *gdb.TX) error) (err error) {
	return dao.Ctx(ctx).Transaction(ctx, f)
}
