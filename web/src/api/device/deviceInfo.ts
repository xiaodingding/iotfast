import request from '/@/utils/request'
// 查询设备信息列表
export function listDeviceInfo(query:Object) {
  return request({
    url: '/api/v1/device/deviceInfo/list',
    method: 'get',
    params: query
  })
}
// 查询设备信息详细
export function getDeviceInfo(id:number) {
  return request({
    url: '/api/v1/device/deviceInfo/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增设备信息
export function addDeviceInfo(data:Object) {
  return request({
    url: '/api/v1/device/deviceInfo/add',
    method: 'post',
    data: data
  })
}
// 修改设备信息
export function updateDeviceInfo(data:Object) {
  return request({
    url: '/api/v1/device/deviceInfo/edit',
    method: 'put',
    data: data
  })
}
// 删除设备信息
export function delDeviceInfo(ids:number[]) {
  return request({
    url: '/api/v1/device/deviceInfo/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
// 关联device_group表选项
export function listDeviceGroup(query:Object){
   return request({
     url: '/api/v1/device/deviceGroup/list',
     method: 'get',
     params: query
   })
}
