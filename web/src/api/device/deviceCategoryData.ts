import request from '/@/utils/request'
// 查询设备类别数据列表
export function listDeviceCategoryData(query:Object) {
  return request({
    url: '/api/v1/device/deviceCategoryData/list',
    method: 'get',
    params: query
  })
}
// 查询设备类别数据详细
export function getDeviceCategoryData(id:number) {
  return request({
    url: '/api/v1/device/deviceCategoryData/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}

export function getDeviceCategoryRecent(query:Object) {
    return request({
      url: '/api/v1/device/deviceCategoryData/recent',
      method: 'get',
      params: query
    })
  }

export function getDeviceCategoryHistory(query:Object) {
    return request({
      url: '/api/v1/device/deviceCategoryData/history',
      method: 'get',
      params: query
    })
  }

// 新增设备类别数据
export function addDeviceCategoryData(data:Object) {
  return request({
    url: '/api/v1/device/deviceCategoryData/add',
    method: 'post',
    data: data
  })
}
// 修改设备类别数据
export function updateDeviceCategoryData(data:Object) {
  return request({
    url: '/api/v1/device/deviceCategoryData/edit',
    method: 'put',
    data: data
  })
}
// 删除设备类别数据
export function delDeviceCategoryData(ids:number[]) {
  return request({
    url: '/api/v1/device/deviceCategoryData/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
