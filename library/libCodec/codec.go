package libCodec

import (
	"context"
	"sync"

	"bytes"
	"encoding/gob"

	"github.com/gogf/gf/v2/os/gtime"
	"github.com/xiaodingding/iotfast/internal/app/device/model"
)

var (
	codecs = make(map[string]Codec)
	mutex  sync.Mutex
)

type DeviceEvent struct {
	Name string
	Data interface{}
}

type DeviceData struct {
	CategoryId int
	Name       string
	Type       int
	Data       interface{}
	Time       *gtime.Time
	Ratio      string
}

type DeviceDecodeMsg struct {
	dataList   []*DeviceData
	eventList  []*DeviceEvent
	deviceInfo *model.DeviceAllInfo
}

type Codec interface {
	Encode(ctx context.Context, rawData interface{}) (*DeviceDecodeMsg, error)
	Decode(ctx context.Context, msg DeviceData) (interface{}, error)
	Save(ctx context.Context, dmesg *DeviceDecodeMsg) error
}

func Register(name string, c Codec) {
	mutex.Lock()
	defer mutex.Unlock()
	if codecs == nil {
		panic("sql: Register driver is nil")
	}
	if _, dup := codecs[name]; dup {
		panic("sql: Register called twice for driver " + name)
	}
	codecs[name] = c
}

func InterfaceToBytes(key interface{}) ([]byte, error) {
	var buf bytes.Buffer
	enc := gob.NewEncoder(&buf)
	err := enc.Encode(key)
	if err != nil {
		return nil, err
	}
	return buf.Bytes(), nil
}
