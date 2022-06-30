package libMsgBus_test

import (
	event "iotfast/library/libMsgBus"
	"strconv"
	"testing"
)

func BenchmarkManager_Fire_no_listener(b *testing.B) {
	em := event.NewManager("test")
	em.On("app.up", event.ListenerFunc(func(e event.Event) error {
		return nil
	}))

	b.ResetTimer()
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		_, _ = em.Fire("app.up", nil)
	}
}

func BenchmarkManager_Fire_k_listener(b *testing.B) {
	em := event.NewManager("test")
	for i := 0; i < 10000; i++ {
		em.On("app.up"+strconv.Itoa(i), event.ListenerFunc(func(e event.Event) error {
			return nil
		}))
	}

	b.ResetTimer()
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		_, _ = em.Fire("app.up"+strconv.Itoa(i), nil)
	}
}

func BenchmarkManager_Fire_normal(b *testing.B) {
	em := event.NewManager("test")
	em.On("app.up", event.ListenerFunc(func(e event.Event) error {
		return nil
	}))

	b.ResetTimer()
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		_, _ = em.Fire("app.up", nil)
	}
}

func BenchmarkManager_Fire_wildcard(b *testing.B) {
	em := event.NewManager("test")
	em.On("app.*", event.ListenerFunc(func(e event.Event) error {
		return nil
	}))

	b.ResetTimer()
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		_, _ = em.Fire("app.up", nil)
	}
}
