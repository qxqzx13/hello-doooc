import axios from "axios"
import bus from "@/bus";
export default{
    state:{
        foodInfo:[]
    },
    getters: {
        
    },
    mutations: {
        SET_FOOD_INFO(state,foodInfo){
            state.foodInfo = foodInfo;
        }
    },
    actions: {
        getFoodInfo({commit},obj){
            console.log(111,obj);
            axios.get("/buyer/product/shop",{
                params:obj
            })
            .then(data=>{
                console.log(data)
                if(data.code === 1){
                    console.log(data);
                    commit("SET_FOOD_INFO",data.data)
                }else{
                    console.log("获取失败");
                }
            })   
        }
    }
}