<template>
    <div id="top">
        <div class="personalheaderbackground">
            <img src="../../assets/common/img/personalheaderbackground.png" class="header-img">
        </div>
        <div class="topArea">
            <div class="navBox">
                <div class="navLeft">
                    <ul>
                        <li @click="$router.push('/')">首页</li>
                        <li @click="$router.push('/shop')">商城</li>
                        <li @click="$router.push('/pet')">知宠</li>
                    </ul>
                </div>
                <div class="loginOut">
                    <el-button type="text" v-if="loginName === null">登陆</el-button>
                    <el-button type="text" v-if="loginName !== null">退出</el-button>
                </div>
                <div class="logo">
                    <img src="../../assets/common/img/logoblack.svg" />
                </div>
                <div class="navRight">
                    <div class="login" id="load">
                        <img class="my" src="../../assets/common/img/touxiang.svg" />
                        <ul class="navList">
                            <li @click="$router.push('/personal')"><b>我的信息</b></li>
                            <li @click="$router.push('/personal/personalCenter')"><b>订单中心</b></li>
                            <li @click="$router.push('/')"><b>我的购物</b></li>
                            <li @click="$router.push('/')"><b>我的晒宠</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'commonHeader',
    data(){
        return{
            loginName:null,
        }
    }
}
</script>

<style scoped>
    .personalheaderbackground{
        position: relative;
    }
    .personalheaderbackground img{
        position: relative;
        z-index: -1;
    }
    #top {
        width: 100%;
    }
    div,p,ul,li{
        margin: 0;
        padding: 0;
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
        background: rgba(167, 167, 167, 0.4);
    }

    #top .topArea .navBox {
        width: 1300px;
        height: 96px;
        margin: 0 auto;
    }

    #top .topArea .navBox .navLeft {
        float: left;
        padding-top: 38px;
    }
    #top .topArea .navBox .loginOut{
        position:absolute;
        top:22px;
        right:364px;
    }
    #top .topArea .navBox .loginOut .el-button{
        height:30px;
        width:60px;
        font-size:20px;
        color:#fff;
    }
    #top .topArea .navBox .navLeft li{
        float: left;
        cursor:pointer;
        margin-right: 100px;
        height: 26px;
        font-size: 20px;
        line-height: 26px;
        color: #eee;
    }
    #top .topArea .navBox .navLeft li:hover {
        border-bottom: 2px solid #F5A64A;
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
        background: url(../../assets/common/img/jiantou1.png) no-repeat right;
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

    #top .topArea .navBox .navRight .navList b {
        color: #fff;
        font-weight: unset;
    }

    #top .topArea .navBox .navRight .navList b:hover {
        color: #F5A64A;
    }

    #top .topArea .navBox .navRight:hover {
        background: url(../../assets/common/img/jiantou2.png) no-repeat right;
        background-position: right 43px;
    }

    #top .topArea .navBox .navRight:hover .navList {
        display: block;
    }

    #top::after {
        display: block;
        clear: both;
        content: "";
        visibility: hidden;
        height: 0;
    }
</style>