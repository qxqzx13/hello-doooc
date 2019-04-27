<template>
    <!--购物车空-->
    <div class="details-gempty">
        <img src="../../assets/petshop/img/petcar.png" alt="">
        <p>这里空空如也哦～消灭"0"购物,赶紧去选购商品把～</p>
        <el-row>
            <el-button type="primary">立即去选购</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "gempty"
    }
</script>

<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }


    .details-gempty{
        height:515px;
        width:730px;
        background:#fff;
        left:60px;
        top:30px;
        position:relative;

    }
    .details-gempty p{
        width:220px;
        height:48px;
        position: absolute;
        top:256px;
        right:106px;
    }
    .details-gempty img{
        position: absolute;
        top:166px;
        left:160px;
    }
    .el-button{
        position: absolute;
        top:324px;
        right:214px;
        background:#f5a64a;
        font-size:12px;
        background-color:#f5a64a;
    }
</style>