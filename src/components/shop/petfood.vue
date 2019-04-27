<template>
    <!--商城食品-->
    <div class="food-box">{{shop.shopHomeFood}}
        <div class="foodimg" @click="$router.push({name:'food'})"></div>
        <div class="food-list">
            <ul>
                <li v-for="item in shop.shopHomeFood"><img :src="item.productIcon" @click="$router.push({name:'food',query:{productType:item.productType,typeId:item.typeId}})"></li>
                <!--<li><img src="../../assets/petshop/img/002_01.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/002_02.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/002_03.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/002_04.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/002_05.jpg" alt=""></li>-->
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
export default {
    name:"petfood",
    computed:mapState(["shop"]),
    methods:mapActions(["shopHomePetfood"]),
    mounted(){
        this.shopHomePetfood();
    }
}
</script>

<style>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .food-box {
        margin:0 auto;
        width: 1300px;
        height: 470px
    }
    .food-box .foodimg{
        height:196px;
        width:1300px;
        background:url("../../assets/petshop/img/001.png") no-repeat;
    }
    .food-box .food-list ul li {
        float: left;
        margin-left: 33px
    }

    .food-box .food-list ul :first-child {
        margin-left: 0
    }
</style>
