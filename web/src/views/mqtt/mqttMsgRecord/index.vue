<template>
  <div class="app-container">
  	<el-card shadow="hover">
    <div class="mqttMsgRecord-search mb15">
    <el-form :inline="true" size="default">    
      <el-form-item label="设备序列号" prop="deviceSn">
        <el-input
            v-model="queryParams.deviceSn"
            placeholder="请输入设备序列号"
            clearable
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>    
      <el-form-item label="Topic的主键" prop="topicId">
        <el-input
            v-model="queryParams.topicId"
            placeholder="请输入Topic的主键"
            clearable
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>    
      <el-form-item label="客户端名称" prop="clientName">
        <el-input
            v-model="queryParams.clientName"
            placeholder="请输入客户端名称"
            clearable
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>    
      
      <el-form-item label="Qos" prop="qos">
        <el-input
            v-model="queryParams.qos"
            placeholder="请输入Qos"
            clearable
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>    
 
      <el-form-item label="创建时间" prop="creatTime">
        <el-input
            v-model="queryParams.creatTime"
            placeholder="请输入创建时间"
            clearable
            @keyup.enter.native="handleQuery"
        />
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
        <el-form-item></el-form-item>
    </el-form>
         <el-row :gutter="20" class="mb8">
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
   <el-table v-loading="loading" :data="mqttMsgRecordList" @selection-change="handleSelectionChange" style="width: 100%">
  <el-table-column type="selection" width="55" align="center" />  
  <el-table-column label="主键" align="center" prop="id" />  
  <el-table-column label="设备序列号" align="center" prop="deviceSn" />  
  <el-table-column label="Topic的主键" align="center" prop="topicId" :formatter="topicIdFormat" width="100">
    <template  #default="scope">
      {{ topicIdFormat(scope.row) }}
    </template>
  </el-table-column>  
  <el-table-column label="客户端名称" align="center" prop="clientName" />  
  <el-table-column label="客户端ID" align="center" prop="clientId" />  
  <el-table-column label="Qos" align="center" prop="qos" />  
  <el-table-column label="传递的数据" align="center" prop="payload" />  
  <el-table-column label="创建时间" align="center" prop="creatTime" />  
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
  @pagination="mqttMsgRecordList"
