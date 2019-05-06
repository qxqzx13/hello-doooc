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
        getFoodInfo({commit}){
            console.log(111)
            axios.get("/goods")
            .then(data=>{
                console.log(data)
                commit("SET_FOOD_INFO",data.data)
            })   
        }
    }
}