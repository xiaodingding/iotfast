package libMsgBus_test

import (
	"bytes"
	"fmt"
	"sync"
	"testing"
	"time"

	event "github.com/xiaodingding/iotfast/library/libMsgBus"

	"github.com/stretchr/testify/assert"
)

var emptyListener = func(e event.Event) error {
	return nil
}

type testListener struct {
	userData string
}

func (l *testListener) Handle(e event.Event) error {
	if ret := e.Get("result"); ret != nil {
		str := ret.(string) + fmt.Sprintf(" -> %s(%s)", e.Name(), l.userData)
		e.Set("result", str)
	} else {
		e.Set("result", fmt.Sprintf("handled: %s(%s)", e.Name(), l.userData))
	}
	return nil
}

func TestEvent(t *testing.T) {
	e := &event.BasicEvent{}
	e.SetName("n1")
	e.SetData(event.M{
		"arg0": "val0",
	})
	e.SetTarget("tgt")

	e.Add("arg1", "val1")

	assert.False(t, e.IsAborted())
	e.Abort(true)
	assert.True(t, e.IsAborted())

	assert.Equal(t, "n1", e.Name())
	assert.Equal(t, "tgt", e.Target())
	assert.Contains(t, e.Data(), "arg1")
	assert.Equal(t, "val0", e.Get("arg0"))
	assert.Equal(t, nil, e.Get("not-exist"))

	e.Set("arg1", "new val")
	assert.Equal(t, "new val", e.Get("arg1"))

	e1 := &event.BasicEvent{}
	e1.Set("k", "v")
	assert.Equal(t, "v", e1.Get("k"))
}

func TestAddEvent(t *testing.T) {
	defer event.Reset()
	event.DefaultEM.RemoveEvents()

	// no name
	assert.Panics(t, func() {
		event.AddEvent(&event.BasicEvent{})
	})

	_, ok := event.GetEvent("evt1")
	assert.False(t, ok)

	// event.AddEvent
	e := event.NewBasic("evt1", event.M{"k1": "inhere"})
	event.AddEvent(e)
	// add by AttachTo
	event.NewBasic("evt2", nil).AttachTo(event.DefaultEM)

	assert.False(t, e.IsAborted())
	assert.True(t, event.HasEvent("evt1"))
	assert.True(t, event.HasEvent("evt2"))
	assert.False(t, event.HasEvent("not-exist"))

	// GetEvent
	r1, ok := event.GetEvent("evt1")
	assert.True(t, ok)
	assert.Equal(t, e, r1)

	// RemoveEvent
	event.DefaultEM.RemoveEvent("evt2")
	assert.False(t, event.HasEvent("evt2"))

	// RemoveEvents
	event.DefaultEM.RemoveEvents()
	assert.False(t, event.HasEvent("evt1"))
}

func TestOn(t *testing.T) {
	defer event.Reset()

	assert.Panics(t, func() {
		event.On("", event.ListenerFunc(emptyListener), 0)
	})
	assert.Panics(t, func() {
		event.On("name", nil, 0)
	})
	assert.Panics(t, func() {
		event.On("++df", event.ListenerFunc(emptyListener), 0)
	})

	event.On("n1", event.ListenerFunc(emptyListener), event.Min)
	assert.Equal(t, 1, event.DefaultEM.ListenersCount("n1"))
	assert.Equal(t, 0, event.DefaultEM.ListenersCount("not-exist"))
	assert.True(t, event.HasListeners("n1"))
	assert.False(t, event.HasListeners("name"))

	assert.NotEmpty(t, event.DefaultEM.Listeners())
	assert.NotEmpty(t, event.DefaultEM.ListenersByName("n1"))

	event.DefaultEM.RemoveListeners("n1")
	assert.False(t, event.HasListeners("n1"))
}

