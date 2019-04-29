<template>
    <div class="head_box">
        <div class="head">
            <div class="petMall">
                <ul>
                    <li>宠物商城</li>
                    <li>></li>
                    <li>宠物日用</li>
                    <li>></li>
                    <li v-if="num===1">宠物服饰</li>
                    <li v-if="num===2">宠物餐具</li>
                    <li v-if="num===3">宠物清洁</li>
                    <li v-if="num===4">宠物玩具</li>
                </ul>
            </div>
            <div class="classify">
                <ul>
                    <li>分类：</li>
                    <li @click="fn({productType:'5',num:1})">服饰</li>
                    <li @click="fn({productType:'6',num:2})">餐具</li>
                    <li @click="fn({productType:'7',num:3})">清洁</li>
                    <li @click="fn({productType:'8',num:4})">玩具</li>
                </ul>
            </div>
            <div class="kind">
                <ul>
                    <li>品种:</li>
                    <li @click="fn({typeId:'3'})">喵喵</li>
                    <li @click="fn({typeId:'2'})">汪汪</li>
                </ul>

            </div>
            <div class="price">
                <ul>
                    <li>价格：</li>
                    <li @click="fn({priceRange:'1'})">全部</li>
                    <li @click="fn({priceRange:'1'})">￥0-50</li>
                    <li @click="fn({priceRange:'2'})">￥51-100</li>
                    <li @click="fn({priceRange:'3'})">￥101-200</li>
                    <li @click="fn({priceRange:'4'})">￥201-500</li>
                </ul>
            </div>
            <div class="sort">
                <ul class="sort_one">
                    <li>排序:</li>
                    <li @click="fn({order:'2'})">默认↓</li>
                    <li @click="fn({order:'3'})">价格↓</li>
                    <li @click="fn({order:'4'})">销量↓</li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
export default {
    name:"choice",
    methods: Object.assign(mapActions(["getDailyInfo"]),{
        fn(obj){
            if(obj.productType){
                this.$route.query.productType = obj.productType
            }
            if(obj.typeId){
                this.$route.query.typeId =obj.typeId
            }
            if(obj.priceRange){
                this.$route.query.priceRange =obj.priceRange
            }
            if(obj.order){
                this.$route.query.order =obj.order
            }
            this.num = obj.num;
            this.$router.push({query:{
                    typeId: this.$route.query.typeId,
                    productType: this.$route.query.productType,
                    priceRange: this.$route.query.priceRange,
                    order: this.$route.query.order,
            }})
            console.log(33,this.$route.query);
            this.getDailyInfo(this.$route.query)
        }
    }),
    mounted () {
        this.getDailyInfo()
    },
    data () {
            return {
                num:1,
            }
        }
}
</script>

<style scoped>
div,ul,li{
     margin: 0;
     padding: 0;
 }
.head_box{
    width:100%;
    height:100%;
}
.head{
    width:1300px;
        margin:0 auto;
}

.petMall{
    height:56px;
    width:1300px;
}
.petMall ul{
    height:56px;
    background:#ffffff;

}
.petMall ul li{
    float: left;
    height:30px;
    font-size:12px;
    padding:20px 0 0 16px;
}

.classify{
    height: 40px;
    overflow: hidden;
    border-bottom:1px solid #fff;
   
}
.classify ul{
    height:40px;
    background:#ff9900;
}
.classify ul li{
    float:left;
    padding:14px 0 0 16px;
    font-size:12px;
}
.classify ul li:not(:first-child):hover{
    color:#ffffff;
}

.kind{

    height: 40px;
    overflow: hidden;
    border-bottom:1px solid #fff;
}
.kind ul{
    height:40px;
    background:#ffcc99;
}
.kind ul li{
    float:left;
    padding:14px 0 0 16px;
    font-size:12px;
}
.kind ul li:not(:first-child):hover{
    color:#ffffff;
}

.price{
    height:40px;
    overflow: hidden;
    margin-bottom: 10px;

}
.price ul{
    height:40px;
    background:#ff9900;
}
.price ul li{
    float:left;
    padding:14px 0 0 16px;
    font-size:12px;
}
.price ul li:not(:first-child):hover{
    color:#ffffff;
}
.sort{
    height:57px;
    overflow: hidden;
    background: #ffcc99;
    margin-bottom: 30px;
}
.sort_one{
    float: left;
}
.sort_one li{
    float: left;
    padding:20px 0 0 16px;
    font-size:14px;
}
.sort_one li:not(:first-child):hover{
    color:#ffffff;
}

</style>
