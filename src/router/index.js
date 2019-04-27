import Vue from 'vue'
import Router from 'vue-router'
import home from "./home";
import daily from "./daily";
import food from "./food";
import personal from "./personal";
import shop from "./shop";
import ERROR from "../components/error";
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:"*",
            component:ERROR
        }
    ].concat(home,daily,food,personal,shop)
})