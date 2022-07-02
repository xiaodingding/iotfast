import request from '/@/utils/request'
// 查询MQTT客户端的订阅信息列表
export function listMqttTopic(query:Object) {
  return request({
    url: '/api/v1/mqtt/mqttTopic/list',
    method: 'get',
    params: query
  })
}
// 查询MQTT客户端的订阅信息详细
export function getMqttTopic(id:number) {
  return request({
    url: '/api/v1/mqtt/mqttTopic/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增MQTT客户端的订阅信息
export function addMqttTopic(data:Object) {
  return request({
    url: '/api/v1/mqtt/mqttTopic/add',
    method: 'post',
    data: data
  })
}
// 修改MQTT客户端的订阅信息
export function updateMqttTopic(data:Object) {
  return request({
    url: '/api/v1/mqtt/mqttTopic/edit',
    method: 'put',
    data: data
  })
}
// 删除MQTT客户端的订阅信息
export function delMqttTopic(ids:number[]) {
  return request({
    url: '/api/v1/mqtt/mqttTopic/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
