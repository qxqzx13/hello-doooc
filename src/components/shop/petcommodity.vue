<template>
    <!--商城日用品-->

    <div class="commodity-box">
        <div class="commodity-img"></div>
        <div class="commodity-list">
            <ul>
                <li v-for="item in home.homeCommodity"><img :src="item.productIcon" @click="path({name:'daily',query:{productType:item.productType}})"></li>
                <!--<li><img src="../../assets/petshop/img/003_01.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/003_02.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/003_03.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/003_04.jpg" alt=""></li>-->
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
export default {
    name:"petcommodity",
    computed:mapState(["home"]),
    methods:mapActions(["shopHomeCommodity"]),
    mounted(){
        this.shopHomeCommodity();
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
        margin-left: 32px
    }

    .commodity-box .commodity-list ul :first-child {
        margin-left: 0
    }
</style>
