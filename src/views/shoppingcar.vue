<template>
  <!-- 购物车 -->
  <div class="cpp">
    <navigation></navigation>
	<div id="middle">
        <div id="car">
            <div class="petpic">
                <img src="../assets/petshop/img/touxiang.jpg" alt="">
            </div>
            <h3>我的购物车</h3>
            <div class="nan">
                <trolley></trolley>
            </div>
        </div>
	</div>
	<commonFooter></commonFooter>
  </div>
</template>

<script>
import navigation from "../components/shopcommonality/navigation";
import commonFooter from "../components/common/commonFooter.vue";
import trolley from "../components/shop/trolley.vue";


export default {
    name: 'shoppingcar',
    components: {
        commonFooter,
        navigation,
        trolley
    }
}
</script>
<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .cpp{
        background: url(../assets/petmarket/img/bg.png);
        background-size: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height:100%;
    }
    #middle{
        height:735px;
        width:100%;
    }
    #middle #car{
        padding-top:76px;
        height:580px;
        width:1300px;
        margin:0 auto;
        position: relative;
    }
    #middle #car .petpic{
        height:105px;
        width:110px;
        background:#000000;
    }
    #middle #car h3{
        height:22px;
        text-align:center;
        position:absolute;
        left:160px;
        top:94px;
        font-size:14px;
        border-bottom:4px solid #f5a64a;
    }
    #middle #car .nan{
        height:578px;
        width:840px;
        background:#f7e2cb;
        margin-top:-106px;
        margin-left:294px;
    }
    
</style>
