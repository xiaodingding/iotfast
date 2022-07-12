package libLua

import (
	"errors"
	"fmt"
	"math"
)

// #cgo CFLAGS: -I./luajit/src -I./luajit/src -I./luajit/src/jit -I./luajit/src/host
// #cgo LDFLAGS:  -L./luajit/src -lluajit-5.1.dll -lstdc++
//#include "libLua.h"
import "C"

func LuaNumberToInt64(value interface{}) (int64, error) {
	switch value.(type) {
	case C.lua_Number:
		{
			return int64(value.(C.lua_Number)), nil
		}
	default:
		{
			return 0, errors.New("Invalid Type")
		}
	}
}

func LuaNumberToInt32(value interface{}) (int32, error) {
	switch value.(type) {
	case C.lua_Number:
		{
			return int32(value.(C.lua_Number)), nil
		}
	default:
		{
			return 0, errors.New("Invalid Type")
		}
	}
}

func LuaNumberToInt(value interface{}) (int, error) {
	switch value.(type) {
	case C.lua_Number:
		{
			return int(value.(C.lua_Number)), nil
		}
	default:
		{
			return 0, errors.New("Invalid Type")
		}
	}
}

func LuaNumberToFloat32(value interface{}) (float32, error) {
	switch value.(type) {
	case C.lua_Number:
		{
			return float32(value.(C.lua_Number)), nil
		}
	default:
		{
			return 0.0, errors.New("Invalid Type")
		}
	}
}

func LuaNumberToFloat64(value interface{}) (float64, error) {
	switch value.(type) {
	case C.lua_Number:
		{
			return float64(value.(C.lua_Number)), nil
		}
	default:
		{
			return 0.0, errors.New("Invalid Type")
		}
	}
}

func pushToLua(L *C.struct_lua_State, args ...interface{}) {
	for _, arg := range args {
		switch arg.(type) {
		case string:
			{
				C.glua_pushlstring(L, C.CString(arg.(string)), C.size_t(len([]byte(arg.(string)))))
			}
		case float64:
			C.glua_pushnumber(L, C.lua_Number(arg.(float64)))
		case float32:
			C.glua_pushnumber(L, C.lua_Number(arg.(float32)))
		case uint64:
			C.glua_pushnumber(L, C.lua_Number(arg.(uint64)))
		case int64:
			C.glua_pushnumber(L, C.lua_Number(arg.(int64)))
		case uint32:
			C.glua_pushnumber(L, C.lua_Number(arg.(uint32)))
		case int32:
			C.glua_pushnumber(L, C.lua_Number(arg.(int32)))
		case uint16:
			C.glua_pushnumber(L, C.lua_Number(arg.(uint16)))
		case int16:
			C.glua_pushnumber(L, C.lua_Number(arg.(int16)))
		case uint8:
			C.glua_pushnumber(L, C.lua_Number(arg.(uint8)))
		case int8:
			C.glua_pushnumber(L, C.lua_Number(arg.(int8)))
		case uint:
			C.glua_pushnumber(L, C.lua_Number(arg.(uint)))
		case int:
			C.glua_pushnumber(L, C.lua_Number(arg.(int)))
		case bool:
			if arg.(bool) {
				C.glua_pushboolean(L, C.int(1))
			} else {
				C.glua_pushboolean(L, C.int(0))
			}
		case error:
			{
				str := arg.(error).Error()
				C.glua_pushlstring(L, C.CString(str), C.size_t(len([]byte(str))))
			}
		case []byte:
			{
				C.glua_pushlstring(L, C.CString(string(arg.([]byte))), C.size_t(len(arg.([]byte))))
			}
		case map[string]interface{}:
			{
				pushMapToLua(L, arg.(map[string]interface{}))
			}
		case []interface{}:
			{
				pushArrayToLua(L, arg.([]interface{}))
			}
		case nil:
			{
				C.glua_pushnil(L)
			}
		default:
			{
				ptr := pushDummy(L, arg)
				C.glua_pushlightuserdata(L, ptr)
			}
		}
	}
}

