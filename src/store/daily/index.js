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
        getDailyInfo({commit},obj){
            console.log(111,obj);
            axios.get("/buyer/product/daily",{
                params:obj
            })
            .then(data=>{
                console.log(data)
                if(data.code === 1){
                    console.log(data);
                    commit("SET_DAILYD_INFO",data.data)
                }else{
                    console.log("获取失败");
                }
            })   
        }
    }
}