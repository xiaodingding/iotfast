package prometheus

import (
	"github.com/xiaodingding/iotfast/server/mqtt/server"
)

func (p *Prometheus) HookWrapper() server.HookWrapper {
	return server.HookWrapper{}
}
