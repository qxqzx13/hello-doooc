<template>
    <div class="agora-box">
        <div><img src="../../assets/petshop/img/004.png" alt=""></div>
        <div><img src="../../assets/petshop/img/004_01.png" alt=""></div>
        <div class="agora-list">
            <ul>
                <li><img src="../../assets/petshop/img/004_02.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/004_03.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/004_04.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/004_05.jpg" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"petagora"
}
</script>

<style>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .agora-box {
        margin:0 auto;
        width: 1300px;
        height: 826px
    }

    .agora-box .agora-list ul li {
        float: left;
        margin-left: 10px;
    }

    .agora-box .agora-list ul :first-child {
        margin-left: 0
    }
</style>
