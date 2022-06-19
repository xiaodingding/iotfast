<template>
    <div class="gen-container">
        <el-form :model="tableData.param" ref="queryForm" :inline="true" size="default" label-width="68px">
            <el-form-item label="表名称" prop="tableName">
                <el-input v-model="tableData.param.tableName" placeholder="请输入表名称" clearable
                    @keyup.enter.native="handleQuery" />
            </el-form-item>
            <el-form-item label="表描述" prop="tableComment">
                <el-input v-model="tableData.param.tableComment" placeholder="请输入表描述" clearable
                    @keyup.enter.native="handleQuery" />
            </el-form-item>
            <el-form-item label="创建时间" prop="dateRange">
                <el-date-picker v-model="tableData.param.dateRange" style="width: 240px" value-format="YYYY-MM-DD"
                    type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button @click="handleQuery">
                    <el-icon>
                        <ele-Search />
                    </el-icon> 搜索
                </el-button>
            </el-form-item>
            <el-form-item style="vertical-align: top;">
                <el-button @click="resetQuery">
                    <el-icon>
                        <ele-Refresh />
                    </el-icon>重置
                </el-button>
            </el-form-item>
        </el-form>

        <el-row :gutter="10" class="mb8">
            <el-col :span="1.5">
                <el-button type="primary" size="mini" @click="handleGenTable">
                    <el-icon>
                        <ele-Download />
                    </el-icon>
                    生成
                </el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button type="info" size="mini" @click="openImportTable">
                    <el-icon>
                        <ele-Upload />
                    </el-icon>导入
                </el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button type="success" size="mini" @click="handleEditTable">
                    <el-icon>
                        <ele-Edit />
                    </el-icon>修改
                </el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button type="danger" size="mini" @click="handleDelete">
                    <el-icon>
                        <ele-Delete />
                    </el-icon>删除
                </el-button>
            </el-col>
        </el-row>

        <el-table v-loading="tableData.loading" style="width: 100%" :data="tableData.data"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column type="index" label="序号" width="60" />
            <el-table-column label="表名称" align="center" prop="tableName" show-overflow-tooltip />
            <el-table-column label="表描述" align="center" prop="tableComment" show-overflow-tooltip />
            <el-table-column label="实体" align="center" prop="className" show-overflow-tooltip />
            <el-table-column label="创建时间" align="center" prop="createTime" width="180" show-overflow-tooltip />

            <el-table-column label="更新时间" align="center" prop="updateTime" width="160" show-overflow-tooltip />

            <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
                <template #default="scope">
                    <el-button class="no_padding" size="small" type="text" @click="handlePreview(scope.row)">预览
                    </el-button>
                    <el-button class="no_padding" size="small" type="text" @click="handleEditTable(scope.row)">编辑
                    </el-button>
                    <el-button class="no_padding" size="small" type="text" @click="handleDelete(scope.row)">删除
                    </el-button>
                    <el-button class="no_padding" size="small" type="text" @click="handleGenTable(scope.row)">生成代码
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <pagination v-show="tableData.total > 0" :total="tableData.total" :page.sync="tableData.param.pageNum"
            :limit.sync="tableData.param.pageSize" @pagination="tableList" />
        <!-- 预览界面 -->
        <el-dialog :title="preview.title" v-model="preview.open" width="80%" top="5vh" append-to-body
            :close-on-click-modal="false">
            <el-tabs v-model="preview.activeName">
                <el-tab-pane v-for="(value, key) in preview.data" :label="key" :name="key" :key="key">

                    <pre v-highlight><code class="golang">{{ value }}</code></pre>
                </el-tab-pane>
            </el-tabs>
        </el-dialog>
        <importTable ref="importTableRef" @ok="handleQuery" />
    </div>
</template>

<script lang="ts">
import { number } from 'echarts';
import { ElMessage, ElMessageBox } from 'element-plus';
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
import { batchGenCode, listTable, previewTable, delTable } from "/@/api/system/tools/gen";
import router from '/@/router';
import importTable from '/@/views/system/gen/component/importTable.vue';
//import EditDic from '/@/views/system/dict/component/editDic.vue';

