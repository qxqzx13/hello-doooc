import axios from "axios";
const state = {
    shoppingCar:{
        productName: "吴系挂",
        goodsId: 2 ,
        productAge: "幼宠",
            productDescription:[
                {
                    value:1,
                    label:"口味1"
                },
                {
                    value:2,
                    label:"口味2"
                }
            ],
    productSize:"500g",
    productPrice:500,
    productPastDare:"18个月"
}, //商品信息详情页
    shopHomeAgora: [], //商城首页市场
    shopHomeCommodity: [], //商城首页用品
    shopHomeFood: [], //商城首页食品
    shopCar: [], //商城购物车，与详细信息是一页
    pageSum:1,//总页数
    shopFoodSum:0,
    sumPrice:0
}
const actions = {
    toShoppingCar({commit}, id) {//商品详情
        axios.get("/findById", {
            params: {
                productId: id
            }
        }).then(
            data => {
                commit("CAHNGE_SHOPPING_CAR",data.rows);
            }
        )
    },
    shopHomeAgora({commit}) {//商城首页市场
        axios.get("/buyer/product/dlcw").then(
            data => {
                console.log("市场",data);
                commit("CAHNGE_SHOP_HOME_AGORA",data.rows);
            }
        )
    },
    shopHomeCommodity({ commit }) {//商城主页用品
        axios.get("/buyer/product/dlry").then(
            data => {
                console.log("用品",data);
                commit("CAHNGE_SHOP_HOME_COMMODITY",data.rows);
            }
        )
    },
    shopHomePetfood({ commit }) {//商城主页食品
        axios.get("/buyer/product/xw").then(
            ({ data }) => {
                data = { data }.data;
                console.log("主食",data);
                commit("CAHNGE_SHOP_HOME_PETFOOD",data.rows);
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
        commit("CAHNGE_SHOP_HOME_PETMARKET",data.rows);
    })
    },
    deleteCarFood({commit},goodsId){//删除购物车信息
        axios.delete("/buyer/order/gwcdelete",{
            params:{
                goodsId
            }
        }).then(
            data => {
                if(data.ok !== 1)
                    alert(data.msg)
                }
        )},
    getShoppingCar({commit}, obj) {//购物车
        axios.get("/gwc", {
            params:obj
        }).then(
            data => {
                commit("CAHNGE_SHOP_CAR",data);
            }
        )
    },
    shoppingCarGoodsNum({commit},obj){//修改购物车内商品数量
        axios.get("/buyer/order/gwcGoodsNum", {
            params:obj
        }).then(
            data=> {
            if(data.ok !== 1
)
    {
        alert(data.msg)
    }
})
    },
    addGoodsToCar({commit},obj){
        axios.get("/buyer/order/gwcGoodsNum", {
            params:obj
        }).then(
            data=> {
            if(data.ok !== 1
    )
        {
            alert(data.msg)
        }

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
    },
    CAHNGE_SHOP_SUM_PRICE(state, num) {//主页食物
        state.sumPrice = num;
    },
};
export default {
    state,
    // getters,
    actions,
    mutations,
    // mudoles
}