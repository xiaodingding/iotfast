package libLua

type vmPool struct {
	maxVmCount int
	vmQueue    []*luaVm
	idleVmDic  map[uintptr]*luaVm
	inUseVmDic map[uintptr]*luaVm
}

func newVMPool(maxVmCount int) *vmPool {
	if maxVmCount < 0 {
		maxVmCount = 4
	}
	if maxVmCount > 16 {
		maxVmCount = 16
	}
	return &vmPool{
		maxVmCount: maxVmCount,
		vmQueue:    make([]*luaVm, 0),
		inUseVmDic: make(map[uintptr]*luaVm),
		idleVmDic:  make(map[uintptr]*luaVm),
	}
}

func (vp *vmPool) accquire() *luaVm {
	defer func() {
		metricGauge("glua_vm_idle_count", int64(len(vp.idleVmDic)), nil)
		metricGauge("glua_vm_inuse_count", int64(len(vp.inUseVmDic)), nil)
	}()

	// check idle vm
	if len(vp.vmQueue) > 0 {
		vm := vp.vmQueue[0]
		if len(vp.vmQueue) == 1 {
			vp.vmQueue = []*luaVm{}
		} else {
			vp.vmQueue = vp.vmQueue[1:]
		}
		delete(vp.idleVmDic, vm.stateId)
		vp.inUseVmDic[vm.stateId] = vm
		return vm
	}

	// create new vm
	if len(vp.inUseVmDic) == vp.maxVmCount {
		return nil
	}
	vm := newLuaVm()
	vp.inUseVmDic[vm.stateId] = vm
	return vm
}

func (vp *vmPool) release(vm *luaVm) {
	defer func() {
		metricGauge("glua_vm_idle_count", int64(len(vp.idleVmDic)), nil)
		metricGauge("glua_vm_inuse_count", int64(len(vp.inUseVmDic)), nil)
	}()
	delete(vp.inUseVmDic, vm.stateId)
	if vm.needDestory && vm.resumeCount == 0 {
		vm.destory()
	} else {
		vp.idleVmDic[vm.stateId] = vm
		vp.vmQueue = append(vp.vmQueue, vm)
	}
}

func (vp *vmPool) find(stateId uintptr) *luaVm {
	defer func() {
		metricGauge("glua_vm_idle_count", int64(len(vp.idleVmDic)), nil)
		metricGauge("glua_vm_inuse_count", int64(len(vp.inUseVmDic)), nil)
	}()

	vm, ok := vp.idleVmDic[stateId]
	if !ok {
		return nil
	}

	vp.inUseVmDic[vm.stateId] = vm
	delete(vp.idleVmDic, stateId)

	index := 0
	for index, _ = range vp.vmQueue {
		if vp.vmQueue[index].stateId == vm.stateId {
			break
		}
	}

	switch {
	case len(vp.vmQueue) == 1:
		vp.vmQueue = []*luaVm{}
	case index == len(vp.vmQueue)-1:
		vp.vmQueue = vp.vmQueue[:index]
	case index == 0:
		vp.vmQueue = vp.vmQueue[1:]
	default:
		vp.vmQueue = append(vp.vmQueue[:index], vp.vmQueue[index+1:]...)
	}
	return vm
}
