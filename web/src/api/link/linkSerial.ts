import request from '/@/utils/request'
// 查询串口连接信息管理列表
export function listLinkSerial(query:Object) {
  return request({
    url: '/api/v1/link/linkSerial/list',
    method: 'get',
    params: query
  })
}
// 查询串口连接信息管理详细
export function getLinkSerial(id:number) {
  return request({
    url: '/api/v1/link/linkSerial/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增串口连接信息管理
export function addLinkSerial(data:Object) {
  return request({
    url: '/api/v1/link/linkSerial/add',
    method: 'post',
    data: data
  })
}
// 修改串口连接信息管理
export function updateLinkSerial(data:Object) {
  return request({
    url: '/api/v1/link/linkSerial/edit',
    method: 'put',
    data: data
  })
}
// 删除串口连接信息管理
export function delLinkSerial(ids:number[]) {
  return request({
    url: '/api/v1/link/linkSerial/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
