import request from '/@/utils/request'
// 查询设备标签列表
export function listDeviceLabel(query:Object) {
  return request({
    url: '/api/v1/device/deviceLabel/list',
    method: 'get',
    params: query
  })
}
// 查询设备标签详细
export function getDeviceLabel(id:number) {
  return request({
    url: '/api/v1/device/deviceLabel/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增设备标签
export function addDeviceLabel(data:Object) {
  return request({
    url: '/api/v1/device/deviceLabel/add',
    method: 'post',
    data: data
  })
}
// 修改设备标签
export function updateDeviceLabel(data:Object) {
  return request({
    url: '/api/v1/device/deviceLabel/edit',
    method: 'put',
    data: data
  })
}
// 删除设备标签
export function delDeviceLabel(ids:number[]) {
  return request({
    url: '/api/v1/device/deviceLabel/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
