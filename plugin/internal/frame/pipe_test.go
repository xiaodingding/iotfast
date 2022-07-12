package frame

import (
	"io"
	"testing"

	"github.com/stretchr/testify/assert"
)

const TestPipePayload = `alsdjf;lskjdgljasg;lkjsalfkjaskldjflkasjdf;lkasjfdalksdjflkajsdf;lfasdgnslsnblna;sldjjfawlkejr;lwjenlksndlfjawl;ejr;lwjelkrjaldfjl;sdjf`

func TestPipeReceive(t *testing.T) {
	pr, pw := io.Pipe()

	relay := NewPipeRelay(pr, pw)

	nf := NewFrame()
	nf.WriteVersion(nf.Header(), Version1)
	nf.WriteFlags(nf.Header(), CONTROL, CodecGob, CodecJSON)
	nf.WritePayloadLen(nf.Header(), uint32(len([]byte(TestPipePayload))))
	nf.WritePayload([]byte(TestPipePayload))
	nf.WriteCRC(nf.Header())
	assert.Equal(t, true, nf.VerifyCRC(nf.Header()))

	go func(frame *Frame) {
		defer func() {
			_ = pw.Close()
		}()
		err := relay.Send(nf)
		assert.NoError(t, err)
		_ = pw.Close()
	}(nf)

	fr := NewFrame()
	err := relay.Receive(fr)
	if err != nil {
		t.Fatal(err)
	}

	assert.Equal(t, fr.ReadVersion(fr.Header()), nf.ReadVersion(nf.Header()))
	assert.Equal(t, fr.ReadFlags(), nf.ReadFlags())
	assert.Equal(t, fr.ReadPayloadLen(fr.Header()), nf.ReadPayloadLen(nf.Header()))
	assert.Equal(t, true, fr.VerifyCRC(nf.Header()))
	assert.Equal(t, []byte(TestPipePayload), fr.Payload())
}

func TestPipeReceiveWithOptions(t *testing.T) {
	pr, pw := io.Pipe()

	relay := NewPipeRelay(pr, pw)

	nf := NewFrame()
	nf.WriteVersion(nf.Header(), Version1)
	nf.WriteFlags(nf.Header(), CONTROL, CodecGob, CodecJSON)
	nf.WritePayloadLen(nf.Header(), uint32(len([]byte(TestPipePayload))))
	nf.WritePayload([]byte(TestPipePayload))
	nf.WriteOptions(nf.HeaderPtr(), 100, 10000, 100000)
	nf.WriteCRC(nf.Header())
	assert.Equal(t, true, nf.VerifyCRC(nf.Header()))

	go func(frame *Frame) {
		defer func() {
			_ = pw.Close()
		}()
		err := relay.Send(nf)
		assert.NoError(t, err)
		_ = pw.Close()
	}(nf)

	fr := NewFrame()
	err := relay.Receive(fr)
	if err != nil {
		t.Fatal(err)
	}

	assert.Equal(t, fr.ReadVersion(fr.Header()), nf.ReadVersion(nf.Header()))
	assert.Equal(t, fr.ReadFlags(), nf.ReadFlags())
	assert.Equal(t, fr.ReadPayloadLen(fr.Header()), nf.ReadPayloadLen(nf.Header()))
	assert.Equal(t, true, fr.VerifyCRC(fr.Header()))
	assert.Equal(t, []byte(TestPipePayload), fr.Payload())
	assert.Equal(t, []uint32{100, 10000, 100000}, fr.ReadOptions(fr.Header()))
}

func TestPipeCRC_Failed(t *testing.T) {
	pr, pw := io.Pipe()

	relay := NewPipeRelay(pr, pw)

	nf := NewFrame()
	nf.WriteVersion(nf.Header(), Version1)
	nf.WriteFlags(nf.Header(), CONTROL)
	nf.WritePayloadLen(nf.Header(), uint32(len([]byte(TestPipePayload))))

	assert.Equal(t, false, nf.VerifyCRC(nf.Header()))

	nf.WritePayload([]byte(TestPipePayload))

	go func(frame *Frame) {
		defer func() {
			_ = pw.Close()
		}()
		err := relay.Send(nf)
		assert.NoError(t, err)
		_ = pw.Close()
	}(nf)

	fr := NewFrame()
	err := relay.Receive(fr)
	assert.Error(t, err)
	assert.False(t, fr.VerifyCRC(fr.Header()))

	assert.Empty(t, fr.Payload())
}
