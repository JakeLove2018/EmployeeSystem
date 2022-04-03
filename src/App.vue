<template>
    <router-view></router-view>
</template>
<script>
export default{
    name:"App",
    mounted(){
        this.$storage.setItem('name','made')
        // this.$storage.clearAll()
        
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>