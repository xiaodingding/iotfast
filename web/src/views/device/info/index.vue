<template>
  <div class="app-container">
  	<el-card shadow="hover">
    <div class="deviceInfo-search mb15">
    <el-form :inline="true" size="default" label-width="68px">    
      <el-form-item label="设备名称" prop="name">
        <el-input
            v-model="queryParams.name"
            placeholder="请输入设备名称"
            clearable
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>    
      <el-form-item label="设备组" prop="group">
        <el-input
            v-model="queryParams.group"
            placeholder="请输入设备组"
            clearable
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>    
      <el-form-item label="SN" prop="sn">
        <el-input
            v-model="queryParams.sn"
            placeholder="请输入SN"
            clearable
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>    
      <el-form-item label="设备类别" prop="kind">
        <el-input
            v-model="queryParams.kind"
            placeholder="请输入设备类别"
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
         </el-form-item>
      <el-form-item style="vertical-align: top;">
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
   <el-table v-loading="loading" :data="deviceInfoList" @selection-change="handleSelectionChange" >
  <el-table-column type="selection" width="55" align="center" />  
  <el-table-column label="序列号" align="center" prop="sn" >
     <template  #default="scope">
        <router-link v-bind:to="'/device/deviceInfo/detail?id='+scope.row.sn">{{scope.row.sn}} </router-link>
    </template>  
    </el-table-column>  
  <el-table-column label="设备名称" align="center" prop="name" />  
  <el-table-column label="设备组" align="center" prop="group" >
    <template  #default="scope">
        <router-link v-bind:to="'/device/deviceGroup/list?id='+scope.row.group">{{groupFormat(scope.row.group)}} </router-link>
    </template>
  </el-table-column>  
  <el-table-column label="产品类别" align="center" prop="kind" >   
    <template  #default="scope">
        <router-link v-bind:to="'/device/deviceKind/list?id='+scope.row.kind">{{kindFormat(scope.row.kind)}} </router-link>
    </template>
  </el-table-column>
  <el-table-column label="设备状态" align="center" prop="status" >  
     <template  #default="scope">
        <div>{{deviceStatusFormat(scope.row.status)}}</div>
    </template>
  </el-table-column>
  <el-table-column label="地理位置" align="center" prop="location" />  
  <el-table-column label="注册时间" align="center" prop="createdAt" width="180"/>
  <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
    <template  #default="scope">
     <el-button
        type="text"
        class="no_padding" size="small" 
        @click="handleDetail(scope.row)"
      >查看</el-button>
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
  @pagination="deviceInfoList"
