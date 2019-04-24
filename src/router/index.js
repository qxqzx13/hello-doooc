import Vue from 'vue'
import Router from 'vue-router'
import home from "./home";
import daily from "./daily";
import food from "./food";
import personal from "./personal";
import shop from "./shop";
import petmarket from "./petmarket";
import account from "./account";
import petmarkettwo from "./petmarkettwo";
import shoppingcar from "./shoppingcar";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    ].concat(home,daily,food,personal,shop,petmarket,petmarkettwo,account,shoppingcar)
})