// 用户管理模块
const router = require('koa-router')();
const User = require('../modules/userSchema.js');
const util = require('../utils/utils.js');
router.prefix('/users')
router.post('/login',async(ctx)=>{
  try {
    const {userName,userPwd} = ctx.request.body;
    const res = await User.findOne({
      userName,
      userPwd,
    })
    if(res){
      ctx.boby = util.success(res)
    }else{
      ctx.body = util.fail("账号密码不正确")
    }
  } catch (error) {
    ctx.body = util.fail(error.msg) 
  }
    
})

module.exports = router
