// ==========================================================================
// 物联网快速开发自动生成dao internal操作代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-15 22:11:03
// 生成路径: github.com/xiaodingding/iotfast/internal/app/dao/internal/mqtt_status.go
// 生成人：dwx
// ==========================================================================

package internal

import (
	"context"

	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/frame/g"
)

// MqttStatusDao is the manager for logic model data accessing and custom defined data operations functions management.
type MqttStatusDao struct {
	table   string            // Table is the underlying table name of the DAO.
	group   string            // Group is the database configuration group name of current DAO.
	columns MqttStatusColumns // Columns is the short type for Columns, which contains all the column names of Table for convenient usage.
}

// MqttStatusColumns defines and stores column names for table mqtt_status.
type MqttStatusColumns struct {
	Id        string // 主键
	Name      string // 设备名称
	ClientId  string // MQTT连接的客户端Id
	Status    string // MQTT连接的状态
	UserName  string // 登录名
	CreatedAt string // 创建时间
	UpdatedAt string // 修改时间
}

var mqttStatusColumns = MqttStatusColumns{
	Id:        "id",
	Name:      "name",
	ClientId:  "clientId",
	Status:    "status",
	UserName:  "userName",
	CreatedAt: "created_at",
	UpdatedAt: "updated_at",
}

// NewMqttStatusDao creates and returns a new DAO object for table data access.
func NewMqttStatusDao() *MqttStatusDao {
	return &MqttStatusDao{
		group:   "default",
		table:   "mqtt_status",
		columns: mqttStatusColumns,
	}
}

// DB retrieves and returns the underlying raw database management object of current DAO.
func (dao *MqttStatusDao) DB() gdb.DB {
	return g.DB(dao.group)
}

// Table returns the table name of current dao.
func (dao *MqttStatusDao) Table() string {
	return dao.table
}

// Columns returns all column names of current dao.
func (dao *MqttStatusDao) Columns() MqttStatusColumns {
	return dao.columns
}

// Group returns the configuration group name of database of current dao.
func (dao *MqttStatusDao) Group() string {
	return dao.group
}

// Ctx creates and returns the Model for current DAO, It automatically sets the context for current operation.
func (dao *MqttStatusDao) Ctx(ctx context.Context) *gdb.Model {
	return dao.DB().Model(dao.table).Safe().Ctx(ctx)
}

// Transaction wraps the transaction logic using function f.
// It rollbacks the transaction and returns the error from function f if it returns non-nil error.
// It commits the transaction and returns nil if function f returns nil.
//
// Note that, you should not Commit or Rollback the transaction in function f
// as it is automatically handled by this function.
func (dao *MqttStatusDao) Transaction(ctx context.Context, f func(ctx context.Context, tx *gdb.TX) error) (err error) {
	return dao.Ctx(ctx).Transaction(ctx, f)
}
