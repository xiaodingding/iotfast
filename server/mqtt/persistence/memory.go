package persistence

import (
	"iotfast/server/mqtt/persistence/queue"
	mem_queue "iotfast/server/mqtt/persistence/queue/mem"
	"iotfast/server/mqtt/persistence/session"
	mem_session "iotfast/server/mqtt/persistence/session/mem"
	"iotfast/server/mqtt/persistence/subscription"
	mem_sub "iotfast/server/mqtt/persistence/subscription/mem"
	"iotfast/server/mqtt/persistence/unack"
	mem_unack "iotfast/server/mqtt/persistence/unack/mem"

	"iotfast/server/mqtt/config"

	"iotfast/server/mqtt/server"
)

func init() {
	server.RegisterPersistenceFactory("memory", NewMemory)
}

func NewMemory(config config.Config) (server.Persistence, error) {
	return &memory{}, nil
}

type memory struct {
}

func (m *memory) NewUnackStore(config config.Config, clientID string) (unack.Store, error) {
	return mem_unack.New(mem_unack.Options{
		ClientID: clientID,
	}), nil
}

func (m *memory) NewSessionStore(config config.Config) (session.Store, error) {
	return mem_session.New(), nil
}

func (m *memory) Open() error {
	return nil
}
func (m *memory) NewQueueStore(config config.Config, defaultNotifier queue.Notifier, clientID string) (queue.Store, error) {
	return mem_queue.New(mem_queue.Options{
		MaxQueuedMsg:    config.MQTT.MaxQueuedMsg,
		InflightExpiry:  config.MQTT.InflightExpiry,
		ClientID:        clientID,
		DefaultNotifier: defaultNotifier,
	})
}

func (m *memory) NewSubscriptionStore(config config.Config) (subscription.Store, error) {
	return mem_sub.NewStore(), nil
}

func (m *memory) Close() error {
	return nil
}
