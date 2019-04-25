<template>
    <div class="loginback">
        <img src="../assets/petshop/img/background.jpeg" class="imgBack">
        <div class="debark">
            <h2>账号登陆</h2>
            <div class="plone-number">
                <img src="../assets/petshop/img/ChatHead.png" alt="">
                <el-input v-model="input" placeholder="请输入手机号" style="height:37px;width:240px;" class="el-input"></el-input>
            </div>
            <div class="auth-code">
                <img src="../assets/petshop/img/save.png" alt="">
                <el-input v-model="input" placeholder="请输入验证码" style="height:37px;width:240px;" class="el-input"></el-input>
                <span>|</span>
                <el-row>
                    <el-button style="width:108px;height:34px;" class="security">获取验证码</el-button>
                </el-row>
            </div>
            <el-row>
                <el-button type="primary" style="height:60px;width:414px;font-size:24px;background:#adadad" class="ashore">登陆</el-button>
            </el-row>
            <p>———————————<span> OR </span>———————————</p>
                <ul class="ico">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: "login",
        components:{

        },
        data() {
            return {
                input: ''
            }
        }
    }
</script>

<style scoped>
    div,ul,li,p,input,img,h1,h2,h3,h4,h5,h6{
        padding:0;
        margin:0;
    }
    body{
        position: absolute;
        z-index: 111;
    }
    .security{
        position: absolute;
        top:-35px;
        right:0;
    }
    .auth-code span{
        color:#a0a0a0;
        font-size:26px;
        height:37px;
        float: right;
        padding-right:114px;
    }
    .plone-number .el-input input{
        height:37px;
        padding:0;
    }
    .ashore{
        position: absolute;
        top:210px;
        left:60px;
        border:none;
    }
    .imgBack{
        position: absolute;
        z-index: -100;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .debark{
        height:596px;
        width:554px;
        border-radius: 10px;
        position: absolute;
        bottom:242px;
        right:184px;
        box-shadow:0px 20px 40px #000;
        background:rgba(160,160,160,.4);
    }
    .debark h2{
        color:#fff;
        font-size:24px;
        padding-top:54px;
        padding-left:70px;
        font-weight: normal;
    }
    .debark .plone-number{
        height:37px;
        width:414px;
        border-bottom:1px solid #fff;
        position: absolute;
        top:126px;
        left:70px;
        vertical-align: middle;
        line-height:30px;
    }
    .debark .plone-number img{

    }
    .debark .auth-code{
        height:37px;
        width:414px;
        border-bottom:1px solid #fff;
        position: absolute;
        top:212px;
        left:70px;
        line-height:30px;
    }
    .debark p{
        position: absolute;
        top:428px;
        left:60px;
    }
    .debark p span{
        font-size:20px;
        color:#ccc;
    }
    .ico{
        position: absolute;
        bottom:60px;
        left:116px;
    }
    .ico li:nth-child(1){
        float: left;
        width: 36px;
        height: 36px;
        background: url(../assets/petshop/img/qqdown.png) no-repeat;
        margin-left: 40px;
    }
    .ico li:nth-child(1):hover{
        background: url(../assets/petshop/img/qqup.png) no-repeat;
    }

    .ico li:nth-child(2){
        float: left;
        width: 36px;
        height: 36px;
        background: url(../assets/petshop/img/weixindown.png) no-repeat;
        margin-left: 65px;
    }
    .ico li:nth-child(2):hover{
        background: url(../assets/petshop/img/weixinup.png) no-repeat;
    }
    .ico li:nth-child(3){
        float: left;
        width: 36px;
        height: 36px;
        background: url(../assets/petshop/img/sinalogodown.png) no-repeat;
        margin-left: 60px;
    }
    .ico li:nth-child(3):hover{
        background: url(../assets/petshop/img/sinalogoup.png) no-repeat;
    }
</style>