import request from '/@/utils/request'
// 查询设备种类列表
export function listDeviceKind(query:Object) {
  return request({
    url: '/api/v1/device/deviceKind/list',
    method: 'get',
    params: query
  })
}
// 查询设备种类详细
export function getDeviceKind(id:number) {
  return request({
    url: '/api/v1/device/deviceKind/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增设备种类
export function addDeviceKind(data:Object) {
  return request({
    url: '/api/v1/device/deviceKind/add',
    method: 'post',
    data: data
  })
}
// 修改设备种类
export function updateDeviceKind(data:Object) {
  return request({
    url: '/api/v1/device/deviceKind/edit',
    method: 'put',
    data: data
  })
}
// 删除设备种类
export function delDeviceKind(ids:number[]) {
  return request({
    url: '/api/v1/device/deviceKind/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
