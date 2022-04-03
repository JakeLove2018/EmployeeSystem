/* 
 localStore的二次封装
*/
import config from '../config/index.js'
export default {
    setItem(key ,val){
        let storage = this.getStore()
        storage[key] = val;
        window.localStorage.setItem(config.namespace,JSON.stringify(storage))
    },
    getItem(key){
        return this.getStore()[key];
    },
    getStore(){
        return JSON.parse(window.localStorage.getItem(config.namespace)|| "{}");
    },
    clearItem(key){
        let storage = this.getStore();
        delete storage[key]
        window.localStorage.setItem(config.namecsape,JSON.stringify(storage))
    },
    clearAll(){
        window.localStorage.clear()
    },
}