func pushArrayToLua(L *C.struct_lua_State, data []interface{}) {
	C.glua_createtable(L, 0, 0)
	if len(data) == 0 {
		return
	}
	for index, value := range data {
		C.glua_pushnumber(L, C.lua_Number(index+1))
		pushToLua(L, value)
		C.glua_settable(L, -3)
	}
}

func pushMapToLua(L *C.struct_lua_State, data map[string]interface{}) {
	C.glua_createtable(L, 0, 0)
	if len(data) == 0 {
		return
	}
	for key, value := range data {
		C.glua_pushlstring(L, C.CString(key), C.size_t(len([]byte(key))))
		pushToLua(L, value)
		C.glua_settable(L, -3)
	}
}

func pullLuaTable(_L *C.struct_lua_State) interface{} {
	keys := make([]interface{}, 0)
	values := make([]interface{}, 0)

	numKeyCount := 0
	var (
		key   interface{}
		value interface{}
	)
	C.glua_pushnil(_L)
	for C.glua_next(_L, -2) != 0 {
		kType := C.glua_type(_L, -2)
		if kType == 4 {
			key = C.GoString(C.glua_tostring(_L, -2))
		} else {
			key, _ = LuaNumberToInt(C.glua_tonumber(_L, -2))
			numKeyCount = numKeyCount + 1
		}
		vType := C.glua_type(_L, -1)
		switch vType {
		case 0:
			{
				C.glua_pop(_L, 1)
				continue
			}
		case 1:
			{
				temp := C.glua_toboolean(_L, -1)
				if temp == 1 {
					value = true
				} else {
					value = false
				}
			}
		case 2:
			{
				ptr := C.glua_touserdata(_L, -1)
				target, err := findDummy(_L, ptr)
				if err != nil {
					C.glua_pop(_L, 1)
					continue
				}
				value = target
			}
		case 3:
			{
				temp := float64(C.glua_tonumber(_L, -1))
				if math.Ceil(temp) > temp {
					value = temp
				} else {
					value = int64(temp)
				}
			}
		case 4:
			{
				value = C.GoString(C.glua_tostring(_L, -1))
			}
		case 5:
			{
				value = pullLuaTable(_L)
			}
		}
		keys = append(keys, key)
		values = append(values, value)
		C.glua_pop(_L, 1)
	}
	if numKeyCount == len(keys) {
		return values
	}
	if numKeyCount == 0 {
		result := make(map[string]interface{})
		for index, key := range keys {
			result[key.(string)] = values[index]
		}
		return result
	} else {
		result := make(map[interface{}]interface{})
		for index, key := range keys {
			result[key] = values[index]
		}
		return result
	}
}

func pullFromLua(L *C.struct_lua_State, index int) interface{} {
	vType := C.glua_type(L, C.int(index))
	switch vType {
	case C.LUA_TBOOLEAN:
		{
			res := C.lua_toboolean(L, C.int(index))
			if res == 0 {
				return false
			}
			return true
		}
	case C.LUA_TNUMBER:
		{
			temp := float64(C.glua_tonumber(L, -1))
			if math.Ceil(temp) > temp {
				return temp
			} else {
				return int64(temp)
			}
		}
	case C.LUA_TSTRING:
		{
			return C.GoString(C.glua_tostring(L, C.int(index)))
		}
	case C.LUA_TTABLE:
		{
			return pullLuaTable(L)
		}
	case C.LUA_TLIGHTUSERDATA:
		{
			ptr := C.glua_touserdata(L, C.int(index))
			target, err := findDummy(L, ptr)
			if err != nil {
				return nil
			} else {
				return target
			}
		}
	case C.LUA_TNIL:
		{
			return nil
		}
	default:
		{
			panic(errors.New(fmt.Sprintf("Unsupport Type %d", vType)))
		}
	}
	return nil
}
