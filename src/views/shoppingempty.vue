<template>
    <!-- 购物车详情 -->
    <div class="cpp">
        <navigation></navigation>
        <div id="middle">
            <div id="car">
                <div class="petpic"></div>
                <h3>我的购物车</h3>
                <div class="nan">
                    <div class="details1">
                        <img src="../assets/petshop/img/petcar.png" alt="">
                        <p>这里空空如也哦～消灭"0"购物,赶紧去选购商品把～</p>
                    </div>
                </div>
            </div>
        </div>
        <commonFooter></commonFooter>
    </div>
</template>

<script>
    import navigation from "../components/shopcommonality/navigation";
    import commonFooter from "../components/common/commonFooter.vue";
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
    export default {
        name: 'shoppingcar',
        components: {
            commonFooter,
            navigation
        },
        methods:mapActions(["toShoppingCar"]),
        mounted() {
            this.toShoppingCar(this.$route.query.productId);
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
        width:70px;
        text-align:center;
        position:absolute;
        left:160px;
        top:94px;
        font-size:14px;
        border-bottom:4px solid #f5a64a;
        font-weight: normal;
    }
    #middle #car .nan{
        height:578px;
        width:840px;
        background:#f7e2cb;
        margin-top:-106px;
        margin-left:294px;
    }

    #middle #car .nan .details1{
        height:515px;
        width:730px;
        background:#fff;
        left:60px;
        top:30px;
        position:relative;

    }
    #middle #car .nan .details1 p{
        width:220px;
        height:48px;
    }
</style>
