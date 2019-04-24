<template>
 <div>
    <ul>
        <router-link to="/personal/userinfo"><li>基本信息</li></router-link>
        <router-link to="/personal/personalCenter"><li>订单中心</li></router-link>
        <router-link to="/personal/sunpet"><li>我的晒宠</li></router-link>
    </ul>
    <div>
      <router-view></router-view>
    </div>
    
 </div>
</template>

<script>
 export default {
   name : "bask-pet-two"
 }
</script>

<style scoped>
    ul,li{
        margin:0;
        padding:0;
    }
    li{
        
        list-style: none;
        color: #595959;
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
</style>
