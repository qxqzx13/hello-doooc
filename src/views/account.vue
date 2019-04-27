<template>
    <div>
        <navigation></navigation>
        <div class="middle">
            <div id="car">
                <div class="petpic"></div>
                <h3>商品详情</h3>
                <div class="sss">
                    <h1></h1>
                    <div class="matter">
                        <p>收货地址</p>
                        <span class="matter_span">ADDRESS</span>
                        <div class="shippingaddress">
                            <div  class="region">
                                <span>所在地区</span>
                                <!-- <el-row class="block-col-2">
                                    <el-dropdown trigger="click">
                                        <span class="el-dropdown-link province ">
                                            请选择<i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item >黄金糕</el-dropdown-item>
                                            <el-dropdown-item >双皮奶</el-dropdown-item>
                                            <el-dropdown-item >龙须面</el-dropdown-item>
                                            <el-dropdown-item >蚵仔煎</el-dropdown-item>
                                            <el-dropdown-item >北京烤鸭</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <select name="" id="" index="2">
                                        <option value="" index="2-1">123</option>
                                        <option value="" index="2-1">123</option>
                                        <option value="" index="2-1">123</option>
                                    </select>
                                    <el-dropdown trigger="click">
                                        <span class="el-dropdown-link  
                                        ">
                                            请选择<i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item >黄金糕</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>        
                                </el-row> -->
                                <select name="public-choice" v-model="provs" @change="getProvs" placeholder="请选择"> 
                                    <option :value="item.id" v-for="item in provsList" >{{item.name}}</option> 
                                </select>
                                <select name="public-choice" v-model="city" @change="getCity" placeholder="请选择"> 
                                    <option :value="item.id" v-for="item in cityList" >{{item.name}}</option> 
                                </select>
                                <select name="public-choice" v-model="provs" @change="getProvs" placeholder="请选择"> 
                                    <option :value="item.id" v-for="item in provsList" >{{item.name}}</option> 
                                </select>
                            </div>    
                            <div class="site">
                                <span>详细地址</span>
                                <input type="text" class=".minute">
                            </div>  
                            <div class="site">
                                <span>收获姓名</span>
                                <input type="text" class=".minute">
                            </div><div class="site">
                                <span>联系电话</span>
                                <input type="text" class=".minute">
                            </div>            
                        </div>
                        <p>支付方式</p>
                        <span class="matter_span">PAYMENT</span>
                        <div class=" payment">
                            <div class="paymentOptions">
                                <el-radio label="1" border>微信</el-radio>
                                <el-radio  label="2" border>支付宝</el-radio>
                            </div>
                        </div>
                        <ul class="commit">
                            <li>确认付款</li>
                            <li>RMB</li>
                            <li>5000</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <commonFooter></commonFooter>
    </div>
    
</template>

<script>
import navigation from "../components/shopcommonality/navigation";
import commonFooter from "../components/common/commonFooter";
export default {
    name:"account",
    components:{
        navigation,
        commonFooter,
    },
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1',
        provsList:[
                    {
                        id:
                    },
                    {
                        id: '0',
                        name: '山西省'
                    },
                    {
                        id: '1',
                        name: '陕西省'
                    },
                    {
                        id: '2',
                        name: '河南省'
                    }
                ],
                provs: '',
      }
     
    },
    created(){
　　　　　　　　　　　　//如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
            this.provs = this.provsList[0].id;
    },
    methods:{
　　　　　　getprovs:function(){
                //获取选中的优惠券
            console.log(this.provs)
            }
    }
}
</script>

<style scoped >
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5,input{
        margin:0;
        padding:0;
    }
    .middle{
        height:735px;
        width:100%;
    }
    .middle #car{
        padding-top:76px;
        height:580px;
        width:1300px;
        margin:0 auto;
        position: relative;
    }
    .middle #car .petpic{
        height:105px;
        width:110px;
        background:#000000;
        margin-left:148px;
    }
    .middle #car h3{
        height:22px;
        width:60px;
        text-align:center;
        position:absolute;
        left:274px;
        top:94px;
        font-size:14px;
        border-bottom:4px solid #f5a64a;
    }
    .middle #car .sss{
        height:432px;
        width:626px;
        background:#f7e2cb;
        margin-top:-88px;
        margin-left:370px;
        position: relative;
    }
        
    .middle #car .sss .matter{
        height:424px;
        width:594px;
        background:#fbf1e6;
        left:28px;
        top:4px;
        position:relative;
        
    }
    .matter>p{
        padding-top:34px;
        padding-left:60px;
        font-size:14px;
    }
    .middle #car .sss h1{
        width: 0;
        border: 12px solid transparent;
        border-right: 12px solid #444341;
        position:absolute;
        top:202px;
        left:0;
    }
    .matter_span{
        padding:0px 0 0 60px;
        font-size:8px;  
        height:10px;
        display: inline-block;
        margin-bottom:20px;
    }
    .shippingaddress{
        width:374px;
        height:124px;
        margin:0 0 10px 60px;
        
        
    } 
   .region{
       font-size:14px;
       /* display: inline-block; */
       width:298px;
       margin-bottom:14px; 
       overflow: hidden;
    }

  .region>span{
      float:left;
  }
  /* .block-col-2{
      float:right;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: black;
    background:#f5a64a;
    width:66px;
    height:18px;
    border-radius: 3px;
    font-size:12px;
  }
 .el-dropdown{
     padding-right:14px;
 } */
 .site{
    font-size:14px;
    overflow: hidden;
    width:374px;
    margin-bottom:14px; 
 } 
.site input{
     float:right;
     width:248px;
     height:18px;
     background:#fbf1e6;
     border-radius:5px;
     border:1px solid #cccccc;
     outline:none;
     padding-left:10px;
}

.payment{
    font-size:10px;
    width:374px;
    height:38px;
    margin-bottom:10px;
}
.paymentOptions{
    width:350px;
    height:38px;
    margin-left:60px;
}
.el-radio.is-bordered{
    border:none;
}
.el-radio__input.is-checked+.el-radio__label{
    margin-left:60px;
}

.commit{
    display: block;
    background:#f5a64a;
    width:258px;
    height:38px;
    margin-left:60px;
    border-radius: 20px;
}
.commit li{
    float:left;
    line-height: 38px;
    padding:0 20px;
}
</style>