/>
    <!-- 添加或修改设备信息对话框 -->
     <el-dialog :title="title"  v-model="open" width="769px">
        <template #header>
            <div > {{title}}</div>
        </template>
        <el-form :model="ruleForm" ref="formRef" :rules="rules" size="default" label-width="120px">            
            <el-form-item label="设备名称" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入设备名称" />
            </el-form-item>            
            <el-form-item label="设备组" prop="group">
                <el-input v-model="ruleForm.group" placeholder="请输入设备组" />
            </el-form-item>            
            <el-form-item label="SN" prop="sn">
                <el-input v-model="ruleForm.sn" placeholder="请输入SN" />
            </el-form-item>            
            <el-form-item label="密码" prop="pwd">
                <el-input v-model="ruleForm.pwd" placeholder="请输入密码" />
            </el-form-item>            
            <el-form-item label="设备类别" prop="kind">
                <el-input v-model="ruleForm.kind" placeholder="请输入设备类别" />
            </el-form-item>            
            <el-form-item label="logo" prop="logo">
                <el-input v-model="ruleForm.logo" placeholder="请输入logo" />
            </el-form-item>            
            <el-form-item label="是否监视" prop="monitor">
                <el-input v-model="ruleForm.monitor" placeholder="请输入是否监视" />
            </el-form-item>            
            <el-form-item label="地理位置" prop="location">
                <el-input v-model="ruleForm.location" placeholder="请输入地理位置" />
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
    listDeviceInfo,
    getDeviceInfo,
    delDeviceInfo,
    addDeviceInfo,
    updateDeviceInfo,    
} from "/@/api/device/deviceInfo";
import { listDeviceGroup} from '/@/api/device/deviceGroup';
import { listDeviceKind } from '/@/api/device/deviceKind';
import { selectObjectLabel, statusFormat } from "/@/utils/common";
interface DeviceInfoDataState {
  ids:number[];
  loading:boolean;
// 选中表数组
// tableNames: any[];
      // 非单个禁用
  single: boolean;
      // 非多个禁用
  multiple: boolean;
  total: number;
  deviceKindList:any[];
  deviceGroupList:any[],
 // 设备信息表格数据
  deviceInfoList: any[],
  title:string;
  open: boolean;
  ruleForm: any;
  queryParams: {
    pageNum: number;
    pageSize: number;
    name: any,
    group: any,
    sn: any,
    pwd: any,
    kind: any,
    logo: any,
    monitor: any,
    location: any,
    createdAt: any,
  };
  rules:any;
}
export default defineComponent({
    components:{},
    name: 'DeviceInfo',
    setup() {
      const { proxy } = <any>getCurrentInstance();
      const formRef = ref<HTMLElement | null>(null);
      const state = reactive<DeviceInfoDataState>( {
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
      deviceKindList:[],
      deviceGroupList:[],
      // 设备信息表格数据
      deviceInfoList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,          
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        name: undefined,
        group: undefined,
        sn: undefined,
        pwd: undefined,
        kind: undefined,
        logo: undefined,
        monitor: undefined,
        location: undefined,
        createdAt: undefined,
      },
      // 表单参数
      ruleForm: {},
      // 表单校验
      rules: { 
        name : [
          { required: true, message: "设备名称不能为空", trigger: "blur" }
        ],
        group : [
          { required: true, message: "设备组不能为空", trigger: "blur" }
        ],
        sn : [
          { required: true, message: "SN不能为空", trigger: "blur" }
        ],
        kind : [
          { required: true, message: "设备类别不能为空", trigger: "blur" }
        ],
      }
    });    
   
    /** 查询设备信息列表 */
    const handleGetList = () =>{
      state.loading = true;
       //关联device_group表选项
        listDeviceGroup().then((res: any) => {
            state.deviceGroupList = res.data.list;
            });
             //关联device_kind表选项
        listDeviceKind().then((res: any) => {
                state.deviceKindList = res.data.list;
            });
        listDeviceInfo(state.queryParams).then((res:any)=>{
            state.deviceInfoList = res.data.list;
            state.total = res.data.total;
            state.loading = false;
        });
    };    
    const deviceLinkFormat = (row:any) =>{
        console.log(row);
    };
    // 设备组关联表翻译
    const groupFormat = (row:any)  =>{
       return selectObjectLabel(state.deviceGroupList, row);
    };    

    const kindFormat = (row:any)  =>{
       return selectObjectLabel(state.deviceKindList, row);
    };    
    
    const deviceStatusFormat = (row:any) =>{
        return statusFormat(row);
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
        name: undefined,        
        group: undefined,        
        sn: undefined,        
        pwd: undefined,        
        kind: undefined,        
        logo: undefined,        
        monitor: undefined,        
        location: undefined,        
        createdAt: undefined,        
        updatedAt: undefined,        
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
        state.title = "添加设备信息";
    };
    const handleDetail = (row:any)=>{

    };
    /** 修改按钮操作 */
      const handleUpdate =(row:any)=>{
      handleReset();
      const id = row.id || state.ids
      getDeviceInfo(id).then((res:any)=>{
        let data = res.data;        
        state.ruleForm = data;
        state.open = true;
        state.title = "修改设备信息";
      });
    };
    /** 提交按钮 */
    const submitForm = () => {
      //const formWrap = unref(formRef) as any;
      proxy.$refs.formRef.validate((valid: boolean) => {
        if (valid) {
          if (state.ruleForm.id != undefined) {
            updateDeviceInfo(state.ruleForm).then((res:any)=>{
              if (res.code === 0) {
                ElMessage.success("修改成功");
                state.open = false;
                handleGetList();
              } else {
                ElMessage.error(res.msg);
              }
            });
          } else {
            addDeviceInfo(state.ruleForm).then((res:any)=>{
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
      ElMessageBox.confirm('是否确认删除设备信息编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delDeviceInfo(ids);
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
                deviceStatusFormat,
                deviceLinkFormat,
                kindFormat,
                groupFormat,            
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