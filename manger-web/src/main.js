import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index.js';
import element from 'element-plus';
import 'element-plus/dist/index.css';
import request from './utils/request.js';
import storage from './utils/storage.js';
import api from './api/index.js';
import store from './store/index';
var app = createApp(App);
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;
app.config.globalProperties.$storage = storage;
app.use(router).use(element).use(store).mount('#app')

