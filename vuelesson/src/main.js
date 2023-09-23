import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//fontawesome图标包
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'  

//element-plus 暗黑主题 https://element-plus.org/zh-CN/guide/dark-mode.html#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8%EF%BC%9F
import 'element-plus/theme-chalk/dark/css-vars.css'

library.add(fab,far,fas);

const app = createApp(App);
//确保 _use_ 路由实例使整个应用支持路由。
// 挂载router,完成
app.use(router);
app.component('font-awesome-icon',FontAwesomeIcon);
app.mount('#app');
