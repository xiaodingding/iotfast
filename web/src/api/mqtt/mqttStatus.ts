import request from '/@/utils/request'
// 查询MQTT客户端连接状态列表
export function listMqttStatus(query:Object) {
  return request({
    url: '/api/v1/mqtt/mqttStatus/list',
    method: 'get',
    params: query
  })
}
// 查询MQTT客户端连接状态详细
export function getMqttStatus(id:number) {
  return request({
    url: '/api/v1/mqtt/mqttStatus/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增MQTT客户端连接状态
export function addMqttStatus(data:Object) {
  return request({
    url: '/api/v1/mqtt/mqttStatus/add',
    method: 'post',
    data: data
  })
}
// 修改MQTT客户端连接状态
export function updateMqttStatus(data:Object) {
  return request({
    url: '/api/v1/mqtt/mqttStatus/edit',
    method: 'put',
    data: data
  })
}
// 删除MQTT客户端连接状态
export function delMqttStatus(ids:number[]) {
  return request({
    url: '/api/v1/mqtt/mqttStatus/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
// MQTT客户端连接状态MQTT连接的状态修改
export function changeMqttStatusStatus(id:number,status:Object) {
  const data = {
    id,
    status
  }
  return request({
   // url: '/api/v1/mqtt/mqttStatus/changeStatus',
    url: '/api/v1/mqtt/mqttStatus/status',
    method: 'put',
    data:data
  })
}
