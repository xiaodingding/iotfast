import request from '/@/utils/request'
// 查询网络连接信息管理列表
export function listLinkNet(query:Object) {
  return request({
    url: '/api/v1/link/linkNet/list',
    method: 'get',
    params: query
  })
}
// 查询网络连接信息管理详细
export function getLinkNet(id:number) {
  return request({
    url: '/api/v1/link/linkNet/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增网络连接信息管理
export function addLinkNet(data:Object) {
  return request({
    url: '/api/v1/link/linkNet/add',
    method: 'post',
    data: data
  })
}
// 修改网络连接信息管理
export function updateLinkNet(data:Object) {
  return request({
    url: '/api/v1/link/linkNet/edit',
    method: 'put',
    data: data
  })
}
// 删除网络连接信息管理
export function delLinkNet(ids:number[]) {
  return request({
    url: '/api/v1/link/linkNet/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
