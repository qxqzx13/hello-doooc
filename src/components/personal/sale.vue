<template>
    <!-- 订单中心的底部组件 -->
    <div class="sale">
        <div class="information">
            <commodity></commodity>          
        </div>
        <el-button type="primary" plain>上一页</el-button>
        <span>1/3</span>
        <el-button type="primary" plain>下一页</el-button>
        <el-button type="primary" plain class="accounts">去结算</el-button>
    </div> 
</template>
<script>
import commodity from "./commodity.vue";
export default {
    name:"sale",
    components:{
        commodity,
    }
}
</script>
<style>
    .sale{
        width:642px;
        text-align: center;
        margin-left:82px;
        position: relative;
    }
    .accounts{
        position:absolute;
        bottom:0;
        right:20px;
    }
    .information{
        height:540px;
        width:642px;
        margin-bottom:20px;
    }
    span{
        margin:0 6px;
    }
</style>


