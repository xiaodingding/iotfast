<template>
	<div class="system-role-container">
		<el-card shadow="hover">
			<div class="system-user-search mb15">
        <el-form :inline="true" size="default">
          <el-form-item label="角色名称">
            <el-input  v-model="tableData.param.roleName" placeholder="请输入角色名称" clearable/>
          </el-form-item>
          <el-form-item label="状态">
            <el-select placeholder="请选择状态"  v-model="tableData.param.roleStatus" clearable>
              <el-option label="启用"  value="1" />
              <el-option label="禁用"  value="0" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button  type="primary"  @click="roleList">
              <el-icon>
                <ele-Search />
              </el-icon>
              查询
            </el-button>
			 </el-form-item>
            <el-form-item style="vertical-align: top;">
            <el-button type="success"  @click="onOpenAddRole">
              <el-icon>
                <ele-FolderAdd />
              </el-icon>
              新增角色
            </el-button>
          </el-form-item>
        </el-form>
			</div>
			<el-table :data="tableData.data" style="width: 100%">
				<el-table-column type="index" label="序号" width="60" />
				<el-table-column prop="name" label="角色名称" show-overflow-tooltip></el-table-column>
				<el-table-column prop="listOrder" label="排序" show-overflow-tooltip></el-table-column>
				<el-table-column prop="status" label="角色状态" show-overflow-tooltip>
					<template #default="scope">
						<el-tag type="success" v-if="scope.row.status===1">启用</el-tag>
						<el-tag type="info" v-else>禁用</el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="remark" label="角色描述" show-overflow-tooltip></el-table-column>
        <el-table-column prop="createdAt" label="创建时间" show-overflow-tooltip></el-table-column>
				<el-table-column label="操作" width="100">
					<template #default="scope">
						<el-button class="no_padding" size="small" type="text" @click="onOpenEditRole(scope.row)">修改</el-button>
						<el-button class="no_padding" size="small" type="text" @click="onRowDel(scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
      <pagination
          v-show="tableData.total>0"
          :total="tableData.total"
          v-model:page="tableData.param.pageNum"
          v-model:limit="tableData.param.pageSize"
          @pagination="roleList"
      />
		</el-card>
		<AddRole ref="addRoleRef" />
		<EditRole ref="editRoleRef" @getRoleList="roleList"/>
	</div>
</template>

<script lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus';
import { defineComponent, onMounted, reactive, ref, toRaw, toRefs } from 'vue';
import { getRoleList } from "/@/api/system/role";
import AddRole from '/@/views/system/role/component/addRole.vue';
import EditRole from '/@/views/system/role/component/editRole.vue';
// 定义接口来定义对象的类型
interface TableData {
  id:number;
	status: number;
	listOrder: number;
	name: string;
  remark: string;
  dataScope:number;
  createdAt: string;
}
interface TableDataState {
	tableData: {
		data: Array<TableData>;
		total: number;
		loading: boolean;
		param: {
      roleName:string;
      roleStatus:string;
			pageNum: number;
			pageSize: number;
		};
	};
}

export default defineComponent({
	name: 'systemRole',
	components: { AddRole, EditRole },
	setup() {
		const addRoleRef = ref();
		const editRoleRef = ref();
		const state = reactive<TableDataState>({
			tableData: {
				data: [],
				total: 0,
				loading: false,
				param: {
          roleName:'',
          roleStatus:'',
					pageNum: 1,
					pageSize: 10,
				},
			},
		});
		// 初始化表格数据
		const initTableData = () => {
			roleList()
		};
    const roleList = ()=>{
      const data: Array<TableData> = [];
      getRoleList(state.tableData.param).then(res=>{
        const list = res.data.list??[]
        list.map((item:TableData)=>{
          data.push({
            id:item.id,
            status: item.status,
            listOrder: item.listOrder,
            name: item.name,
            remark: item.remark,
            dataScope:item.dataScope,
            createdAt: item.createdAt,
          });
        })
			state.tableData.data = data;
        state.tableData.total = res.data.total;
		 })
    };
		// 打开新增角色弹窗
		const onOpenAddRole = () => {
			//addRoleRef.value.openDialog();
			  editRoleRef.value.openDialog();
		};
		// 打开修改角色弹窗
		const onOpenEditRole = (row: Object) => {
			//editRoleRef.value.openDialog(row);
			editRoleRef.value.openDialog(toRaw(row));
		};
		// 删除角色
		const onRowDel = (row: any) => {
			ElMessageBox.confirm(`此操作将永久删除角色名称：“${row.roleName}”，是否继续?`, '提示', {
				confirmButtonText: '确认',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
          deleteRole(row.id).then(()=>{
            ElMessage.success('删除成功');
            proxy.$refs['editRoleRef'].resetMenuSession();
            roleList();
          })
				})
				.catch(() => {});
		};
		// 分页改变
		const onHandleSizeChange = (val: number) => {
			state.tableData.param.pageSize = val;
		};
		// 分页改变
		const onHandleCurrentChange = (val: number) => {
			state.tableData.param.pageNum = val;
		};
		// 页面加载时
		onMounted(() => {
			initTableData();
		});
		return {
			addRoleRef,
			editRoleRef,
			onOpenAddRole,
			onOpenEditRole,
			onRowDel,
			onHandleSizeChange,
			onHandleCurrentChange,
      roleList,
			...toRefs(state),
		};
	},
});
</script>
