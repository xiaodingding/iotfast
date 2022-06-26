package server

import (
	"iotfast/server/mqtt/config"

	"iotfast/server/mqtt/persistence/queue"
	"iotfast/server/mqtt/persistence/session"
	"iotfast/server/mqtt/persistence/subscription"
	"iotfast/server/mqtt/persistence/unack"
)

type NewPersistence func(config config.Config) (Persistence, error)

type Persistence interface {
	Open() error
	NewQueueStore(config config.Config, defaultNotifier queue.Notifier, clientID string) (queue.Store, error)
	NewSubscriptionStore(config config.Config) (subscription.Store, error)
	NewSessionStore(config config.Config) (session.Store, error)
	NewUnackStore(config config.Config, clientID string) (unack.Store, error)
	Close() error
}
