<template>
  <div class="particulars">
    <h3>宠物待售</h3>
        <!--<div class="picture picture1">-->
            <!--<div class="small-picture"><img :src="petmarket.petmarketSale.icon[0]" alt=""></div>-->
            <!--<p>petmarket.petmarketSale.typeName</p>-->
        <!--</div>-->
        <!--<div class="picture picture1">-->
            <!--<div class="small-picture"><img :src="petmarket.petmarketSale.icon[1]" alt=""></div>-->
            <!--<p>petmarket.petmarketSale.typeName</p>-->
        <!--</div>-->
        <!--<div class="picture picture1">-->
            <!--<div class="small-picture"><img :src="petmarket.petmarketSale.icon[2]" alt=""></div>-->
            <!--<p>petmarket.petmarketSale.typeName</p>-->
        <!--</div>-->
<!--
          <div class="picture picture1">
            <div class="small-picture"><img src="../../assets/petmarket/img/thumb_1_1.jpg" alt=""></div>
              <p>1111</p>
          </div>.
        <div class="picture picture1">
            <div class="small-picture"><img src="../../assets/petmarket/img/thumb_1_2.jpg" alt=""></div>
            <p>1111</p>
        </div>
        <div class="picture picture1">
            <div class="small-picture"><img src="../../assets/petmarket/img/thumb_1_3.jpg" alt=""></div>
            <p>1111</p>
        </div>-->
        <div class="picture">
            <div class="picture1">
                <div class="small-picture"><img :src="petmarket.petmarketSale.icon[0]" alt="" ></div>
            </div>
        </div>
      <div class="picture">
          <div class="picture1">
              <div class="small-picture"><img :src="petmarket.petmarketSale.icon[1]" alt="" ></div>
          </div>
      </div>
      <div class="picture">
          <div class="picture1">
              <div class="small-picture"><img :src="petmarket.petmarketSale.icon[2]" alt="" ></div>
          </div>
      </div>
      <div class="petdetails">
          <div class="petdetails-box-background"></div>
          <div class="center">
              <h3>宠物详细</h3>
              <h2>{{petmarket.petmarketSale.petIntroduce}}</h2>
              <h5>价格<span>{{petmarket.petmarketSale.getPrice}}</span>元/只</h5>
              <ul>
                  <li><p>在售只数</p><span>{{petmarket.petmarketSale.petNum}}</span></li>
                  <li><p class="tastecenter">年龄</p><span>{{petmarket.petmarketSale.petAge}}</span></li>
                  <li><p class="tastecenter">品种</p><span>{{petmarket.petmarketSale.dogOrCat}}</span></li>
                  <li><p class="tastecenter">性别</p><span>{{petmarket.petmarketSale.boyOrGirl}}</span></li>
                  <li><p>驱虫情况</p><span>已驱虫</span></li>
              </ul>
          </div>
          <el-row>
              <el-button round @click="$router.push('/shoppingcar')">加入购物车</el-button>
          </el-row>
      </div>
    <div class="process">
      <div class="process-box-background"></div>
      <div class="process-box">
        <p class="rotate"></p>
        <h1></h1>
        <h3>购宠流程</h3>
        <ul>
          <li>
            <h4>01</h4>
            <h2>
              <img src="../../assets/petmarket/img/sc1.png" alt>
            </h2>
            <p>访问官网</p>
          </li>
          <li>
            <h4>01</h4>
            <h2>
              <img src="../../assets/petmarket/img/sc2.png" alt>
            </h2>
            <p>放入购物车</p>
          </li>
          <li>
            <h4>01</h4>
            <h2>
              <img src="../../assets/petmarket/img/sc3.png" alt>
            </h2>
            <p>支付定金</p>
          </li>
          <li>
            <h4>01</h4>
            <h2>
              <img src="../../assets/petmarket/img/sc4.png" alt>
            </h2>
            <p>快速发货</p>
          </li>
          <li>
            <h4>01</h4>
            <h2>
              <img src="../../assets/petmarket/img/sc5.png" alt>
            </h2>
            <p>确认收货</p>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="care">
        <div class="character">
            <p class="rotate"></p>
            <h1></h1>
            <h3>购宠保障</h3>
            <div></div>
            <h4>自家繁育,品质保证</h4>
            <div></div>
            <ul>
                <li>保健康</li>
                <li>保健康</li>
                <li>保健康</li>
            </ul>
            <ol>
                <li>出售的没一只爱宠都是做好疫苗,经过健康检测再去新家的,客户收到爱宠经检测如出现(猫瘟,狗瘟,鼻支传腹)出示检测结果便可调换同等价位的爱宠</li>
                <li>爱宠均有血统证书,购买后经鉴定不纯种,我们将翻倍赔偿</li>
                <li>终身售后指导饲养,我们有专业的饲养医疗团队,手把手教您饲养及预防,让您养宠无忧</li>
            </ol>
        </div>
        <div class="character-background"></div>
    </div>
    <div class="blank">
      <h2></h2>
      <p>选doooc·品质</p>
      <h3></h3>
    </div>
  </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
    export default {
        name:"sale",
        computed :mapState(["petmarket"]),
        methods:mapActions(["shopHomeSale"]),
        mounted(){
            this.shopHomeSale();
            // this.shopHomeSale(this.$route.query.productId);
        }
    }
