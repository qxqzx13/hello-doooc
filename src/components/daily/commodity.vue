<template>
    <div class="main_box">
        <div class="main">   
            <div class="main_goods" v-for="(item,index) in $store.state.daily.dailyInfo" :key="index">
                <dl class="goods">
                    <dt><img :src="item.pic"></dt>
                    <dd class="goods_one">
                        <span>满99减20</span>
                        <span>{{item.goodsName}}</span>
                    </dd>
                    <dd class="goods_two">{{item.price[1]}}</dd>
                    <dd class="goods_three">
                        <span>{{item.price[0]}}</span>
                        <span>已售{{item.stock}}</span>
                    </dd>
                </dl>
                <!-- <dl class="goods">
                    <dt><img src="../../assets/daily/img/gouliang.jpg" alt=""></dt>
                    <dd class="goods_one">
                        <span>满99减20</span>
                        <span>麦富迪双拼标准颗粒成犬粮10KG</span>
                    </dd>
                    <dd class="goods_two">￥290</dd>
                    <dd class="goods_three">
                        <span>￥290</span>
                        <span>已售8209</span>
                    </dd>
                </dl>
                <dl class="goods">
                    <dt><img src="../../assets/daily/img/gouliang.jpg" alt=""></dt>
                    <dd class="goods_one">
                        <span>满99减20</span>
                        <span>麦富迪双拼标准颗粒成犬粮10KG</span>
                    </dd>
                    <dd class="goods_two">￥290</dd>
                    <dd class="goods_three">
                        <span>￥290</span>
                        <span>已售8209</span>
                    </dd>
                </dl>
                <dl class="goods">
                    <dt><img src="../../assets/daily/img/gouliang.jpg" alt=""></dt>
                    <dd class="goods_one">
                        <span>满99减20</span>
                        <span>麦富迪双拼标准颗粒成犬粮10KG</span>
                    </dd>
                    <dd class="goods_two">￥290</dd>
                    <dd class="goods_three">
                        <span>￥290</span>
                        <span>已售8209</span>
                    </dd>
                </dl>
                <dl class="goods">
                    <dt><img src="../../assets/daily/img/gouliang.jpg" alt=""></dt>
                    <dd class="goods_one">
                        <span>满99减20</span>
                        <span>麦富迪双拼标准颗粒成犬粮10KG</span>
                    </dd>
                    <dd class="goods_two">￥290</dd>
                    <dd class="goods_three">
                        <span>￥290</span>
                        <span>已售8209</span>
                    </dd>
                </dl>
                <dl class="goods">
                    <dt><img src="../../assets/daily/img/gouliang.jpg" alt=""></dt>
                    <dd class="goods_one">
                        <span>满99减20</span>
                        <span>麦富迪双拼标准颗粒成犬粮10KG</span>
                    </dd>
                    <dd class="goods_two">￥290</dd>
                    <dd class="goods_three">
                        <span>￥290</span>
                        <span>已售8209</span>
                    </dd>
                </dl>
                <dl class="goods">
                    <dt><img src="../../assets/daily/img/gouliang.jpg" alt=""></dt>
                    <dd class="goods_one">
                        <span>满99减20</span>
                        <span>麦富迪双拼标准颗粒成犬粮10KG</span>
                    </dd>
                    <dd class="goods_two">￥290</dd>
                    <dd class="goods_three">
                        <span>￥290</span>
                        <span>已售8209</span>
                    </dd>
                </dl>
                <dl class="goods">
                    <dt><img src="../../assets/daily/img/gouliang.jpg" alt=""></dt>
                    <dd class="goods_one">
                        <span>满99减20</span>
                        <span>麦富迪双拼标准颗粒成犬粮10KG</span>
                    </dd>
                    <dd class="goods_two">￥290</dd>
                    <dd class="goods_three">
                        <span>￥290</span>
                        <span>已售8209</span>
                    </dd>
                </dl>
                <dl class="goods">
                    <dt><img src="../../assets/daily/img/gouliang.jpg" alt=""></dt>
                    <dd class="goods_one">
                        <span>满99减20</span>
                        <span>麦富迪双拼标准颗粒成犬粮10KG</span>
                    </dd>
                    <dd class="goods_two">￥290</dd>
                    <dd class="goods_three">
                        <span>￥290</span>
                        <span>已售8209</span>
                    </dd>
                </dl> -->
            </div>
            <div class="block">
                <el-pagination
                 layout="prev, pager, next" 
                 :total="50">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:"commodity",
    data(){
    return {
        picurl:require("../../assets/daily/img/gouliang.jpg")
    }
    },
    methods:{
        getImg(){
            var picSrc = document.querySelectorAll(".goods img");
            for(let i = 0,len = picSrc.length;i <len;i++){
                picSrc[i].src = this.$store.state.daily.dailyInfo.pic[i];

            }
        }
    }
}
</script>

<style scoped>
*{margin:0;padding:0;}

.main_box{
    width:1300px; 
    overflow: hidden;
    margin:0 auto;
     
}
.main{
    width:1340px;
    margin:0 auto;
    overflow: hidden;
}
.goods{
    width:227px;
    margin:0 41px 30px 0;
    float: left;
    background:#cccccc;
}
.goods img{
    width:162px;
    height:152px;
    padding: 40px 33px;
}
.goods dd{
    margin:0  30px 0 16px;      
}
.goods_one span:first-child{
    float: left;
    background:#ff3366;
    font-size:12px;
    color:#ffffff;
}
.goods_one span:last-child{
    float:right;
    font-size:12px;
    color:black;
    width:118px;
}
.goods_two{
    color:#ff3366;
    font-size:12px;
}
.goods_three{
    width:182px;
    height:12px;
    padding-bottom:22px;
}
.goods_three span:nth-child(1){
    text-decoration:line-through;
}
.goods_three span:first-child{
    float:left;
    font-size:10px;
    color:black;
}
.goods_three span:last-child{
    float:right;
    font-size:10px;
    color:black;
}
.block{
    float: right;
    margin-right: 41px;
}
</style>
