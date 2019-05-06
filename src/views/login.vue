<template>
    <div class="debark">
        <img src="../assets/petshop/img/background.jpeg" class="imgBack">
        <div class="loginback">

            <el-form :model="adminForm" class="container" ref="ruleForm" :rules="rules">
                <el-row>
                    <el-col :span="24"><h2>账号登录</h2></el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item prop="adminName">
                            <img src="../assets/petshop/img/ChatHead.png" alt="">
                            <el-input placeholder="请输入手机号" v-model="adminForm.adminName" type="text"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="18">
                        <el-form-item prop="passWord">
                            <img src="../assets/petshop/img/save.png" alt="">
                            <el-input placeholder="请输入验证码" v-model="adminForm.passWord" type="password"></el-input>
                        </el-form-item>
                    </el-col>
                    <span></span>
                    <el-col :span="6">
                        <el-button type="text" @click="getVerify" v-if="isShow">获取验证码</el-button>
                        <el-button type="text" disabled v-else>{{num}}s重新发送</el-button>
                    </el-col>
                </el-row>
                <el-form-item>
                    <el-button type="primary" :loading="loading" @click="submitForm">登陆</el-button>
                </el-form-item>
            </el-form>
            <p>--------------------------<span>OR</span>--------------------------</p>
            <ul class="ico">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
    export default {
        name: "login",
        data() {
            return {
                loading:false,
                timer:null,
                loading: false,
                isShow:true,
                num:60,
                adminForm: {
                    adminName: "",
                    passWord: ""
                },
                rules: {
                    adminName: [
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        {pattern:/^1[345789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur'}
                    ],
                    passWord: [
                        {required: true, message: '请输入验证码', trigger: 'blur'},
                        {pattern:/^\d{6}$/, message: '请输入正确的验证码', trigger: 'blur'}
                    ]
                }
            }
        },
        computed : mapState(["petmarket"]),
        methods: {
            getVerify() {
                this.$axios.post("/buyer/order/verify", {
                    userPhone: this.adminForm.phone
                }).then(
                    data => {
                    if(data.ok === 1){
                        //提示发送成功,按钮禁用60s
                        this.open(data.msg);
                        this.isShow=!this.isShow;
                        this.isShow=!this.isShow;
                        this.timer = setInterval(()=>{
                            if(this.num <= 0 ){
                                clearInterval(this.timer);
                                this.isShow = !this.isShow;
                                this.num = 60;
                            }else{
                                this.num -= 1;
                            }
                        },1000)
                    }else{
                        //提示错误信息
                        this.open(data.msg);
                    }
                }
            )
            },
            submitForm() {
                this.$refs.ruleForm.validate(valid=>{
                    if(valid) {
                        this.loading = false;
                        this.$axios.post("/login", this.adminForm).then(
                            data => {
                            this.loading = false;
                            if(data.ok === 1){
                            //成功记录userId,token
                            localStorage.userId = data.userId;
                            localStorage.userName = data.userName;
                            this.open(data.msg);
                            if(this.$route.query.redirect)
                                this.$router.push(this.$route.query.redirect)
                            else
                                this.$router.push("/")
                        }
                    else
                        {
                            //提示错误信息
                            this.open(data.msg);
                        }
                    }
                    )
                    } else {
                        //提示错误信息
                        this.open("请输入正确的账号验证码");
                return false;
            }
            });
            },
            open(msg) {
                this.$message(msg);
            },
        },
        mounted(){
            console.log(this.$route.query.redirect);
            let inp = document.querySelectorAll(".el-input__inner");
            for(let i = 0,len=inp.length;i<len;i++){
                inp[i].style.background = "transparent";
                inp[i].style.border = "none";
            }
        }
    }
</script>

<style scoped>
    div, ul, li, p, input, img, h1, h2, h3, h4, h5, h6 {
        padding: 0;
        margin: 0;
    }

    body {
        position: absolute;
        z-index: 111;
    }
    .imgBack{
        position: absolute;
        z-index: -100;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .el-col h2{
        padding-left:70px;
        padding-top:54px;
        font-weight:normal;
        color:#fff;
    }
    .el-form-item:nth-child(1){
        width:414px;
        margin-top:52px;
        border-bottom:1px solid #fff;
        margin-left:70px;
    }
    .el-form-item__content img{


    }
    .el-button--primary{
        width:414px;
        height:60px;
        font-size:24px;
        border: none;
        margin-top:52px;
        margin-left:70px;
        background: rgba(181,181,181,0.6);
    }
    .el-button--text{
        position: absolute;
        left:394px;
        top:54px;

    }
    .el-row>span{
        height:34px;
        border-left:1px solid #9e9e9e;
        position: absolute;
        left:368px;
        top: 56px;

    }
    .el-input{
        width:60%;
    }
    .el-input__inner{
    }
    .el-button span{
        font-size:18px;
    }
    .loginback{
        height:596px;
        width:554px;
        box-shadow:0px 20px 40px #000;
        background:rgba(160,160,160,.4);
        position: absolute;
        bottom:20%;
        right:14%;
        border-radius:10px;
    }
    .loginback>p{
        padding-top:70px;
        padding-left:70px;
        color:#666666;
    }
    .loginback>p>span{
        padding:0 16px;
        font-size:20px;
        color:#ccc;
    }
    .ico {
        position: absolute;
        bottom: 60px;
        left: 116px;
    }

    .ico li:nth-child(1) {
        float: left;
        width: 36px;
        height: 36px;
        background: url(../assets/petshop/img/qqdown.png) no-repeat;
        margin-left: 40px;
    }

    .ico li:nth-child(1):hover {
        background: url(../assets/petshop/img/qqup.png) no-repeat;
    }

    .ico li:nth-child(2) {
        float: left;
        width: 36px;
        height: 36px;
        background: url(../assets/petshop/img/weixindown.png) no-repeat;
        margin-left: 65px;
    }

    .ico li:nth-child(2):hover {
        background: url(../assets/petshop/img/weixinup.png) no-repeat;
    }

    .ico li:nth-child(3) {
        float: left;
        width: 36px;
        height: 36px;
        background: url(../assets/petshop/img/sinalogodown.png) no-repeat;
        margin-left: 60px;
    }

    .ico li:nth-child(3):hover {
        background: url(../assets/petshop/img/sinalogoup.png) no-repeat;
    }
</style>