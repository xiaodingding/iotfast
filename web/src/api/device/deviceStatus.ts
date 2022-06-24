import request from '/@/utils/request'
// 查询设备状态列表
export function listDeviceStatus(query:Object) {
  return request({
    url: '/api/v1/device/deviceStatus/list',
    method: 'get',
    params: query
  })
}
// 查询设备状态详细
export function getDeviceStatus(id:number) {
  return request({
    url: '/api/v1/device/deviceStatus/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增设备状态
export function addDeviceStatus(data:Object) {
  return request({
    url: '/api/v1/device/deviceStatus/add',
    method: 'post',
    data: data
  })
}
// 修改设备状态
export function updateDeviceStatus(data:Object) {
  return request({
    url: '/api/v1/device/deviceStatus/edit',
    method: 'put',
    data: data
  })
}
// 删除设备状态
export function delDeviceStatus(ids:number[]) {
  return request({
    url: '/api/v1/device/deviceStatus/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
// 设备状态状态修改
export function changeDeviceStatusStatus(id:number,status:Object) {
  const data = {
    id,
    status
  }
  return request({
   // url: '/api/v1/device/deviceStatus/changeStatus',
    url: '/api/v1/device/deviceStatus/status',
    method: 'put',
    data:data
  })
}
