<template>
    <div class="agora-box">
        <div><img src="../../assets/petshop/img/004.png" title=""></div>
        <div><img src="../../assets/petshop/img/004_01.png" alt=""></div>
        <div class="agora-list">
            <ul>
                <li v-for="item in $store.state.home.homeAgora"><img :src="item.productIcon" @click="path({name:'petmarket',query:{productType:item.productType}})"></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
    export default {
        name:"petagora",
        methods:mapActions(["shopHomeAgora"]),
        mounted(){
            this.shopHomeAgora();
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

    .agora-box .agora-list ul li{
        float: left;
        margin-left: 10px;
    }

    .agora-box .agora-list ul li:first-child {
        margin-left: 0
    }
</style>
