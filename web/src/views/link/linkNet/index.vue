<template>
  <div class="app-container">
  	<el-card shadow="hover">
    <div class="linkNet-search mb15">
    <el-form :inline="true" size="default" label-width="68px">    
      <el-form-item label="连接名称" prop="name">
        <el-input
            v-model="queryParams.name"
            placeholder="请输入连接名称"
            clearable
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>    
      <el-form-item label="网络标记" prop="mark">
        <el-input
            v-model="queryParams.mark"
            placeholder="请输入网络标记"
            clearable
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>    
        <el-form-item label="远程类型" prop="remoteType">
          <el-select v-model="queryParams.remoteType" placeholder="请选择远程类型" clearable>
              <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>    
      <el-form-item label="远程地址" prop="remoteAddr">
        <el-input
            v-model="queryParams.remoteAddr"
            placeholder="请输入远程地址"
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
   <el-table v-loading="loading" :data="linkNetList" @selection-change="handleSelectionChange" style="width: 100%">
  <el-table-column type="selection" width="55" align="center" />  
  <el-table-column label="主键" align="center" prop="id" />  
  <el-table-column label="连接名称" align="center" prop="name" />  
  <el-table-column label="网络标记" align="center" prop="mark" />  
  <el-table-column label="远程类型" align="center" prop="remoteType" >
     <template  #default="scope">
        <div>{{linkTypeFormat(scope.row.remoteType)}}</div>
    </template>
    </el-table-column>    
  <el-table-column label="远程地址" align="center" prop="remoteAddr" />  
  <el-table-column label="远程端口号" align="center" prop="remotePort" />  
  <el-table-column label="超时时间" align="center" prop="timeout" />  
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
  @pagination="linkNetList"
/>
    <!-- 添加或修改网络连接信息管理对话框 -->
     <el-dialog :title="title"  v-model="open" width="769px">
        <template #header>
            <div > {{title}}</div>
        </template>
        <el-form :model="ruleForm" ref="formRef" :rules="rules" size="default" label-width="120px">            
            <el-form-item label="连接名称" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入连接名称" />
            </el-form-item>            
            <el-form-item label="网络标记" prop="mark">
                <el-input v-model="ruleForm.mark" placeholder="请输入网络标记" />
            </el-form-item>              
              <el-form-item label="远程类型" prop="remoteType">
                  <el-select v-model="ruleForm.remoteType" placeholder="请选择远程类型">
                         <el-option
                    v-for="item in linkType"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value"
                    />
                  </el-select>
              </el-form-item>            
            <el-form-item label="远程地址" prop="remoteAddr">
                <el-input v-model="ruleForm.remoteAddr" placeholder="请输入远程地址" />
            </el-form-item>            
            <el-form-item label="远程端口号" prop="remotePort">
                <el-input v-model="ruleForm.remotePort" placeholder="请输入远程端口号" />
            </el-form-item>            
            <el-form-item label="超时时间" prop="timeout">
                <el-input v-model="ruleForm.timeout" placeholder="请输入超时时间" />
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
    listLinkNet,
    getLinkNet,
    delLinkNet,
    addLinkNet,
    updateLinkNet,    
} from "/@/api/link/linkNet";
interface LinkNetDataState {
  ids:number[];
  loading:boolean;
// 选中表数组
// tableNames: any[];
      // 非单个禁用
  single: boolean;
      // 非多个禁用
  multiple: boolean;
  total: number;
 // 网络连接信息管理表格数据
  linkNetList: any[],
  title:string;
  open: boolean;
  ruleForm: any;
  linkType:any[];
  queryParams: {
    pageNum: number;
    pageSize: number;
    name: any,
    mark: any,
    remoteType: any,
    remoteAddr: any,
    remotePort: any,
    timeout: any,
  };
  rules:any;
}
export default defineComponent({
    components:{},
    name: 'LinkNet',
    setup() {
      const { proxy } = <any>getCurrentInstance();
      const formRef = ref<HTMLElement | null>(null);
      const state = reactive<LinkNetDataState>( {
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
      // 网络连接信息管理表格数据
      linkNetList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,      
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        name: undefined,
        mark: undefined,
        remoteType: undefined,
        remoteAddr: undefined,
        remotePort: undefined,
        timeout: undefined,
      },
      // 表单参数
      ruleForm: {},
      linkType:[{
        name:"tcp",
        value:0
      },{
        name:"udp",
        value:1
      }
      ],
      // 表单校验
      rules: { 
        name : [
          { required: true, message: "连接名称不能为空", trigger: "blur" }
        ],
      }
    });    
    /** 查询网络连接信息管理列表 */
    const handleGetList = () =>{
      state.loading = true;
      listLinkNet(state.queryParams).then((res:any)=>{
        state.linkNetList = res.data.list;
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
        id: undefined,        
        name: undefined,        
        mark: undefined,        
        remoteType: undefined,        
        remoteAddr: undefined,        
        remotePort: undefined,        
        timeout: undefined,        
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
        state.title = "添加网络连接信息管理";
    };
    /** 修改按钮操作 */
      const handleUpdate =(row:any)=>{
      handleReset();
      const id = row.id || state.ids
      getLinkNet(id).then((res:any)=>{
        let data = res.data;        
        data.remoteType = ''+data.remoteType        
        state.ruleForm = data;
        state.open = true;
        state.title = "修改网络连接信息管理";
      });
    };
    const linkTypeFormat = (row:any) =>{
        if (row == 0){
            return "tcp";
        }else if (row == 1){
            return "udp";
        }else{
            return "unknow";
        }
    };
    /** 提交按钮 */
    const submitForm = () => {
      //const formWrap = unref(formRef) as any;
      proxy.$refs.formRef.validate((valid: boolean) => {
        if (valid) {
          if (state.ruleForm.id != undefined) {
            updateLinkNet(state.ruleForm).then((res:any)=>{
              if (res.code === 0) {
                ElMessage.success("修改成功");
                state.open = false;
                handleGetList();
              } else {
                ElMessage.error(res.msg);
              }
            });
          } else {
            addLinkNet(state.ruleForm).then((res:any)=>{
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
      ElMessageBox.confirm('是否确认删除网络连接信息管理编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delLinkNet(ids);
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
            linkTypeFormat,           
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