/*
* @desc:缓存处理
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/9 11:15
 */

package service

import (
	"iotfast/internal/app/common/consts"
	libCache "iotfast/library/libCache"
	"sync"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
)

type ICache interface {
	libCache.IGCache
}

type cacheImpl struct {
	*libCache.GfCache
	prefix string
}

var (
	c              = cacheImpl{}
	cacheContainer *libCache.GfCache
	lock           = &sync.Mutex{}
)

func Cache() ICache {
	var (
		ch  = c
		ctx = gctx.New()
	)
	prefix := g.Cfg().MustGet(ctx, "system.cache.prefix").String()
	model := g.Cfg().MustGet(ctx, "system.cache.model").String()
	if cacheContainer == nil {
		lock.Lock()
		if cacheContainer == nil {
			if model == consts.CacheModelRedis {
				// redis
				cacheContainer = libCache.NewRedis(prefix)
			} else {
				// memory
				cacheContainer = libCache.New(prefix)
			}
		}
		lock.Unlock()
	}
	ch.GfCache = cacheContainer
	return &ch
}
