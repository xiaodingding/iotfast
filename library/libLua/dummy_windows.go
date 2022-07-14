package libLua

import (
	"errors"
	"sync"
	"unsafe"
)

// #cgo CFLAGS: -I./lua/LuaJIT-2.0.5/src -I./lua/LuaJIT-2.0.5/src -I./lua/LuaJIT-2.0.5/src/jit -I./lua/LuaJIT-2.0.5/src/host
// #cgo LDFLAGS:  -L./lua/LuaJIT-2.0.5/src ./lua51.dll -lstdc++
//#include "libLua.h"
import "C"

var (
	dummyCache map[uintptr]map[uintptr]interface{}
	dummyRW    sync.RWMutex
)

func init() {
	dummyCache = make(map[uintptr]map[uintptr]interface{})
}

//lua dummy method
func pushDummy(vm *C.struct_lua_State, obj interface{}) unsafe.Pointer {
	vmKey := generateLuaStateId(vm)

	ptr := unsafe.Pointer(&obj)
	dummyId := uintptr(ptr)

	dummyRW.Lock()
	defer dummyRW.Unlock()

	target, ok := dummyCache[vmKey]
	if false == ok {
		target = make(map[uintptr]interface{})
		target[dummyId] = obj
		dummyCache[vmKey] = target
	} else {
		target[dummyId] = obj
	}

	return ptr
}

func findDummy(vm *C.struct_lua_State, ptr unsafe.Pointer) (interface{}, error) {
	vmKey := generateLuaStateId(vm)
	dummyId := uintptr(ptr)

	dummyRW.RLock()
	defer dummyRW.RUnlock()

	target, ok := dummyCache[vmKey]
	if false == ok {
		return nil, errors.New("Invalid VMKey")
	}
	value, ok := target[dummyId]
	if false == ok {
		return nil, errors.New("Invalid DummyId")
	}
	return value, nil
}

func cleanDummy(vm *C.struct_lua_State) {
	vmKey := generateLuaStateId(vm)

	dummyRW.Lock()
	defer dummyRW.Unlock()
	delete(dummyCache, vmKey)
}
