#include <luajit.h>
#include <lua.h>
#include <lauxlib.h>
#include <lualib.h>

int gluaL_dostring(lua_State* _L, char* script);
void glua_getglobal(lua_State* _L, char* name);
void glua_setglobal(lua_State* _L, char* name);

void glua_pushlightuserdata(lua_State* _L, void* obj);
int glua_pcall(lua_State* _L, int args, int results);
lua_Number glua_tonumber(lua_State* _L, int index);
int glua_yield(lua_State *_L, int nresults);
const char* glua_tostring(lua_State* _L, int index);
void glua_pop(lua_State* _L, int num);
lua_State *glua_tothread(lua_State* _L, int index);
lua_State *gluaL_newstate (void);
int glua_istable(lua_State* _L, int index);
void* glua_touserdata(lua_State* _L, int index);
int glua_resume (lua_State *_L, int narg);
int glua_gettop(lua_State *_L);
int glua_gc (lua_State *_L, int what, int data);
void gluaL_openlibs (lua_State *_L);
lua_State *glua_newthread (lua_State *_L);
void glua_close (lua_State *_L);
void glua_remove (lua_State *_L, int index);
int glua_type (lua_State *_L, int index);

void glua_pushlstring (lua_State *_L, char *s, size_t len);
void glua_pushnumber (lua_State *_L, lua_Number n);
void glua_pushboolean (lua_State *_L, int b);
void glua_pushnil (lua_State *_L);

void glua_createtable (lua_State *_L, int narr, int nrec);
void glua_settable (lua_State *_L, int index);

int glua_next (lua_State *_L, int index);
int glua_toboolean (lua_State *_L, int index);

//for go extra
void register_go_method(lua_State* _L);