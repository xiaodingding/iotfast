package raw

import (
	"bytes"
	"io"
	"sync"

	"github.com/xiaodingding/iotfast/plugin/internal/frame"

	"github.com/pkg/errors"
)

// ClientRawCodec is codec for goridge connection.
type ClientRawCodec struct {
	// bytes sync.Pool
	bPool sync.Pool
	fPool sync.Pool

	transfer frame.Transfer
	closed   bool
	frame    *frame.Frame
}

// NewClientRawCodec initiates new server rpc codec over socket connection.
func NewClientRawCodec(rwc io.ReadWriteCloser) *ClientRawCodec {
	return &ClientRawCodec{
		bPool: sync.Pool{New: func() interface{} {
			return new(bytes.Buffer)
		}},

		fPool: sync.Pool{New: func() interface{} {
			return frame.NewFrame()
		}},

		transfer: frame.NewTransferImp(rwc),
	}
}

func (c *ClientRawCodec) get() *bytes.Buffer {
	return c.bPool.Get().(*bytes.Buffer)
}

func (c *ClientRawCodec) put(b *bytes.Buffer) {
	b.Reset()
	c.bPool.Put(b)
}

func (c *ClientRawCodec) GetFrame() *frame.Frame {
	return c.fPool.Get().(*frame.Frame)
}

func (c *ClientRawCodec) PutFrame(f *frame.Frame) {
	f.Reset()
	c.fPool.Put(f)
}

// WriteRequest writes request to the connection. Sequential.
func (c *ClientRawCodec) Write(data []byte) error {
	const op = "goridge_write_request"

	// get a frame from the pool
	fr := c.GetFrame()
	defer c.PutFrame(fr)

	// get a buffer from the pool
	buf := c.get()
	defer c.put(buf)

	buf.Write(data)
	// use fallback as gob
	fr.WriteVersion(fr.Header(), frame.Version1)
	fr.WriteFlags(fr.Header(), frame.CodeBinary)
	fr.WritePayloadLen(fr.Header(), uint32(buf.Len()))
	fr.WritePayload(buf.Bytes())
	fr.WriteCRC(fr.Header())

	err := c.transfer.Send(fr)
	if err != nil {
		return errors.New(op + err.Error())
	}
	return nil
}

// ReadResponseBody response from the connection.
func (c *ClientRawCodec) Read() (out []byte, err error) {
	const op = "client_raw_read:"

	fr := c.GetFrame()

	err = c.transfer.Receive(fr)
	if err != nil {
		return nil, errors.New(op + err.Error())
	}
	if !fr.VerifyCRC(fr.Header()) {
		return nil, errors.New(op + ("CRC verification failed"))
	}

	// save the frame after CRC verification
	// c.frame = fr

	opts := c.frame.ReadOptions(fr.Header())
	if len(opts) != 2 {
		return nil, errors.New(op + ("should be 2 options. SEQ_ID and METHOD_LEN"))
	}

	payload := c.frame.Payload()
	if len(payload) == 0 {
		return nil, errors.New(op + ("no payload"))
	}

	buf := c.get()
	defer c.put(buf)

	buf.Write(payload)

	out = buf.Bytes()
	return
}

// Close closes the client connection.
func (c *ClientRawCodec) Close() error {
	if c.closed {
		return nil
	}

	c.closed = true
	return c.transfer.Close()
}