func TestFire(t *testing.T) {
	buf := new(bytes.Buffer)
	fn := func(e event.Event) error {
		_, _ = fmt.Fprintf(buf, "event: %s", e.Name())
		return nil
	}

	event.On("evt1", event.ListenerFunc(fn), 0)
	event.On("evt1", event.ListenerFunc(emptyListener), event.High)
	assert.True(t, event.HasListeners("evt1"))

	err, e := event.Fire("evt1", nil)
	assert.NoError(t, err)
	assert.Equal(t, "evt1", e.Name())
	assert.Equal(t, "event: evt1", buf.String())

	event.NewBasic("evt2", nil).AttachTo(event.DefaultEM)
	event.On("evt2", event.ListenerFunc(func(e event.Event) error {
		assert.Equal(t, "evt2", e.Name())
		assert.Equal(t, "v", e.Get("k"))
		return nil
	}), event.AboveNormal)

	assert.True(t, event.HasListeners("evt2"))
	err, e = event.Trigger("evt2", event.M{"k": "v"})
	assert.NoError(t, err)
	assert.Equal(t, "evt2", e.Name())
	assert.Equal(t, map[string]interface{}{"k": "v"}, e.Data())

	// clear all
	event.Reset()
	assert.False(t, event.HasListeners("evt1"))
	assert.False(t, event.HasListeners("evt2"))

	err, e = event.Fire("not-exist", nil)
	assert.NoError(t, err)
	assert.Nil(t, e)
}

func TestFireEvent(t *testing.T) {
	defer event.Reset()
	buf := new(bytes.Buffer)

	evt1 := event.NewBasic("evt1", nil).Fill(nil, event.M{"n": "inhere"})
	event.AddEvent(evt1)

	assert.True(t, event.HasEvent("evt1"))
	assert.False(t, event.HasEvent("not-exist"))

	event.Listen("evt1", event.ListenerFunc(func(e event.Event) error {
		_, _ = fmt.Fprintf(buf, "event: %s, params: n=%s", e.Name(), e.Get("n"))
		return nil
	}), event.Normal)

	assert.True(t, event.HasListeners("evt1"))
	assert.False(t, event.HasListeners("not-exist"))

	err := event.FireEvent(evt1)
	assert.NoError(t, err)
	assert.Equal(t, "event: evt1, params: n=inhere", buf.String())
	buf.Reset()

	err = event.TriggerEvent(evt1)
	assert.NoError(t, err)
	assert.Equal(t, "event: evt1, params: n=inhere", buf.String())
	buf.Reset()

	event.AsyncFire(evt1)
	time.Sleep(time.Second)
	assert.Equal(t, "event: evt1, params: n=inhere", buf.String())
}

func TestMustFire(t *testing.T) {
	defer event.Reset()

	event.On("n1", event.ListenerFunc(func(e event.Event) error {
		return fmt.Errorf("an error")
	}), event.Max)
	event.On("n2", event.ListenerFunc(emptyListener), event.Min)

	assert.Panics(t, func() {
		_ = event.MustFire("n1", nil)
	})

	assert.NotPanics(t, func() {
		_ = event.MustTrigger("n2", nil)
	})
}

func TestManager_FireEvent(t *testing.T) {
	em := event.NewManager("test")
	em.EnableLock = true

	e1 := event.NewBasic("e1", nil)
	em.AddEvent(e1)

	em.On("e1", &testListener{"HI"}, event.Min)
	em.On("e1", &testListener{"WEL"}, event.High)
	em.AddListener("e1", &testListener{"COM"}, event.BelowNormal)

	err := em.FireEvent(e1)
	assert.NoError(t, err)
	assert.Equal(t, "handled: e1(WEL) -> e1(COM) -> e1(HI)", e1.Get("result"))

	// not exist
	err = em.FireEvent(e1.SetName("e2"))
	assert.NoError(t, err)

	em.Clear()
}

