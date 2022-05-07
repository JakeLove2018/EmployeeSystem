/* 
axios二次封装，包含请求拦截，响应拦截，
*/
import axios from 'axios';
import {ElMessage} from 'element-plus'
import config from '../config/index.js';
const TOKEN_INVALID = 'Token 认证失败,请重新登录';
import router from '../route/index'
/* 创建axios实例对象 添加全局配置 */
const service = axios.create({
    baseURL:config.baseApi,
    timeout:8000,
})
/* 请求拦截 */
service.interceptors.request.use((req)=>{
    // TO-DO
    const headers = req.headers;
    // if(!headers.Authorization) return headers.Authorization = 'Bear jack'
    return req;
})
/* 响应拦截 */
service.interceptors.response.use((res)=>{
    const {code,date,message} = res.data;
    if(code === 200){
        return date;
    }else if(code === 50001){
        ElMessage.error(TOKEN_INVALID)
        setTimeout(()=>{
            router.push('/login')
        },3000)
        return Promise.reject(TOKEN_INVALID)
    }else{
        ElMessage.error(res.msg || '网络请求异常，请稍后重试')
        return Promise.reject(res.msg || '网络请求异常，请稍后重试')
    }
})
/* 请求核心函数 请求的配置为options */
function request(options){
    options.method = options.method || 'get';
    if(typeof options.mock != undefined){
        config.mock = options.mock;
        
    }
    if(options.method.toLowerCase() === 'get'){
        options.params = options.data;
    }
    if(config.env === 'product'){
        service.defaults.baseURL = config.baseApi;
    }else{
        service.defaults.baseURL = config.mock ? config.mockApi:config.baseApi;
    }
    return service(options)
}
['get','post','option','put','delete','patch'].forEach((item)=>{
    request[item] = (url,data,options)=>{
        return request({
            url,
            data,
            ...options,
            method:item,
        })
    }
})
export default request;