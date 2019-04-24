<template>
    <!-- 基本信息 -->
    <div class="message">
        <ul>
            <li>基本信息</li>
            <li>订单中心</li>
            <li>我的晒宠</li>
        </ul>
        <div class="particulars">
            <userinfo></userinfo>
        </div>
    </div>
</template>
<script>
import userinfo from "./userinfo.vue";
export default {
  name: 'personalCenter',
    components: {
        userinfo,
    }
}
</script>
<style scoped>
    div,ul,ol,li,a{
        margin:0;
        padding:0;
    }
    li{
        
        list-style: none;
    }
    .message{
        height:762px;
        width:1300px;
        margin:0 auto;
    }
    ul{
        margin-left:84px;
        float: left;
        margin-top:170px;
        width:176px;

    }
    ul li{
        
        line-height:64px;
        width:96px;
        font-size:24px;
        position: relative;
    }
    .particulars{
        padding-left:82px;
        width:958px;
        height:612px;
        float: left;
        padding-top:30px;
    }
    
</style>