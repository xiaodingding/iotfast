import request from '/@/utils/request'
// 查询设备标签数据列表
export function listDeviceLabelData(query:Object) {
  return request({
    url: '/api/v1/device/deviceLabelData/list',
    method: 'get',
    params: query
  })
}
// 查询设备标签数据详细
export function getDeviceLabelData(id:number) {
  return request({
    url: '/api/v1/device/deviceLabelData/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增设备标签数据
export function addDeviceLabelData(data:Object) {
  return request({
    url: '/api/v1/device/deviceLabelData/add',
    method: 'post',
    data: data
  })
}
// 修改设备标签数据
export function updateDeviceLabelData(data:Object) {
  return request({
    url: '/api/v1/device/deviceLabelData/edit',
    method: 'put',
    data: data
  })
}
// 删除设备标签数据
export function delDeviceLabelData(ids:number[]) {
  return request({
    url: '/api/v1/device/deviceLabelData/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
