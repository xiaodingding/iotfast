import request from '/@/utils/request'
// 查询设备类别列表
export function listDeviceCategoty(query:Object) {
  return request({
    url: '/api/v1/device/deviceCategoty/list',
    method: 'get',
    params: query
  })
}
// 查询设备类别详细
export function getDeviceCategoty(id:number) {
  return request({
    url: '/api/v1/device/deviceCategoty/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增设备类别
export function addDeviceCategoty(data:Object) {
  return request({
    url: '/api/v1/device/deviceCategoty/add',
    method: 'post',
    data: data
  })
}
// 修改设备类别
export function updateDeviceCategoty(data:Object) {
  return request({
    url: '/api/v1/device/deviceCategoty/edit',
    method: 'put',
    data: data
  })
}
// 删除设备类别
export function delDeviceCategoty(ids:number[]) {
  return request({
    url: '/api/v1/device/deviceCategoty/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
