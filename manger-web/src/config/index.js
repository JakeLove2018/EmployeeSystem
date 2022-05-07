/* 
// 环境变量的配置
// 测试环境，mock环境，正式环境所访问的地址。根据不同的环境访问不同的地址
*/
const env = import.meta.env.MODE || 'development';
const EnvConfig = {
    development:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/116ea96a3f30df5d7af030d42d812b9a/api'
    },
    test:{
        baseApi:'//test.futerefe.com/api',
        mockApi:'https://www.fastmock.site/mock/116ea96a3f30df5d7af030d42d812b9a/api'
    },
    product:{
        baseApi:'//futerefe.com/api',
        mockApi:'https://www.fastmock.site/mock/116ea96a3f30df5d7af030d42d812b9a/api'
    }
}
export default {
    env:'env',
    mock:false,
    namespace:'manager',
    ...EnvConfig[env]
}