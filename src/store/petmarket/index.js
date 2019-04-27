import axios from "axios";
//petmarket 宠物市场信息
const state = {
    petShowArr:[],//返回的信息
    pageSum:1,//总页数
    pageIndex:1,//当前页
    dogOrCat:0,//猫狗选项
    petAge:0,//成幼
    productType:0,//详细品种
    boyOrGirl:0,//公母
    petmarketSale:[],//宠物详情页信息三张图片
    filtrateType:[],//筛选器中的宠物品种
}
const actions = {
    getPetShow({commit},productType,pageIndex,boyOrGirl,petAge,dogOrCat){//获取后台信息
        axios.get("/",{
            params:{
                productType,
                pageIndex,
                boyOrGirl,
                petAge,
                dogOrCat
            }
        }).then(
            data=>{
            commit("CAHNGE_PETMARKET_ARR",data.rows);
    }
    )
    },
    shopHomeSale({commit},id){//根据id获取宠物详情页(待售)信息
        axios.get("/",{
            params:{
                productId:id
            }
        }).then(
            data=>{
            commit("CAHNGE_PETMARKET_SALE",data.rows);
             }
         )
    }
}
const mutations = {
    CAHNGE_PETMARKET_ARR(state,arr){
        state.petShowArr = arr;//返回的信息
        state.pageSum = arr.pageSum;//总页数
        state.pageIndex = arr.pageIndex;//当前页
        state.filtrateType = arr.filtrateType; // 筛选器中的宠物品种
    },
    TO_NEXT(state,num){  //翻页
        state.pageIndex += num;
        if(state.pageIndex <= 1){
            state.pageIndex = 1;
        }
        if(state.pageIndex >= state.pageSum){
            state.pageIndex = state.pageSum;
        }
    },
    CHANGE_PRODUCT_TYPE(state,num){ // 猫狗品类修改
        state.dogOrCat = num;
    },
    CAHNGE_PETMARKET_SALE(state,arr){ //宠物详情(待售)页信息三张图片
        state.petmarketSale = arr;
    },
    CHANGE_CHANGE_BOY_OR_GIRL(state,num){ //修改公母
        state.boyOrGirl = num;
    },
    CHANGE_PET_AGE(state,num){// 修改成幼
        state.petAge = num;
    },
};
export default{
    state,
    // getters,
    actions,
    mutations,
    // mudoles
}