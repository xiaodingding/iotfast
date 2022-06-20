package libGtoken

import (
	"errors"

	"github.com/golang-jwt/jwt"
)

// 使用工厂创建一个 JWT 结构体
func CreateMyJWT(JwtTokenSignKey string) *JwtSign {
	return &JwtSign{
		[]byte(JwtTokenSignKey),
	}
}

// 定义一个 JWT验签 结构体
type JwtSign struct {
	SigningKey []byte
}

// CreateToken 生成一个token
func (j *JwtSign) CreateToken(claims CustomClaims) (string, error) {
	// 生成jwt格式的header、claims 部分
	tokenPartA := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	// 继续添加秘钥值，生成最后一部分
	return tokenPartA.SignedString(j.SigningKey)
}

// 解析Token (只验证格式并不验证过期)
func (j *JwtSign) ParseToken(tokenString string) (*CustomClaims, error) {
	token, err := jwt.ParseWithClaims(tokenString, &CustomClaims{}, func(token *jwt.Token) (interface{}, error) {
		return j.SigningKey, nil
	})
	if token == nil {
		return nil, errors.New(ErrorsTokenInvalid)
	}
	if err != nil {
		if ve, ok := err.(*jwt.ValidationError); ok {
			if ve.Errors&jwt.ValidationErrorMalformed != 0 {
				return nil, errors.New(ErrorsTokenMalFormed)
			} else if ve.Errors&jwt.ValidationErrorNotValidYet != 0 {
				return nil, errors.New(ErrorsTokenNotActiveYet)
			} else if ve.Errors&jwt.ValidationErrorExpired != 0 {
				// 如果 TokenExpired ,只是过期（格式都正确），我们认为他是有效的，接下可以允许刷新操作
				token.Valid = true
				goto labelHere
			} else {
				return nil, errors.New(ErrorsTokenInvalid)
			}
		}
	}
labelHere:
	if claims, ok := token.Claims.(*CustomClaims); ok && token.Valid {
		return claims, nil
	} else {
		return nil, errors.New(ErrorsTokenInvalid)
	}
}

// 更新token有效期
func (j *JwtSign) RefreshToken(tokenString string, extraAddSeconds int64) (string, error) {
	if customClaims, err := j.ParseToken(tokenString); err == nil {
		customClaims.ExpiresAt = extraAddSeconds
		return j.CreateToken(*customClaims)
	} else {
		return "", err
	}
}
