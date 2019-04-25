<template>
    <div class="commodity-box">
        <div class="commodity-img"></div>
        <div class="commodity-list">
            <ul>
                <li><img src="../../assets/petshop/img/003_01.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/003_02.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/003_03.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/003_04.jpg" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"petcommodity"
}
</script>

<style>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .commodity-box {
        margin:0 auto;
        width: 1300px;
        height: 640px
    }

    .commodity-box .commodity-img{
        width: 1300px;
        height: 249px;
        background: url("../../assets/petshop/img/003.png")no-repeat;
    }

    .commodity-box .commodity-list ul li {
        float: left;
        margin-left: 32px
    }

    .commodity-box .commodity-list ul :first-child {
        margin-left: 0
    }
</style>
