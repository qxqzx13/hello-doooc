import axios from "axios";
const state = {
    shoppingCar: [], //商品信息详情页
    homeAgora: [], //商城首页市场
    homeCommodity: [], //商城首页用品
    shopHomeFood: [], //商城首页视频
    shopPetmarket: [], //商城市场页
    shopCar: [], //商城购物车，与详细信息是一页

}
const actions = {
    toShoppingCar({ commit }, id) {
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
    shopCar({ commit }, userId) {
        axios.get("/", {
            params: {
                goodsId: userId
            }
        }).then(
            data => {
                commit("CAHNGE_SHOP_CAR", data.rows);
            }
        )
    },
    shopHomeAgora({ commit }) {
        axios.get("/buyer/product/dlcw").then(
            ({ data }) => {
                console.log(data);
                commit("CAHNGE_SHOP_HOME_AGORA", data.rows);
            }
        )
    },
    shopHomeCommodity({ commit }) {
        axios.get("/buyer/product/dlry").then(
            data => {
                console.log(data);
                commit("CAHNGE_SHOP_HOME_COMMODITY", data.rows);
            }
        )
    },
    shopHomePetfood({ commit }) {
        axios.get("/buyer/product/xw").then(
            ({ data }) => {
                data = { data }.data
                commit("CAHNGE_SHOP_HOME_PETFOOD", data.rows);
            }
        )
    }
}
const mutations = {
    CAHNGE_SHOPPING_CAR(state, arr) {
        state.shoppingCar = arr;
    },
    CAHNGE_SHOP_HOME_AGORA(state, arr) {
        state.homeAgora = arr;
    },
    CAHNGE_SHOP_HOME_COMMODITY(state, arr) {
        state.homeCommodity = arr;
    },
    CAHNGE_SHOP_HOME_PETFOOD(state, arr) {
        state.shopHomeFood = arr;
    },
    CAHNGE_SHOP_HOME_PETMARKET(state, arr) {
        state.shopPetmarket = arr;
    },
    CAHNGE_SHOP_CAR(state, arr) {
        state.shopCar = arr;
    }
};
export default {
    state,
    // getters,
    actions,
    mutations,
    // mudoles
}