/>
    <!-- 添加或修改MQTT的消息记录对话框 -->
     <el-dialog :title="title"  v-model="open" width="769px">
        <template #header>
            <div > {{title}}</div>
        </template>
        <el-form :model="ruleForm" ref="formRef" :rules="rules" size="default" label-width="120px">            
            <el-form-item label="设备序列号" prop="deviceSn">
                <el-input v-model="ruleForm.deviceSn" placeholder="请输入设备序列号" />
            </el-form-item>            
            <el-form-item label="Topic的主键" prop="topicId">
                <el-input v-model="ruleForm.topicId" placeholder="请输入Topic的主键" />
            </el-form-item>            
            <el-form-item label="客户端名称" prop="clientName">
                <el-input v-model="ruleForm.clientName" placeholder="请输入客户端名称" />
            </el-form-item>            
            <el-form-item label="客户端ID" prop="clientId">
                <el-input v-model="ruleForm.clientId" placeholder="请输入客户端ID" />
            </el-form-item>            
            <el-form-item label="Qos" prop="qos">
                <el-input v-model="ruleForm.qos" placeholder="请输入Qos" />
            </el-form-item>            
            <el-form-item label="传递的数据" prop="payload">
                <el-input v-model="ruleForm.payload" placeholder="请输入传递的数据" />
            </el-form-item>            
            <el-form-item label="创建时间" prop="creatTime">
                <el-input v-model="ruleForm.creatTime" placeholder="请输入创建时间" />
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
    listMqttMsgRecord,
    getMqttMsgRecord,
    delMqttMsgRecord,
    addMqttMsgRecord,
    updateMqttMsgRecord,    
    listMqttTopicRecord,    
} from "/@/api/mqtt/mqttMsgRecord";
interface MqttMsgRecordDataState {
  ids:number[];
  loading:boolean;
// 选中表数组
// tableNames: any[];
      // 非单个禁用
  single: boolean;
      // 非多个禁用
  multiple: boolean;
  total: number;
 // MQTT的消息记录表格数据
  mqttMsgRecordList: any[],
  title:string;
  open: boolean;
  ruleForm: any;
  queryParams: {
    pageNum: number;
    pageSize: number;
    deviceSn: any,
    topicId: any,
    clientName: any,
    clientId: any,
    qos: any,
    payload: any,
    creatTime: any,
  };
  rules:any;
}
export default defineComponent({
    components:{},
    name: 'MqttMsgRecord',
    setup() {
      const { proxy } = <any>getCurrentInstance();
      const formRef = ref<HTMLElement | null>(null);
      const state = reactive<MqttMsgRecordDataState>( {
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
      // MQTT的消息记录表格数据
      mqttMsgRecordList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,      
      // topicIdOptions关联表数据
      topicIdOptions: [],      
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        deviceSn: undefined,
        topicId: undefined,
        clientName: undefined,
        clientId: undefined,
        qos: undefined,
        payload: undefined,
        creatTime: undefined,
      },
      // 表单参数
      ruleForm: {},
      // 表单校验
      rules: { 
        clientName : [
          { required: true, message: "客户端名称不能为空", trigger: "blur" }
        ],
        creatTime : [
          { required: true, message: "创建时间不能为空", trigger: "blur" }
        ],
      }
    });    
    //关联mqtt_topic_record表选项
    const getMqttTopicRecordItems = () =>{
      getItems(listMqttTopicRecord, {pageSize:10000}).then((res:any) => {
        topicIdOptions = setItems(res, 'id', 'id')
      })
    };    
    /** 查询MQTT的消息记录列表 */
    const handleGetList = () =>{
      state.loading = true;
      listMqttMsgRecord(state.queryParams).then((res:any)=>{
        state.mqttMsgRecordList = res.data.list;
        state.total = res.data.total;
        state.loading = false;
      });
    };    
    // Topic的主键关联表翻译
    const topicIdFormat = (row:any, column:any) =>{
      //return selectItemsLabel(topicIdOptions, row.topicId);
        return  row.topicId;
    };    
    // 取消按钮
    const handleCancel = () =>{
        state.open = false;
        handleReset();
    };
    // 表单重置
    const handleReset = () =>{
        state.ruleForm = {        
        id: undefined,        
        deviceSn: undefined,        
        topicId: undefined,        
        clientName: undefined,        
        clientId: undefined,        
        qos: undefined,        
        payload: undefined,        
        creatTime: undefined,        
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
        state.ids = selection.map( (item:any) => item.id)
        state.single = selection.length!=1
        state.multiple = !selection.length
    };
    /** 新增按钮操作 */
    const handleAdd = ()=>{
        handleReset();
        state.open = true;
        state.title = "添加MQTT的消息记录";
    };
    /** 修改按钮操作 */
      const handleUpdate =(row:any)=>{
      handleReset();
      const id = row.id || state.ids
      getMqttMsgRecord(id).then((res:any)=>{
        let data = res.data;        
        state.ruleForm = data;
        state.open = true;
        state.title = "修改MQTT的消息记录";
      });
    };
    /** 提交按钮 */
    const submitForm = () => {
      //const formWrap = unref(formRef) as any;
      proxy.$refs.formRef.validate((valid: boolean) => {
        if (valid) {
          if (state.ruleForm.id != undefined) {
            updateMqttMsgRecord(state.ruleForm).then((res:any)=>{
              if (res.code === 0) {
                ElMessage.success("修改成功");
                state.open = false;
                handleGetList();
              } else {
                ElMessage.error(res.msg);
              }
            });
          } else {
            addMqttMsgRecord(state.ruleForm).then((res:any)=>{
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
      const ids = row.id || state.ids;
      ElMessageBox.confirm('是否确认删除MQTT的消息记录编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delMqttMsgRecord(ids);
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
            formRef,              
            topicIdFormat,
                getMqttTopicRecordItems,              
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