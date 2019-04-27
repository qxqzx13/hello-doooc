import axios from "axios";
const state = {
    shoppingCar:[],
}
const actions = {
    toShoppingCar({commit},id){
        axios.get("/",{
            params:{
                productId:id
            }
        }).then(
            data=>{
            commit("CAHNGE_SHOPPING_CAR",data.rows);
    }
    )
    },
}
const mutations = {
    CAHNGE_SHOPPING_CAR(state,arr){
        state.shoppingCar = arr;
    },
};
export default{
    state,
    // getters,
    actions,
    mutations,
    // mudoles
}