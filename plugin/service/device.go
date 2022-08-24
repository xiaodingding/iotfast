package device

import (
	"context"
	"encoding/json"

	"github.com/gogf/gf/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	linkService "github.com/xiaodingding/iotfast/internal/app/link/service"
	server "github.com/xiaodingding/iotfast/plugin/server"
)

func init() {
	server.Regsiter("serial_link_list", serialLinkList)
	// config.RegisterDefaultPluginConfig(Name, &DefaultConfig)
}

func serialLinkList(ctx context.Context, data []byte) (rsp []byte, err error) {
	linkList, err := linkService.LinkSerial().All(ctx)
	if err != nil {
		g.Log().Errorf(ctx, "get serial link list error:%s", err)
		return
	}

	if len(linkList) < 1 {
		err = gerror.New("serial link list is nil")
		return
	}

	rsp, err = json.Marshal(linkList)
	return
}