</script>

<style scoped>
div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
}
.particulars {
  width: 1300px;
  margin: 0 auto;
  text-align: center;
}

.particulars h3 {
  font-size: 46px;
  font-weight: 500;
}

.particulars .picture {
  padding-bottom: 60px;
}

.particulars .picture .picture1 {
  padding: 16px;
  margin: 74px auto 0;
  height: 368px;
  width: 368px;
  background: #bfbfbf;
}

.particulars .picture .picture1 .small-picture {
  width: 370px;
  height: 312px;
}
.small-picture img{
    width: 100%;
    height: 100%;
}
.particulars .process {
  box-shadow: 0 0 10px #808080;
  height: 412px;
  width: 750px;
  margin: 0 auto;
  position: relative;
}
.particulars .petdetails{
    box-shadow: 0 0 10px #808080;
    height: 476px;
    width: 750px;
    margin: 0 auto;
    position: relative;
    margin-bottom:92px;
}
.petdetails .petdetails-box-background{
    position:absolute;
    height: 476px;
    width: 750px;
    background-image:url(../../assets/petmarket/img/bg.png);
    background-size:100% 100%;
    opacity:0.7;
    bottom:0;
    left:0;
}
.particulars .petdetails .center{
    width:404px;
    height:100%;
    margin:0 auto;
    position: relative;
    text-align: left;

}
.particulars .petdetails .center h3{
    padding-top:20px;
    text-align: left;
    font-size:30px;
    padding-left:10px;
}
.particulars .petdetails .center h2{
    height:52px;
    width:288px;
    text-align: left;
    line-height:30px;
    font-size:24px;
    font-weight:400;
    color:black;
    padding-top:46px;
    padding-left:10px;
}
.particulars .petdetails .center h5{
    font-weight:400;
    padding-top:40px;
    font-size:24px;
    padding-left:10px;
}
.particulars .petdetails .center h5 span{
    color:#ff3366;
    padding:0 10px;
}
.particulars .petdetails .center ul{
    padding-top:46px;
}
.particulars .petdetails .center ul li{

}
.particulars .petdetails .center ul li:nth-child(even){
    height:58px;
    line-height:58px;
}
.particulars .petdetails .center ul li:nth-child(odd){
    background:#e5cbad;
    height:22px;
}
.particulars .petdetails .center ul li p{
    display: inline-table;

}
.particulars .petdetails .center ul li span{
    padding-left:30px;
}
.tastecenter{
    text-align: justify;
    width:64px;
}
.tastecenter:after {
    display: inline-block;
    width: 100%;
    content: '';
}
.el-button{
    position: absolute;
    bottom:20px;
    right:32px;
    background: #f5a64a;
}
.el-button:focus{
    background:#f5a64a;
}
.process-box{
    z-index: 3;
    position: relative;
}
.process-box-background{
    position:absolute;
    height: 412px;
    width: 750px;
    background-image:url(../../assets/petmarket/img/bg.png);
    background-size:412px 750px;
    opacity:0.7;
    bottom:0;
    left:0;
}
.particulars .process .process-box .rotate {
  margin-top: 28px;
  float: left;
  margin-left: 108px;
  transform: rotate(45deg);
  height: 24px;
  width: 24px;
  background: #fff;
}

