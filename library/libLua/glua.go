package libLua

import (
	"sync"
)

var (
	globalOpts *Options
	locker     sync.Mutex
)

func init() {
	globalOpts = NewOptions()
}

type Metric interface {
	Counter(name string, value int64, labels map[string]string)
	Gauge(name string, value int64, labels map[string]string)
}

type Options struct {
	maxVmSize           int
	preloadScriptMethod func() string
	metricHandle        Metric
}

func NewOptions() *Options {
	return &Options{
		maxVmSize: 4,
	}
}

func (opt *Options) WithMaxVMSize(maxVmSize int) *Options {
	opt.maxVmSize = maxVmSize
	return opt
}

func (opt *Options) SetPreloadScripeMethod(method func() string) *Options {
	opt.preloadScriptMethod = method
	return opt
}

func (opt *Options) SetMetric(handle Metric) *Options {
	opt.metricHandle = handle
	return opt
}

func GlobalOptions(opts *Options) {
	locker.Lock()
	defer locker.Unlock()
	globalOpts = opts
}

// metric
func metricCounter(name string, value int64, labels map[string]string) {
	if globalOpts.metricHandle != nil {
		globalOpts.metricHandle.Counter(name, value, labels)
	}
}

func metricGauge(name string, value int64, labels map[string]string) {
	if globalOpts.metricHandle != nil {
		globalOpts.metricHandle.Gauge(name, value, labels)
	}
}
