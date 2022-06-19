/*
* @desc:缓存处理
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/3/9 11:15
 */

package service

import (
	"iotfast/internal/app/common/consts"
	libcache "iotfast/library/libcache"
	"sync"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
)

type ICache interface {
	libcache.IGCache
}

type cacheImpl struct {
	*libcache.GfCache
	prefix string
}

var (
	c              = cacheImpl{}
	cacheContainer *libcache.GfCache
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
				cacheContainer = libcache.NewRedis(prefix)
			} else {
				// memory
				cacheContainer = libcache.New(prefix)
			}
		}
		lock.Unlock()
	}
	ch.GfCache = cacheContainer
	return &ch
}
