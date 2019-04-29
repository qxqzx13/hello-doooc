<template>
    <div class="dpp">
        <div class="header">
            <div class="header-box">
                <div class="seek">
                    <input class="wen" type="text" placeholder="搜索商品" v-model="search">
                    <el-button type="primary" icon="el-icon-search" @click="getPet"></el-button>
                    <div class="shopping-car">
                        <input type="button">
                        <router-link :to="{path:'/shoppingcar'}">
                            <p>购物车({{shop.shopFoodSum}})</p>
                        </router-link>

                    </div>
                </div>
                <div class="header-bottom">
                    <div class="pet-foot petify" @click="$router.push('/food')">
                        <ul>
                            <li class="ctfoot ctlife">
                                宠物食品
                                <h3></h3>
                                <ul class="classify-foot">
                                    <li>
                                        <img src="../../assets/petshop/img/grain.png" alt="">
                                        宠物主粮
                                    </li>
                                    <li>
                                        <img src="../../assets/petshop/img/snacks.png" alt="">
                                        宠物零食
                                    </li>
                                    <li>
                                        <img src="../../assets/petshop/img/health.png" alt="">
                                        宠物保健
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                    <div class="pet-daily petify" @click="$router.push('/daily')">
                        <div class="ctlife ctfoot">
                            宠物日常
                            <h3></h3>
                        </div>
                    </div>
                    <div class="pet-market" @click="$router.push('/petmarket')">
                        <div class="ctmarket ctfoot">
                            宠物市场
                            <h3></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
    import {mapState, mapMutations, mapGetters, mapActions} from "vuex";
    export default {
    data(){
        return {
            search:""
        }
    },
    name:"navigation",
    computed: mapState(["shop"]),
    methods:Object.assign(mapActions(["getSearch"]),{
        getPet(){
            this.getSearch(this.search);
        }
    })

}
</script>
<style>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .dpp{
        z-index:999;
    }
    .header {
        height: 110px;
        width: 100%
    }

    .header .header-box {
        position: relative;
        width: 1300px;
        margin: 0 auto;
        height: 110px;
        background: #c3c3c1;
        background-color: hsla(60, 2%, 76%, .7)
    }

    .header .header-box .seek {
        height: 38px;
        margin-left: 436px;
        font-size: 0
    }
    .header .header-box .seek .el-button{
        margin-top:31px;
        height: 42px;
        background: #f5a64a;
    }
    .header .header-box .seek .wen {
        margin-top: 32px;
        width: 316px;
        height: 38px;
        float: left;
        border: none;
        font-size: 12px;
        padding-left: 4px
    }

    .header .header-box .seek .sou {
        margin-top: 32px;
        width: 50px;
        height: 38px;
        float: left;
        border: none;
        background: #d4d2d2;
    }

    .header .header-box .seek .shopping-car {
        margin-right: 36px;
        margin-top: 36px;
        float: right;
        width: 114px;
        height: 38px
    }

    .header .header-box .seek .shopping-car input {
        float: left;
        height: 38px;
        width: 44px;
        border: none;
        border-radius: 4px 0 0 4px;
        background: #d4d2d2
    }

    .header .header-box .seek .shopping-car p{
        cursor: pointer;
        background: #f5a64a;
        border-radius: 0 4px 4px 0;
        border-left: 1px solid #fff;
        width: 69px;
        text-align: center;
        height: 38px;
        line-height: 38px;
        display: block;
        float: left;
        font-size: 12px
    }

    .header .header-box .header-bottom {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 36px
    }

    .pet-foot,
    .pet-daily,
    .pet-market {
        height: 36px;
        width: 160px;
        display: inline-table;
        text-align: center;
        line-height: 36px;
        margin-right: 90px;
        position: relative;
        cursor: pointer
    }
    .ctfoot:hover{
        background:#fcfefd;
    }
    .ctfoot:hover h3{
        display: block;
    }
    .ctfoot:hover .classify-foot{
        display: block;
    }
    .pet-foot ul .classify-foot{
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        background:#fcfefd;
        display: none;
    }
    .classify-foot li:hover{
        background:#f5a64a;
    }
    .classify-foot li{
        line-height:36px;
        height: 36px;
        width: 160px;
        vertical-align: middle;
    }
    .classify-foot li img{
        height:18px;
        width:18px;
        vertical-align: middle;
    }
    .pet-foot ul .classify-foot ul{
        height:108px;
    }
    .ctlife{}
    .petify h3{
        width: 0;
        height: 0;
        border-width: 8px;
        border-style: solid;
        border-color: #9c9c96 transparent transparent transparent;
        position: absolute;
        top:16px;
        right:20px;
        display: none;
    }
</style>

