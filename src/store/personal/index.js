//import axios from "axios"
import bus from "@/bus";
export default{
    state:{
        //用户信息
        // userInfo:[],

        userId:1234,
        userName:18510856521,
        iphone:18510856521,
        sex:"男",
        email:"1412485266@qq.com",
        qq:1421485266,
        address:"北京市昌平区沙阳镇沙阳路",
        token:123,
    },
    getters: {
        
    },
    mutations: {
        SET_USER_INFO(state,userInfo){
            state.userInfo = obj.userInfo;
        }
    },
    actions: {
        getUserInfo({commit}){
            bus.$ajax.get("/userInfo")
            .then(({data})=>{
                userInfo:data.userInfo
            })
                
        }
    }
}