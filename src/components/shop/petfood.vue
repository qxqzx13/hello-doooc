<template>
    <div class="food-box">
        <div class="foodimg"></div>
        <div class="food-list">
            <ul>
                <li><img src="../../assets/petshop/img/002_01.jpg" alt="" ></li>
                <li><img src="../../assets/petshop/img/002_02.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/002_03.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/002_04.jpg" alt=""></li>
                <li><img src="../../assets/petshop/img/002_05.jpg" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"petfood",
    methods : {
        /*xiangqing(){
            this.$ajax.get("地址",)
        }*/
    }
}
</script>

<style>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .food-box {
        margin:0 auto;
        width: 1300px;
        height: 470px
    }
    .food-box .foodimg{
        height:196px;
        width:1300px;
        background:url("../../assets/petshop/img/001.png") no-repeat;
    }
    .food-box .food-list ul li {
        float: left;
        margin-left: 33px
    }

    .food-box .food-list ul :first-child {
        margin-left: 0
    }
</style>
