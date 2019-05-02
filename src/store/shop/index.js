import axios from "axios";
const state = {
    shoppingCar: [], //商品信息详情页
    shopHomeAgora: [], //商城首页市场
    shopHomeCommodity: [], //商城首页用品
    shopHomeFood: [], //商城首页食品
    shopCar: [], //商城购物车，与详细信息是一页
    pageSum:3,//总页数
    shopFoodSum:0
}
const actions = {
    toShoppingCar({commit}, id) {//商品详情
        axios.get("/findById", {
            params: {
                productId: id
            }
        }).then(
            data => {
                commit("CAHNGE_SHOPPING_CAR", data.rows);
            }
        )
    },
    getShoppingCar({commit}, obj) {//购物车
        axios.get("/buyer/order/gwc", {
            params:obj
        }).then(
            data => {
                commit("CAHNGE_SHOP_CAR", data.rows);
            }
        )
    },
    shopHomeAgora({commit}) {//商城首页市场
        axios.get("/buyer/product/dlcw").then(
            data => {
                console.log("市场",data);
                commit("CAHNGE_SHOP_HOME_AGORA", data.rows);
            }
        )
    },
    shopHomeCommodity({ commit }) {//商城主页用品
        axios.get("/buyer/product/dlry").then(
            data => {
                console.log("用品",data);
                commit("CAHNGE_SHOP_HOME_COMMODITY", data.rows);
            }
        )
    },
    shopHomePetfood({ commit }) {//商城主页食品
        axios.get("/buyer/product/xw").then(
            ({ data }) => {
                data = { data }.data;
                console.log("主食",data);
                commit("CAHNGE_SHOP_HOME_PETFOOD", data.rows);
            }
        )
    },
    getSearch({commit},str) {//商城市场列表的模糊搜索
        axios.get("/buyer/product/findPro",{
            params:{
                productType:str
            }
        }).then(
            data => {
            console.log("search",data)//未测试
        commit("CAHNGE_SHOP_HOME_PETMARKET", data.rows);
    })
    },
    deleteCarFood({commit},obj){//删除购物车信息
        axios.get("/",{
            params:obj
        }).then(
            ({ data }) => {
            data = { data }.data
            commit("CAHNGE_SHOP_HOME_PETMARKET", data.rows);
        })
    }
}
const mutations = {
    CAHNGE_SHOPPING_CAR(state, arr) {//商品详情
        state.shoppingCar = arr;
    },
    CAHNGE_SHOP_HOME_AGORA(state, arr) {//首页宠物市场
        state.shopHomeAgora = arr;
    },
    CAHNGE_SHOP_HOME_COMMODITY(state, arr) {//主页用品
        state.shopHomeCommodity = arr;
    },
    CAHNGE_SHOP_HOME_PETFOOD(state, arr) {//主页食物
        state.shopHomeFood = arr;
    },
    CAHNGE_SHOP_CAR(state, arr) {//购物车
        state.shopCar = arr;
        state.pageSum = arr.pageSum;
    }
};
export default {
    state,
    // getters,
    actions,
    mutations,
    // mudoles
}