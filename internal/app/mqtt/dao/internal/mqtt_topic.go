// ==========================================================================
// 物联网快速开发自动生成dao internal操作代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-15 22:11:03
// 生成路径: github.com/xiaodingding/iotfast/internal/app/dao/internal/mqtt_topic.go
// 生成人：dwx
// ==========================================================================

package internal

import (
	"context"

	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/frame/g"
)

// MqttTopicDao is the manager for logic model data accessing and custom defined data operations functions management.
type MqttTopicDao struct {
	table   string           // Table is the underlying table name of the DAO.
	group   string           // Group is the database configuration group name of current DAO.
	columns MqttTopicColumns // Columns is the short type for Columns, which contains all the column names of Table for convenient usage.
}

// MqttTopicColumns defines and stores column names for table mqtt_topic.
type MqttTopicColumns struct {
	Id           string // 主键
	Name         string // 设备名称
	ClientId     string // 客户端Id
	Topic        string // 订阅的Topic信息
	Qos          string // 等级
	RetainAsPub  string // Retain As Published option
	RetainHandle string // Retain Handling option
	CreatedAt    string // 创建时间
	UpdatedAt    string // 修改时间
}

var mqttTopicColumns = MqttTopicColumns{
	Id:           "id",
	Name:         "name",
	ClientId:     "clientId",
	Topic:        "topic",
	Qos:          "qos",
	RetainAsPub:  "retainAsPub",
	RetainHandle: "retainHandle",
	CreatedAt:    "created_at",
	UpdatedAt:    "updated_at",
}

// NewMqttTopicDao creates and returns a new DAO object for table data access.
func NewMqttTopicDao() *MqttTopicDao {
	return &MqttTopicDao{
		group:   "default",
		table:   "mqtt_topic",
		columns: mqttTopicColumns,
	}
}

// DB retrieves and returns the underlying raw database management object of current DAO.
func (dao *MqttTopicDao) DB() gdb.DB {
	return g.DB(dao.group)
}

// Table returns the table name of current dao.
func (dao *MqttTopicDao) Table() string {
	return dao.table
}

// Columns returns all column names of current dao.
func (dao *MqttTopicDao) Columns() MqttTopicColumns {
	return dao.columns
}

// Group returns the configuration group name of database of current dao.
func (dao *MqttTopicDao) Group() string {
	return dao.group
}

// Ctx creates and returns the Model for current DAO, It automatically sets the context for current operation.
func (dao *MqttTopicDao) Ctx(ctx context.Context) *gdb.Model {
	return dao.DB().Model(dao.table).Safe().Ctx(ctx)
}

// Transaction wraps the transaction logic using function f.
// It rollbacks the transaction and returns the error from function f if it returns non-nil error.
// It commits the transaction and returns nil if function f returns nil.
//
// Note that, you should not Commit or Rollback the transaction in function f
// as it is automatically handled by this function.
func (dao *MqttTopicDao) Transaction(ctx context.Context, f func(ctx context.Context, tx *gdb.TX) error) (err error) {
	return dao.Ctx(ctx).Transaction(ctx, f)
}
