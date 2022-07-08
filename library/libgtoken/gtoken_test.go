package libGtoken

import (
	"testing"

	"github.com/gogf/gf/v2/os/gctx"

	//"github.com/goflyfox/gtoken/gtoken"
	//"github.com/xiaodingding/iotfast/library/libGtoken/gtoken"

	"github.com/gogf/gf/v2/frame/g"
)

func TestAuthPathGlobal(t *testing.T) {
	t.Log("Global auth path test ")

	// 启动gtoken
	GToken := &GToken{
		ctx: gctx.New(),
		//Timeout:         10 * 1000,
		AuthPaths:        g.SliceStr{"/user", "/system"},             // 这里是按照前缀拦截，拦截/user /user/list /user/add ...
		AuthExcludePaths: g.SliceStr{"/user/info", "/system/user/*"}, // 不拦截路径  /user/info,/system/user/info,/system/user,
		MiddlewareType:   MiddlewareTypeGlobal,                       // 开启全局拦截
	}

	authPath(GToken, t)
	flag := GToken.AuthPath("/test")
	if flag {
		t.Error("error:", "/test auth path error")
	}

}

func TestBindAuthPath(t *testing.T) {
	t.Log("Bind auth path test ")
	// 启动gtoken
	GToken := &GToken{
		ctx: gctx.New(),
		//Timeout:         10 * 1000,
		AuthPaths:        g.SliceStr{"/user", "/system"},             // 这里是按照前缀拦截，拦截/user /user/list /user/add ...
		AuthExcludePaths: g.SliceStr{"/user/info", "/system/user/*"}, // 不拦截路径  /user/info,/system/user/info,/system/user,
		MiddlewareType:   MiddlewareTypeBind,                         // 开启局部拦截
	}

	authPath(GToken, t)
}

func TestGroupAuthPath(t *testing.T) {
	t.Log("Group auth path test ")
	// 启动gtoken
	GToken := &GToken{
		ctx: gctx.New(),
		//Timeout:         10 * 1000,
		AuthExcludePaths: g.SliceStr{"/user/info", "/system/user/*"}, // 不拦截路径  /user/info,/system/user/info,/system/user,
		LoginPath:        "/login",                                   // 登录路径
		MiddlewareType:   MiddlewareTypeGroup,                        // 开启组拦截
	}

	flag := GToken.AuthPath("/login")
	if flag {
		t.Error("error:", "/login auth path error")
	}

	flag = GToken.AuthPath("/user/info")
	if flag {
		t.Error("error:", "/user/info auth path error")
	}

	flag = GToken.AuthPath("/system/user/info")
	if flag {
		t.Error("error:", "/system/user/info auth path error")
	}

	flag = GToken.AuthPath("/system/test")
	if !flag {
		t.Error("error:", "/system/test auth path error")
	}
}

func TestAuthPathNoExclude(t *testing.T) {
	t.Log("auth no exclude path test ")
	// 启动gtoken
	GToken := &GToken{
		ctx: gctx.New(),
		//Timeout:         10 * 1000,
		AuthPaths:      g.SliceStr{"/user", "/system"}, // 这里是按照前缀拦截，拦截/user /user/list /user/add ...
		MiddlewareType: MiddlewareTypeGlobal,           // 关闭全局拦截
	}

	authFlag := GToken.AuthPath
	if authFlag("/test") {
		t.Error("error:", "/test auth path error")
	}
	if !authFlag("/system/dept") {
		t.Error("error:", "/system/dept auth path error")
	}

	if !authFlag("/user/info") {
		t.Error("error:", "/user/info auth path error")
	}

	if !authFlag("/system/user") {
		t.Error("error:", "/system/user auth path error")
	}
}

func TestAuthPathExclude(t *testing.T) {
	t.Log("auth path test ")
	// 启动gtoken
	GToken := &GToken{
		ctx: gctx.New(),
		//Timeout:         10 * 1000,
		AuthPaths:        g.SliceStr{"/*"},                           // 这里是按照前缀拦截，拦截/user /user/list /user/add ...
		AuthExcludePaths: g.SliceStr{"/user/info", "/system/user/*"}, // 不拦截路径  /user/info,/system/user/info,/system/user,
		MiddlewareType:   MiddlewareTypeGlobal,                       // 开启全局拦截
	}

	authFlag := GToken.AuthPath
	if !authFlag("/test") {
		t.Error("error:", "/test auth path error")
	}
	if !authFlag("//system/dept") {
		t.Error("error:", "/system/dept auth path error")
	}

	if authFlag("/user/info") {
		t.Error("error:", "/user/info auth path error")
	}

	if authFlag("/system/user") {
		t.Error("error:", "/system/user auth path error")
	}

	if authFlag("/system/user/info") {
		t.Error("error:", "/system/user/info auth path error")
	}

}

func authPath(GToken *GToken, t *testing.T) {
	flag := GToken.AuthPath("/user/info")
	if flag {
		t.Error("error:", "/user/info auth path error")
	}

	flag = GToken.AuthPath("/system/user")
	if flag {
		t.Error("error:", "/system/user auth path error")
	}

	flag = GToken.AuthPath("/system/user/info")
	if flag {
		t.Error("error:", "/system/user/info auth path error")
	}

	flag = GToken.AuthPath("/system/dept")
	if !flag {
		t.Error("error:", "/system/dept auth path error")
	}

	flag = GToken.AuthPath("/user/list")
	if !flag {
		t.Error("error:", "/user/list auth path error")
	}

	flag = GToken.AuthPath("/user/add")
	if !flag {
		t.Error("error:", "/user/add auth path error")
	}
}

func TestEncryptDecryptToken(t *testing.T) {
	t.Log("encrypt and decrypt token test ")
	GToken := GToken{}
	GToken.InitConfig()

	userKey := "123123"
	token := GToken.EncryptToken(userKey, "")
	if !token.Success() {
		t.Error(token.Json())
	}
	t.Log(token.DataString())

	token2 := GToken.DecryptToken(token.GetString("token"))
	if !token2.Success() {
		t.Error(token2.Json())
	}
	t.Log(token2.DataString())
	if userKey != token2.GetString("userKey") {
		t.Error("error:", "token decrypt userKey error")
	}
	if token.GetString("uuid") != token2.GetString("uuid") {
		t.Error("error:", "token decrypt uuid error")
	}

}

func BenchmarkEncryptDecryptToken(b *testing.B) {
	b.Log("encrypt and decrypt token test ")
	GToken := GToken{}
	GToken.InitConfig()

	userKey := "123123"
	token := GToken.EncryptToken(userKey, "")
	if !token.Success() {
		b.Error(token.Json())
	}
	b.Log(token.DataString())

	for i := 0; i < b.N; i++ {
		token2 := GToken.DecryptToken(token.GetString("token"))
		if !token2.Success() {
			b.Error(token2.Json())
		}
		b.Log(token2.DataString())
		if userKey != token2.GetString("userKey") {
			b.Error("error:", "token decrypt userKey error")
		}
		if token.GetString("uuid") != token2.GetString("uuid") {
			b.Error("error:", "token decrypt uuid error")
		}
	}

}
