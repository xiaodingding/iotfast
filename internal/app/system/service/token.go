/*
* @desc:后台token处理
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/3/8 17:10
 */

package service

import (
	"iotfast/internal/app/common/model"
	commonService "iotfast/internal/app/common/service"
	"iotfast/library/liberr"
	"sync"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
)

type gft struct {
	options *model.TokenOptions
	gT      commonService.IGToken
	lock    *sync.Mutex
}

var gftService = &gft{
	options: nil,
	gT:      nil,
	lock:    &sync.Mutex{},
}

func GfToken() commonService.IGToken {
	if gftService.gT == nil {
		gftService.lock.Lock()
		defer gftService.lock.Unlock()
		if gftService.gT == nil {
			ctx := gctx.New()
			err := g.Cfg().MustGet(ctx, "gfToken").Struct(&gftService.options)
			liberr.ErrIsNil(ctx, err)
			gftService.gT = commonService.GToken(gftService.options)
		}
	}
	return gftService.gT
}
