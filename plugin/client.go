package plugin

import (
	"errors"
	"fmt"
	"io"
	"iotfast/server/mqtt/pkg/packets"
	"net"
	"reflect"
	"sync"
	"sync/atomic"
	"time"
	"iotfast/plugin/internal/raw"

	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

// Client status
const (
	Connecting = iota
	Connected
)

const (
	readBufferSize  = 1024
	writeBufferSize = 1024
)

var (
	bufioReaderPool sync.Pool
	bufioWriterPool sync.Pool
)

type Client interface {
	Version() int
	// ConnectedAt returns the connected time
	ConnectedAt() time.Time
	// Connection returns the raw net.Conn
	Connection() net.Conn
	// Close closes the client connection.
	Close()
	// Disconnect sends a disconnect packet to client, it is use to close v5 client.
	Disconnect()
}

// client represents a MQTT client and implements the Client interface
type client struct {
	connectedAt int64
	server      *server

	wg sync.WaitGroup

	close     chan struct{}
	closed    chan struct{}
	connected chan struct{}

	status int32

	rwc net.Conn //raw tcp connection

	error   chan error
	errOnce sync.Once
	err     error

	keepalive int
	version   int
}

//Status returns client's status
func (client *client) Status() int32 {
	return atomic.LoadInt32(&client.status)
}

// IsConnected returns whether the client is connected or not.
func (client *client) IsConnected() bool {
	return client.Status() == Connected
}

func (client *client) setConnecting() {
	atomic.StoreInt32(&client.status, Connecting)
}

func (client *client) Close() {
	if client.rwc != nil {
		_ = client.rwc.Close()
	}
}

func (client *client) ConnectedAt() time.Time {
	return time.Unix(atomic.LoadInt64(&client.connectedAt), 0)
}

func (client *client) Version() int {
	return client.version
}

// Connection returns the raw net.Conn
func (client *client) Connection() net.Conn {
	return client.rwc
}

func (client *client) Disconnect() {
	// client.write(disconnect)
}

func (client *client) readLoop() {
	var err error
	var packet []byte
	// srv := client.server
	defer func() {
		if re := recover(); re != nil {
			err = errors.New(fmt.Sprint(re))
		}
	}()

	// client.error <- err
    code := raw.NewClientRawCodec(client.rwc)
	for {
		if client.IsConnected() {
			if client.keepalive != 0 { //KeepAlive
				keepAlive := client.keepalive
				_ = client.rwc.SetReadDeadline(time.Now().Add(time.Duration(keepAlive/2+keepAlive) * time.Second))
			}
		}

		packet, err = code.Read()
		if err != nil {
			if err != io.EOF && packet != nil {
				zaplog.Error("read error", zap.String("packet_type", reflect.TypeOf(packet).String()))
			}
			return
		}

		
		client.in <- packet
		<-client.connected
	}

}

func (client *client) writeLoop() {
	var err error
	// srv := client.server
	defer func() {
		if re := recover(); re != nil {
			err = errors.New(fmt.Sprint(re))
		}

	}()

	client.error <- err
}

func (client *client) internalClose() {
	if client.IsConnected() {

	}

	close(client.closed)
}

func (client *client) connectWithTimeOut() (ok bool) {
	return true
}

//server goroutine结束的条件:1客户端断开连接 或 2发生错误
func (client *client) serve() {
	defer client.internalClose()
	readWg := &sync.WaitGroup{}

	readWg.Add(1)
	go func() { //read
		client.readLoop()
		readWg.Done()
	}()

	client.wg.Add(1)
	go func() { //write
		client.writeLoop()
		client.wg.Done()
	}()

	if ok := client.connectWithTimeOut(); ok {
		// client.wg.Add(2)
		// go func() {
		// 	//client.pollMessageHandler()
		// 	client.wg.Done()
		// }()
		// go func() {
		// 	//client.readHandle()
		// 	client.wg.Done()
		// }()
		fmt.Print("connect ok")
	}
	readWg.Wait()

	client.wg.Wait()
	_ = client.rwc.Close()
}
