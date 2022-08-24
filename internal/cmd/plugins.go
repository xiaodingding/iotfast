package cmd

import (
	// _ "github.com/mattn/go-sqlite3"
	_ "github.com/xiaodingding/iotfast/plugin/service"
	_ "github.com/xiaodingding/iotfast/server/mqtt/plugin/admin"
	_ "github.com/xiaodingding/iotfast/server/mqtt/plugin/auth"
	_ "github.com/xiaodingding/iotfast/server/mqtt/plugin/device"
	_ "github.com/xiaodingding/iotfast/server/mqtt/plugin/prometheus"
)
