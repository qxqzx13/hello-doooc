<template>
    <!--购物车页判断有没有东西-->
    <div class="sss">
        <gempty v-if="!shop.shopCar"></gempty><!--空车-->
        <div v-else class="details-cart">
            <h1></h1>
            <div class="mattou">
                <div class="matter" v-for="item in shop.shopCar">
                    <ul>
                        <li class="pic"></li>
                        <li class="name">{{item.name}}</li>
                        <li>RMB</li>
                        <li>{{item.price}}</li>
                        <li>
                            <select>
                                <option v-for="v in item.goodsType" :value="v.num">{{v.name}}</option>
                            </select>
                        </li>
                        <li>口味</li>
                        <li>
                            <select>
                                <option v-for="i in item.goodsTaste" :value="i.num">{{i.name}}</option>
                            </select>
                        </li>
                        <li @click="deleteCar(item.goodsId)">删除</li>
                    </ul>
                </div>
            </div>
            <ul class="close">
                <li>
                    <el-row>
                        <el-button @click="downPage" v-show="$route.query.pageIndex > 1">上一页</el-button>
                    </el-row>
                </li>
                <li>合计:</li>
                <li>RMB{{shop.priceSum}}</li>
                <li>
                    <el-row>
                        <el-button round @click="$router.push({path:'/account',query:{userId:userId}})">结算</el-button>
                    </el-row>
                </li>
                <li>
                    <p class="curpage">当前第{{nowPage}}页/共{{shop.pageSum}}页</p>
                    <el-row>
                        <el-button @click="upPage" v-show="isShow">下一页</el-button>
                    </el-row>
                </li>
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
                nowPage : 1
            }
        },
        computed:mapState(["shop"]),
        methods:Object.assign(mapActions(["getShoppingCar","deleteCarFood"]),{
                deleteCar(id){
                    this.deleteCarFood({
                        goodsId:id,
                        userId:this.userId
                    });
                    this.$router.push({
                        query:{
                            userId:this.userId,
                            pageIndex:this.$route.query.pageIndex/1-1 || 1,
                        }
                    });
                    this.orShow();
                    this.getNowPage();
                },
                downPage(){
                    if(this.$route.query.pageIndex == false){
                        this.$route.query.pageIndex=1
                    }
                    this.$router.push({
                        query:{
                            userId: this.userId,
                            pageIndex:this.$route.query.pageIndex/1-1 || 1,
                        }
                    });
                    this.orShow();
                    this.getNowPage();
                },
                upPage(){
                    if(!this.$route.query.pageIndex){
                        this.$route.query.pageIndex=1
                    }
                    this.$router.push({
                        query:{
                            userId: this.userId,
                            pageIndex:this.$route.query.pageIndex/1+1 || 1,
                        }
                    });
                    this.orShow();
                    this.getNowPage();
                },
                orShow(){
                    if(this.$route.query.pageIndex/1 > this.shop.pageSum/1-1){
                        this.isShow = false;
                        this.nowPage = this.shop.pageSum/1
                    }else if(this.shop.pageSum/1 === 1){
                        this.isShow = true;
                    }else{
                        this.isShow = true;
                    }
                },
                getNowPage(){
                    if(this.$route.query.pageIndex < 2){
                        this.nowPage = 1;
                    }else if(this.$route.query.pageIndex/1 >= this.shop.pageSum/1){
                        this.nowPage = this.shop.pageSum;
                        this.$route.query.pageIndex = this.shop.pageSum/1;
                    }else{
                        this.nowPage = this.$route.query.pageIndex/1 || 1;
                    }
                },
            }
        ),
        mounted(){
            this.userId = sessionStorage.userId;
            this.orShow();
            this.getNowPage();
            this.getShoppingCar({
                userId: this.userId,
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
        margin-left: 100px;
    }

    .close li:nth-child(3) {
        margin-left: 20px;
    }

    .close li:nth-child(4) {
        margin-left: 10px;
    }

    .close li:nth-child(5) {
        margin-left: 50px;
    }

    .close li:nth-child(6) {
        margin-left: 110px;
    }
</style>