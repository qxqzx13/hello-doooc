<template>
    <div class="matter">
                        <p>收货地址<span></span></p>
                        <span class="matter_span">ADDRESS</span>
                        <div class="shippingaddress">
                            <div  class="region">
                                
                               

                                <!-- <select  class="regionSelection"   @change = "getProvince($event)"> 
                                    <option >请选择</option>
                                    <option  v-for="(value,index) in province">
                                        {{value}}
                                    </option>
                                </select>

                                <select  class="regionSelection" @change = "getCity($event)">
                                    <option>请选择</option>
                                    <option value="0" v-for="(value,index) in city">请选择</option>
                                    
                                </select>
                                <select class="regionSelection" @change = "getDistrict($event)">
                                    <option value="">请选择</option>
                                    <option value="0" v-for="(value.index) in district"></option>
                                </select> -->
                            </div>    
                            <div class="site">
                                <span>详细地址</span>
                                <input onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))" v-model="detailedAddress">
                            </div>  
                            <div class="site">
                                <span>收货姓名</span>                            
                                <input onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))" v-model=" detailedName">
                            </div><div class="site">
                                <span>联系电话</span>
                                <!-- <input type="text" class=".minute" v-model="contactNumber"> -->
                                <input onkeyup="value=value.replace(/[^\d]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" v-model="contactNumber">
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
                            <li>{{shop.sumPrice}}</li>
                            <li>RMB</li>
                        </ul>
                    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";

export default {

name:"shippingAddress",
 data () {
      return {
        myVal:"",
        index:"",
        repay:"0",
        xueanze:"xuanze",
        detailedAddress:"",
        detailedName:"",
        contactNumber:"",
      }
    },
    computed:mapState(["shop"]),
    methods:{
        getUserInfo(){
            this.$axios.post("/account",{
                userName:localStorage.userName,
                userId:localStorage.userId
            }).then(data=>{
                this.detailedAddress=data.detailedAddress;
                this.detailedName = data.detailedName;
                this.contactNumber = data.contactNumber;
            })
        }
    },
    mounted(){
        this.getUserInfo();
    }
    
}
</script>

<style scopsd>
div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5,input{
        margin:0;
        padding:0;
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
       width:374px;
       margin-bottom:14px; 
       overflow: hidden;
    }

  .region>span{
      float:left;
      padding-right:60px;
  }
  
.regionSelection{
    width:70px;
    height:18px;
    font-size:12px;
    background:#f5a64a;
    border:none;
    border-radius: 5px;
    margin-right:14px; 
    outline:none
}
 .region select:first{
     margin-left:60px;
 }



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
    cursor:pointer;
}
.commit li{
    float:left;
    line-height: 38px;
    padding:0 20px;
}
</style>
