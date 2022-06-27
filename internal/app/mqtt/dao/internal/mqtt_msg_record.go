// ==========================================================================
// 物联网快速开发自动生成dao internal操作代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-27 23:24:18
// 生成路径: iotfast/internal/app/dao/internal/mqtt_msg_record.go
// 生成人：dwx
// ==========================================================================

package internal

import (
	"context"

	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/frame/g"
)

// MqttMsgRecordDao is the manager for logic model data accessing and custom defined data operations functions management.
type MqttMsgRecordDao struct {
	table   string               // Table is the underlying table name of the DAO.
	group   string               // Group is the database configuration group name of current DAO.
	columns MqttMsgRecordColumns // Columns is the short type for Columns, which contains all the column names of Table for convenient usage.
}

// MqttMsgRecordColumns defines and stores column names for table mqtt_msg_record.
type MqttMsgRecordColumns struct {
	Id         string // 主键
	DeviceSn   string // 设备序列号
	TopicId    string // Topic的主键
	ClientName string // 客户端名称
	ClientId   string // 客户端ID
	Qos        string // Qos
	Payload    string // 传递的数据
	CreatTime  string // 创建时间
}

var mqttMsgRecordColumns = MqttMsgRecordColumns{
	Id:         "id",
	DeviceSn:   "device_sn",
	TopicId:    "topic_id",
	ClientName: "client_name",
	ClientId:   "client_id",
	Qos:        "qos",
	Payload:    "payload",
	CreatTime:  "creat_time",
}

// NewMqttMsgRecordDao creates and returns a new DAO object for table data access.
func NewMqttMsgRecordDao() *MqttMsgRecordDao {
	return &MqttMsgRecordDao{
		group:   "default",
		table:   "mqtt_msg_record",
		columns: mqttMsgRecordColumns,
	}
}

// DB retrieves and returns the underlying raw database management object of current DAO.
func (dao *MqttMsgRecordDao) DB() gdb.DB {
	return g.DB(dao.group)
}

// Table returns the table name of current dao.
func (dao *MqttMsgRecordDao) Table() string {
	return dao.table
}

// Columns returns all column names of current dao.
func (dao *MqttMsgRecordDao) Columns() MqttMsgRecordColumns {
	return dao.columns
}

// Group returns the configuration group name of database of current dao.
func (dao *MqttMsgRecordDao) Group() string {
	return dao.group
}

// Ctx creates and returns the Model for current DAO, It automatically sets the context for current operation.
func (dao *MqttMsgRecordDao) Ctx(ctx context.Context) *gdb.Model {
	return dao.DB().Model(dao.table).Safe().Ctx(ctx)
}

// Transaction wraps the transaction logic using function f.
// It rollbacks the transaction and returns the error from function f if it returns non-nil error.
// It commits the transaction and returns nil if function f returns nil.
//
// Note that, you should not Commit or Rollback the transaction in function f
// as it is automatically handled by this function.
func (dao *MqttMsgRecordDao) Transaction(ctx context.Context, f func(ctx context.Context, tx *gdb.TX) error) (err error) {
	return dao.Ctx(ctx).Transaction(ctx, f)
}
