<template>
  <div>
    <div id="toptwo">
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
            <el-button type="text" v-if="!loginName" @click="$router.push('/login')" class="logon">登陆</el-button>
            <el-button type="text" v-else @click="goBye" class="quit"><span>欢迎{{loginName}},点击</span>退出</el-button>
          </div>
          <div class="logo">
            <img src="../../assets/common/img/logoblack.svg">
          </div>
          <div class="navRight">
            <div class="login" id="load">
              <img class="my" src="../../assets/common/img/touxiang.svg">
              <ul class="navList">
                <li @click="$router.push('/personal')">我的信息</li>
                <li @click="$router.push('/personal/personalCenter')">订单中心</li>
                <li @click="$router.push('/shoppingcar')">我的购物</li>
                <li @click="$router.push('/')">我的晒宠</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
export default {
  name: "navigation",
    data(){
        return{
            loginName:1
        }
    },
    methods:Object.assign(mapMutations(["OUT_LOGIN"]),{
            goBye(){
                this.$store.commit("OUT_LOGIN");
            }
        }
    ),
    mounted(){
        this.loginName = localStorage.userName;
    }
};
</script>

<style>
div,
ul,
li,
h1,
h2,
h3,
h4,
h6,
span,
img,
i,
b,
p,
h5 {
  margin: 0;
  padding: 0;
}
#toptwo {
  width: 100%;
}

#toptwo .header-img {
  width: 100%;
}

#toptwo .topArea {
  background: rgba(167, 167, 167, 0.5);
  width: 100%;
  height: 96px;
  z-index: 1000;
}

#toptwo .topArea .navBox {
  width: 1300px;
  height: 96px;
  margin: 0 auto;
  position: relative;
}

#toptwo .topArea .navBox .navLeft {
  cursor: pointer;
  float: left;
  padding-top: 38px;
}
#toptwo .topArea .navBox .loginOut{

}
#toptwo .topArea .navBox .loginOut .logon{
  position: absolute;
  top:20px;
  right:80px;
}
#toptwo .topArea .navBox .loginOut .quit{
  position: absolute;
  top:20px;
  right:280px;
}
#toptwo .topArea .navBox .loginOut .el-button{
  height:30px;
  width:60px;
  font-size:20px;
  color:#272727;
}
#toptwo .topArea .navBox .navLeft li {
  float: left;
  margin-right: 100px;
  height: 26px;
  font-size: 20px;
  line-height: 26px;
  color: #272727;
}

#toptwo .topArea .navBox .navLeft li:hover {
  border-bottom: 2px solid #f5a64a;
  color: #f0a34b;
}
#toptwo .topArea .navBox .logo {
  float: left;
  margin-left: 170px;
  line-height: 96px;
}
#toptwo .topArea .navBox .logo img{
  height:36px;
  width:132px;
}
#toptwo .topArea .navBox .navRight {
  float: right;
  width: 56px;
  background: url(../../assets/common/img/jiantou1.png) no-repeat right;
  background-position: right 43px;
  cursor: pointer;
  position: relative;
}
#toptwo .topArea .navBox .navRight .my {
  float: left;
  width: 32px;
  height: 32px;
  margin-top: 29px;
}

#toptwo .topArea .navBox .navRight .navList {
  z-index: 99;
  display: none;
  padding-top: 10px;
  position: absolute;
  right: 0;
  top: 60px;
  line-height: 28px;
  font-size: 16px;
  width: 66px;
}

#toptwo .topArea .navBox .navRight .navList li {
  color: #999;
}

#toptwo .topArea .navBox .navRight .navList li:hover {
  color: #f5a64a;
}

#toptwo .topArea .navBox .navRight:hover {
  background: url(../../assets/common/img/jiantou2.png) no-repeat right;
  background-position: right 43px;
}
#toptwo .topArea .navBox .navRight:hover .navList {
  display: block;
}

#toptwo::after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
</style>
