package frame

import (
	"errors"
	"io"
)

// TransferImp communicates with underlying process using sockets (TPC or Unix).
type TransferImp struct {
	rwc io.ReadWriteCloser
}

// NewSocketRelay creates new socket based data relay.
func NewTransferImp(rwc io.ReadWriteCloser) *TransferImp {
	Preallocate()
	return &TransferImp{rwc: rwc}
}

// Send signed (prefixed) data to PHP process.
func (rl *TransferImp) Send(frame *Frame) error {
	const op = ("pipes frame send")
	_, err := rl.rwc.Write(frame.Bytes())
	if err != nil {
		return errors.New(op + err.Error())
	}
	return nil
}

// Receive data from the underlying process and returns associated prefix or error.
func (rl *TransferImp) Receive(frame *Frame) error {
	if frame == nil {
		return errors.New("nil frame")
	}
	return ReceiveFrame(rl.rwc, frame)
}

// Close the connection.
func (rl *TransferImp) Close() error {
	return rl.rwc.Close()
}
