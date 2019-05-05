import axios from "axios";

const state = {
    shippingAddressArr:[],
}
const mutations = {
    CHANG_ACCOUNT_ARR(state,arr){
        state.shippingAddressArr = arr;
    }
}
const actions = {
    getShippingAddressArr({commit},obj){
        axios.get("/",{
            params:obj
        }).then(({data})=>{
            commit("CHANGE_ACCOUNT_ARR",data.rows);
        })
    }
}

export default{
    state,
    mutations,
    actions,
}