func TestManager_FireEvent2(t *testing.T) {
	buf := new(bytes.Buffer)
	mgr := event.NewManager("test")

	evt1 := event.NewBasic("evt1", nil).Fill(nil, event.M{"n": "inhere"})
	mgr.AddEvent(evt1)

	assert.True(t, mgr.HasEvent("evt1"))
	assert.False(t, mgr.HasEvent("not-exist"))

	mgr.On("evt1", event.ListenerFunc(func(e event.Event) error {
		_, _ = fmt.Fprintf(buf, "event: %s, params: n=%s", e.Name(), e.Get("n"))
		return nil
	}), event.Normal)

	assert.True(t, mgr.HasListeners("evt1"))
	assert.False(t, mgr.HasListeners("not-exist"))

	err := mgr.FireEvent(evt1)
	assert.NoError(t, err)
	assert.Equal(t, "event: evt1, params: n=inhere", buf.String())
	buf.Reset()

	mgr.On(event.Wildcard, event.ListenerFunc(func(e event.Event) error {
		buf.WriteString("|Wildcard handler")
		return nil
	}))

	err = mgr.FireEvent(evt1)
	assert.NoError(t, err)
	assert.Equal(t, "event: evt1, params: n=inhere|Wildcard handler", buf.String())
}

func TestManager_Fire_WithWildcard(t *testing.T) {
	buf := new(bytes.Buffer)
	mgr := event.NewManager("test")

	const Event2FurcasTicketCreate = "kapal.furcas.ticket.create"

	handler := event.ListenerFunc(func(e event.Event) error {
		_, _ = fmt.Fprintf(buf, "%s-%s|", e.Name(), e.Get("user"))
		return nil
	})

	mgr.On("kapal.furcas.ticket.*", handler)
	mgr.On(Event2FurcasTicketCreate, handler)

	err, _ := mgr.Fire(Event2FurcasTicketCreate, event.M{"user": "inhere"})
	assert.NoError(t, err)
	assert.Equal(
		t,
		"kapal.furcas.ticket.create-inhere|kapal.furcas.ticket.create-inhere|",
		buf.String(),
	)
	buf.Reset()

	// add Wildcard listen
	mgr.On("*", handler)

	err, _ = mgr.Trigger(Event2FurcasTicketCreate, event.M{"user": "inhere"})
	assert.NoError(t, err)
	assert.Equal(
		t,
		"kapal.furcas.ticket.create-inhere|kapal.furcas.ticket.create-inhere|kapal.furcas.ticket.create-inhere|",
		buf.String(),
	)
}

func TestListenGroupEvent(t *testing.T) {
	em := event.NewManager("test")

	e1 := event.NewBasic("app.evt1", event.M{"buf": new(bytes.Buffer)})
	e1.AttachTo(em)

	l2 := event.ListenerFunc(func(e event.Event) error {
		e.Get("buf").(*bytes.Buffer).WriteString(" > 2 " + e.Name())
		return nil
	})
	l3 := event.ListenerFunc(func(e event.Event) error {
		e.Get("buf").(*bytes.Buffer).WriteString(" > 3 " + e.Name())
		return nil
	})

	em.On("app.evt1", event.ListenerFunc(func(e event.Event) error {
		e.Get("buf").(*bytes.Buffer).WriteString("Hi > 1 " + e.Name())
		return nil
	}))
	em.On("app.*", l2)
	em.On("*", l3)

	buf := e1.Get("buf").(*bytes.Buffer)
	err, e := em.Fire("app.evt1", nil)
	assert.NoError(t, err)
	assert.Equal(t, e1, e)
	assert.Equal(t, "Hi > 1 app.evt1 > 2 app.evt1 > 3 app.evt1", buf.String())

	em.RemoveListener("app.*", l2)
	assert.Len(t, em.ListenedNames(), 2)
	em.On("app.*", event.ListenerFunc(func(e event.Event) error {
		return fmt.Errorf("an error")
	}))

	buf.Reset()
	err, e = em.Fire("app.evt1", nil)
	assert.Error(t, err)
	assert.Equal(t, "Hi > 1 app.evt1", buf.String())

	em.RemoveListeners("app.*")
	em.RemoveListener("", l3)
	em.On("app.*", l2) // re-add
	em.On("*", event.ListenerFunc(func(e event.Event) error {
		return fmt.Errorf("an error")
	}))
	assert.Len(t, em.ListenedNames(), 3)

	buf.Reset()
	err, e = em.Trigger("app.evt1", nil)
	assert.Error(t, err)
	assert.Equal(t, e1, e)
	assert.Equal(t, "Hi > 1 app.evt1 > 2 app.evt1", buf.String())

	em.RemoveListener("", nil)

	// clear
	em.Clear()
	buf.Reset()
}

