import axios from "axios"
import bus from "@/bus";
export default{
    state:{
        dailyInfo:[]
    },
    getters: {
        
    },
    mutations: {
        SET_DAILY_INFO(state,dailyInfo){
            state.dailyInfo = dailyInfo;
        }
    },
    actions: {
        getDailyInfo({commit}){
            axios.get("/goods")
            .then(data=>{
                console.log(data)
                    commit("SET_DAILY_INFO",data.data)

            })   
        }
    }
}