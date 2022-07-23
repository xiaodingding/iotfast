# Event 


Go 实现的轻量级的事件管理、调度工具库

- 支持自定义定义事件对象
- 支持对一个事件添加多个监听器
- 支持设置事件监听器的优先级，优先级越高越先触发
- 支持根据事件名称前缀 `PREFIX.*` 来进行一组事件监听.
  - 注册`app.*` 事件的监听，触发 `app.run` `app.end` 时，都将同时会触发 `app.*` 事件
- 支持使用通配符 `*` 来监听全部事件的触发
- 完善的单元测试，单元覆盖率 `> 95%`



## 主要方法

- `On/Listen(name string, listener Listener, priority ...int)` 注册事件监听
- `Subscribe/AddSubscriber(sbr Subscriber)`  订阅，支持注册多个事件监听
- `Trigger/Fire(name string, params M) (error, Event)` 触发事件
- `MustTrigger/MustFire(name string, params M) Event`   触发事件，有错误则会panic
- `FireEvent(e Event) (err error)`    根据给定的事件实例，触发事件
- `FireBatch(es ...interface{}) (ers []error)` 一次触发多个事件
- `AsyncFire(e Event)`   Async fire event by 'go' keywords

## 快速使用

```go
package main

import (
	"fmt"
	
	"github.com/gookit/event"
)

func main() {
	// 注册事件监听器
	event.On("evt1", event.ListenerFunc(func(e event.Event) error {
        fmt.Printf("handle event: %s\n", e.Name())
        return nil
    }), event.Normal)
	
	// 注册多个监听器
	event.On("evt1", event.ListenerFunc(func(e event.Event) error {
        fmt.Printf("handle event: %s\n", e.Name())
        return nil
    }), event.High)
	
	// ... ...
	
	// 触发事件
	// 注意：第二个监听器的优先级更高，所以它会先被执行
	event.MustFire("evt1", event.M{"arg0": "val0", "arg1": "val1"})
}
```

> Note: 注意：第二个监听器的优先级更高，所以它会先被执行

### 使用通配符

注册事件监听器和名称以通配符`*`结尾:

```go
func main() {
	dbListener1 := event.ListenerFunc(func(e event.Event) error {
		fmt.Printf("handle event: %s\n", e.Name())
		return nil
	})

	event.On("app.db.*", dbListener1, event.Normal)
}
```

在其他逻辑上触发事件:

```go
func doCreate() {
	// do something ...
	// Trigger event
	event.MustFire("app.db.create", event.M{"arg0": "val0", "arg1": "val1"})
}

func doUpdate() {
	// do something ...
	// Trigger event
	event.MustFire("app.db.update", event.M{"arg0": "val0"})
}
```

像上面这样,触发 `app.db.create` `app.db.update` 事件,都会触发执行 `dbListener1` 监听器.

## 编写事件监听

### 使用匿名函数

```go
package mypgk

import (
	"fmt"
	
	"github.com/gookit/event"
)

var fnHandler = func(e event.Event) error {
	fmt.Printf("handle event: %s\n", e.Name())
    return nil
}

func Run() {
    // register
    event.On("evt1", event.ListenerFunc(fnHandler), event.High)
}
```

### 使用结构体方法

**interface:**

```go
// Listener interface
type Listener interface {
	Handle(e Event) error
}
```

**示例:**

> 实现接口 `event.Listener`

```go
package mypgk

import (
	"fmt"
	
	"github.com/gookit/event"
)

type MyListener struct {
	// userData string
}

func (l *MyListener) Handle(e event.Event) error {
	e.Set("result", "OK")
	return nil
}
```

### 同时注册多个事件监听

**interface:**

```go
// Subscriber event subscriber interface.
// you can register multi event listeners in a struct func.
type Subscriber interface {
	// SubscribedEvents register event listeners
	// key: is event name
	// value: can be Listener or ListenerItem interface
	SubscribedEvents() map[string]interface{}
}
```

**示例**

> 实现接口 `event.Subscriber`

```go
package mypgk

import (
	"fmt"
	
	"github.com/gookit/event"
)

type MySubscriber struct {
	// ooo
}

func (s *MySubscriber) SubscribedEvents() map[string]interface{} {
	return map[string]interface{}{
		"e1": event.ListenerFunc(s.e1Handler),
		"e2": event.ListenerItem{
			Priority: event.AboveNormal,
			Listener: event.ListenerFunc(func(e Event) error {
				return fmt.Errorf("an error")
			}),
		},
		"e3": &MyListener{},
	}
}

func (s *MySubscriber) e1Handler(e event.Event) error {
	e.Set("e1-key", "val1")
	return nil
}
```

## 编写自定义事件

如果你希望自定义事件对象或者提前定义好一些固定事件信息,可以实现 `event.Event` 接口.

**interface:**

```go
// Event interface
type Event interface {
	Name() string
	// Target() interface{}
	Get(key string) interface{}
	Add(key string, val interface{})
	Set(key string, val interface{})
	Data() map[string]interface{}
	SetData(M) Event
	Abort(bool)
	IsAborted() bool
}
```

**示例**

```go
package mypgk 

import (
	"fmt"
	
	"github.com/gookit/event"
)

type MyEvent struct{
	event.BasicEvent
	customData string
}

func (e *MyEvent) CustomData() string {
    return e.customData
}
```

**使用：**

```go
e := &MyEvent{customData: "hello"}
e.SetName("e1")
event.AddEvent(e)

// add listener
event.On("e1", event.ListenerFunc(func(e event.Event) error {
   fmt.Printf("custom Data: %s\n", e.(*MyEvent).CustomData())
   return nil
}))

// trigger
event.Fire("e1", nil)
// OR
// event.FireEvent(e)
```

