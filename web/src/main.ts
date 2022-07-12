import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import mitt from 'mitt';
import { createApp } from 'vue';
import VueGridLayout from 'vue-grid-layout';
import App from './App.vue';
import router from './router';
// 分页组件
import pagination from '/@/components/pagination/index.vue';
import { i18n } from '/@/i18n/index';
import pinia from '/@/stores/index';
import '/@/theme/index.scss';
import { directive } from '/@/utils/directive';
import other from '/@/utils/other';

//highlight 的样式，依赖包，组件
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'; //导入代码高亮样式


const app = createApp(App);

directive(app);
other.elSvg(app);

app.component('pagination', pagination)

app.use((app) => {
    app.directive('highlight', {
        mounted(el) {
            let blocks = el.querySelectorAll('pre code');
            for (let i = 0; i < blocks.length; i++) {
                hljs.highlightElement(blocks[i]);
            }
        }
    })
})


app.use(pinia).use(router).use(ElementPlus, { i18n: i18n.global.t }).use(i18n).use(VueGridLayout).mount('#app');

app.config.globalProperties.mittBus = mitt();
