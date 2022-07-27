package common

import "context"

const (
	PluginUnStart = iota
	PluginStarting
	PluginRun
	PluginStop
	PluginErr
)

type PluginCfg struct {
	Proto      string `p:"proto" json:"proto"`           //参数名称
	Unixdir    string `p:"unixdir" json:"unixdir"`       //unix文件地址
	ServerAddr string `p:"serveraddr" json:"serveraddr"` //服务器地址
	Name       string `p:"name" json:"name"`             //名称
	Params     string `p:"params" json:"params"`         //参数
}

type RegisterCfg struct {
	Name  string `p:"name" json:"name"`   //名称
	Id    uint32 `p:"id" json:"id"`       //id
	Topic string `p:"topic" json:"topic"` //订阅的topic
	Qos   byte   `p:"topic" json:"qos"`   //等级
}

type TopicInfo struct {
	TopicName string
	Retain    bool
	Qos       byte
}

type TopicMap map[string]TopicInfo

type PluginApp interface {
	Open(ctx context.Context, f func(filter, client string, qos byte) bool) error
	Start(cfg *PluginCfg, ctx context.Context) error
	Close(ctx context.Context) error
	Update(ctx context.Context) error
}
