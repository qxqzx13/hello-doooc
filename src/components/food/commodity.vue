<template>
    <div class="main_box">
        <div class="main">
                <ul class="goods" >
                    <li v-for="(item,index) in $store.state.food.foodInfo" :key="index">
                        <p><img :src="item.pic" alt=""></p>
                        <span>满99减20</span>
                        <b>{{item.goodsName}}</b>
                        <h1>{{item.price[0]}}</h1>
                        <h2>{{item.price[1]}}</h2>
                        <h3>已售{{item.stock}}</h3>
                    </li>
                    <!--<dd class="goods_one">-->
                        <!--<span>{{item.productDescription}}</span>-->
                        <!--<span>{{item.productName}}</span>-->
                    <!--</dd>-->
                    <!--<dd class="goods_two">{{item.productPrice}}</dd>-->
                    <!--<dd class="goods_three">-->
                        <!--<span>{{item.productPrice}}</span>-->
                        <!--<span>{{item.productStock}}</span>-->
                    <!--</dd>-->
                </ul>
        </div>
        <!--<div class="main">-->
            <!--<ul class="goods">-->
                <!--<li>-->
                    <!--<img src="../../assets/petshop/img/food1.jpg" alt="">-->
                    <!--<span>满99减20</span>-->
                    <!--<b>伯纳天纯simple系列 火鸡&马铃薯配方全猫粮10kg</b>-->
                    <!--<h1>￥290</h1>-->
                    <!--<h2>￥299</h2>-->
                    <!--<h3>已售8888</h3>-->
                <!--</li>-->

                <!--<li>-->
                    <!--<img src="" alt="">-->
                    <!--<span>满99减20</span>-->
                    <!--<b>伯纳天纯simple系列 火鸡&马铃薯配方全猫粮10kg</b>-->
                    <!--<h1>￥290</h1>-->
                    <!--<h2>￥299</h2>-->
                    <!--<h3>已售8888</h3>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<img src="" alt="">-->
                    <!--<span>满99减20</span>-->
                    <!--<b>伯纳天纯simple系列 火鸡&马铃薯配方全猫粮10kg</b>-->
                    <!--<h1>￥290</h1>-->
                    <!--<h2>￥299</h2>-->
                    <!--<h3>已售8888</h3>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<img src="" alt="">-->
                    <!--<span>满99减20</span>-->
                    <!--<b>伯纳天纯simple系列 火鸡&马铃薯配方全猫粮10kg</b>-->
                    <!--<h1>￥290</h1>-->
                    <!--<h2>￥299</h2>-->
                    <!--<h3>已售8888</h3>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<img src="" alt="">-->
                    <!--<span>满99减20</span>-->
                    <!--<b>伯纳天纯simple系列 火鸡&马铃薯配方全猫粮10kg</b>-->
                    <!--<h1>￥290</h1>-->
                    <!--<h2>￥299</h2>-->
                    <!--<h3>已售8888</h3>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<img src="" alt="">-->
                    <!--<span>满99减20</span>-->
                    <!--<b>伯纳天纯simple系列 火鸡&马铃薯配方全猫粮10kg</b>-->
                    <!--<h1>￥290</h1>-->
                    <!--<h2>￥299</h2>-->
                    <!--<h3>已售8888</h3>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<img src="" alt="">-->
                    <!--<span>满99减20</span>-->
                    <!--<b>伯纳天纯simple系列 火鸡&马铃薯配方全猫粮10kg</b>-->
                    <!--<h1>￥290</h1>-->
                    <!--<h2>￥299</h2>-->
                    <!--<h3>已售8888</h3>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<img src="" alt="">-->
                    <!--<span>满99减20</span>-->
                    <!--<b>伯纳天纯simple系列 火鸡&马铃薯配方全猫粮10kg</b>-->
                    <!--<h1>￥290</h1>-->
                    <!--<h2>￥299</h2>-->
                    <!--<h3>已售8888</h3>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<img src="" alt="">-->
                    <!--<span>满99减20</span>-->
                    <!--<b>伯纳天纯simple系列 火鸡&马铃薯配方全猫粮10kg</b>-->
                    <!--<h1>￥290</h1>-->
                    <!--<h2>￥299</h2>-->
                    <!--<h3>已售8888</h3>-->
                <!--</li>-->

            <!--</ul>-->

        <!--</div>-->
        <div class="block">
        <el-pagination layout="prev, pager, next" :total="6" class="right">
        </el-pagination>
    </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
    export default {
name:"commodity",
        methods:mapActions(["getFoodInfo"]),
        mounted(){
            this.getFoodInfo()
        }
}
</script>

<style scoped>

.main_box{
    width:1300px; 
    overflow: hidden;
    margin:0 auto;
     
}
.main{
    width:1340px;
    margin:0 auto;
    overflow: hidden;
}
.goods{

}
.goods li{
    float: left;
    width:227px;
    height:330px;
    margin:0 41px 30px 0;
    background:#eeeeee;
}
.goods li img {
    width: 162px;
    height: 152px;
    padding: 36px 33px;
}
.goods li span{
    height:16px;
    width:54px;
    background:#f5a64a;
    color:#fff;
    font-size:12px;
    margin-left:16px;
}
.goods li b{
    float: right;
    margin-right:32px;
    display: block;
    width:116px;
    height:42px;
    font-weight:400;
    font-size:10px;
    line-height:14px;
}
.goods li h1{
    margin-left:18px;
    margin-top:40px;
    font-weight:600;
    font-size:12px;
    color:#ff3366;
    width:36px;
}
.goods li h2{
    font-weight:400;
    font-size:8px;
    text-decoration:line-through;
    color: #b6b6b6;
    width:36px;
    margin-left:18px;
}
.goods li h3{
    font-weight:400;
    font-size:10px;
    color: #b6b6b6;
    float:right;
    width:60px;
    margin-top:-16px;
    margin-right:30px;
}
/*.goods dd{*/
    /*margin:0  30px 0 16px;      */
/*}*/
/*.goods_one span:first-child{*/
    /*float: left;*/
    /*background:#ff3366;*/
    /*font-size:12px;*/
    /*color:#ffffff;*/
/*}*/
/*.goods_one span:last-child{*/
    /*float:right;*/
    /*font-size:12px;*/
    /*color:black;*/
    /*width:118px;*/
/*}*/
/*.goods_two{*/
    /*color:#ff3366;*/
    /*font-size:12px;*/
/*}*/
/*.goods_three{*/
    /*width:182px;*/
    /*height:12px;*/
    /*padding-bottom:22px;*/
/*}*/
/*.goods_three span:first-child{*/
    /*float:left;*/
    /*font-size:10px;*/
    /*color:black;*/
/*}*/
/*.goods_three span:last-child{*/
    /*float:right;*/
    /*font-size:10px;*/
    /*color:black;*/
/*}*/
.block{
    width:100%;
    margin-right:40px;
}
    .block .right{
        float: right;
    }
</style>
