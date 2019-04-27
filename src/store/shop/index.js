import axios from "axios";
const state = {
    shoppingCar:[],
    homeAgora:[],
    homeCommodity:[],
    shopHomeFood:[],
    shopPetmarket:[]
}
const actions = {
    toShoppingCar({commit},id){
        axios.get("/findById",{
            params:{
                productId:id
            }
        }).then(
            data=>{
            commit("CAHNGE_SHOPPING_CAR",data.rows);
            }
        )
    },
    shopHomeAgora({commit}){
        axios.get("/").then(
            data=>{
            commit("CAHNGE_SHOP_HOME_AGORA",data.rows);
    }
    )
    },
    shopHomeCommodity({commit}){
        axios.get("/").then(
            data=>{
            commit("CAHNGE_SHOP_HOME_COMMODITY",data.rows);
    }
    )
    },
    shopHomePetfood({commit}){
        axios.get("/buyer/product/xw").then(
            data=>{
            commit("CAHNGE_SHOP_HOME_PETFOOD",data.rows);
    }
    )
    }
}
const mutations = {
    CAHNGE_SHOPPING_CAR(state,arr){
        state.shoppingCar = arr;
    },
    CAHNGE_SHOP_HOME_AGORA(state,arr){
        state.homeAgora = arr;
    },
    CAHNGE_SHOP_HOME_COMMODITY(state,arr){
        state.homeCommodity = arr;
    },
    CAHNGE_SHOP_HOME_PETFOOD(state,arr){
        state.shopHomeFood = arr;
    },
    CAHNGE_SHOP_HOME_PETMARKET(state,arr){
        state.shopPetmarket = arr;
    },
};
export default{
    state,
    // getters,
    actions,
    mutations,
    // mudoles
}