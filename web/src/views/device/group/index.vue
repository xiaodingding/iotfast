<template>
    <div class="app-container">
        <el-card shadow="hover">
            <div class="deviceGroup-search mb15">
                <el-form :inline="true" size="default" label-width="68px">
                    <el-form-item label="组名" prop="name">
                        <el-input v-model="queryParams.name" placeholder="请输入组名" clearable
                            @keyup.enter.native="handleQuery" />
                    </el-form-item>
                    <el-form-item label="Id" prop="id">
                        <el-input v-model="queryParams.id" placeholder="请输入Id" clearable
                            @keyup.enter.native="handleQuery" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleQuery">
                            <el-icon>
                                <ele-Search />
                            </el-icon>
                            查询
                        </el-button>
                           </el-form-item>
            <el-form-item style="vertical-align: top;">
                        <el-button @click="resetQuery">
                            <el-icon>
                                <ele-Refresh />
                            </el-icon>
                            重置
                        </el-button>
                    </el-form-item>
                </el-form>
                <el-row :gutter="10" class="mb8">
                    <el-col :span="1.5">
                        <el-button type="primary" @click="handleAdd">
                            <el-icon>
                                <ele-FolderAdd />
                            </el-icon>
                            新增
                        </el-button>
                    </el-col>
                    <el-col :span="1.5">
                        <el-button type="success" :disabled="single" @click="handleUpdate">
                            <el-icon>
                                <ele-Edit />
                            </el-icon>
                            修改
                        </el-button>
                    </el-col>
                    <el-col :span="1.5">
                        <el-button type="danger" :disabled="multiple" @click="handleDelete">
                            <el-icon>
                                <ele-Delete />
                            </el-icon>
                            删除
                        </el-button>
                    </el-col>
                </el-row>
            </div>
        </el-card>
        <el-table v-loading="loading" :data="deviceGroupList" @selection-change="handleSelectionChange"
            style="width: 100%">
            <el-table-column type="selection" width="55" align="center" />
            <el-table-column label="组名" align="center" prop="name" />
            <el-table-column label="创建时间" align="center" prop="createdAt" width="180"/>
            <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
                <template #default="scope">
                    <el-button type="text" class="no_padding" size="small" @click="handleUpdate(scope.row)">修改
                    </el-button>
                    <el-button type="text" class="no_padding" size="small" @click="handleDelete(scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <pagination v-show="total > 0" :total="total" v-model:page="queryParams.pageNum"
            v-model:limit="queryParams.pageSize" @pagination="deviceGroupList" />
        <!-- 添加或修改设备分组对话框 -->
        <el-dialog :title="title" v-model="open" width="769px">
            <template #header>
                <div>{{ title }}</div>
            </template>
            <el-form :model="ruleForm" ref="formRef" :rules="rules" size="default" label-width="120px">
                <el-form-item label="组名" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入组名" />
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
import { useRouter } from 'vue-router';
import { defineComponent, getCurrentInstance, onMounted, reactive, ref, toRefs, unref } from 'vue';
import { listDeviceGroup, getDeviceGroup, delDeviceGroup, addDeviceGroup, updateDeviceGroup } from '/@/api/device/deviceGroup';
interface DeviceGroupDataState {
    ids: number[];
    loading: boolean;
    // 选中表数组
    // tableNames: any[];
    // 非单个禁用
    single: boolean;
    // 非多个禁用
    multiple: boolean;
    total: number;
    // 设备分组表格数据
    deviceGroupList: any[];
    title: string;
    open: boolean;
    ruleForm: any;
    queryParams: {
        pageNum: number;
        pageSize: number;
        name: any;
        id:any;
    };
    rules: any;
}
export default defineComponent({
    components: {},
    name: 'DeviceGroup',
    setup() {
        const { proxy } = <any>getCurrentInstance();
        const formRef = ref<HTMLElement | null>(null);
        const router = useRouter();
        const state = reactive<DeviceGroupDataState>({
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
            // 设备分组表格数据
            deviceGroupList: [],
            // 弹出层标题
            title: '',
            // 是否显示弹出层
            open: false,
            // 查询参数
            queryParams: {
                pageNum: 1,
                pageSize: 10,
                name: undefined,
                id:undefined,
            },
            // 表单参数
            ruleForm: {},
            // 表单校验
            rules: {
                name: [{ required: true, message: '组名不能为空', trigger: 'blur' }],
            },
        });
        /** 查询设备分组列表 */
        const handleGetList = () => {
            state.loading = true;
            listDeviceGroup(state.queryParams).then((res: any) => {
                state.deviceGroupList = res.data.list;
                state.total = res.data.total;
                state.loading = false;
            });
        };
        // 取消按钮
        const handleCancel = () => {
            state.open = false;
            handleReset();
        };
         const resetQueryParam = ()=> {
            state.queryParams ={
                pageNum: 1,
                pageSize: 10,
                name: undefined,
                id:undefined,
            }
        };
        // 表单重置
        const handleReset = () => {
            state.ruleForm = {
                id: undefined,
                name: undefined,
                createdAt: undefined,
                updatedAt: undefined,
            };
            resetQueryParam();
        };
        /** 搜索按钮操作 */
        const handleQuery = () => {
            state.queryParams.pageNum = 1;
            handleGetList();
        };
        /** 重置按钮操作 */
        const resetQuery = () => {
            resetQueryParam();
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
            state.title = '添加设备分组';
        };
        /** 修改按钮操作 */
        const handleUpdate = (row: any) => {
            handleReset();
            const id = row.id || state.ids;
            getDeviceGroup(id).then((res: any) => {
                let data = res.data;
                state.ruleForm = data;
                state.open = true;
                state.title = '修改设备分组';
            });
        };
        /** 提交按钮 */
        const submitForm = () => {
            //const formWrap = unref(formRef) as any;
            proxy.$refs.formRef.validate((valid: boolean) => {
                if (valid) {
                    if (state.ruleForm.id != undefined) {
                        updateDeviceGroup(state.ruleForm).then((res: any) => {
                            if (res.code === 0) {
                                ElMessage.success('修改成功');
                                state.open = false;
                                handleGetList();
                            } else {
                                ElMessage.error(res.msg);
                            }
                        });
                    } else {
                        addDeviceGroup(state.ruleForm).then((res: any) => {
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
            ElMessageBox.confirm('是否确认删除设备分组编号为"' + ids + '"的数据项?', '警告', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            })
                .then(function () {
                    return delDeviceGroup(ids);
                })
                .then(() => {
                    handleGetList();
                    ElMessage.success('删除成功');
                })
                .catch(function () { });
        };
        // 页面加载时
        onMounted(() => {
            state.queryParams.id = router.currentRoute.value.query["id"];
            handleGetList();
        });
        return {
            router,
            resetQueryParam,
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