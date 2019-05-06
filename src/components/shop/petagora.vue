<template>
    <!--商城市场-->
    <div class="agora-box">
        <div class="petmarketimg" @click="$router.push({name:'petmarket'})"></div>
        <div><img src="../../assets/petshop/img/004_01.png"></div>
        <div class="agora-list">
            <ul>
                <!--<li v-for="item in shop.shopHomeAgora"><img :src="item.productIcon" @click="$router.push({name:'petmarket',query:{productType:item.productType}})"></li>-->

                <li @click="$router.push('/petmarket')"><img src="../../assets/petshop/img/004_02.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/004_03.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/004_04.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/004_05.jpg" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
    export default {
        name:"petagora",
        computed:mapState(["shop"]),
        methods:mapActions(["shopHomeAgora"]),
        mounted(){
            // this.shopHomeAgora();
        }
}
</script>

<style>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .agora-box {
        margin:0 auto;
        width: 1300px;
        height: 826px
    }
    .agora-box .petmarketimg{
        height:204px;
        width: 100%;
        background: url("../../assets/petshop/img/004.png")no-repeat;
    }
    .agora-box .agora-list ul li{
        float: left;
        margin-left: 10px;
    }

    .agora-box .agora-list ul li:first-child {
        margin-left: 0
    }
</style>
