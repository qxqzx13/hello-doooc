<template>
    <div>
        <navigation></navigation>
        <div class="middle">
            <div id="car">
                <div class="petpic">
                    <img src="../assets/petshop/img/touxiang.jpg" alt="">
                </div>
                <h3>确认购买</h3>
                <div class="sss">
                    <h1 @click="$router.go(-1)"></h1>
                    <shipping-address></shipping-address>
                </div>
            </div>
        </div>
        <commonFooter></commonFooter>
    </div>
    
</template>

<script>
import navigation from "../components/shopcommonality/navigation";
import commonFooter from "../components/common/commonFooter";
import shippingAddress from "../components/account/shippingAddress"
export default {
    name:"account",
    components:{
        navigation,
        commonFooter,
        shippingAddress,
    },
   
}
</script>

<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5,input{
        margin:0;
        padding:0;
    }
    .middle{
        height:735px;
        width:100%;
    }
    .middle #car{
        padding-top:76px;
        height:580px;
        width:1300px;
        margin:0 auto;
        position: relative;
    }
    .middle #car .petpic{
        height:105px;
        width:110px;
        background:#000000;
        margin-left:148px;
    }
    .middle #car h3{
        height:22px;
        width:60px;
        text-align:center;
        position:absolute;
        left:274px;
        top:94px;
        font-size:14px;
        border-bottom:4px solid #f5a64a;
    }
    .middle #car .sss{
        height:432px;
        width:626px;
        background:#f7e2cb;
        margin-top:-88px;
        margin-left:370px;
        position: relative;
    }
    .middle #car .sss h1{
        cursor: pointer;
    }
  
</style>
