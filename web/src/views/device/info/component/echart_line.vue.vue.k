<template>
  <div class='echart'  ref="chartDom"></div>
</template>


<script lang="ts">
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import { storeToRefs } from 'pinia';
import { ElMessage, ElMessageBox, FormInstance } from 'element-plus';
import { useTagsViewRoutes } from '/@/stores/tagsViewRoutes';
import { defineComponent, getCurrentInstance, onMounted,defineProps, reactive, ref, watch, toRefs, onActivated } from 'vue';
const echarts = inject('echarts')
const chartDom = ref(null)
const myChart = ref(null);

export default defineComponent({
    name: 'EchartLines',
    setup() {
        const { proxy } = <any>getCurrentInstance();
        const state = reactive<any>({
            // 遮罩层
            loading: true,
            chartStatus :false,
            myChartLine: {},
        });


        const DevceEchatInit = () =>{
            const  myChart = echarts.init(proxy.$refs.container);
            state.myChartLine = myChart;
          
            if(!state.chartStatus)
            {
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
                state.chartStatus = true;

            }else
            {
                myChart.resize({});
            }
            
        };


        const resetEchartLine = () =>{
            const  myeChart = echarts.init(proxy.$refs.container);
            let echarts_cl = document.querySelector('.echart_line_show_container');
            let echart_id =  document.getElementById('echart_line_show_container');

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

 
            myeChart.resize({
            width: document.body.clientWidth * 0.9,
        });

            // console.log("echartsWidth:", echartsWidth, echart_id.offsetWidth, myChart.style.width, "echartsHeight:", echartsHeight, echart_id.offsetHeight, echart_id.clientHeight, echart_id.scrollHeight, document.body.clientHeight);
        }

        //对option进行监听，有更新时，重新执行changeEchart方法
        watch(() => props.options,
            (newval) => {
                changeEcharts(props.options);
            },
            {
                deep: true,
            }
        );

        const changeEcharts = (options: any) => {
            // Aecharts.value.setOption(options);
            if (props.isFirst) {
                console.log("aaaaaaa");
                // let index = 0;
                // Aecharts.value.dispatchAction({
                // type: "highlight",
                // seriesIndex: 0,
                // dataIndex: 0,
                // });
                }
            };



        // 页面加载时
        onMounted(() => {
            resetEchartLine();
            DevceEchatInit();
            resetEchartLine();

            
        });
        return {
            changeEcharts,
            resetEchartLine,
            DevceEchatInit,
            ...toRefs(state),
        };
    }
});
</script>