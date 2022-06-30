package frame

import (
	"bytes"
	"errors"
	"fmt"
	"io"
	"time"
)

// shortland for the Could not open input file: ../roadrunner/tests/psr-wfsdorker.php
var res = []byte("Could not op") //nolint:gochecknoglobals

func ReceiveFrame(relay io.Reader, fr *Frame) error {
	const op = "goridge_frame_receive"

	_, err := io.ReadFull(relay, fr.Header())
	if err != nil {
		return err
	}

	if bytes.Equal(fr.Header(), res) {
		data, errRa := io.ReadAll(relay)
		if errRa == nil && len(data) > 0 {
			return errors.New(fmt.Sprint(op, string(fr.Header())+string(data)))
		}

		return errors.New(fmt.Sprint(op, "file not found"))
	}

	// we have options
	if fr.ReadHL(fr.Header()) > 3 {
		// we should read the options
		optsLen := (fr.ReadHL(fr.Header()) - 3) * WORD
		opts := make([]byte, optsLen)

		// read next part of the frame - options
		_, err = io.ReadFull(relay, opts)
		if err != nil {
			if errors.Is(err, io.EOF) {
				return err
			}
			return errors.New(fmt.Sprint(op, err))
		}

		// we should append frame's
		fr.AppendOptions(fr.HeaderPtr(), opts)
	}

	// verify header CRC
	if !fr.VerifyCRC(fr.Header()) {
		type deadliner interface {
			SetReadDeadline(time.Time) error
		}

		if d, ok := relay.(deadliner); ok {
			err = d.SetReadDeadline(time.Now().Add(time.Second * 2))
			if err != nil {
				return errors.New(op + fmt.Sprintf("CRC verification failed, bad header: %s", fr.Header()))
			}

			// we don't care about error here
			resp, _ := io.ReadAll(relay)

			return errors.New(fmt.Sprint(op, fmt.Sprintf("CRC verification failed: %s", string(fr.Header())+string(resp))))
		}

		// no deadline, so, only 14 bytes
		return errors.New(fmt.Sprint(op, fmt.Sprintf("CRC verification failed: %s", fr.Header())))
	}

	// read the read payload
	pl := fr.ReadPayloadLen(fr.Header())
	// no payload
	if pl == 0 {
		return nil
	}

	pb := get(pl)
	_, err2 := io.ReadFull(relay, (*pb)[:pl])
	if err2 != nil {
		if errors.Is(err2, io.EOF) {
			put(pl, pb)
			return err
		}
		put(pl, pb)
		return errors.New(fmt.Sprint(op, err2))
	}

	fr.WritePayload((*pb)[:pl])
	put(pl, pb)
	return nil
}

func ReceiveBinaryFrame(relay io.Reader, fr *Frame) error {
	const op = "recv raw frame"
	_, err := io.ReadFull(relay, fr.Header())
	if err != nil {
		return err
	}
	// we have options
	if fr.ReadHL(fr.Header()) > 3 {
		// we should read the options
		optsLen := (fr.ReadHL(fr.Header()) - 3) * WORD
		opts := make([]byte, optsLen)

		// read next part of the frame - options
		_, err = io.ReadFull(relay, opts)
		if err != nil {
			if errors.Is(err, io.EOF) {
				return err
			}
			return errors.New(fmt.Sprint(op, err))
		}

		// we should append frame's
		fr.AppendOptions(fr.HeaderPtr(), opts)
	}

	// verify header CRC
	if !fr.VerifyCRC(fr.Header()) {
		type deadliner interface {
			SetReadDeadline(time.Time) error
		}

		if d, ok := relay.(deadliner); ok {
			err = d.SetReadDeadline(time.Now().Add(time.Second * 2))
			if err != nil {
				return errors.New(op + fmt.Sprintf("CRC verification failed, bad header: %s", fr.Header()))
			}

			// we don't care about error here
			resp, _ := io.ReadAll(relay)

			return errors.New(fmt.Sprint(op, fmt.Sprintf("CRC verification failed: %s", string(fr.Header())+string(resp))))
		}

		// no deadline, so, only 14 bytes
		return errors.New(fmt.Sprint(op, fmt.Sprintf("CRC verification failed: %s", fr.Header())))
	}

	// read the read payload
	pl := fr.ReadPayloadLen(fr.Header())
	// no payload
	if pl == 0 {
		return nil
	}

	pb := get(pl)
	_, err2 := io.ReadFull(relay, (*pb)[:pl])
	if err2 != nil {
		if errors.Is(err2, io.EOF) {
			put(pl, pb)
			return err
		}
		put(pl, pb)
		return errors.New(fmt.Sprint(op, err2))
	}

	fr.WritePayload((*pb)[:pl])
	put(pl, pb)
	return nil
}
