package server

import (
	"bufio"
	"context"
	"sync"

	// "errors"
	"fmt"
	"io"

	// "net"
	"iotfast/plugin/common"
	"os"
	"os/exec"
	"time"

	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/text/gstr"
	// "github.com/gogf/gf/util/gconv"
)

type Plugin struct {
	exe string

	cfg common.PluginCfg

	status int32

	sync.RWMutex

	initTimeout time.Duration
	exitTimeout time.Duration

	// Executable
	proc *os.Process
	// Get output lines from subprocess
	linesCh chan string

	id string

	running bool
	// Get notification from Wait on the subprocess
	waitCh chan error

	//告知该链接已经退出/停止的channel
	ctx    context.Context
	cancel context.CancelFunc

	register func(p *Plugin) (err error)
	// unregister requests the broker to remove the client from the "active client list" when the client is disconnected.
	unregister func(p *Plugin)
}

// NewPlugin create a new plugin ready to be started, or returns an error if the initial setup fails.
//
// The first argument specifies the protocol. It can be either set to "unix" for communication on an
// ephemeral local socket, or "tcp" for network communication on the local host (using a random
// unprivileged port.)
//
// This constructor will panic if the proto argument is neither "unix" nor "tcp".
//
// The path to the plugin executable should be absolute. Any path accepted by the "exec" package in the
// standard library is accepted and the same rules for execution are applied.
//
// Optionally some parameters might be passed to the plugin executable.
func NewPlugin(path string, id string, cfg common.PluginCfg) *Plugin {
	p := &Plugin{
		exe:         path,
		cfg:         cfg,
		running:     false,
		initTimeout: 2 * time.Second,
		exitTimeout: 2 * time.Second,
		waitCh:      make(chan error),
		id:          id,
	}
	return p
}

// Set the maximum time a plugin is allowed to start up and to shut down.  Empty timeout (zero)
// is not allowed, default will be used.
//
// Default is two seconds.
//
// Panics if called after Start.
func (p *Plugin) SetTimeout(t time.Duration) {
	if p.running {
		panic("Cannot call SetTimeout after Start")
	}
	if t == 0 {
		return
	}
	p.initTimeout = t
	p.exitTimeout = t
}

func (p *Plugin) SetSocketDirectory(dir string) {
	if p.running {
		panic("Cannot call SetSocketDirectory after Start")
	}
	p.cfg.Unixdir = dir
}

// Default string representation
func (p *Plugin) String() string {
	return fmt.Sprintf("plugin_%s", p.exe)
}

// Stop attemps to stop cleanly or kill the running plugin, then will free all resources.
// Stop returns when the plugin as been shut down and related routines have exited.
func (p *Plugin) Stop() {
	p.Lock()
	defer p.Unlock()

	if p.status == common.PluginRun || p.running == true {
		p.close()
	} else {

	}
}

func (p *Plugin) readOutput(r io.Reader) {
	scanner := bufio.NewScanner(r)

	for scanner.Scan() {
		p.linesCh <- scanner.Text()
	}
}

func (p *Plugin) Wait(ctx context.Context, pidCh chan<- int, exe string, params string) {
	defer close(p.waitCh)

	params = gstr.Replace(params, "\"", "'")
	fmt.Printf("wait cmd param:exe:%s, params:%s \n", exe, params)

	cmd := exec.CommandContext(ctx, exe, params)

	stdout, err := cmd.StdoutPipe()
	if err != nil {
		fmt.Printf("run exe(%s) pidCh(%d) get stdout error:%v \n", exe, pidCh, err)
		return
	}

	stderr, err := cmd.StderrPipe()
	if err != nil {
		fmt.Printf("run exe(%s) pidCh(%d) get stderr error:%v \n", exe, pidCh, err)
		return
	}

	if err := cmd.Start(); err != nil {
		fmt.Printf("run exe(%s) pidCh(%d) cmd start error:%v \n", exe, pidCh, err)
		pidCh <- 0
		close(pidCh)
		return
	} else {
		fmt.Printf("run exe(%s) pidCh(%d) cmd start successful\n", exe, pidCh)
	}

	pidCh <- cmd.Process.Pid
	close(pidCh)

	p.readOutput(stdout)
	p.readOutput(stderr)

	p.waitCh <- cmd.Wait()
}

func (p *Plugin) kill() {
	if p.proc == nil {
		return
	}
	// Ignore errors here because Kill might have been called after
	// process has ended.
	p.proc.Kill()
	p.proc = nil
}

func (p *Plugin) close() {
	p.cancel()

	if p.waitCh != nil {
		close(p.waitCh)
		p.waitCh = nil
	}

	if p.linesCh != nil {
		close(p.linesCh)
		p.linesCh = nil
	}

	if p.unregister != nil {
		p.unregister(p)
	}

	if p.proc != nil {
		p.proc.Kill()
		p.proc = nil
	}

	p.running = false
	p.status = common.PluginStop

}

func (p *Plugin) GetId() string {
	return p.id

}

// Start will execute the plugin as a subprocess. Start will return immediately. Any first call to the
// plugin will reveal eventual errors occurred at initialization.
//
// Calls subsequent to Start will hang until the plugin has been properly initialized.
func (p *Plugin) Start() {
	defer p.close()
	p.running = true
	p.status = common.PluginStarting

	params, err := gjson.Marshal(p.cfg)
	if err != nil {
		fmt.Println("plugin param to json err:", err)
		return
	}

	p.ctx, p.cancel = context.WithCancel(context.Background())

	pidCh := make(chan int)
	go p.Wait(p.ctx, pidCh, p.exe, string(params))
	pid := <-pidCh

	if pid != 0 {
		if proc, err := os.FindProcess(pid); err == nil {
			p.proc = proc
		}
	} else {
		p.status = common.PluginErr
		fmt.Println("plugin start error,will exit")
		return
	}

	if p.register != nil {
		p.register(p)
	}

	p.status = common.PluginRun

	for {
		select {
		case line := <-p.linesCh:
			fmt.Print(line)
		case err := <-p.waitCh:
			if err != nil {
				if _, ok := err.(*exec.ExitError); !ok {
					fmt.Printf("proc name(%s) path(%s) have err::%s \n", "unknow", p.exe, err)
				}
				fmt.Printf("proc(%s) error:%s \n", p.exe, err)
			}

			p.proc = nil
			p.waitCh = nil
			p.linesCh = nil
		case <-p.ctx.Done():
			if p.waitCh == nil {
				close(p.waitCh)
				continue
			}

			// Be sure to kill the process if it doesn't obey Exit.
			go func(pid int, t time.Duration) {
				<-time.After(t)
				if proc, err := os.FindProcess(pid); err == nil {
					proc.Kill()
				}
			}(pid, p.exitTimeout)
			return
		}

	}

}
