<template>
  <div class="app-container">
  	<el-card shadow="hover">
    <div class="job-search mb15">
    <el-form :inline="true" size="default" label-width="68px">    
      <el-form-item label="任务名称" prop="jobName">
        <el-input
            v-model="queryParams.jobName"
            placeholder="请输入任务名称"
            clearable
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>    
      <el-form-item label="任务组名" prop="jobGroup">
        <el-input
            v-model="queryParams.jobGroup"
            placeholder="请输入任务组名"
            clearable
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>    
        <el-form-item label="状态" prop="status">
          <el-select v-model="queryParams.status" placeholder="请选择状态（0正常 1暂停）" clearable>
              <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>      
      <el-form-item>
        <el-button type="primary" 
        @click="handleQuery">
        <el-icon>
            <ele-Search />
          </el-icon>
        查询</el-button>
        <el-button
         @click="resetQuery">
         <el-icon>
            <ele-Refresh />
          </el-icon>
         重置</el-button>
             </el-form-item>
    </el-form>
         <el-row :gutter="10" class="mb8">
        <el-col :span="1.5">
        <el-button
          type="primary"
          @click="handleAdd">
         <el-icon>
            <ele-FolderAdd />
          </el-icon>
          新增</el-button>
         </el-col>
        <el-col :span="1.5">
        <el-button
          type="success"
          :disabled="single"
          @click="handleUpdate">
          <el-icon>
            <ele-Edit />
        </el-icon>
        修改</el-button>
         </el-col>
        <el-col :span="1.5">
        <el-button
          type="danger"
          :disabled="multiple"
          @click="handleDelete">
         <el-icon>
            <ele-Delete />
          </el-icon>
          删除</el-button>
             </el-col>
         </el-row>
    	</div>
   </el-card>
   <el-table v-loading="loading" :data="jobList" @selection-change="handleSelectionChange" style="width: 100%">
  <el-table-column type="selection" width="55" align="center" />  
  <el-table-column label="任务ID" align="center" prop="jobId" />  
  <el-table-column label="任务名称" align="center" prop="jobName" />  
  <el-table-column label="参数" align="center" prop="jobParams" />  
  <el-table-column label="任务组名" align="center" prop="jobGroup" />  
  <el-table-column label="调用目标字符串" align="center" prop="invokeTarget" />  
  <el-table-column label="cron执行表达式" align="center" prop="cronExpression" />  
  <el-table-column label="计划执行策略" align="center" prop="misfirePolicy" />  
  <el-table-column label="是否并发执行" align="center" prop="concurrent" />  
  <el-table-column label="状态" align="center">
    <template  #default="scope">
        <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0" inline-prompt active-text="启" inactive-text="禁" @change="handlestatusChange(scope.row)" ></el-switch>
    </template>
  </el-table-column>  
  <el-table-column label="创建者" align="center" prop="createBy" />  
  <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
    <template  #default="scope">
      <el-button
        type="text"
        class="no_padding" size="small" 
        @click="handleUpdate(scope.row)"
      >修改</el-button>
      <el-button
        type="text"
        class="no_padding" size="small" 
        @click="handleDelete(scope.row)"
      >删除</el-button>
    </template>
  </el-table-column>
</el-table>
<pagination
  v-show="total>0"
  :total="total"
  v-model:page="queryParams.pageNum"
  v-model:limit="queryParams.pageSize"
  @pagination="jobList"
/>
    <!-- 添加或修改定时任务调度对话框 -->
     <el-dialog :title="title"  v-model="open" width="769px">
        <template #header>
            <div > {{title}}</div>
        </template>
        <el-form :model="ruleForm" ref="formRef" :rules="rules" size="default" label-width="120px">            
            <el-form-item label="参数" prop="jobParams">
                <el-input v-model="ruleForm.jobParams" placeholder="请输入参数" />
            </el-form-item>            
            <el-form-item label="调用目标字符串" prop="invokeTarget">
                <el-input v-model="ruleForm.invokeTarget" placeholder="请输入调用目标字符串" />
            </el-form-item>            
            <el-form-item label="cron执行表达式" prop="cronExpression">
                <el-input v-model="ruleForm.cronExpression" placeholder="请输入cron执行表达式" />
            </el-form-item>            
            <el-form-item label="计划执行策略" prop="misfirePolicy">
                <el-input v-model="ruleForm.misfirePolicy" placeholder="请输入计划执行策略（1多次执行 2执行一次）" />
            </el-form-item>            
            <el-form-item label="是否并发执行" prop="concurrent">
                <el-input v-model="ruleForm.concurrent" placeholder="请输入是否并发执行（0允许 1禁止）" />
            </el-form-item>              
               <el-form-item label="状态" prop="status">
                   <el-radio-group v-model="ruleForm.status">
                       <el-radio label="1">请选择字典生成</el-radio>
                   </el-radio-group>
               </el-form-item>            
            <el-form-item label="备注信息" prop="remark">
                <el-input v-model="ruleForm.remark" placeholder="请输入备注信息" />
            </el-form-item>            
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleCancel" size="default">取 消</el-button>
                <el-button type="primary" @click="submitForm" size="default">确 定</el-button>
            </span>
        </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { ElMessage, ElMessageBox, FormInstance } from 'element-plus';
