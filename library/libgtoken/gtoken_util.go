package libGtoken

import (
	"context"
	"errors"
	"strings"
	"time"

	"github.com/gogf/gf/v2/crypto/gaes"
	"github.com/gogf/gf/v2/crypto/gmd5"
	"github.com/gogf/gf/v2/encoding/gbase64"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/util/gconv"
	"github.com/gogf/gf/v2/util/grand"
	"github.com/golang-jwt/jwt"
)

const FailedAuthCode = 401

type AuthFailed struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

// 存活时间 (存活时间 = 超时时间 + 缓存刷新时间)
func (m *GToken) diedLine() time.Time {
	return time.Now().Add(time.Second * time.Duration(m.Timeout+m.MaxRefresh))
}

func (m *GToken) GetToken(r *ghttp.Request) (tData *tokenData, err error) {
	token := m.GetRequestToken(r)
	tData, _, err = m.getUtilTokenData(r.GetCtx(), token)
	return
}

func (m *GToken) GetRequestToken(r *ghttp.Request) (token string) {
	authHeader := r.Header.Get("Authorization")
	if authHeader != "" {
		parts := strings.SplitN(authHeader, " ", 2)
		if !(len(parts) == 2 && parts[0] == "Bearer") {
			return
		} else if parts[1] == "" {
			return
		}
		token = parts[1]
	} else {
		authHeader = r.Get("token").String()
		if authHeader == "" {
			return
		}
		token = authHeader
	}
	return
}

func (m *GToken) IsLogin(r *ghttp.Request) (b bool, failed *AuthFailed) {
	b = true
	urlPath := r.URL.Path
	if !m.AuthPath(urlPath) {
		// 如果不需要认证，继续
		return
	}
	token := m.GetRequestToken(r)
	if m.IsUtilEffective(r.GetCtx(), token) == false {
		b = false
		failed = &AuthFailed{
			Code:    FailedAuthCode,
			Message: "token已失效",
		}
	}
	return
}

func (m *GToken) setUtilCache(ctx context.Context, key string, value interface{}) error {
	return m.cache.Set(ctx, key, value, time.Duration(m.Timeout+m.MaxRefresh)*time.Second)
}

func (m *GToken) getUtilCache(ctx context.Context, key string) (tData *tokenData, err error) {
	//var result *gvar.Var
	result, err := m.cache.Get(ctx, key)
	if err != nil {
		return
	}
	if result.Val() != nil {
		err = gconv.Struct(result, &tData)
	}
	return
}

func (m *GToken) removeUtilCache(ctx context.Context, key string) (err error) {
	_, err = m.cache.Remove(ctx, key)
	return
}

// 生成token
func (m *GToken) GenerateToken(ctx context.Context, key string, data interface{}) (keys string, err error) {
	var (
		uuid   string
		tData  *tokenData
		tokens string
	)
	// 支持多端重复登录，返回相同token
	if m.MultiLogin {
		tData, err = m.getUtilCache(ctx, m.CacheKey+key)
		if err != nil {
			return
		}
		if tData != nil {
			keys, uuid, err = m.EncryptUtilToken(ctx, key, tData.UuId)
			m.doUtilRefresh(ctx, key, tData) //刷新token
			return
		}
	}
	tokens, err = m.userJwt.CreateToken(CustomClaims{
		data,
		jwt.StandardClaims{
			NotBefore: time.Now().Unix() - 10, // 生效开始时间
			ExpiresAt: m.diedLine().Unix(),    // 失效截止时间
		},
	})
	if err != nil {
		return
	}
	keys, uuid, err = m.EncryptUtilToken(ctx, key)
	if err != nil {
		return
	}
	err = m.setUtilCache(ctx, m.CacheKey+key, tokenData{
		JwtToken: tokens,
		UuId:     uuid,
	})
	if err != nil {
		return
	}
	return
}

func (m *GToken) GetUtilToken(r *ghttp.Request) (tData *tokenData, err error) {
	token := m.GetRequestToken(r)
	tData, _, err = m.getUtilTokenData(r.GetCtx(), token)
	return
}

func (m *GToken) IsUtilLogin(r *ghttp.Request) (b bool, failed *AuthFailed) {
	b = true
	urlPath := r.URL.Path
	if !m.AuthPath(urlPath) {
		// 如果不需要认证，继续
		return
	}
	token := m.GetRequestToken(r)
	if m.IsUtilEffective(r.GetCtx(), token) == false {
		b = false
		failed = &AuthFailed{
			Code:    FailedAuthCode,
			Message: "token已失效",
		}
	}
	return
}

// 解析token (只验证格式并不验证过期)
func (m *GToken) ParseUtilToken(r *ghttp.Request) (*CustomClaims, error) {
	token, err := m.GetUtilToken(r)
	if err != nil {
		return nil, err
	}
	if customClaims, err := m.userJwt.ParseToken(token.JwtToken); err == nil {
		return customClaims, nil
	} else {
		return &CustomClaims{}, errors.New(ErrorsParseTokenFail)
	}
}

