<template>
  <!-- 导入表 -->
  <el-dialog title="导入表" v-model="isShowDialog"  width="800px" top="5vh" append-to-body :close-on-click-modal="false">
    <el-form :model="queryParams" ref="queryForm" :inline="true">
      <el-form-item label="表名称" prop="tableName">
        <el-input
          v-model="queryParams.tableName"
          placeholder="请输入表名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="表描述" prop="tableComment">
        <el-input
          v-model="queryParams.tableComment"
          placeholder="请输入表描述"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
    <el-row>
      <el-table @row-click="clickRow" ref="table" :data="dbTableList" @selection-change="handleSelectionChange" height="260px">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="tableName" label="表名称"></el-table-column>
        <el-table-column prop="tableComment" label="表描述"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
      </el-table>
      <pagination
        v-show="total>0"
        :total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="getList"
      />
    </el-row>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleImportTable">确 定</el-button>
      <el-button @click="onCancel">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import { defineComponent, reactive, toRefs } from 'vue';
import { importTable, listDbTable } from "/@/api/system/tools/gen";

interface ImportTableState {
  isShowDialog:boolean;
  // 选中数组值
  tables: string[],
  // 总条数
  total: number,
  // 表数据
  dbTableList: any[],
	queryParams: {
        pageNum: number,
        pageSize: number,
        tableName: string,
        tableComment: string
  };
}

export default defineComponent({
	name: 'importTable',
	setup(props, { emit }) {
  
		const state = reactive<ImportTableState>({
      isShowDialog:false,
		// 选中数组值
      tables: [],
      // 总条数
      total: 0,
      // 表数据
      dbTableList: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        tableName: '',
        tableComment: ''
      }

		});

     // 显示弹框
   const clickRow = (row:any) => {
     // state.table.toggleRowSelection(row);
    };
    // 多选框选中数据
   const handleSelectionChange = (selection:any)=> {
     //console.log(selection);
     state.tables = selection.map(item => item.tableName);
    };
    // 查询表数据
    const getList = () => {
      listDbTable(state.queryParams).then((res:any)=>{
        if (res.code === 0) {
          state.dbTableList = res.data.list;
          state.total = res.data.total;
        }
      });
    };
    
    /** 搜索按钮操作 */
    const handleQuery= () => {
     
    };
    /** 重置按钮操作 */
    const resetQuery= () => {
     
    };

    /** 导入按钮操作 */
   const handleImportTable= () => {
      if(state.tables.length==0){
          ElMessage.error("请选择要导入的表格");
          return
        }

          importTable(state.tables).then((res:any)=>{
            ElMessage.success(res.msg);
          if (res.code === 0) {
            state.isShowDialog = false;
            emit("ok");
          }
      });
    };

		// 打开弹窗
		const openDialog = (row?: any) => {
            resetForm();
		    getList();
			state.isShowDialog = true;
		};
		// 关闭弹窗
		const closeDialog = () => {
			state.isShowDialog = false;
		};
		// 取消
		const onCancel = () => {
			closeDialog();
		};
		// 新增
		const onSubmit = () => {
    
		};
	
    const resetForm = ()=>{
     
    };

		return {
      clickRow,
      handleSelectionChange,
      getList,
      handleQuery,
      resetQuery,
      handleImportTable,
			openDialog,
			closeDialog,
			onCancel,
			onSubmit,
			...toRefs(state),
		};
	},
});
</script>
