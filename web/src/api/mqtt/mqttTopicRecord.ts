import request from '/@/utils/request'
// 查询MQTT需要进行记录的Topic列表
export function listMqttTopicRecord(query:Object) {
  return request({
    url: '/api/v1/mqtt/mqttTopicRecord/list',
    method: 'get',
    params: query
  })
}
// 查询MQTT需要进行记录的Topic详细
export function getMqttTopicRecord(id:number) {
  return request({
    url: '/api/v1/mqtt/mqttTopicRecord/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增MQTT需要进行记录的Topic
export function addMqttTopicRecord(data:Object) {
  return request({
    url: '/api/v1/mqtt/mqttTopicRecord/add',
    method: 'post',
    data: data
  })
}
// 修改MQTT需要进行记录的Topic
export function updateMqttTopicRecord(data:Object) {
  return request({
    url: '/api/v1/mqtt/mqttTopicRecord/edit',
    method: 'put',
    data: data
  })
}
// 删除MQTT需要进行记录的Topic
export function delMqttTopicRecord(ids:number[]) {
  return request({
    url: '/api/v1/mqtt/mqttTopicRecord/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
