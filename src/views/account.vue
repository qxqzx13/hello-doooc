<template>
    <div>
        <navigation></navigation>
        <div class="middle">
            <div id="car">
                <div class="petpic"></div>
                <h3>宠物详情</h3>
                <div class="sss">
                    <h1></h1>
                    <div class="matter">
                        <p>收货地址</p>
                        <template>
                            <el-radio v-model="radio" label="1"><img src="../assets/petshop/img/wechat.svg" alt="" style="height:36px;width: 36px;">&nbsp;&nbsp;&nbsp;微信支付</el-radio>
                            <el-radio v-model="radio" label="2"><img src="../assets/petshop/img/alipay.svg" alt="" style="height:36px;width: 36px; ">&nbsp;&nbsp;&nbsp;支付宝支付</el-radio>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <commonFooter></commonFooter>
    </div>
    
</template>

<script>
import navigation from "../components/shopcommonality/navigation";
import commonFooter from "../components/common/commonFooter";
export default {
    name:"account",
    components:{
        navigation,
        commonFooter,
    }, data () {
        return {
            radio: '1'
        };
    }
}

</script>

<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
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
        
    .middle #car .sss .matter{
        height:424px;
        width:594px;
        background:#fbf1e6;
        left:28px;
        top:4px;
        position:relative;
        
    }
    .middle #car .sss .matter p{
        padding-top:34px;
        padding-left:60px;
        font-size:14px;
    }
    .middle #car .sss h1{
        width: 0;
        border: 12px solid transparent;
        border-right: 12px solid #444341;
        position:absolute;
        top:202px;
        left:0;
    }
    .middle #car .sss .details1 h2{
        height:270px;
        width:270px;
        background:#fff;
        position:absolute;
        top:76px;
        left:64px;
    }
    .commodity{
        position:absolute;
        left:384px;
        top:26px;
        height:76px;
        width:186px;
    }
    .commodity p{
        font-size:10px;
    }
    .details1 ul{
        height:96px;
        width:192px;
        position:absolute;
        top:208px;
        left:384px;
        
    }
    .details1 ul li{
        font-size:10px;
    }
    .details1 ul li p{
        display: inline-table;
        margin-right:12px;
        width:48px;        
    }
    .details1 ul li:nth-child(odd){
        background: #f5a64a;
    }
    .details1 ul li:nth-child(even){
        line-height:30px;
        height:30px;
    }
    .taste{
        text-align: justify;

    }
    .taste:after {
        display: inline-block;
        width: 100%;
        content: '';
    }
    .taste1{
        text-align: justify;
        text-align-last: justify;
    }
</style>
