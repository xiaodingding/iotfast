<template>
	<div class="app-container">
		<el-card shadow="hover">
			<div class="deviceStatus-search mb15">
				<el-form :inline="true" size="default" label-width="68px">
					<el-form-item label="状态" prop="status">
						<el-select v-model="queryParams.status" placeholder="请选择状态" clearable>
							<el-option label="请选择字典生成" value="" />
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="handleQuery">
							<el-icon>
								<ele-Se style="vertical-align: top" arch />
							</el-icon>
							查询</el-button>
                          </el-form-item>
            <el-form-item style="vertical-align: top;">
						<el-button @click="resetQuery">
							<el-icon>
								<ele-Refresh />
							</el-icon>
							重置</el-button
						>
					</el-form-item>
				</el-form>
				<el-row :gutter="10" class="mb8">
					<el-col :span="1.5">
						<el-button type="primary" @click="handleAdd">
							<el-icon>
								<ele-FolderAdd />
							</el-icon>
							新增</el-button
						>
					</el-col>
					<el-col :span="1.5">
						<el-button type="success" :disabled="single" @click="handleUpdate">
							<el-icon>
								<ele-Edit />
							</el-icon>
							修改</el-button
						>
					</el-col>
					<el-col :span="1.5">
						<el-button type="danger" :disabled="multiple" @click="handleDelete">
							<el-icon>
								<ele-Delete />
							</el-icon>
							删除</el-button
						>
					</el-col>
				</el-row>
			</div>
		</el-card>
		<el-table v-loading="loading" :data="deviceStatusList" @selection-change="handleSelectionChange" style="width: 100%">
			<el-table-column type="selection" width="55" align="center" />
			<el-table-column label="设备ID" align="center" prop="deviceId" />
			<el-table-column label="状态" align="center">
				<template #default="scope">
					<el-switch
						v-model="scope.row.status"
						:active-value="1"
						:inactive-value="0"
						inline-prompt
						active-text="启"
						inactive-text="禁"
						@change="handlestatusChange(scope.row)"
					></el-switch>
				</template>
			</el-table-column>
			<el-table-column label="超时时间" align="center" prop="timeOut" />
			<el-table-column label="上线时间" align="center" prop="upTime" />
			<el-table-column label="离线时间" align="center" prop="downTime" />
			<el-table-column label="最新一次数据更新时间" align="center" prop="lastDataUpdateTime" />
			<el-table-column label="操作" align="center" class-name="small-padding fixed-width">
				<template #default="scope">
					<el-button type="text" class="no_padding" size="small" @click="handleUpdate(scope.row)">修改</el-button>
					<el-button type="text" class="no_padding" size="small" @click="handleDelete(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<pagination
			v-show="total > 0"
			:total="total"
			v-model:page="queryParams.pageNum"
			v-model:limit="queryParams.pageSize"
			@pagination="deviceStatusList"
		/>
		<!-- 添加或修改设备状态对话框 -->
		<el-dialog :title="title" v-model="open" width="769px"
			>submitForm
			<template #header>
				<div>{{ title }}</div>
			</template>
			<el-form :model="ruleForm" ref="formRef" :rules="rules" size="default" label-width="120px">
				<el-form-item label="设备ID" prop="deviceId">
					<el-input v-model="ruleForm.deviceId" placeholder="请输入设备ID" />
				</el-form-item>
				<el-form-item label="状态" prop="status">
					<el-radio-group v-model="ruleForm.status">
						<el-radio label="1">请选择字典生成</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="超时时间" prop="timeOut">
					<el-input v-model="ruleForm.timeOut" placeholder="请输入超时时间" />
				</el-form-item>
				<el-form-item label="上线时间" prop="upTime">
					<el-input v-model="ruleForm.upTime" placeholder="请输入上线时间" />
				</el-form-item>
				<el-form-item label="离线时间" prop="downTime">
					<el-input v-model="ruleForm.downTime" placeholder="请输入离线时间" />
				</el-form-item>
				<el-form-item label="最新一次数据更新时间" prop="lastDataUpdateTime">
					<el-input v-model="ruleForm.lastDataUpdateTime" placeholder="请输入最新一次数据更新时间" />
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
	listDeviceStatus,
	getDeviceStatus,
	delDeviceStatus,
	addDeviceStatus,
	updateDeviceStatus,
	changeDeviceStatusStatus,
} from '/@/api/device/deviceStatus';
interface DeviceStatusDataState {
	ids: number[];
	loading: boolean;
	// 选中表数组
	// tableNames: any[];
	// 非单个禁用
	single: boolean;
	// 非多个禁用
	multiple: boolean;
	total: number;
	// 设备状态表格数据
	deviceStatusList: any[];
	title: string;
	open: boolean;
	ruleForm: any;
	queryParams: {
		pageNum: number;
		pageSize: number;
		deviceId: any;
		status: any;
		timeOut: any;
		upTime: any;
		downTime: any;
		lastDataUpdateTime: any;
	};
	rules: any;
}
export default defineComponent({
	components: {},
	name: 'DeviceStatus',
	setup() {
		const { proxy } = <any>getCurrentInstance();
		const formRef = ref<HTMLElement | null>(null);
		const state = reactive<DeviceStatusDataState>({
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
			// 设备状态表格数据
			deviceStatusList: [],
			// 弹出层标题
			title: '',
			// 是否显示弹出层
			open: false,
			// 查询参数
			queryParams: {
				pageNum: 1,
				pageSize: 10,
				deviceId: undefined,
				status: undefined,
				timeOut: undefined,
				upTime: undefined,
				downTime: undefined,
				lastDataUpdateTime: undefined,
			},
			// 表单参数
			ruleForm: {},
			// 表单校验
			rules: {
				deviceId: [{ required: true, message: '设备ID不能为空', trigger: 'blur' }],
				status: [{ required: true, message: '状态不能为空', trigger: 'blur' }],
				timeOut: [{ required: true, message: '超时时间不能为空', trigger: 'blur' }],
				lastDataUpdateTime: [{ required: true, message: '最新一次数据更新时间不能为空', trigger: 'blur' }],
			},
		});
		// 状态修改
		const handlestatusChange = (row: any) => {
			let text = row.status === 1 ? '启用' : '停用';
			ElMessageBox.confirm('确认要"' + text + '"：吗?', '警告', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(function () {
					return changeDeviceStatusStatus(row.id, row.status);
				})
				.then(() => {
					ElMessage.success(text + '成功');
				})
				.catch(function () {
					//state.userStatus =row.userStatus === 0 ?1 : 0;
				});
		};
		/** 查询设备状态列表 */
		const handleGetList = () => {
			state.loading = true;
			listDeviceStatus(state.queryParams).then((res: any) => {
				state.deviceStatusList = res.data.list;
				state.total = res.data.total;
				state.loading = false;
			});
		};
		// 取消按钮
		const handleCancel = () => {
			state.open = false;
			handleReset();
		};
		// 表单重置
		const handleReset = () => {
			state.ruleForm = {
				id: undefined,
				deviceId: undefined,
				status: '0',
				timeOut: undefined,
				upTime: undefined,
				downTime: undefined,
				lastDataUpdateTime: undefined,
			};
			// resetForm("form");
		};
		/** 搜索按钮操作 */
		const handleQuery = () => {
			state.queryParams.pageNum = 1;
			handleGetList();
		};
		/** 重置按钮操作 */
		const resetQuery = () => {
			//resetForm("queryForm");
			handleQuery();
		};
		// 多选框选中数据
		const handleSelectionChange = (selection: any) => {
			state.ids = selection.map((item: any) => item.id);
			state.single = selection.length != 1;
			state.multiple = !selection.length;
		};
		/** 新增按钮操作 */
		const handleAdd = () => {
			handleReset();
			state.open = true;
			state.title = '添加设备状态';
		};
		/** 修改按钮操作 */
		const handleUpdate = (row: any) => {
			handleReset();
			const id = row.id || state.ids;
			getDeviceStatus(id).then((res: any) => {
				let data = res.data;
				data.status = '' + data.status;
				state.ruleForm = data;
				state.open = true;
				state.title = '修改设备状态';
			});
		};
		/** 提交按钮 */
		const submitForm = () => {
			//const formWrap = unref(formRef) as any;
			proxy.$refs.formRef.validate((valid: boolean) => {
				if (valid) {
					if (state.ruleForm.id != undefined) {
						updateDeviceStatus(state.ruleForm).then((res: any) => {
							if (res.code === 0) {
								ElMessage.success('修改成功');
								state.open = false;
								handleGetList();
							} else {
								ElMessage.error(res.msg);
							}
						});
					} else {
						addDeviceStatus(state.ruleForm).then((res: any) => {
							if (res.code === 0) {
								ElMessage.success('新增成功');
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
		const handleDelete = (row: any) => {
			const ids = row.id || state.ids;
			ElMessageBox.confirm('是否确认删除设备状态编号为"' + ids + '"的数据项?', '警告', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(function () {
					return delDeviceStatus(ids);
				})
				.then(() => {
					handleGetList();
					ElMessage.success('删除成功');
				})
				.catch(function () {});
		};
		// 页面加载时
		onMounted(() => {
			handleGetList();
		});
		return {
			formRef,
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
	},
});
</script>