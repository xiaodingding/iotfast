<template>
  <div class="app-container">
  	<el-card shadow="hover">
    <div class="linkSerial-search mb15">
    <el-form :inline="true" size="default" label-width="68px">    
      <el-form-item label="连接名称" prop="name">
        <el-input
            v-model="queryParams.name"
            placeholder="请输入连接名称"
            clearable
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>    
      <el-form-item label="串口标记" prop="mark">
        <el-input
            v-model="queryParams.mark"
            placeholder="请输入串口标记"
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
   <el-table v-loading="loading" :data="linkSerialList" @selection-change="handleSelectionChange" style="width: 100%">
  <el-table-column type="selection" width="55" align="center" />  
  <el-table-column label="主键" align="center" prop="id" />  
  <el-table-column label="连接名称" align="center" prop="name" />  
  <el-table-column label="串口标记" align="center" prop="mark" />  
  <el-table-column label="串口号" align="center" prop="serialName" />  
  <el-table-column label="波特率" align="center" prop="serialBaund" />  
  <el-table-column label="校验位" align="center" prop="serialParity" />  
  <el-table-column label="数据位" align="center" prop="serialData" />  
  <el-table-column label="停止位" align="center" prop="serialStop" />  
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
  @pagination="linkSerialList"
/>
    <!-- 添加或修改串口连接信息管理对话框 -->
     <el-dialog :title="title"  v-model="open" width="769px">
        <template #header>
            <div > {{title}}</div>
        </template>
        <el-form :model="ruleForm" ref="formRef" :rules="rules" size="default" label-width="120px">            
            <el-form-item label="连接名称" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入连接名称" />
            </el-form-item>            
            <el-form-item label="串口标记" prop="mark">
                <el-input v-model="ruleForm.mark" placeholder="请输入串口标记" />
            </el-form-item>            
            <el-form-item label="串口号" prop="serialName">
                <el-input v-model="ruleForm.serialName" placeholder="请输入串口号" />
            </el-form-item>            
            <el-form-item label="串口波特率" prop="serialBaund">
                <el-select v-model="ruleForm.serialBaund" class="m-2" placeholder="请选择串口波特率">
                    <el-option
                    v-for="item in BaundList"
                    :key="item"
                    :label="item"
                    :value="item"
                    />
                </el-select>

            </el-form-item>            
            <el-form-item label="串口校验位" prop="serialParity">
                 <el-select v-model="ruleForm.serialParity" class="m-2" placeholder="请选择串口校验位">
                    <el-option
                    v-for="item in ParityList"
                    :key="item"
                    :label="item"
                    :value="item"
                    />
                </el-select>
            </el-form-item>            
            <el-form-item label="串口数据位" prop="serialData">
                 <el-select v-model="ruleForm.serialData" class="m-2" placeholder="请选择串口数据位">
                    <el-option
                    v-for="item in DataBitList"
                    :key="item"
                    :label="item"
                    :value="item"
                    />
                </el-select>
            </el-form-item>            
            <el-form-item label="串口停止位" prop="serialStop">
                 <el-select v-model="ruleForm.serialStop" class="m-2" placeholder="请选择串口停止位">
                    <el-option
                    v-for="item in StopBitList"
                    :key="item"
                    :label="item"
                    :value="item"
                    />
                </el-select>
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
    listLinkSerial,
    getLinkSerial,
    delLinkSerial,
    addLinkSerial,
    updateLinkSerial,    
} from "/@/api/link/linkSerial";
interface LinkSerialDataState {
  ids:number[];
  loading:boolean;
// 选中表数组
// tableNames: any[];
      // 非单个禁用
  single: boolean;
      // 非多个禁用
  multiple: boolean;
  total: number;
 // 串口连接信息管理表格数据
  linkSerialList: any[],
  title:string;
  open: boolean;
  ruleForm: any;
  BaundList:string[];
  ParityList:string[];
  DataBitList:string[];
  StopBitList:string[];
  queryParams: {
    pageNum: number;
    pageSize: number;
    name: any,
    mark: any,
    serialName: any,
    serialBaund: any,
    serialParity: any,
    serialData: any,
    serialStop: any,
  };
  rules:any;
}
export default defineComponent({
    components:{},
    name: 'LinkSerial',
    setup() {
      const { proxy } = <any>getCurrentInstance();
      const formRef = ref<HTMLElement | null>(null);
      const state = reactive<LinkSerialDataState>( {
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
      // 串口连接信息管理表格数据
      linkSerialList: [],
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
        serialName: undefined,
        serialBaund: undefined,
        serialParity: undefined,
        serialData: undefined,
        serialStop: undefined,
      },
      // 表单参数
        ruleForm: {},
        BaundList:['50','75','110','134','150','200','300','600','1200','2400','4800','9600','19200','38400','57600','115200'],
        ParityList:['N','E','O'],
        DataBitList:['6','7','8'],
        StopBitList:['1','2'],
      // 表单校验
      rules: { 
        name : [
          { required: true, message: "连接名称不能为空", trigger: "blur" }
        ],
        serialName : [
          { required: true, message: "串口号不能为空", trigger: "blur" }
        ],
        mark : [
          { required: true, message: "标记不能为空", trigger: "blur" }
        ],
      }
    });    
    /** 查询串口连接信息管理列表 */
    const handleGetList = () =>{
      state.loading = true;
      listLinkSerial(state.queryParams).then((res:any)=>{
        state.linkSerialList = res.data.list;
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
        serialName: undefined,        
        serialBaund: undefined,        
        serialParity: undefined,        
        serialData: undefined,        
        serialStop: undefined,        
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
        state.title = "添加串口连接信息管理";
    };
    /** 修改按钮操作 */
      const handleUpdate =(row:any)=>{
      handleReset();
      const id = row.id || state.ids
      getLinkSerial(id).then((res:any)=>{
        let data = res.data;        
        state.ruleForm = data;
        state.open = true;
        state.title = "修改串口连接信息管理";
      });
    };
    /** 提交按钮 */
    const submitForm = () => {
      //const formWrap = unref(formRef) as any;
      proxy.$refs.formRef.validate((valid: boolean) => {
        if (valid) {
          if (state.ruleForm.id != undefined) {
            updateLinkSerial(state.ruleForm).then((res:any)=>{
              if (res.code === 0) {
                ElMessage.success("修改成功");
                state.open = false;
                handleGetList();
              } else {
                ElMessage.error(res.msg);
              }
            });
          } else {
            addLinkSerial(state.ruleForm).then((res:any)=>{
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
      ElMessageBox.confirm('是否确认删除串口连接信息管理编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delLinkSerial(ids);
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