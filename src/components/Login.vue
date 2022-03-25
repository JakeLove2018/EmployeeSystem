<template>
    <div>登录页面</div>
    <router-link to="/welcome">
        <el-button>回首页</el-button>
    </router-link>
    
</template>

<script>
export default {
    name:"Login",
    mounted(){
        this.$request({
            method:'get',
            url:'/login',
            data:{
                name:'jack',
            }
        }).then((res)=>{
            console.log(res)
        })
    }
}
</script>

<style scoped lang="scss">

</style>