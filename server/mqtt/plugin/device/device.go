package device

import (
	"sync"

	"go.uber.org/zap"

	"iotfast/server/mqtt/config"
	"iotfast/server/mqtt/plugin/admin"
	"iotfast/server/mqtt/server"
)

var _ server.Plugin = (*Device)(nil)

const Name = "device"

func init() {
	server.RegisterPlugin(Name, New)
	config.RegisterDefaultPluginConfig(Name, &DefaultConfig)
}

func New(config config.Config) (server.Plugin, error) {
	//panic("implement me")
	d := &Device{
		config:  config.Plugins[Name].(*Config),
		indexer: admin.NewIndexer(),
		pwdDir:  config.ConfigDir,
	}
	return d, nil
}

var log *zap.Logger

type Device struct {
	config *Config
	pwdDir string
	// gard indexer
	mu sync.RWMutex
	// store username/password
	indexer *admin.Indexer
	// saveFile persists the account data to password file.
	saveFile func() error
}

func (d *Device) Load(service server.Server) error {
	log = server.LoggerWithField(zap.String("plugin", Name))
	// panic("implement me")
	return nil
}

func (d *Device) Unload() error {
	// panic("implement me")
	return nil
}

func (d *Device) Name() string {
	return Name
}
