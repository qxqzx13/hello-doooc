import axios from "axios";
//petmarket 宠物市场信息
const state = {
    adminId:'',
    adminName:''
}
const mutations = {
    OUT_LOGIN(state){
        localStorage.clear();
        state.adminId = state.adminName = null;
    }
};
export default{
    state,
    // getters,
    //actions,
    mutations,
    // mudoles
}