package server

import (
	"github.com/xiaodingding/iotfast/server/mqtt/config"

	"github.com/xiaodingding/iotfast/server/mqtt/persistence/queue"
	"github.com/xiaodingding/iotfast/server/mqtt/persistence/session"
	"github.com/xiaodingding/iotfast/server/mqtt/persistence/subscription"
	"github.com/xiaodingding/iotfast/server/mqtt/persistence/unack"
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
