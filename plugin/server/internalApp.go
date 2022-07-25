package server

import (
	"context"
	"sync"

	"github.com/gogf/gf/frame/g"
	"github.com/xiaodingding/iotfast/plugin/common"
)

const (
	StatusNil    = 0
	StatusOpen   = 1
	StatusStart  = 2
	StatusUpdate = 3
	StatusClose  = 3
	StatusMax    = 4
)

var (
	internalApp map[string]common.PluginApp
	mutex       sync.Mutex
	statusFlag  int
)

func Register(name string, app common.PluginApp) {
	mutex.Lock()
	defer mutex.Unlock()
	if app == nil {
		panic("plugin internal app: Register driver is nil")
	}
	if _, dup := internalApp[name]; dup {
		panic("plugin internal app: Register called twice for driver " + name)
	}
	internalApp[name] = app
}

func interAppOpen(ctx context.Context) {
	var err error
	var errApp []string

	mutex.Lock()
	defer mutex.Unlock()

	if (StatusNil == statusFlag) || (StatusNil == StatusClose) {
		for n, p := range internalApp {
			err = p.Open(ctx)
			if err != nil {
				g.Log().Errorf("open internal  app(%v) error:%v", n, err)
				errApp = append(errApp, n)
			}
		}

		if len(errApp) > 0 {
			for _, p := range errApp {
				if err != nil {
					delete(internalApp, p)
				}
			}
		}

		statusFlag = StatusOpen
	} else {
		g.Log().Warningf("internal app have been open")
	}
}

func interAppStart(ctx context.Context) {
	var err error

	mutex.Lock()
	defer mutex.Unlock()

	if StatusOpen == statusFlag {

		if len(internalApp) > 0 {
			for n, p := range internalApp {
				err = p.Start(ctx)
				if err != nil {
					g.Log().Errorf("start internal  app(%v) error:%v", n, err)
				}
			}
		}

		statusFlag = StatusStart
	}
}

func interAppUpdate(ctx context.Context) {
	var err error

	mutex.Lock()
	defer mutex.Unlock()

	if len(internalApp) > 0 {
		for n, p := range internalApp {
			err = p.Update(ctx)
			if err != nil {
				g.Log().Errorf("update internal  app(%v) error:%v", n, err)
			}
		}
	}
	statusFlag = StatusUpdate
}

func interAppClose(ctx context.Context) {
	var err error

	mutex.Lock()
	defer mutex.Unlock()

	if statusFlag > StatusOpen {
		if len(internalApp) > 0 {
			for n, p := range internalApp {
				err = p.Close(ctx)
				if err != nil {
					g.Log().Errorf("start internal  app(%v) error:%v", n, err)
				}
			}
		}

		statusFlag = StatusClose
	}
}
