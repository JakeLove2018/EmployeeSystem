// 数据库模型集合
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    "userId":Number,
    "UserName":String,
    "userPwd":String,
    "userEmail":String,
    "mobile":Number,
    "sex":Number,
    "depId":[],
    "job":String,
    "state":{
        type:Number,
        default:1,
    },
    "role":{
        type:Number,
        default:1,
    },
    "roleList":[],
    "createTime":{
        type:String,
        default: new Date(),
    },
    "lastLoginTime":{
        type:String,
        default:new Date(),
    },
    "remark":String

})

module.exports = mongoose.model('users',userSchema,'users');