<template>
    <div id="top" :style="topHeight" >
        <div class="topArea">
            <div class="navBox">
                <div class="navLeft">
                    <ul>
                        <li><router-link to="/">首页</router-link></li>
                        <li><router-link to="/shop">商城</router-link></li>
                        <li><router-link to="/pet">知宠</router-link></li>
                    </ul>
                </div>
                <div class="loginOut">
                    <el-button type="text" v-if="!loginName" @click="$router.push('/login')" class="logon">登陆</el-button>
                    <el-button type="text" v-else @click="goBye" class="quit"><span>欢迎{{loginName}},点击</span>退出</el-button>
                </div>
                <div class="logo">
                    <img src="../../assets/home/img/logoblack.svg" />
                </div>
                <div class="navRight">
                    <div class="login" id="load">
                        <img class="my" src="../../assets/home/img/touxiang.svg" />
                        <ul class="navList">
                            <router-link to="/personal"><li>我的信息</li></router-link>
                            <router-link to="/personal/personalCenter"><li>订单中心</li></router-link>
                            <router-link to="/shoppingcar"><li>我的购物</li></router-link>
                            <router-link to="/asaspet"><li>我的晒宠</li></router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <home-banner @getHeight="fn"></home-banner>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
    import homeBanner from "./homeBanner";
    export default {
        name: "home-header",
        data(){
            return {
                topHeight :{},
                loginName:1,
            }
        },
        components:{
            homeBanner
        },
        methods:Object.assign(mapMutations(["OUT_LOGIN"]),{
            goBye(){
                this.$store.commit("OUT_LOGIN");
            },
            fn(a){
                this.topHeight = {height : a + "px"}
            }
        }),
        mounted(){
            this.loginName = localStorage.userName;
        }
    }
</script>

<style scoped>
    div,ul,li{
        margin: 0;
        padding: 0;
    }
    #top {
        width: 100%;
    }

    #top .header-img {
        width: 100%;
    }

    #top .topArea {
        width: 100%;
        height: 96px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
    }

    #top .topArea .navBox {
        width: 1300px;
        height: 96px;
        margin: 0 auto;
        position: relative;
    }

    #top .topArea .navBox .navLeft {
        float: left;
        padding-top: 38px;
    }

    #top .topArea .navBox .loginOut .logon{
        position: absolute;
        top:20px;
        right:80px;
    }
    #top .topArea .navBox .loginOut .quit{
        position: absolute;
        top:20px;
        right:280px;
    }
    #top .topArea .navBox .loginOut .el-button{
        height:30px;
        width:60px;
        font-size:20px;
        color:#fff;
    }
    #top .topArea .navBox .navLeft li {
        float: left;
        margin-right: 100px;
        height: 26px;
    }

    #top .topArea .navBox .navLeft li a {
        font-size: 20px;
        line-height: 26px;
        color: #eee;
    }

    #top .topArea .navBox .navLeft li:hover {
        border-bottom: 2px solid #F5A64A;
    }

    #top .topArea .navBox .navLeft li:hover{
        color: #F0A34B;
    }

    #top .topArea .navBox .logo {
        float: left;
        margin-left: 170px;
        line-height: 96px;
    }
    #top .topArea .navBox .logo img{
        height:36px;
        width:132px;
    }
    #top .topArea .navBox .navRight {
        float: right;
        width: 56px;
        background: url(../../assets/home/img/jiantou1.png) no-repeat right;
        background-position: right 43px;
        cursor: pointer;
        position: relative;
    }

    #top .topArea .navBox .navRight .my {
        float: left;
        width: 32px;
        height: 32px;
        margin-top: 29px;
    }

    #top .topArea .navBox .navRight .navList {
        display: none;
        background: rgba(255, 255, 255, 0);
        padding-top: 10px;
        position: absolute;
        right: 0;
        top: 60px;
        line-height: 28px;
        font-size: 16px;
        width: 66px;
    }

    #top .topArea .navBox .navRight .navList li{
        color: #fff;
    }

    #top .topArea .navBox .navRight .navList li:hover {
        color: #F5A64A;
        cursor: pointer;
    }

    #top .topArea .navBox .navRight:hover {
        background: url(../../assets/home/img/jiantou2.png)  no-repeat;
        background-position: right 43px;
    }

    #top .topArea .navBox .navRight:hover .navList {
        display: block;
    }


</style>