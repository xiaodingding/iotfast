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

          <div  v-if="deviceInfo.status">
          <p>
            设备状态：<i >在线</i>
          </p>
          <p>上线时间：{{timeFormat(deviceInfo.upTime)}}</p>
          </div>
          <div v-else>
            <p>
            设备状态：<i >离线</i>
          </p>
          <p>离线时间：{{timeFormat(deviceInfo.downTime)}}</p>
          </div>
        </el-card>
      </el-col>

      <el-col
        :xs="12"
        :sm="12"
        :lg="6"
      >
        <el-card class="box-card xx">
            <template #header>
                <div class="card-header">
                <span class="title">状态</span>
                </div>
            </template>
           
          <p>更新时间：</p>
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
import { intTimeFormat } from "/@/utils/common";
interface DeviceInfoDataState {
    loading:boolean;
    deviceInfo:any;
    title:string;
    queryParams: {
        id:any;
        name: any,
        sn: any,
    };
}
export default defineComponent({
    components:{},
    name: 'DeviceInfoDetail',
    setup() {
      const { proxy } = <any>getCurrentInstance();
      const formRef = ref<HTMLElement | null>(null);
      const router = useRouter();
      const state = reactive<DeviceInfoDataState>( {
      // 遮罩层
      loading: true,
      deviceInfo:{},
      title:"",
      // 查询参数
      queryParams: {
        id: undefined,
        name: undefined,
        sn: undefined,
      },
    });    
   
    /** 查询设备信息列表 */
    const handleGet = () =>{
      state.loading = true;
      state.queryParams.id = router.currentRoute.value.query["id"];
      const id = state.queryParams.id;
      getDeviceInfo(id).then((res:any)=>{
        state.deviceInfo = res.data;        
        state.title = "修改设备信息";
        state.loading = false;
      });
    }; 
    
    const timeFormat = (row:any) =>{
        
        let time_str =  intTimeFormat(row, "");
       
        if(!time_str)
        {
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
            timeFormat,
            handleGet,
            ...toRefs(state),
        };
  }
  });
</script>