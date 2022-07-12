import request from '/@/utils/request'
// 查询定时任务调度列表
export function listSysJob(query:Object) {
  return request({
    url: '/api/v1/system/job/list',
    method: 'get',
    params: query
  })
}
// 查询定时任务调度详细
export function getSysJob(jobId:number) {
  return request({
    url: '/api/v1/system/job/get',
    method: 'get',
    params: {
     id: jobId.toString()
    }
  })
}
// 新增定时任务调度
export function addSysJob(data:Object) {
  return request({
    url: '/api/v1/system/job/add',
    method: 'post',
    data: data
  })
}
// 修改定时任务调度
export function updateSysJob(data:Object) {
  return request({
    url: '/api/v1/system/job/edit',
    method: 'put',
    data: data
  })
}
// 删除定时任务调度
export function delSysJob(jobIds:number[]) {
  return request({
    url: '/api/v1/system/job/delete',
    method: 'delete',
    data:{
       ids:jobIds
    }
  })
}
// 定时任务调度状态（0正常 1暂停）修改
export function changeSysJobStatus(jobId:number,status:Object) {
  const data = {
    jobId,
    status
  }
  return request({
   // url: '/api/v1/system/job/changeStatus',
    url: '/api/v1/system/job/status',
    method: 'put',
    data:data
  })
}
