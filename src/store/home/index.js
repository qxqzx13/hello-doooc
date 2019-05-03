import axios from "axios";
const state = {
    imgBackground : [{opacity:0},{opacity:100}],
    imgNum:[[0,1],[1,0]],
    timer: null,
    timerTwo: null,
    homeFood:[
        {
            productId:,
        }
    ],
    homeTeach:[],
    homeSnacks:[
        {
            productIcon:"../../assets/home/img/one.jpg",
        },{
            productIcon:"../../assets/home/img/one.jpg",
        },{
            productIcon:"../../assets/home/img/one.jpg",
        },{
            productIcon:"../../assets/home/img/one.jpg",
        },{
            productIcon:"../../assets/home/img/one.jpg",
        }
    ],
}
const actions = {
    getChoose({commit}){
        axios.get("/buyer/product/homefood").then(
            ({data})=>{
                commit("CAHNGE_HOME_FOOD",data.rows);
            }
        )
    },
    getTeach({commit}){
        axios.get("/buyer/product/zc").then(
            ({data})=>{
                commit("CAHNGE_HOME_TEACH",data.rows);
            }
        )
    },
    getSnacks({commit}){
        axios.get("/buyer/product/xw").then(
            ({data})=>{
                commit("CAHNGE_HOME_SNACKS",data.rows);
            }
        )
    }
}
const mutations = {
    CAHNGE_HOME_FOOD(state,arr){
        state.homeFood = arr;
    },
    CAHNGE_HOME_TEACH(state,arr){
        state.homeTeach = arr;
    },
    CAHNGE_HOME_SNACKS(state,arr){
        state.homeSnacks = arr;
    },
};
export default{
    state,
    // getters,
    actions,
    mutations,
    // mudoles
}