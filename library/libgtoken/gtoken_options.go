package libGtoken

import (
	"github.com/gogf/gf/v2/database/gredis"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gcache"
)

var (
	defaultGToken = GToken{
		ServerName: "defaultGToken",
		CacheKey:   "defaultGToken_",
		Timeout:    60 * 60 * 24 * 10,
		MaxRefresh: 60 * 60 * 24 * 5,
		cache:      gcache.New(),
		userJwt:    CreateMyJWT("defaultGToken"),
		MultiLogin: false,
		EncryptKey: []byte("49c54195e750b04e74a8429b17aefc77"),
	}
)

type OptionFunc func(*GToken)

func NewGToken(opts ...OptionFunc) *GToken {
	g := defaultGToken
	for _, o := range opts {
		o(&g)
	}
	return &g
}

func WithExcludePaths(value g.SliceStr) OptionFunc {
	return func(g *GToken) {
		g.AuthExcludePaths = value
	}
}

func WithEncryptKey(value []byte) OptionFunc {
	return func(g *GToken) {
		g.EncryptKey = value
	}
}

func WithServerName(value string) OptionFunc {
	return func(g *GToken) {
		g.ServerName = value
	}
}

func WithCacheKey(value string) OptionFunc {
	return func(g *GToken) {
		g.CacheKey = value
	}
}

func WithTimeoutAndMaxRefresh(timeout, maxRefresh int64) OptionFunc {
	return func(g *GToken) {
		g.Timeout = timeout
		g.MaxRefresh = maxRefresh
	}
}

func WithTimeout(value int64) OptionFunc {
	return func(g *GToken) {
		g.Timeout = value
	}
}

func WithMaxRefresh(value int64) OptionFunc {
	return func(g *GToken) {
		g.MaxRefresh = value
	}
}

func WithUserJwt(key string) OptionFunc {
	return func(g *GToken) {
		g.userJwt = CreateMyJWT(key)
	}
}

func WithGCache() OptionFunc {
	return func(g *GToken) {
		g.cache = gcache.New()
	}
}

func WithGRedis(redis ...*gredis.Redis) OptionFunc {
	return func(gf *GToken) {
		gf.cache = gcache.New()
		if len(redis) > 0 {
			gf.cache.SetAdapter(gcache.NewAdapterRedis(redis[0]))
		} else {
			gf.cache.SetAdapter(gcache.NewAdapterRedis(g.Redis()))
		}
	}
}

func WithGRedisConfig(redisConfig ...*gredis.Config) OptionFunc {
	return func(g *GToken) {
		g.cache = gcache.New()
		redis, err := gredis.New(redisConfig...)
		if err != nil {
			panic(err)
		}
		g.cache.SetAdapter(gcache.NewAdapterRedis(redis))
	}
}

func WithMultiLogin(b bool) OptionFunc {
	return func(g *GToken) {
		g.MultiLogin = b
	}
}