interface TableDataState {
    ids: number[];
    // 选中表数组
    tableNames: any[],
    // 非单个禁用
    single: boolean,
    // 非多个禁用
    multiple: boolean,
    tableData: {
        data: any[];
        total: number;
        loading: boolean;
        uniqueId: string,
        param: {
            pageNum: number;
            pageSize: number;
            tableComment: string;
            tableName: string;
            dateRange: string[];
        }
    };
    // 预览参数
    preview: {
        open: boolean;
        title: string;
        data: any;
        activeName: string;
    };
}

export default defineComponent({
    name: "Gen",
    components: { importTable },
    setup() {
        const importTableRef = ref();
        const state = reactive<TableDataState>({
            // 选中数组
            ids: [],
            // 选中表数组
            tableNames: [],
            // 非单个禁用
            single: true,
            // 非多个禁用
            multiple: true,
            // 查询参数
            tableData: {
                data: [],
                total: 0,
                loading: false,
                uniqueId: '',
                param: {
                    pageNum: 1,
                    pageSize: 10,
                    tableName: '',
                    tableComment: '',
                    dateRange: [],
                }
            },
            // 预览参数
            preview: {
                open: false,
                title: "代码预览",
                data: {},
                activeName: "controller"
            }
        });

        // 初始化表格数据
        const initTableData = () => {
            tableList()
        };
        const tableList = () => {
            listTable(state.tableData.param).then((res: any) => {
                state.tableData.data = res.data.list ?? [];
                state.tableData.total = res.data.total;
            });
        };

        // 页面加载时
        onMounted(() => {
            initTableData();
        });

        /** 搜索按钮操作 */
        const handleQuery = () => {
            state.tableData.param.pageNum = 1;
            tableList();
        };
        /** 生成代码操作 */
        const handleGenTable = (row: any) => {
            const tableIds = row.tableId || state.ids;
            console.log("tableIds:", tableIds);
            ElMessageBox.confirm('是否确认要生成对应的代码文件，部分数据将被覆盖? 生成后请重启前后端服务。', "警告", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                batchGenCode(tableIds).then(() => {
                    ElMessage.success('生成成功');
                })
            }
            ).catch(() => { });
        };
        /** 打开导入表弹窗 */
        const openImportTable = () => {
            //this.$refs.import.show();
            importTableRef.value.openDialog();
        };
        /** 重置按钮操作 */
        const resetQuery = () => {
            state.tableData.param.dateRange = [];
            // resetForm("queryForm");
            //handleQuery();
        };
        /** 预览按钮 */
        const handlePreview = (row: any) => {
            previewTable(row.tableId).then((res: any) => {
                state.preview.data = res.data.code;
                state.preview.open = true;
            });
            console.log("row:", row, "open:", state.preview.open);
        };
        // 多选框选中数据
        const handleSelectionChange = (selection: any) => {
            // this.ids = selection.map(item => item.tableId);
            // this.tableNames = selection.map(item => item.tableName);
            // this.single = selection.length != 1;
            // this.multiple = !selection.length;
        };
        /** 修改按钮操作 */
        const handleEditTable = (row: any) => {
           // ElMessageBox.confirm.ids[0];
            // this.$router.push({ path: "/gen/edit", query: { tableId: tableId } });
            router.push({
                path: "/system/gen/editTable",
                query: { tableId: row.tableId },
            });
        };
        /** 删除按钮操作 */
        const handleDelete = (row: any) => {
            let tableIds:number[] = [] ;
            if(row)
            {
                tableIds = [row.tableId];
            }else{
                tableIds = state.ids;
            }
            //console.log('handleDelete:', tableIds);
            ElMessageBox.confirm('是否确认删除表编号为"' + tableIds + '"的数据项?', "警告", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                return delTable(tableIds);
            }).then(() => {
                tableList();
                ElMessage.success("删除成功");
            }).catch(function () { });

        };

        return {
            importTableRef,
            tableList,
            handleQuery,
            handleGenTable,
            openImportTable,
            resetQuery,
            handlePreview,
            handleSelectionChange,
            handleEditTable,
            handleDelete,
            ...toRefs(state),
        };

    },
});
</script>
