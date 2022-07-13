/http
//http://localhost:8201/api/v1/device/deviceData/add
{
    "deviceId":1,
    "deviceSn":"1",
    "devicePwd":"1",
    "time":"2022-07-12 01:02:03",
    "property":{
        "temperature":23.2,
        "humidity":20
    },
    "event":{
        "hight":"当前温度值",
        "addr":"kunming"
    }
}

/device/{deviceId}/report
{
    "deviceId": "123",
    "messageId":123,
    "time":"20220712 01:02:03",
    "property":{
        "tempure":23.2，
    }
    "event":{
        "hight":"当前温度值",
        "addr":"",
    } 
}

/device/{deviceId}/read
{
    "deviceId":"123",
    "messageId": "",
    "properties":["sn","model"] //要读取到属性列表
}

/device/{deviceId}/read/reply
{
    "deviceId":"123",
    "messageId": "",
    "properties":{"sn":"13","model":"456"} //要读取到属性列表
}

/device/{deviceId}/write
{
"time":"20220712 01:02:03", //毫秒时间戳
"messageId":"消息ID",
"deviceId":"设备ID",
"properties":{"color":"red"} //要设置的属性
}


/device/{deviceId}/funtion
{
"time":"20220712 01:02:03", //毫秒时间戳
"messageId":"消息ID",
"deviceId":"设备ID",
"do":{"do_1":0} //要设置的属性
}



curl -d '{"name":"john","pass":"123","deviceId":1,"DeviceSn":"123"}' "http://localhost:8201/api/v1/device/deviceData/add/"

curl -d "deviceId=1&DeviceSn=123" "http://localhost:8201/api/v1/device/deviceData/add/"

curl -d '{"name":"1"}' "http://localhost:8201/api/v1/device/deviceLabel/add"


curl -d "name=john" "http://127.0.0.1:8201/api/v1/demo/demo"

curl -d '{"name":"john","pass":"123"}' "http://127.0.0.1:8201/api/v1/demo/demo"