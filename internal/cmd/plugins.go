package cmd

import (
	_ "iotfast/server/mqtt/plugin/admin"
	_ "iotfast/server/mqtt/plugin/auth"
	_ "iotfast/server/mqtt/plugin/device"
	_ "iotfast/server/mqtt/plugin/prometheus"
)
