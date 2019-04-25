import axios from "axios";
const state = {
    shoppingCar:[],
}
const actions = {
    toShoppingCar({commit},id){
        axios.get("/findById",{
            params:{
                productId:id
            }
        }).then(
            data=>{
                console.log(data)
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