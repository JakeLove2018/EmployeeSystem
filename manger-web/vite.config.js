import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  server:{
    port:3000,
    host:'localhost',
  },
  proxy:{
    "/api":{
      target:"http://localhost:3000",
    }
  },
  plugins: [vue()]
})
//更改端口
