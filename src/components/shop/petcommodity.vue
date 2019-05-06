<template>
    <!--商城日用品-->
    <div class="commodity-box">
        <div class="commodity-img"  @click="$router.push({name:'daily'})"></div>
        <div class="commodity-list">
            <ul>
                <!--<li v-for="item in shop.shopHomeCommodity"><img :src="item.productIcon" @click="$router.push({name:'daily',query:{typeId:item.typeId,productType:item.productType}})"></li>-->
                <li @click="$router.push('/daily')">
                    <img src="../../assets/petshop/img/003_01.jpg" alt="">
                    <p>小佩MINI喂食器宠物猫咪英短猫自动喂食器定时自动喂食猫咪日用品</p>
                    <h1>￥669.00</h1>
                    <h2>￥799</h2>
                    <h3>已售3</h3>
                </li>
                <li>
                    <img src="../../assets/petshop/img/003_02.jpg" alt="">
                    <span>满99减20</span>
                    <b>绒绒球宠物窝垫可拆洗泰迪边牧金毛伯恩山窝宠物床垫犬猫日用品</b>
                    <h1>￥86.00</h1>
                    <h2>￥90</h2>
                    <h3>已售10</h3>
                </li>
                <li>
                    <img src="../../assets/petshop/img/003_03.jpg" alt="">
                    <p>来旺兄弟宠物电动牙刷T1狗狗智能电动牙刷清洁牙齿猫咪宠物日用品</p>
                    <h1>￥169.00</h1>
                    <h2>￥175</h2>
                    <h3>已售111</h3>
                </li>
                <li>
                    <img src="../../assets/petshop/img/003_04.jpg" alt="">
                    <span>满99减20</span>
                    <b>逸诺SOS狗狗沐浴露 幽香美毛除臭护肤宠物洗澡日用品猫咪浴液香波</b>
                    <h1>￥39.90</h1>
                    <h2>￥49.90</h2>
                    <h3>已售234</h3>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
export default {
    name:"petcommodity",
    computed:mapState(["shop"]),
    methods:mapActions(["shopHomeCommodity"]),
    mounted(){
        // this.shopHomeCommodity();
    }
}
</script>

<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .commodity-box {
        margin:0 auto;
        width: 1300px;
        height: 640px
    }

    .commodity-box .commodity-img{
        width: 1300px;
        height: 249px;
        background: url("../../assets/petshop/img/003.png")no-repeat;
    }

    .commodity-box .commodity-list ul li {
        float: left;
        margin-left: 32px;
        width:300px;
        height:252px;
        background: #d4d2d2;
        text-align: center;
        position: relative;
    }
    .commodity-box .commodity-list ul li img{
        height:252px;
        width:260px;
    }
    .commodity-box .commodity-list ul :first-child {
        margin-left: 0
    }
    .commodity-list ul li p{
        text-align: left;
        line-height:18px;
        padding-top:16px;
        font-size:14px;
    }
    .commodity-list ul li:nth-child(1) p{
        width:300px;
        padding-top:16px;
        font-size:14px;
        line-height:18px;
    }
    .commodity-list ul li:nth-child(2) h1,
    .commodity-list ul li:nth-child(4) h1{
        margin-top:52px;
    }
    .commodity-list ul li span{

        display: block;
        height: 16px;
        width:54px;
        background:#f5a64a;
        font-size:12px;
        color:#fff;
        float: left;
        margin-top:16px;
    }
    .commodity-list ul li b{
        float: right;
        width:240px;
        font-size:14px;
        text-align: left;
        font-weight:400;
        margin-top:14px;
    }
    .commodity-list h1{
        font-size: 12px;
        color:#ff3366;
        font-weight:400;
        text-align: left;
    }
    .commodity-list h2{
        font-size:10px;
        color:#7e7e7d;
        font-weight:400;
        text-align: left;
        text-decoration:line-through
    }
    .commodity-list h3{
        position: absolute;
        bottom:-84px;
        right:0;
        font-size:12px;
        color:#868686;
    }
</style>
