<template>
    <!-- 订单中心 -->
    <div class="base">
        <ul class="not">
            <li @click="index=1">待付款</li>
            <li @click="index=2">待发货</li>
            <li @click="index=3">待收货</li>
        </ul>
        
        <notpay v-if="index===1"></notpay>
        <notsend v-if="index===2"></notsend>
        <notreceipt v-if="index===3"></notreceipt>

    </div>
</template>
<script>
import  notpay from "./notpay.vue";
import  notsend from "./notsend.vue";
import  notreceipt from "./notreceipt.vue";
export default {
    name: 'personalCenter',
    components: {
        notpay,
        notsend,
        notreceipt
    },
    data(){
        return {
            index:1
        }
    }
}
</script>
<style scoped>
    


    div,.not,li{
            margin:0;
            padding:0;
        }
    .base{
        height:578px;
        width:958px;
    }
    
    .not{
        margin-left: 120px;
        padding-top: 238px;
    width:200px;
    }
    .not li{
        font-size:20px;
        text-align: right;
        width:200px;
        line-height:54px;
        color: #595959;
    }


</style>


