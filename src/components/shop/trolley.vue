<template>
    <!--购物车页判断有没有东西-->
    <div class="sss">
        <gempty v-if="!shop.shopCar"></gempty><!--空车-->
        <div v-else class="details-cart">
            <h1 @click="$router.go(-1)"></h1>
            <div class="mattou">
                <div class="matter" v-for="item in shop.shopCar">
                    <ul>
                        <li class="pic"></li>
                        <li class="name">{{item.name}}</li>
                        <li>RMB</li>
                        <li>{{item.price}}</li>
                        <li>
                            <botton @click="goodsDown(item.goodsId)">-</botton>
                            {{item.productNum}}
                            <botton @click="goodsUp(item.goodsId)">+</botton>
                        </li>
                        <li>口味</li>
                        <li>{{item.productDescription}}</li>
                        <li @click="deleteCar(item.goodsId)">删除</li>
                    </ul>
                </div>
            </div>
            <ul class="close">
                <li>
                    <el-row>
                        <el-button @click="downPage">上一页</el-button>
                    </el-row>
                </li>
                <li>合计:</li>
                <li>RMB{{shop.priceSum}}</li>
                <li>
                    <el-row>
                        <el-button round @click="$router.push({path:'/account'})">结算</el-button>
                    </el-row>
                </li>
                <li>
                    <el-row>
                        <el-button @click="upPage" v-show="isShow">下一页</el-button>
                    </el-row>
                </li>
                <li class="curpage">当前第{{nowPage}}页/共{{shop.pageSum}}页</li>

            </ul>
        </div>
    </div>
</template>

<script>
    import gempty from "./gempty.vue";
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
    export default {
        name: "trolley",
        components:{
            gempty
        },
        data(){
            return {
                isShow:true,
                nowPage : 1,
                value:''
            }
        },
        computed:mapState(["shop","goodsMsg"]),
        methods:Object.assign(mapActions(["getShoppingCar","deleteCarFood","shoppingCarGoodsNum","setGoodsTaste"]),{
            deleteCar(id){//删除物品
                this.deleteCarFood(id);
                this.$router.push({
                    query:{
                        pageIndex:this.$route.query.pageIndex/1 || 1,
                    }
                });
                this.orShow();
                this.getNowPage();
            },
            downPage(){//上一页
                if(this.$route.query.pageIndex == false){
                    this.$route.query.pageIndex=1
                }
                this.$router.push({
                    query:{
                        pageIndex:this.$route.query.pageIndex/1-1 || 1,
                    }
                });
                this.orShow();
                this.getNowPage();
            },
            upPage(){//下一页
                if(!this.$route.query.pageIndex){
                    this.$route.query.pageIndex=1
                }
                this.$router.push({
                    query:{
                        pageIndex:this.$route.query.pageIndex/1+1 || 1,
                    }
                });
                this.orShow();
                this.getNowPage();
            },
            orShow(){//按钮显示或隐藏
                if(this.$route.query.pageIndex/1 > this.shop.pageSum/1-1){
                    this.isShow = false;
                    this.nowPage = this.shop.pageSum/1
                }else if(this.shop.pageSum/1 === 1){
                    this.isShow = false;
                }else{
                    this.isShow = true;
                }
            },
            getNowPage(){//获取现在页数
                if(this.$route.query.pageIndex < 2){
                    this.nowPage = 1;
                }else if(this.$route.query.pageIndex/1 >= this.shop.pageSum/1){
                    this.nowPage = this.shop.pageSum;
                    this.$route.query.pageIndex = this.shop.pageSum/1;
                }else{
                    this.nowPage = this.$route.query.pageIndex/1 || 1;
                }
            },
            goodsDown(id){//减少商品数量
                this.shoppingCarGoodsNum({
                    goodsId:id,
                    goodsNum:0
                })
                this.$router.push({
                    query:{
                        pageIndex:this.$route.query.pageIndex/1 || 1,
                    }
                });
            },
            goodsUp(id){//增加商品数量
                this.shoppingCarGoodsNum({
                    goodsId:id,
                    goodsNum:1
                });
                this.$router.push({
                    query:{
                        pageIndex:this.$route.query.pageIndex/1 || 1,
                    }
                });
            }
        }
    ),
    mounted(){
        this.userId = sessionStorage.userId;
        this.orShow();
        this.getNowPage();
        this.getShoppingCar({
            pageIndex:this.$route.query.pageIndex/1 || 1,
        });
    }
}
</script>

<style scoped>
    .details-cart {
        padding-top: 20px;
        height: 495px;
        width: 730px;
        background: #fbf1e6;
        left: 60px;
        top: 30px;
        position: relative;
    }

    .details-cart h1 {
        width: 0;
        border: 12px solid transparent;
        border-right: 12px solid #444341;
        position: absolute;
        top: 234px;
        left: -48px;
        cursor: pointer;
    }

    .mattou {
        height: 360px;
    }

    .matter {
        width: 640px;
        height: 179px;
        border-bottom: 1px solid #353434;
        margin-left: 42px;
    }

    .matter ul {
        padding-top: 35px;
        height: 110px;
        line-height: 110px;
    }

    .matter ul li {
        float: left;
    }

    .matter ul .pic {
        height: 110px;
        width: 90px;
        background: #fff;

    }

    .matter .name {
        height: 24px;
        width: 90px;
        text-align: center;
        font-size: 12px;
        background: #f5a64a;
        line-height: 24px;
        border-radius: 2px;
        margin-left: 48px;
        margin-top: 43px;
    }

    .matter li:nth-of-type(3) {
        margin-right: 16px;
        margin-left: 34px;
        font-size: 18px;
    }

    .matter li:nth-of-type(4) {
        margin-right: 12px;
        font-size: 18px;
    }

    .matter li:nth-of-type(5) {
        margin-right: 40px;
    }

    .matter li:nth-of-type(6) {
        margin-right: 12px;
        font-size: 18px;
    }

    .matter li:nth-of-type(7) {
        margin-right: 30px;
    }

    .matter li:nth-of-type(8) {
        font-size: 18px;
    }

    .close {
        padding-top: 36px;
        height: 40px;
        line-height: 40px;
    }

    .close li {
        float: left;
    }

    .close .el-button {
        background: #f5a64a;
    }

    .close li:nth-child(1) {
        margin-left: 42px;
    }

    .close li:nth-child(2) {
        margin-left: 136px;
    }

    .close li:nth-child(3) {
        margin-left: 20px;
    }

    .close li:nth-child(4) {
        margin-left: 10px;
    }

    .close li:nth-child(5) {
        margin-left:138px;
    }

    .close li:nth-child(6) {
        margin-left: 282px;
        margin-top:10px;
    }
</style>