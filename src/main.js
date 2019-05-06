import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from 'element-ui';
import filters from './filters';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(filters);
Vue.prototype.$axios = axios;
/****************使用过滤器*********************/

/****************判断是否登录了************************/
router.beforeEach((to,from,next)=>{
    if(to.meta.isAuthorization){
        if(localStorage.userName){
            next();
        }else{
            next({
                path: '/login',
                query: {redirect:to.fullPath}
            })
        }
    }else{
        next();
    }
});
/**************请求拦截添加请求头*******************************/
axios.interceptors.request.use(config=>{
    config.url = "/hello"+config.url;/*
    config.headers={
        "authorization":localStorage.token
    }*/
    return config;
})

/*********************超时退出**************************/
/*axios.interceptors.response.use(({data})=>{
    if(data.ok === -2){
        store.commit("OUT_LOGIN");
    }
    return data;
});*/
/***********************响应截取***************************/
axios.interceptors.response.use(({data})=>{
    return data;
})





Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: function(h) { return h(App)}
}).$mount('#app')