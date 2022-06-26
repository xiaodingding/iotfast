<template>
    <div class="device-detail-container">
        <div class="amap-page-container">

        </div>

        <el-row :gutter="20" v-model="loading">
            <el-col :xs="12" :sm="12" :lg="6">
                <el-card class="box-card xx">
                    <template #header>
                        <div class="card-header">
                            <span class="title">设备信息</span>
                        </div>
                    </template>

                    <div class="home-card-item flex">
                        <div class="flex-margin flex w100">
                            <div class="flex-auto" v-if="deviceInfo.status">
                                <span class="font30">设备状态：<i style="color:#6690F9;font-style:normal;">在线</i></span>
                                <div class="mt20">上线时间：{{ timeFormat(deviceInfo.upTime) }}</div>
                            </div>
                            <div class="flex-auto" v-else>
                                <span class="font30">设备状态：<i style="color:#FF6462;font-style:normal;">离线</i></span>
                                <div class="mt20">上线时间：{{ timeFormat(deviceInfo.downTime) }}</div>
                            </div>
                        </div>
                    </div>


                </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :lg="6" class="mb15" v-for="item in categoryList" v-bind:key="item.id">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span class="title">{{ item.name }}状态</span>
                        </div>
                    </template>

                    <div class="home-card-item flex">
                        <div class="flex-margin flex w100">
                            <div class="flex-auto">
                                <span class="font30">{{ item.name }} : {{ categoryDataLastDataFormat(item) }}
                                    {{ item.unit }}</span>
                                <div class="mt20">更新时间：{{ categoryDataLastTimeFormat(item) }}</div>
                            </div>
                            <div class="history-card-item-icon flex" 
                                style="background: var(--next-color-success-lighter);">
                                <i class="flex-margin font32 fa fa-line-chart"  style="color: var(--el-color-success);"  @click="handleHistory(item)"></i>
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts">
import { ElMessage, ElMessageBox, FormInstance } from 'element-plus';
import { useRouter } from 'vue-router';
import { defineComponent, getCurrentInstance, onMounted, reactive, ref, toRefs, unref } from 'vue';
import {
    getDeviceInfo,
} from "/@/api/device/deviceInfo";
import {
    getDeviceCategoryRecent,
} from "/@/api/device/deviceCategoryData";

import { intTimeFormat } from "/@/utils/common";
interface DeviceInfoDataState {
    loading: boolean;
    deviceInfo: any;
    kindInfo: any;
    categoryList: any[];
    dataList: any;
    title: string;
    queryParams: {
        id: any;
        name: any,
        sn: any,
    };
}
export default defineComponent({
    components: {},
    name: 'DeviceInfoDetail',
    setup() {
        const { proxy } = <any>getCurrentInstance();
        const formRef = ref<HTMLElement | null>(null);
        const router = useRouter();
        const state = reactive<DeviceInfoDataState>({
            // 遮罩层
            loading: true,
            deviceInfo: {},
            kindInfo: {},
            dataList: {},
            categoryList: [],
            title: "",
            // 查询参数
            queryParams: {
                id: undefined,
                name: undefined,
                sn: undefined,
            },
        });

        const randomRgb = (item: any) => {
            let R = Math.floor(Math.random() * 130 + 110);
            let G = Math.floor(Math.random() * 130 + 110);
            let B = Math.floor(Math.random() * 130 + 110);
            return 'rgb(' + R + ',' + G + ',' + B + ')'
        };

        const handleHistory = (item:any) =>{
            //console.log(item);
            //router.push('/device/deviceCategoty/list?kindId=' + item.id);
            router.push({path:'/device/deviceInfo/history',query: {kindId:item.id ,deviceId:state.deviceInfo.id, categoryId:item.id} })
        };

        const categoryDataLastDataFormat = (row: any) => {
            if (state.dataList == undefined || state.dataList.length <= 0) {
                return "未注册"
            } else {
                //return state.dataList[row.mark][0].time;
                if ((state.dataList[row.mark] != undefined) && (state.dataList[row.mark].length > 0)) {
                    let data: any[] = [];
                    data = state.dataList[row.mark];
                    //console.log(data[0].data);

                    return data[0].data;
                }
            }
            return row.mark;
        };

        const categoryDataLastTimeFormat = (row: any) => {
            //console.log(state.dataList[row.mark]);
            if (state.dataList == undefined || state.dataList.length <= 0) {
                return "未注册"
            } else {
                //return state.dataList[row.mark][0].time;
                if ((state.dataList[row.mark] != undefined) && (state.dataList[row.mark].length > 0)) {
                    let data: any[] = [];
                    data = state.dataList[row.mark];
                    //console.log(data[0].time);

                    return data[0].time;
                }
            }
            return row.mark;
        };

        const getDeviceLastData = () => {
            if (state.categoryList == undefined || state.categoryList.length <= 0) {
                console.log("categoryList get failed:", state.categoryList);
            } else {
                state.categoryList.forEach(function (item) {
                    // console.log(item);
                    let propty = item.mark;
                    let propty_data: any[] = [];

                    getDeviceCategoryRecent({ "categoryId": item.id, "deviceId": state.deviceInfo.id, "top": 10 }).then((res: any) => {
                        // console.log(res);
                        res.data.Data.map(it => {
                            propty_data.push(it);
                        });

                        //state.dataList.push({propty:propty_data});
                        state.dataList[propty] = propty_data;
                        //console.log(propty, propty_data,  state.dataList);
                    });

                });
            }

            state.loading = false;
        };

        /** 查询设备信息列表 */
        const handleGet = () => {
            state.loading = true;
            state.queryParams.id = router.currentRoute.value.query["id"];
            const id = state.queryParams.id;
            getDeviceInfo(id).then((res: any) => {
                state.deviceInfo = res.data.info;
                state.kindInfo = res.data.kind;
                state.categoryList = res.data.categoryList;
                // state.title = "修改设备信息";

                getDeviceLastData();
            });

        };

        const timeFormat = (row: any) => {
            let time_str = intTimeFormat(row, "");

            if (!time_str) {
                time_str = "未注册";
            }
            return time_str;
        };

        // 页面加载时
        onMounted(() => {
            handleGet();
        });
        return {
            formRef,
            randomRgb,
            handleHistory,
            categoryDataLastDataFormat,
            categoryDataLastTimeFormat,
            getDeviceLastData,
            timeFormat,
            handleGet,
            ...toRefs(state),
        };
    }
});
</script>

<style scoped lang="scss">
.history-card-item-icon{
    width: 70px;
    height: 70px;
    border-radius: 100%;
    flex-shrink: 1;
}
</style>