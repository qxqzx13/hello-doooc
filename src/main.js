import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$ajax = axios;
/****************判断是否登录了************************/
/*router.beforeEach((to,from,next)=>{
    if(to.meta.isAuthorization){
        if(localStorage.token){
            next();
        }else{
            store.commit("OUT_LOGIN");
        }
    }else{
        next();
    }
});*/
/**************请求拦截添加请求头*******************************/
/*axios.interceptors.request.use(config=>{
    config.url = "/hello"+config.url;
    config.headers={
        "authorization":localStorage.token
    }
    return config;
})*/

/*********************超时退出**************************/
/*axios.interceptors.response.use(({data})=>{
    if(data.ok === -2){
        store.commit("OUT_LOGIN");
    }
    return data;
});*/







Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')