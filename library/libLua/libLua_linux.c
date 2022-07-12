
#include <luajit.h>
#include <lua.h>
#include <lauxlib.h>
#include <lualib.h>
#include <stdio.h>
#include <stdlib.h>
#include "_cgo_export.h"

extern int sync_extern_method(lua_State* _L);

int gluaL_dostring(lua_State* _L, char* script) {
	int res = luaL_dostring(_L, script);
	free(script);
	return res;
}
void glua_getglobal(lua_State* _L, char* name) {
	lua_getglobal(_L, name);
	free(name);
}
void glua_setglobal(lua_State* _L, char* name) {
	lua_setglobal(_L, name);
	free(name);
}
void glua_pushlightuserdata(lua_State* _L, void* obj) {
	lua_pushlightuserdata(_L, obj);
}
int glua_pcall(lua_State* _L, int args, int results) {
	return lua_pcall(_L, args, results, 0);
}
lua_Number glua_tonumber(lua_State* _L, int index) {
	return lua_tonumber(_L, index);
}
int glua_yield(lua_State *_L, int nresults) {
	return lua_yield(_L, nresults);
}
const char* glua_tostring(lua_State* _L, int index) {
	return lua_tostring(_L, index);
}
void glua_pop(lua_State* _L, int num) {
	lua_pop(_L, num);
}
lua_State *glua_tothread(lua_State* _L, int index) {
	return lua_tothread(_L, index);
}

int glua_istable(lua_State* _L, int index) {
	return lua_istable(_L, index);
}
void* glua_touserdata(lua_State* _L, int index) {
	return lua_touserdata(_L, index);
}

int glua_resume (lua_State *_L, int narg) {
	return lua_resume(_L, narg);
}

int glua_gettop(lua_State *_L) {
	return lua_gettop(_L);
}

int glua_gc (lua_State *_L, int what, int data) {
	return lua_gc(_L, what, data);
}

lua_State *gluaL_newstate (void) {
	return luaL_newstate();
}

void gluaL_openlibs (lua_State *_L) {
	luaL_openlibs(_L);
}

lua_State *glua_newthread (lua_State *_L) {
	return lua_newthread(_L);
}

void glua_close (lua_State *_L) {
	lua_close(_L);
}

void glua_remove (lua_State *_L, int index) {
	lua_remove(_L, index);
}

int glua_type (lua_State *_L, int index) {
	return lua_type(_L, index);
}

void glua_pushlstring (lua_State *_L, char *s, size_t len) {
	lua_pushlstring (_L, s, len);
	free(s);
}

void glua_pushnumber (lua_State *_L, lua_Number n) {
	lua_pushnumber(_L, n);
}

void glua_pushboolean (lua_State *_L, int b) {
	lua_pushboolean(_L, b);
}

void glua_pushnil (lua_State *_L) {
	lua_pushnil(_L);
}

void glua_createtable (lua_State *_L, int narr, int nrec) {
	lua_createtable(_L, narr, nrec);
}

void glua_settable (lua_State *_L, int index) {
	lua_settable (_L, index);
}

int glua_next (lua_State *_L, int index) {
	return lua_next(_L, index);
}

int glua_toboolean (lua_State *_L, int index) {
	return lua_toboolean(_L, index);
}

void register_go_method(lua_State* _L) {
	lua_pushcfunction(_L, &sync_extern_method);
	lua_setglobal(_L, "sync_extern_method");
}