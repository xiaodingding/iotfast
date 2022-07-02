// ==========================================================================
// 物联网快速开发自动生成dao操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-07-02 23:41:34
// 生成路径: iotfast/internal/app/mqtt/dao/mqtt_topic.go
// 生成人：dwx
// ==========================================================================

package dao

import (
	"iotfast/internal/app/mqtt/dao/internal"
	// "github.com/gogf/gf/v2/os/gtime"
)

// internalmqttTopicDao is internal type for wrapping internal DAO implements.
type internalMqttTopicDao = *internal.MqttTopicDao

// mqttTopicDao is the manager for logic model data accessing and custom defined data operations functions management.
// You can define custom methods on it to extend its functionality as you wish.
type mqttTopicDao struct {
	internalMqttTopicDao
}

var (
	// MqttTopic is globally public accessible object for table tools_gen_table operations.
	MqttTopic = mqttTopicDao{
		internal.NewMqttTopicDao(),
	}
)
