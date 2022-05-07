// api管理
import request from '../utils/request.js';
export default  {
    login(params){
        return request({
            url:'/users/login',
            method:'POST',
            data:params,
            mock:false,
        })
    }
}