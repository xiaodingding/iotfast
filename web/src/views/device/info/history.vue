<template>
    <div class="app-container">
        <el-card shadow="hover">
            <div class="deviceCategoryData-search mb15">
                <el-form :inline="true" size="default" >
                    <el-form-item label="设备id" prop="deviceId">
                        <el-input v-model="queryParams.deviceId" placeholder="请输入设备id" readonly="true" clearable
                            @keyup.enter.native="handleQuery" />
                    </el-form-item>
                    <el-form-item label="产品模板id" prop="categoryId">
                        <el-input v-model="queryParams.categoryId" placeholder="产品模板id" readonly="true" clearable
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
            <el-tabs v-model="tabsActiveName"  ref="tabRef"  @tab-click='handleTabClick'>
                <el-tab-pane label="历史数据信息" name="history_mark">
                    <el-card shadow="hover">
                    <el-row :gutter="20">
                        <el-col :sm="6" class="mb15" >
                            <div class="countup-card-item countup-card-item-box" :style="{ background: 'var(--el-color-primary)' }">
                                <div class="countup-card-item-flex" ref="topCardItemRefs">
                                    <div class="countup-card-item-title font30">属性：{{ deviceCategory.name }}</div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :sm="6" class="mb15">
                            <div class="countup-card-item countup-card-item-box" :style="{ background: 'var(--el-color-success)' }">
                                <div class="countup-card-item-flex" ref="topCardItemRefs">
                                    <div class="countup-card-item-title font30">单位：{{ deviceCategory.unit }}</div>
                                </div>
                            </div>
                        </el-col>
                         <el-col :sm="6" class="mb15">
                            <div class="countup-card-item countup-card-item-box" :style="{ background: 'var(--el-color-warning)' }">
                                <div class="countup-card-item-flex" ref="topCardItemRefs">
                                    <div class="countup-card-item-title font30">总数：<span>{{ total }}</span></div>
                                </div>
                            </div>
                        </el-col>

                    </el-row>
                    </el-card>
                </el-tab-pane>
                <el-tab-pane label="历史数据折线图" name="history_chart" >
                    <div  id="echart_line_show_container" class="echart_line_show_container" :style="{width: echarLineWidth+'px',height: '405px'}">
                        <EchartLines  v-if="tabsActiveName === 'history_chart'" :style="{width: echarLineWidth+'px',height: '405px'}" :width="echarLineWidth" :options="echarLineOptions"/>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="历史数据列表" name="history_tab">
                    <el-table :data="deviceDataList" v-loading="loading" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55" align="center" />  
                        <el-table-column :label="deviceCategory.name" align="center" prop="data" >
                            <template  #default="scope">
                                <div>{{DeviceDataFormat(scope.row)}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column label="时间" align="center" prop="time" />
                        <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
                            <template  #default="scope">
                            <el-button
                                type="text"
                                class="no_padding" size="small" 
                                @click="handleDelete(scope.row)"
                            >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <pagination v-show="total>0" 
                    :total="total" 
                    v-model:page="queryParams.pageNum"
                    v-model:limit="queryParams.pageSize"
                    @pagination="deviceDataList" />
                </el-tab-pane>
            </el-tabs>
         </el-card>
    </div>
</template>
<script lang="ts">
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import { storeToRefs } from 'pinia';
import { ElMessage, ElMessageBox, FormInstance } from 'element-plus';
import { useRouter } from 'vue-router';
import { defineComponent, getCurrentInstance, onMounted, ref, toRefs, nextTick ,reactive} from 'vue';
import {
    getDeviceCategoryHistory,
    delDeviceCategoryData,
} from "/@/api/device/deviceCategoryData";
import { getDeviceCategoty } from "/@/api/device/deviceCategoty";
import EchartLines from '/@/views/device/info/component/echart_line.vue';
import { CountUp } from 'countup.js';

interface DeviceCategoryDataDataState {
    ids:number[];
    loading: boolean;
    // 非单个禁用
    single: boolean;
    // 非多个禁用
    multiple: boolean;
    total: number;
    // 设备类别数据表格数据
    deviceCategory: any;
    deviceDataList:any[];
    title: string;
    chartStatus:boolean;
    tabsActiveName:string;
    echarLineOptions:any;
    echarLineWidth:number;
    echarLineHeight:number;
    queryParams: {
        pageNum: number;
        pageSize: number;
        categoryId: any,
        deviceId: any,
    };
    
}
export default defineComponent({
    components: {EchartLines,},
    name: 'DeviceCategoryData',
    setup() {
        const { proxy } = <any>getCurrentInstance();
        const tabRef = ref<HTMLElement | null>(null);
        const router = useRouter();
       // const topCardItemRefs =  ref<HTMLElement | null>(null);
        const state = reactive<DeviceCategoryDataDataState>({
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
            chartStatus:false,
            // 设备类别数据表格数据
            deviceCategory: {},
            deviceDataList:[],
            tabsActiveName:"history_mark",
            // 弹出层标题
            title: "",
            // 查询参数
            queryParams: {
                pageNum: 1,
                pageSize: 10,
                categoryId: undefined,
                deviceId: undefined,
            },
            echarLineOptions:{},
            echarLineHeight:400,
            echarLineWidth:800,

        });

        const handleCalcEchart = () =>{
            const tabElement = proxy.$refs.tabRef;
            //console.log('tab_height:' ,tabElement, tabElement.$el.offsetHeight, tabElement.$el.offsetWidth );
            state.echarLineWidth = tabElement.$el.offsetWidth;
        };

        const handleEchartUpdate = (deviceDataList:any[]) =>{

            let dataArray:any[] = [];
            let timeArray:any[] = [];

            deviceDataList.map(item=>{
                dataArray.push(item.data);
                timeArray.push(item.time);
            });

            const Options = {
                    title: {
                        text: state.deviceCategory.name + '历史数据折线图'
                    },
                    toolbox: {
                        feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {},
                         dataView:{},
                        }
                    },
                    tooltip:  {
                        trigger: 'axis',
                        position: function (pt) {
                        return [pt[0], '10%'];
                        }
                    },
                    xAxis: { 
                        type: 'time',
                        boundaryGap: false,
                        data: timeArray
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%']
                    },
                    dataZoom: [
                        {
                        type: 'inside',
                        start: 0,
                        end: 20
                        },
                        {
                        start: 0,
                        end: 20
                        }
                    ],
                    series: [
                        {
                            data: dataArray,
                            type: 'line',
                            smooth: true,
                            symbol: 'none',
                        }
                    ]
                };

            state.echarLineOptions = Options;
            //console.log(state.deviceDataList, Options );
        };

        /** 查询设备类别数据列表 */
        const handleGetList = () => {
            state.loading = true;
            let queryParams = {
                pageNum: (state.queryParams.pageNum > 1?state.queryParams.pageNum:0 ),
                pageSize: 10,
                categoryId: state.queryParams.categoryId,
                deviceId:  state.queryParams.deviceId,
            };
            getDeviceCategoryHistory(queryParams).then((res: any) => {
                // console.log(res);
                // res.data.Data.map(it => {
                //    propty_data.push(it);
                 state.deviceDataList = res.data.Data;
                 state.total = res.data.total;
                 state.loading = false;
                 handleEchartUpdate(res.data.Data);
                });

               
        };

        // 多选框选中数据
        const handleSelectionChange = (selection:any)=>{
            state.ids = selection.map( (item:any) => item.id)
            state.single = selection.length!=1
            state.multiple = !selection.length
        };

        const DeviceDataFormat = (row:any) =>{
            return row.data + state.deviceCategory.unit;
        };

        const handleGetCategory = () =>{
            getDeviceCategoty(state.queryParams.categoryId).then((res: any) => {
                state.deviceCategory = res.data;
            });
        };
       
        /** 搜索按钮操作 */
        const handleQuery = () => {
            state.queryParams.pageNum = 1;
            state.queryParams.pageSize = 10;
            handleGetList();
        };
        /** 重置按钮操作 */
        const resetQuery = () => {
            //resetForm("queryForm");
            state.queryParams.pageNum = 0;
            state.queryParams.pageSize = 0;
            handleQuery();
        };


        const handleTabClick = (target:any, action:any) =>{
           // console.log(target.name, action, state.tabsActiveName);
            handleCalcEchart();
        };


        /** 删除按钮操作 */
        const handleDelete = (row:any)=>{
            const ids = row.id || state.ids;
            ElMessageBox.confirm('是否确认删除设备信息编号为"' + ids + '"的数据项?', "警告", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
                }).then(function() {
                return delDeviceCategoryData(ids);
                }).then(() => {
                    handleGetList();
                    ElMessage.success("删除成功");
                }).catch(function() {});
        };

        // 初始化数字滚动
		const initNumCountUp = () => {
			nextTick(() => {
            //    handleEchartUpdate();
			//	proxy.$refs.topCardItemRefs.forEach((v: HTMLDivElement) => {
			//		new CountUp(v.querySelector('.countup-card-item-title-num') as HTMLDivElement, Math.random() * 10000).start();
			//	});
			});
		};
        

        // 页面加载时
        onMounted(() => {
            state.queryParams.deviceId = router.currentRoute.value.query["deviceId"];
            state.queryParams.categoryId = router.currentRoute.value.query["categoryId"];
            if(state.queryParams.deviceId ==  undefined || state.queryParams.deviceId.length <= 0 || state.queryParams.categoryId == undefined || state.queryParams.categoryId.length <= 0)
            {
                ElMessageBox.alert('参数错误！', '提示', {});
                //router.push('/device/deviceKind/list');
                //proxy.mittBus.emit('onCurrentContextmenuClick', Object.assign({}, { contextMenuClickId: 1, ...router }));
            }else{
                handleGetCategory();
                handleGetList();
                //DevceEchatInit();
                //initEchartsResize();
                initNumCountUp();
              //  handleCalcEchart();
            }
            
        });
        return {
            tabRef,
            handleCalcEchart,
            handleEchartUpdate,
            handleTabClick,
            handleDelete,
            handleSelectionChange,
            DeviceDataFormat,
            handleGetCategory,
            handleGetList,
            handleQuery,
            resetQuery,
            ...toRefs(state),
        };
    }
});
</script>
<style scoped lang="scss">

.countup-card-item {
	width: 100%;
	height: 103px;
	background: var(--el-text-color-secondary);
	border-radius: 4px;
	transition: all ease 0.3s;
	&:hover {
		box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
		transition: all ease 0.3s;
	}
}
.countup-card-item-box {
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;
	&:hover {
		i {
			right: 0px !important;
			bottom: 0px !important;
			transition: all ease 0.3s;
		}
	}
	i {
		position: absolute;
		right: -10px;
		bottom: -10px;
		font-size: 70px;
		transform: rotate(-30deg);
		transition: all ease 0.3s;
	}
	.countup-card-item-flex {
		padding: 0 20px;
		color: var(--el-color-white);
		.countup-card-item-title,
		.countup-card-item-tip {
			font-size: 13px;
		}
		.countup-card-item-title-num {
			font-size: 18px;
		}
		.countup-card-item-tip-num {
			font-size: 13px;
		}
	}
}
</style>