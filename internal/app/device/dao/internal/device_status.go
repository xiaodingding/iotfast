// ==========================================================================
// 物联网快速开发自动生成dao internal操作代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:17
// 生成路径: github.com/xiaodingding/iotfast/internal/app/dao/internal/device_status.go
// 生成人：dwx
// ==========================================================================

package internal

import (
	"context"

	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/frame/g"
)

// DeviceStatusDao is the manager for logic model data accessing and custom defined data operations functions management.
type DeviceStatusDao struct {
	table   string              // Table is the underlying table name of the DAO.
	group   string              // Group is the database configuration group name of current DAO.
	columns DeviceStatusColumns // Columns is the short type for Columns, which contains all the column names of Table for convenient usage.
}

// DeviceStatusColumns defines and stores column names for table device_status.
type DeviceStatusColumns struct {
	Id                 string // 主键
	DeviceId           string // 设备ID
	Status             string // 状态
	TimeOut            string // 超时时间
	UpTime             string // 上线时间
	DownTime           string // 离线时间
	LastDataUpdateTime string // 最新一次数据更新时间
}

var deviceStatusColumns = DeviceStatusColumns{
	Id:                 "status_id",
	DeviceId:           "device_id",
	Status:             "status",
	TimeOut:            "time_out",
	UpTime:             "up_time",
	DownTime:           "down_time",
	LastDataUpdateTime: "last_data_update_time",
}

// NewDeviceStatusDao creates and returns a new DAO object for table data access.
func NewDeviceStatusDao() *DeviceStatusDao {
	return &DeviceStatusDao{
		group:   "default",
		table:   "device_status",
		columns: deviceStatusColumns,
	}
}

// DB retrieves and returns the underlying raw database management object of current DAO.
func (dao *DeviceStatusDao) DB() gdb.DB {
	return g.DB(dao.group)
}

// Table returns the table name of current dao.
func (dao *DeviceStatusDao) Table() string {
	return dao.table
}

// Columns returns all column names of current dao.
func (dao *DeviceStatusDao) Columns() DeviceStatusColumns {
	return dao.columns
}

// Group returns the configuration group name of database of current dao.
func (dao *DeviceStatusDao) Group() string {
	return dao.group
}

// Ctx creates and returns the Model for current DAO, It automatically sets the context for current operation.
func (dao *DeviceStatusDao) Ctx(ctx context.Context) *gdb.Model {
	return dao.DB().Model(dao.table).Safe().Ctx(ctx)
}

// Transaction wraps the transaction logic using function f.
// It rollbacks the transaction and returns the error from function f if it returns non-nil error.
// It commits the transaction and returns nil if function f returns nil.
//
// Note that, you should not Commit or Rollback the transaction in function f
// as it is automatically handled by this function.
func (dao *DeviceStatusDao) Transaction(ctx context.Context, f func(ctx context.Context, tx *gdb.TX) error) (err error) {
	return dao.Ctx(ctx).Transaction(ctx, f)
}
