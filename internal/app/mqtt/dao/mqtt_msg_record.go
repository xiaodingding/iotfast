// ==========================================================================
// 物联网快速开发自动生成dao操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-06-27 23:24:18
// 生成路径: iotfast/internal/app/mqtt/dao/mqtt_msg_record.go
// 生成人：dwx
// ==========================================================================

package dao

import (
	"iotfast/internal/app/mqtt/dao/internal"
)

// internalmqttMsgRecordDao is internal type for wrapping internal DAO implements.
type internalMqttMsgRecordDao = *internal.MqttMsgRecordDao

// mqttMsgRecordDao is the manager for logic model data accessing and custom defined data operations functions management.
// You can define custom methods on it to extend its functionality as you wish.
type mqttMsgRecordDao struct {
	internalMqttMsgRecordDao
}

var (
	// MqttMsgRecord is globally public accessible object for table tools_gen_table operations.
	MqttMsgRecord = mqttMsgRecordDao{
		internal.NewMqttMsgRecordDao(),
	}
)