import { defineComponent, getCurrentInstance, onMounted, reactive, ref, toRefs, unref } from 'vue';
import {
    listSysJob,
    getSysJob,
    delSysJob,
    addSysJob,
    updateSysJob,    
    changeSysJobStatus,    
} from "/@/api/system/tools/job";
interface SysJobDataState {
  ids:number[];
  loading:boolean;
// 选中表数组
// tableNames: any[];
      // 非单个禁用
  single: boolean;
      // 非多个禁用
  multiple: boolean;
  total: number;
 // 定时任务调度表格数据
  jobList: any[],
  title:string;
  open: boolean;
  ruleForm: any;
  queryParams: {
    pageNum: number;
    pageSize: number;
    jobName: any,
    jobGroup: any,
    status: any,
  };
  rules:any;
}
export default defineComponent({
    components:{},
    name: 'SysJob',
    setup() {
      const { proxy } = <any>getCurrentInstance();
      const formRef = ref<HTMLElement | null>(null);
      const state = reactive<SysJobDataState>( {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 总条数
      total: 0,
      // 定时任务调度表格数据
      jobList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,      
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        jobName: undefined,
        jobGroup: undefined,
        status: undefined,
      },
      // 表单参数
      ruleForm: {},
      // 表单校验
      rules: { 
        jobName : [
          { required: true, message: "任务名称不能为空", trigger: "blur" }
        ],
        invokeTarget : [
          { required: true, message: "调用目标字符串不能为空", trigger: "blur" }
        ],
        cronExpression : [
          { required: true, message: "cron执行表达式不能为空", trigger: "blur" }
        ],
        status : [
          { required: true, message: "状态（0正常 1暂停）不能为空", trigger: "blur" }
        ],
      }
    });    
    // 状态（0正常 1暂停）修改
    const handlestatusChange =(row:any) =>{
      let text = row.status === 1 ? "启用" : "停用";
      ElMessageBox.confirm('确认要"' + text + '"：吗?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return changeSysJobStatus(row.jobId, row.status);
        }).then(() => {
          ElMessage.success(text + "成功");
        }).catch(function() {
            //state.userStatus =row.userStatus === 0 ?1 : 0;
        });
    };    
    /** 查询定时任务调度列表 */
    const handleGetList = () =>{
      state.loading = true;
      listSysJob(state.queryParams).then((res:any)=>{
        state.jobList = res.data.list;
        state.total = res.data.total;
        state.loading = false;
      });
    };    
    // 取消按钮
    const handleCancel = () =>{
        state.open = false;
        handleReset();
    };
    // 表单重置
    const handleReset = () =>{
        state.ruleForm = {        
        jobId: undefined,        
        jobName: undefined,        
        jobParams: undefined,        
        jobGroup: undefined,        
        invokeTarget: undefined,        
        cronExpression: undefined,        
        misfirePolicy: undefined,        
        concurrent: undefined,        
        status: "0" ,        
        createBy: undefined,        
        updateBy: undefined,        
        remark: undefined,        
        createdAt: undefined,        
        updatedAt: undefined,        
        deletedAt: undefined,        
      };      
     // resetForm("form");
    };
    /** 搜索按钮操作 */
    const handleQuery = () =>{
        state.queryParams.pageNum = 1;
        handleGetList();
    };
    /** 重置按钮操作 */
    const resetQuery = () =>{
      //resetForm("queryForm");
      handleQuery();
    };
    // 多选框选中数据
    const handleSelectionChange = (selection:any)=>{
        state.ids = selection.map( (item:any) => item.jobId)
        state.single = selection.length!=1
        state.multiple = !selection.length
    };
    /** 新增按钮操作 */
    const handleAdd = ()=>{
        handleReset();
        state.open = true;
        state.title = "添加定时任务调度";
    };
    /** 修改按钮操作 */
      const handleUpdate =(row:any)=>{
      handleReset();
      const jobId = row.jobId || state.ids
      getSysJob(jobId).then((res:any)=>{
        let data = res.data;        
        data.status = ''+data.status        
        state.ruleForm = data;
        state.open = true;
        state.title = "修改定时任务调度";
      });
    };
    /** 提交按钮 */
    const submitForm = () => {
      const formWrap = unref(formRef) as any;
      proxy.$refs.formRef.validate((valid: boolean) => {
        if (valid) {
          if (state.ruleForm.jobId != undefined) {
            updateSysJob(state.ruleForm).then((res:any)=>{
              if (res.code === 0) {
                ElMessage.success("修改成功");
                state.open = false;
                handleGetList();
              } else {
                ElMessage.error(res.msg);
              }
            });
          } else {
            addSysJob(state.ruleForm).then((res:any)=>{
              if (res.code === 0) {
                ElMessage.success("新增成功");
                state.open = false;
                handleGetList();
              } else {
                ElMessage.error(res.msg);
              }
            });
          }
        }
      });
    };
    /** 删除按钮操作 */
    const handleDelete = (row:any)=>{
      const jobIds = row.jobId || state.ids;
      ElMessageBox.confirm('是否确认删除定时任务调度编号为"' + jobIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delSysJob(jobIds);
        }).then(() => {
          handleGetList();
          ElMessage.success("删除成功");
        }).catch(function() {});
    };
    // 页面加载时
    onMounted(() => {
        handleGetList();
    });
    return {              
                handlestatusChange,              
            handleGetList,
            handleCancel,
            handleReset,
            handleQuery,
            resetQuery,
            handleSelectionChange,
            handleAdd,
            handleUpdate,
            submitForm,
            handleDelete,
            ...toRefs(state),
        };
  }
  });
</script>