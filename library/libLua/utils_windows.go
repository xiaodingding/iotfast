package libLua

import (
	// "fmt"
	// "strconv"
	"context"
	"sync"
	"unsafe"
)

// #cgo CFLAGS: -I./lua/LuaJIT-2.0.5/src -I./lua/LuaJIT-2.0.5/src -I./lua/LuaJIT-2.0.5/src/jit -I./lua/LuaJIT-2.0.5/src/host
// #cgo LDFLAGS:  -L./lua/LuaJIT-2.0.5/src ./lua51.dll -lstdc++
//#include "libLua.h"
import "C"

var (
	threadCtxDic      map[uintptr]context.Context
	threadCtxDicMutex sync.RWMutex
)

func init() {
	threadCtxDic = make(map[uintptr]context.Context)
}

func generateLuaStateId(vm *C.struct_lua_State) uintptr {
	return uintptr(unsafe.Pointer(vm))
}

func createLuaState() (uintptr, *C.struct_lua_State) {
	vm := C.gluaL_newstate()
	C.glua_gc(vm, C.LUA_GCSTOP, 0)
	C.gluaL_openlibs(vm)
	C.glua_gc(vm, C.LUA_GCRESTART, 0)
	C.register_go_method(vm)

	if globalOpts.preloadScriptMethod != nil {
		script := globalOpts.preloadScriptMethod()
		C.gluaL_dostring(vm, C.CString(script))
	}

	return generateLuaStateId(vm), vm
}

func createLuaThread(vm *C.struct_lua_State) (uintptr, *C.struct_lua_State) {
	L := C.glua_newthread(vm)
	return generateLuaStateId(L), L
}

func pushThreadContext(threadId uintptr, ctx context.Context) {
	threadCtxDicMutex.Lock()
	defer threadCtxDicMutex.Unlock()
	threadCtxDic[threadId] = ctx
}

func popThreadContext(threadId uintptr) {
	threadCtxDicMutex.Lock()
	defer threadCtxDicMutex.Unlock()
	delete(threadCtxDic, threadId)
}

func findThreadContext(threadId uintptr) context.Context {
	threadCtxDicMutex.RLock()
	defer threadCtxDicMutex.RUnlock()
	return threadCtxDic[threadId]
}
