package frame

import (
	"net"
	"testing"

	"github.com/stretchr/testify/assert"
)

const TestTransferPayload = `alsdjf;lskjdgljasg;lkjsalfkjaskldjflkasjdf;lkasjfdalksdjflkajsdf;lfasdgnslsnblna;sldjjfawlkejr;lwjenlksndlfjawl;ejr;lwjelkrjaldfjl;sdjf`

func TestSocketRelay(t *testing.T) {
	// configure and create tcp4 listener
	ls, err := net.Listen("tcp", "localhost:10002")
	assert.NoError(t, err)

	// TEST FRAME TO SEND
	nf := NewFrame()
	nf.WriteVersion(nf.Header(), Version1)
	nf.WriteFlags(nf.Header(), CONTROL, CodecGob, CodecJSON)
	nf.WritePayloadLen(nf.Header(), uint32(len([]byte(TestTransferPayload))))
	nf.WritePayload([]byte(TestTransferPayload))
	nf.WriteCRC(nf.Header())
	assert.Equal(t, true, nf.VerifyCRC(nf.Header()))

	conn, err := net.Dial("tcp", "localhost:10002")
	assert.NoError(t, err)
	rsend := NewTransferImp(conn)
	err = rsend.Send(nf)
	assert.NoError(t, err)

	accept, err := ls.Accept()
	assert.NoError(t, err)
	assert.NotNil(t, accept)

	r := NewTransferImp(accept)

	fr := NewFrame()
	err = r.Receive(fr)
	if err != nil {
		t.Fatal(err)
	}

	assert.Equal(t, fr.ReadVersion(fr.Header()), nf.ReadVersion(nf.Header()))
	assert.Equal(t, fr.ReadFlags(), nf.ReadFlags())
	assert.Equal(t, fr.ReadPayloadLen(fr.Header()), nf.ReadPayloadLen(nf.Header()))
	assert.Equal(t, true, fr.VerifyCRC(fr.Header()))
	assert.Equal(t, []byte(TestTransferPayload), fr.Payload())
}

func TestSocketRelayOptions(t *testing.T) {
	// configure and create tcp4 listener
	ls, err := net.Listen("tcp", "localhost:10001")
	assert.NoError(t, err)

	// TEST FRAME TO SEND
	nf := NewFrame()
	nf.WriteVersion(nf.Header(), Version1)
	nf.WriteFlags(nf.Header(), CONTROL, CodecGob, CodecJSON)
	nf.WritePayloadLen(nf.Header(), uint32(len([]byte(TestTransferPayload))))
	nf.WritePayload([]byte(TestTransferPayload))
	nf.WriteOptions(nf.HeaderPtr(), 100, 10000, 100000)
	nf.WriteCRC(nf.Header())
	assert.Equal(t, true, nf.VerifyCRC(nf.Header()))

	conn, err := net.Dial("tcp", "localhost:10001")
	assert.NoError(t, err)
	rsend := NewTransferImp(conn)
	err = rsend.Send(nf)
	assert.NoError(t, err)

	accept, err := ls.Accept()
	assert.NoError(t, err)
	assert.NotNil(t, accept)

	r := NewTransferImp(accept)

	fr := NewFrame()
	err = r.Receive(fr)
	if err != nil {
		t.Fatal(err)
	}

	assert.Equal(t, fr.ReadVersion(fr.Header()), nf.ReadVersion(nf.Header()))
	assert.Equal(t, fr.ReadFlags(), nf.ReadFlags())
	assert.Equal(t, fr.ReadPayloadLen(fr.Header()), nf.ReadPayloadLen(nf.Header()))
	assert.Equal(t, true, fr.VerifyCRC(fr.Header()))
	assert.Equal(t, []byte(TestTransferPayload), fr.Payload())
	assert.Equal(t, []uint32{100, 10000, 100000}, fr.ReadOptions(fr.Header()))
}

func TestSocketRelayNoPayload(t *testing.T) {
	// configure and create tcp4 listener
	ls, err := net.Listen("tcp", "localhost:12221")
	assert.NoError(t, err)

	// TEST FRAME TO SEND
	nf := NewFrame()
	nf.WriteVersion(nf.Header(), Version1)
	nf.WriteFlags(nf.Header(), CONTROL, CodecGob, CodecJSON)
	nf.WriteOptions(nf.HeaderPtr(), 100, 10000, 100000)
	nf.WriteCRC(nf.Header())
	assert.Equal(t, true, nf.VerifyCRC(nf.Header()))

	conn, err := net.Dial("tcp", "localhost:12221")
	assert.NoError(t, err)
	rsend := NewTransferImp(conn)
	err = rsend.Send(nf)
	assert.NoError(t, err)

	accept, err := ls.Accept()
	assert.NoError(t, err)
	assert.NotNil(t, accept)

	r := NewTransferImp(accept)

	fr := NewFrame()
	err = r.Receive(fr)
	if err != nil {
		t.Fatal(err)
	}

	assert.Equal(t, fr.ReadVersion(fr.Header()), nf.ReadVersion(nf.Header()))
	assert.Equal(t, fr.ReadFlags(), nf.ReadFlags())
	assert.Equal(t, fr.ReadPayloadLen(fr.Header()), nf.ReadPayloadLen(nf.Header()))
	assert.Equal(t, true, fr.VerifyCRC(fr.Header()))
	assert.Equal(t, []byte{}, fr.Payload()) // empty
	assert.Equal(t, []uint32{100, 10000, 100000}, fr.ReadOptions(fr.Header()))
}

func TestSocketRelayWrongCRC(t *testing.T) {
	// configure and create tcp4 listener
	ls, err := net.Listen("tcp", "localhost:13445")
	assert.NoError(t, err)

	// TEST FRAME TO SEND
	nf := NewFrame()
	nf.WriteVersion(nf.Header(), Version1)
	nf.WriteFlags(nf.Header(), CONTROL, CodecGob, CodecJSON)
	nf.WriteOptions(nf.HeaderPtr(), 100, 10000, 100000)
	nf.WriteCRC(nf.Header())
	nf.Header()[6] = 22 // just random wrong CRC directly

	conn, err := net.Dial("tcp", "localhost:13445")
	assert.NoError(t, err)
	_, err = conn.Write(nf.Bytes())
	assert.NoError(t, err)

	accept, err := ls.Accept()
	assert.NoError(t, err)
	assert.NotNil(t, accept)

	r := NewTransferImp(accept)

	fr := NewFrame()
	err = r.Receive(fr)
	assert.Error(t, err)
	assert.False(t, fr.VerifyCRC(fr.Header()))

	assert.Empty(t, fr.Payload())
}
