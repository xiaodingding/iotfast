package libLua

import (
	"context"
)

type Action struct {
	script     string
	scriptMD5  string
	scriptPath string
	entrypoint string
	params     []interface{}
	funcs      map[string]LuaExternFunc
}

func NewAction() *Action {
	return &Action{
		params: make([]interface{}, 0),
		funcs:  make(map[string]LuaExternFunc, 0),
	}
}

func (a *Action) WithScript(script string) *Action {
	a.script = script
	return a
}

func (a *Action) WithScriptMD5(md5 string) *Action {
	return a
}

func (a *Action) WithScriptPath(scriptPath string) *Action {
	a.scriptPath = scriptPath
	return a
}

func (a *Action) WithEntrypoint(entrypoint string) *Action {
	a.entrypoint = entrypoint
	return a
}

func (a *Action) AddParam(params ...interface{}) *Action {
	a.params = append(a.params, params...)
	return a
}

func (a *Action) AddFunc(methodName string, method LuaExternFunc) *Action {
	a.funcs[methodName] = method
	return a
}

func (a *Action) Execute(ctx context.Context) (interface{}, error) {
	return getScheduler().do(ctx, a)
}
