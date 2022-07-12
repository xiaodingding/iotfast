package libLua

import (
	"context"
	"errors"
	"sync"
)

// #cgo CFLAGS: -I/usr/local/include/luajit-2.1
// #cgo LDFLAGS:  -L/usr/local/lib -lluajit -ldl -lm
//#include "libLua.h"
import "C"

var (
	methodMu  sync.RWMutex
	methodDic map[string]LuaExternFunc
)

type LuaExternFunc func(context.Context, ...interface{}) (interface{}, error)

func init() {
	methodDic = make(map[string]LuaExternFunc)
}

func RegisterExternMethod(methodName string, method LuaExternFunc) error {
	methodMu.Lock()
	defer methodMu.Unlock()
	_, ok := methodDic[methodName]
	if ok {
		return errors.New("Duplicate Method Name")
	}
	methodDic[methodName] = method
	return nil
}

func callExternMethod(ctx context.Context, methodName string, args ...interface{}) (interface{}, error) {
	methodMu.RLock()
	defer methodMu.RUnlock()
	tagetMethod, ok := methodDic[methodName]
	if false == ok {
		return nil, errors.New("Invalid Method Name")
	}
	return tagetMethod(ctx, args...)
}

//export sync_extern_method
func sync_extern_method(vm *C.struct_lua_State) C.int {
	count := int(C.glua_gettop(vm))
	args := make([]interface{}, count)
	for {
		count = int(C.glua_gettop(vm))
		if count == 0 {
			break
		}
		args[count-1] = pullFromLua(vm, -1)
		C.glua_pop(vm, 1)
	}
	methodName := args[0].(string)
	if len(args) > 1 {
		args = args[1:]
	} else {
		args = make([]interface{}, 0)
	}

	tagetMethod, ok := methodDic[methodName]
	if false == ok {
		C.glua_pushnil(vm)
		str := "Invalid Method Name"
		C.glua_pushlstring(vm, C.CString(str), C.size_t(len([]byte(str))))
		return 2
	}
	threadId := generateLuaStateId(vm)
	ctx := findThreadContext(threadId)

	res, err := tagetMethod(ctx, args...)
	if err != nil {
		pushToLua(vm, 0)
		str := err.Error()
		C.glua_pushlstring(vm, C.CString(str), C.size_t(len([]byte(str))))
		return 2
	} else {
		pushToLua(vm, res)
		C.glua_pushnil(vm)
		return 2
	}
}
