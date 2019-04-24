<template>
    <div>
        <navigation></navigation>
        <div class="middle">
            <div id="car">
                <div class="petpic"></div>
                <h3>宠物详情</h3>
                <h5>
                    <div class="matter">
                        <h1></h1>
                    </div>
                </h5>
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
    }
    .middle #car h3{
        height:22px;
        width:60px;
        text-align:center;
        position:absolute;
        left:160px;
        top:94px;
        font-size:14px;
        border-bottom:4px solid #f5a64a;
    }
    .middle #car h5{
        height:432px;
        width:626px;
        background:#f7e2cb;
        margin-top:-106px;
        margin-left:294px;
    }
        
    .middle #car h5 .matter{
        height:424px;
        width:594px;
        background:#fbf1e6;
        left:60px;
        top:30px;
        position:relative;
        
    }
    .middle #car h5 .details1 h1{
        width: 0;
        border: 12px solid transparent;
        border-right: 12px solid #f5a64a;
        position:absolute;
        top:186px;
        left:24px;
    }
    .middle #car h5 .details1 h2{
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
