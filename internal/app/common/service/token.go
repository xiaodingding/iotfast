/*
* @desc:token功能
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/8 15:54
 */

package service

import (
	"context"
	"iotfast/internal/app/common/consts"
	"iotfast/internal/app/common/model"
	gtoken "iotfast/library/libgtoken"

	"github.com/gogf/gf/v2/net/ghttp"
)

type IGToken interface {
	GenerateToken(ctx context.Context, key string, data interface{}) (keys string, err error)
	Middleware(group *ghttp.RouterGroup) error
	ParseToken(r *ghttp.Request) (*gtoken.CustomClaims, error)
	IsLogin(r *ghttp.Request) (b bool, failed *gtoken.AuthFailed)
	GetRequestToken(r *ghttp.Request) (token string)
	RemoveToken(ctx context.Context, token string) (err error)
}

type gfTokenImpl struct {
	*gtoken.GToken
}

var gT = gfTokenImpl{
	GToken: gtoken.NewGToken(),
}

func GToken(options *model.TokenOptions) IGToken {
	var fun gtoken.OptionFunc
	if options.CacheModel == consts.CacheModelRedis {
		fun = gtoken.WithGRedis()
	} else {
		fun = gtoken.WithGCache()
	}
	gT.GToken = gtoken.NewGToken(
		gtoken.WithCacheKey(options.CacheKey),
		gtoken.WithTimeout(options.Timeout),
		gtoken.WithMaxRefresh(options.MaxRefresh),
		gtoken.WithMultiLogin(options.MultiLogin),
		gtoken.WithExcludePaths(options.ExcludePaths),
		fun,
	)
	return &gT
}
