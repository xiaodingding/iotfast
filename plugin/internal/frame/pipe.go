package frame

import (
	"io"

	"github.com/pkg/errors"
)

// Pipe ... PipeRelay communicate with underlying process using standard streams (STDIN, STDOUT). Attention, use TCP alternative for
// Windows as more reliable option. This Pipe closes automatically with the process.
type Pipe struct {
	in  io.ReadCloser
	out io.WriteCloser
}

// NewPipeRelay creates new pipe based data Pipe.
func NewPipeRelay(in io.ReadCloser, out io.WriteCloser) *Pipe {
	Preallocate()
	return &Pipe{in: in, out: out}
}

// Send signed (prefixed) data to underlying process.
func (rl *Pipe) Send(frame *Frame) error {
	const op = "pipes frame send"
	_, err := rl.out.Write(frame.Bytes())
	if err != nil {
		return errors.New(op + err.Error())
	}
	return nil
}

func (rl *Pipe) Receive(frame *Frame) error {
	if frame == nil {
		return errors.New("nil frame")
	}
	return ReceiveFrame(rl.in, frame)
}

// Close the connection. Pipes are closed automatically with the underlying process.
func (rl *Pipe) Close() error {
	return nil
}
