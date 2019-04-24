<template>
    <!-- 订单中心中的信息组件 -->
    <div class="merchandise">
        <ul>
            <li class="picture"><img src="" alt=""></li>
            <li class="product-name"></li>
            <div class="details">
                <p class="unit-price">单价:222</p>   
                <p class="quantity">数量:</p>
                <p class="flavor">口味:</p>
            </div>
            <el-button type="primary" round>{{}}</el-button>
        </ul>
    </div>
</template>

<script>
export default {
    name:"commodity",
    props:{
        msg:String
    }
}
</script>
<style scoped>
    .merchandise{
        
        width:1040px;
    }
    ul{    
        
        height:179px;
        width:642px;
        border-bottom:1px solid #353434;
        position: relative;
    }
    ul li{
        float: left;
        
    }
    .picture{
        height:110px;
        width:90px;
        background:#353434; 
        margin-left:88px;
        margin-top:36px;
    }
    .picture img{
        height:110px;
        width:90px;
        
    }
    .product-name{
        height:24px;
        width:90px;
        background: #353434;
        border-radius:2px;
        margin-left:48px;
        margin-top:80px;
    }
    input{
        margin-top:82px;
        height:16px;
        width:16px;
        margin-left:10px;
        border: 1px solid transparent;
    }
    button{
        position:absolute;
        right:20px;
        margin-top:72px;
        margin-left:12px;
    }
    .unit-price{
        margin-top:30px;
        width:100%;
        font-size:14px;
    }
    .quantity{
        width:100%;
        font-size:14px;
        margin-top:30px;
    }
    .flavor{
        margin-top:30px;
        width:100%;
        font-size:14px;
    }
    .details{
        height:178px;
        width:100px;
        float:right;
        margin-right:160px;
        text-align: center;
    }
</style>
