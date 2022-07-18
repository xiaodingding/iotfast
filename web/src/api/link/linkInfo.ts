import request from '/@/utils/request'
// 查询连接信息管理列表
export function listLinkInfo(query:Object) {
  return request({
    url: '/api/v1/link/linkInfo/list',
    method: 'get',
    params: query
  })
}
// 查询连接信息管理详细
export function getLinkInfo(id:number) {
  return request({
    url: '/api/v1/link/linkInfo/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增连接信息管理
export function addLinkInfo(data:Object) {
  return request({
    url: '/api/v1/link/linkInfo/add',
    method: 'post',
    data: data
  })
}
// 修改连接信息管理
export function updateLinkInfo(data:Object) {
  return request({
    url: '/api/v1/link/linkInfo/edit',
    method: 'put',
    data: data
  })
}
// 删除连接信息管理
export function delLinkInfo(ids:number[]) {
  return request({
    url: '/api/v1/link/linkInfo/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
