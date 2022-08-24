package server

import (
	"context"
	"fmt"
	"sync"
)

type Handle func(ctx context.Context, data []byte) ([]byte, error)

var (
	mutex   sync.Mutex
	service = make(map[string]Handle)
)

func Regsiter(name string, f Handle) {
	if f == nil {
		panic("plugin service: Register driver is nil")
	}
	if _, dup := service[name]; dup {
		panic("plugin service: Register called twice for driver " + name)
	}
	service[name] = f
}

func Service(ctx context.Context, name string, data []byte) (p []byte, err error) {
	if s, dup := service[name]; dup {
		p, err = s(ctx, data)
		return
	}
	return nil, fmt.Errorf("service method:%s not find", name)
}

func Print() {
	for k, v := range service {
		fmt.Printf("service k:%v, v:%v \n", k, v)
	}
}
