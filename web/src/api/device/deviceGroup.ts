import request from '/@/utils/request'
// 查询设备分组列表
export function listDeviceGroup(query:Object) {
  return request({
    url: '/api/v1/device/deviceGroup/list',
    method: 'get',
    params: query
  })
}
// 查询设备分组详细
export function getDeviceGroup(id:number) {
  return request({
    url: '/api/v1/device/deviceGroup/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增设备分组
export function addDeviceGroup(data:Object) {
  return request({
    url: '/api/v1/device/deviceGroup/add',
    method: 'post',
    data: data
  })
}
// 修改设备分组
export function updateDeviceGroup(data:Object) {
  return request({
    url: '/api/v1/device/deviceGroup/edit',
    method: 'put',
    data: data
  })
}
// 删除设备分组
export function delDeviceGroup(ids:number[]) {
  return request({
    url: '/api/v1/device/deviceGroup/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
