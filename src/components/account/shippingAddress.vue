<template>
    <div class="matter">
                        <p>收货地址</p>
                        <span class="matter_span">ADDRESS</span>
                        <div class="shippingaddress">
                            <div  class="region">
                                <span>所在地区</span>
                                
                                <select name="public-choice" class="regionSelection" v-model="provs" @change="getProvs" placeholder="请选择"> 
                                    <option :value="item.id" v-for="item in provsList" >{{item.name}}</option> 
                                </select>
                                <select name="public-choice" class="regionSelection"
                                v-model="city" @change="getCity" placeholder="请选择"> 
                                    <option :value="item.id" v-for="item in cityList" >{{item.name}}</option> 
                                </select>
                                <select name="public-choice" class="regionSelection" v-model="district" @change="getDistrict" placeholder="请选择"> 
                                    <option :value="item.id" v-for="item in districtList" >{{item.name}}</option> 
                                </select>
                            </div>    
                            <div class="site">
                                <span>详细地址</span>
                                <!-- <input type="text" class=".minute" v-model="detailedAddress"> -->
                                <input type="text" class=".minute" v-model="detailedAddress">
                            </div>  
                            <div class="site">
                                <span>收获姓名</span>
                                <input type="text" class=".minute" v-model="detailedName">
                            </div><div class="site">
                                <span>联系电话</span>
                                <input type="text" class=".minute" v-model="contactNumber">
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
                            <li>{{repay}}</li>
                            <li>RMB</li>
                        </ul>
                    </div>
</template>

<script>
export default {
name:"shippingAddress",
 data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1',
        provsList:[
                    {
                        id:"0",
                        name:"请选择"
                    },
                    {
                        id: '1',
                        name: '山西省'
                    },
                    {
                        id: '2',
                        name: '陕西省'
                    },
                    {
                        id: '3',
                        name: '河南省'
                    }
                ],
        cityList:[
            {
                        id:"0",
                        name:"请选择"
                    },
                    {
                        id: '1',
                        name: '太原市'
                    },
                    {
                        id: '2',
                        name: "临汾市"
                    },
                    {
                        id: '3',
                        name: '忻州市'
                    }
        ],
        districtList:[
            {
                        id:"0",
                        name:"请选择"
                    },
                    {
                        id: '1',
                        name: '小店区'
                    },
                    {
                        id: '2',
                        name: "迎泽区"
                    },
                    {
                        id: '3',
                        name: '杏花岭区'
                    }
        ],
                provs: '',
                city:"",
                district:"",
                detailedAddress:"",
                detailedName:"",
                contactNumber:"",
      }
     
    },
    created(){
　　　　//如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
        this.provs = this.provsList[0].id;
        this.city = this.cityList[0].id;
        this.district = this.districtList[0].id; 
    },
    methods:{
　　　　　　 getProvs:function(){
                
                console.log(this.provs)
            },
            getCity:function(){
                console.log(this.city)
            },
            getDistrict:function(){
                console.log(this.district)
            },
            getDistrict:function(){
                axios.get("1111151",{
                    params:{
                        detailedAddress:this.detailedAddress,
                        detailedName:this.detailedName,
                        contactNumber:this.contactNumber,
                    }
                }
                ).then(({data})=>{
                    console.log(data)
                })

            
            },
             

            

    },
    mounted(){

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
    width:66px;
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
}
.commit li{
    float:left;
    line-height: 38px;
    padding:0 20px;
}
</style>