func TestManager_AsyncFire(t *testing.T) {
	em := event.NewManager("test")
	em.On("e1", event.ListenerFunc(func(e event.Event) error {
		assert.Equal(t, map[string]interface{}{"k": "v"}, e.Data())
		e.Set("nk", "nv")
		return nil
	}))

	e1 := event.NewBasic("e1", event.M{"k": "v"})
	em.AsyncFire(e1)
	time.Sleep(time.Second / 10)
	assert.Equal(t, "nv", e1.Get("nk"))

	var wg sync.WaitGroup
	em.On("e2", event.ListenerFunc(func(e event.Event) error {
		defer wg.Done()
		assert.Equal(t, "v", e.Get("k"))
		return nil
	}))

	wg.Add(1)
	em.AsyncFire(e1.SetName("e2"))
	wg.Wait()

	em.Clear()
}

func TestManager_AwaitFire(t *testing.T) {
	em := event.NewManager("test")
	em.On("e1", event.ListenerFunc(func(e event.Event) error {
		assert.Equal(t, map[string]interface{}{"k": "v"}, e.Data())
		e.Set("nk", "nv")
		return nil
	}))

	e1 := event.NewBasic("e1", event.M{"k": "v"})
	err := em.AwaitFire(e1)

	assert.NoError(t, err)
	assert.Contains(t, e1.Data(), "nk")
	assert.Equal(t, "nv", e1.Get("nk"))
}

type testSubscriber struct {
	// ooo
}

func (s *testSubscriber) SubscribedEvents() map[string]interface{} {
	return map[string]interface{}{
		"e1": event.ListenerFunc(s.e1Handler),
		"e2": event.ListenerItem{
			Priority: event.AboveNormal,
			Listener: event.ListenerFunc(func(e event.Event) error {
				return fmt.Errorf("an error")
			}),
		},
		"e3": &testListener{},
	}
}

func (s *testSubscriber) e1Handler(e event.Event) error {
	e.Set("e1-key", "val1")
	return nil
}

type testSubscriber2 struct{}

func (s testSubscriber2) SubscribedEvents() map[string]interface{} {
	return map[string]interface{}{
		"e1": "invalid",
	}
}

func TestAddSubscriber(t *testing.T) {
	event.AddSubscriber(&testSubscriber{})

	assert.True(t, event.HasListeners("e1"))
	assert.True(t, event.HasListeners("e2"))
	assert.True(t, event.HasListeners("e3"))

	ers := event.FireBatch("e1", event.NewBasic("e2", nil))
	assert.Len(t, ers, 1)

	assert.Panics(t, func() {
		event.Subscribe(testSubscriber2{})
	})

	event.Reset()
}

func TestManager_AddSubscriber(t *testing.T) {
	em := event.NewManager("test")
	em.AddSubscriber(&testSubscriber{})

	assert.True(t, em.HasListeners("e1"))
	assert.True(t, em.HasListeners("e2"))
	assert.True(t, em.HasListeners("e3"))

	ers := em.FireBatch("e1", event.NewBasic("e2", nil))
	assert.Len(t, ers, 1)

	assert.Panics(t, func() {
		em.AddSubscriber(testSubscriber2{})
	})

	em.Clear()
}
