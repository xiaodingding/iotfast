<template>
   <div  :id="container" class="echart_line_container" :ref="container" :style="`width:${echarts_width}px;height:${echarts_height}px;margin-top:${echarts_top}px`"></div>
</template>


<script lang="ts">
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import { storeToRefs } from 'pinia';
import { ElMessage, ElMessageBox, FormInstance } from 'element-plus';
import { useTagsViewRoutes } from '/@/stores/tagsViewRoutes';
import { defineComponent, getCurrentInstance, onMounted, reactive, ref, watch, toRefs } from 'vue';

export default defineComponent({
    name: 'EchartLines',
    props:{
        //图表的options
        options: {
            type: Object,
            require: true,
        },
        width: {
            type: Number,
            default: 860,
        },
        height: {
            type: Number,
            default: 400,
        },
        top: {
            type: Number,
            default: 0,
        },
        //首次加载
        isFirst: {
            type: Boolean,
            default: false,
        },
        //组件唯一值
        container: {
            type: String,
            default: "container",
        },
        //是否开启点击事件
        isClick: {
            type: Boolean,
            default: false,
        },
        //点击事件的回调函数
        clickOb:{
            type:Function,
            default:null
        }
    },
    setup(props, context) {
        //console.log(props);
        const { proxy } = <any>getCurrentInstance();
        const state = reactive<any>({
            props:props,
            // 遮罩层
            loading: true,
            myChartLine: {},
            echarts_width: props.width+5,
            echarts_height: props.height+5,
            echarts_top:props.top,
        });


        const DevceEchatInit = () =>{
            const  myChart = echarts.init(proxy.$refs.container);
            state.myChartLine = myChart;
          
            if(!props.options)
            {

                // console.log("param options is null!");
                const option = {
                    title: {
                        text: '历史数据折线图'
                    },
                    tooltip: {},
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line',
                            smooth: true
                        }
                    ]
                };

                myChart.setOption(option);
            }else{
                // console.log("param options is ok");
                myChart.setOption(props.options);
            }

        };


        const resetEchartLine = () =>{
            // const  myeChart = echarts.init(proxy.$refs.container);
            // let width = parseInt(props.width);
            // let height = parseInt(props.height);
      
        //     function getStyle(obj, attr) {
        //             if (obj.currentStyle) {
        //                 return obj.currentStyle[attr];
        //             } else {
        //                 return document.defaultView.getComputedStyle(obj, null)[attr];
        //             }
        //         }
        //     //获取父元素宽高
        //     let echartsWidth = getStyle(echarts_cl, 'width');
        //     let echartsHeight = getStyle(echarts_cl, 'height');

        //     let myChart = document.querySelector('#RealChartContainer');

        //     echart_id.style.width =  document.body.clientWidth * 0.8;
        //     echart_id.style.width =  document.body.clientWidth * 0.8;

        //    //将父元素宽高赋值给图表
        //     myChart.style.width =  document.body.clientWidth * 0.8;
        //     myChart.style.height = document.body.clientHeight * 0.6;

            if(props.width < (document.body.clientWidth * 0.4))
            {
                props.width = document.body.clientWidth * 0.8;
                props.height = document.body.clientHeight * 0.6;
            }
 
                state.myChartLine.resize({
                //width: document.body.clientWidth * 0.9,
                width: props.width,
                height: props.height,
            });

            // console.log("echartsWidth:", echartsWidth, echart_id.offsetWidth, myChart.style.width, "echartsHeight:", echartsHeight, echart_id.offsetHeight, echart_id.clientHeight, echart_id.scrollHeight, document.body.clientHeight);
        }

        //对option进行监听，有更新时，重新执行changeEchart方法
       

        // 页面加载时
        onMounted(() => {
            DevceEchatInit();
            resetEchartLine();

            
        });
        return {
            resetEchartLine,
            DevceEchatInit,
            ...toRefs(state),
        };
    }
});
</script>