// 检查缓存的token是否有效且自动刷新缓存token
func (m *GToken) IsUtilEffective(ctx context.Context, token string) bool {
	cacheToken, key, err := m.getUtilTokenData(ctx, token)
	if err != nil {
		g.Log().Info(ctx, err)
		return false
	}
	_, code := m.IsUtilNotExpired(cacheToken.JwtToken)
	if JwtTokenOK == code {
		// 刷新缓存
		if m.IsUtilRefresh(cacheToken.JwtToken) {
			return m.doUtilRefresh(ctx, key, cacheToken)
		}
		return true
	}
	return false
}

func (m *GToken) doUtilRefresh(ctx context.Context, key string, cacheToken *tokenData) bool {
	if newToken, err := m.RefreshUtilToken(cacheToken.JwtToken); err == nil {
		cacheToken.JwtToken = newToken
		err = m.setUtilCache(ctx, m.CacheKey+key, cacheToken)
		if err != nil {
			g.Log().Error(ctx, err)
			return false
		}
	}
	return true
}

func (m *GToken) getUtilTokenData(ctx context.Context, token string) (tData *tokenData, key string, err error) {
	var uuid string
	key, uuid, err = m.DecryptUtilToken(ctx, token)
	if err != nil {
		return
	}
	tData, err = m.getUtilCache(ctx, m.CacheKey+key)
	if tData == nil || tData.UuId != uuid {
		err = gerror.New("token is invalid")
	}
	return
}

// 检查token是否过期 (过期时间 = 超时时间 + 缓存刷新时间)
func (m *GToken) IsUtilNotExpired(token string) (*CustomClaims, int) {
	if customClaims, err := m.userJwt.ParseToken(token); err == nil {
		if time.Now().Unix()-customClaims.ExpiresAt < 0 {
			// token有效
			return customClaims, JwtTokenOK
		} else {
			// 过期的token
			return customClaims, JwtTokenExpired
		}
	} else {
		// 无效的token
		return customClaims, JwtTokenInvalid
	}
}

// 刷新token的缓存有效期
func (m *GToken) RefreshUtilToken(oldToken string) (newToken string, err error) {
	if newToken, err = m.userJwt.RefreshToken(oldToken, m.diedLine().Unix()); err != nil {
		return
	}
	return
}

// token是否处于刷新期
func (m *GToken) IsUtilRefresh(token string) bool {
	if m.MaxRefresh == 0 {
		return false
	}
	if customClaims, err := m.userJwt.ParseToken(token); err == nil {
		now := time.Now().Unix()
		if now < customClaims.ExpiresAt && now > (customClaims.ExpiresAt-m.MaxRefresh) {
			return true
		}
	}
	return false
}

// EncryptToken token加密方法
func (m *GToken) EncryptUtilToken(ctx context.Context, key string, randStr ...string) (encryptStr, uuid string, err error) {
	if key == "" {
		err = gerror.New("encrypt key empty")
		return
	}
	// 生成随机串
	if len(randStr) > 0 {
		uuid = randStr[0]
	} else {
		uuid = gmd5.MustEncrypt(grand.Letters(10))
	}
	token, err := gaes.Encrypt([]byte(key+uuid), m.EncryptKey)
	if err != nil {
		g.Log().Error(ctx, "[GFToken]encrypt error Token:", key, err)
		err = gerror.New("encrypt error")
		return
	}
	encryptStr = gbase64.EncodeToString(token)
	return
}

// DecryptToken token解密方法
func (m *GToken) DecryptUtilToken(ctx context.Context, token string) (DecryptStr, uuid string, err error) {
	if token == "" {
		err = gerror.New("decrypt Token empty")
		return
	}
	token64, err := gbase64.Decode([]byte(token))
	if err != nil {
		g.Log().Info(ctx, "[GFToken]decode error Token:", token, err)
		err = gerror.New("decode error")
		return
	}
	decryptToken, err := gaes.Decrypt(token64, m.EncryptKey)
	if err != nil {
		g.Log().Info(ctx, "[GFToken]decrypt error Token:", token, err)
		err = gerror.New("decrypt error")
		return
	}
	length := len(decryptToken)
	uuid = string(decryptToken[length-32:])
	DecryptStr = string(decryptToken[:length-32])
	return
}

// 解析token (只验证格式并不验证过期)
func (m *GToken) ParseToken(r *ghttp.Request) (*CustomClaims, error) {
	token, err := m.GetToken(r)
	if err != nil {
		return nil, err
	}
	if customClaims, err := m.userJwt.ParseToken(token.JwtToken); err == nil {
		return customClaims, nil
	} else {
		return &CustomClaims{}, errors.New(ErrorsParseTokenFail)
	}
}

// RemoveToken 删除token
func (m *GToken) RemoveToken(ctx context.Context, token string) (err error) {
	var key string
	_, key, err = m.getUtilTokenData(ctx, token)
	if err != nil {
		return
	}
	err = m.removeUtilCache(ctx, m.CacheKey+key)
	return
}
