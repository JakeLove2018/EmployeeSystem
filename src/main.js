import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index.js';
import element from 'element-plus';
import 'element-plus/dist/index.css';
import request from './utils/request.js';
var app = createApp(App);
app.use(router).use(element).mount('#app')
app.config.globalProperties.$request = request;