.particulars .process .process-box h1 {
  margin-top: 34px;
  float: right;
  height: 16px;
  width: 598px;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
}

.particulars .process .process-box h3 {
  float: left;
  font-size: 30px;
  margin-top: 16px;
  margin-left: 66px;
}

.particulars .process .process-box ul {
  float: left;
  margin-top: 80px;
}

.particulars .process .process-box ul li {
  height: 150px;
  width: 110px;
  background: #e3e1e2;
  float: left;
}

.particulars .process .process-box ul li h4 {
  margin-top: 14px;
  font-size: 16px;
  font-weight: 500;
}

.particulars .process .process-box ul li h2 {
  height: 82px;
  width: 82px;
  border-radius: 50%;
  margin: 14px;
}
.particulars .process .process-box ul li p {
    padding-top:10px;
    font-size:16px;
    
}
.particulars .process .process-box ul li:first-child {
  margin-left: 66px;
  margin-right: 30px;
}

.particulars .process .process-box ul li:nth-child(2),
.particulars .process .process-box ul li:nth-child(3),
.particulars .process .process-box ul li:nth-child(4) {
  margin-right: 30px;
}

.particulars .care {
  box-shadow: 0 0 10px #808080;
  margin: 96px auto 0;
  width: 750px;
  height: 590px;
  position: relative;
}
.character{
    z-index:3;
    position: relative;
}
.particulars .care .character-background{
    position:absolute;
    height: 590px;
    width: 750px;
    background-image:url(../../assets/petmarket/img/bg.png);
    background-size:100% 100%;
    opacity:0.7;
    bottom:0;
    left:0;
}

.particulars .care .character .rotate {
  margin-top: 28px;
  float: left;
  margin-left: 108px;
  transform: rotate(45deg);
  height: 24px;
  width: 24px;
}

.particulars .care .character h1 {
  margin-top: 34px;
  float: right;
  height: 16px;
  width: 598px;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
}

.particulars .care .character h3 {
  float: left;
  font-size: 30px;
  margin-top: 16px;
  margin-left: 66px;
}

.particulars .care .character div {
  clear: both;
}

.particulars .care .character h4 {
  margin-top: 68px;
  float: left;
  font-weight: 500px;
  margin-left: 100px;
}

.particulars .care .character ul {
  float: left;
}

.particulars .care .character ul li {
  border-radius: 4px;
  height: 38px;
  width: 104px;
  background: #000;
  color: #fff;
  line-height: 38px;
  margin-left: 94px;
  margin-top: 70px;
}

.particulars .care .character ol {
  float: right;
  margin-top: 54px;
}

.particulars .care .character ol li {
  height: 84px;
  width: 458px;
  text-align: left;
  overflow: hidden;
  line-height: 28px;
}

.particulars .care .character ol li:nth-child(2),
.particulars .care .character ol li:nth-child(3) {
  margin-top: 28px;
}

.particulars .blank {
  position: relative;
  height: 204px;
  width: 750px;
  margin: 134px auto 84px;
  background: #e5cbad;
  text-align: center;
  line-height: 204px;
  color: #fff;
}

.particulars .blank h2,
.particulars .blank h3 {
  height: 4px;
  width: 306px;
  background: #fff;
}

.particulars .blank h2 {
  position: absolute;
  top: 100px;
  left: 0;
}

.particulars .blank h3 {
  position: absolute;
  top: 100px;
  right: 0;
}
.picture1 p{
    line-height: 70px;
}
</style>
                                           