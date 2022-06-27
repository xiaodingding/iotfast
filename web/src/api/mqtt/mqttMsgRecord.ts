import request from '/@/utils/request'
// 查询MQTT的消息记录列表
export function listMqttMsgRecord(query:Object) {
  return request({
    url: '/api/v1/mqtt/mqttMsgRecord/list',
    method: 'get',
    params: query
  })
}
// 查询MQTT的消息记录详细
export function getMqttMsgRecord(id:number) {
  return request({
    url: '/api/v1/mqtt/mqttMsgRecord/get',
    method: 'get',
    params: {
     id: id.toString()
    }
  })
}
// 新增MQTT的消息记录
export function addMqttMsgRecord(data:Object) {
  return request({
    url: '/api/v1/mqtt/mqttMsgRecord/add',
    method: 'post',
    data: data
  })
}
// 修改MQTT的消息记录
export function updateMqttMsgRecord(data:Object) {
  return request({
    url: '/api/v1/mqtt/mqttMsgRecord/edit',
    method: 'put',
    data: data
  })
}
// 删除MQTT的消息记录
export function delMqttMsgRecord(ids:number[]) {
  return request({
    url: '/api/v1/mqtt/mqttMsgRecord/delete',
    method: 'delete',
    data:{
       ids:ids
    }
  })
}
// 关联mqtt_topic_record表选项
export function listMqttTopicRecord(query:Object){
   return request({
     url: '/api/v1/mqtt/mqttTopicRecord/list',
     method: 'get',
     params: query
   })
}
