<template>
    <div class="carousel_box">
        <div class="swiper-container">
            <div class="swiper-wrapper" >
            <div class="swiper-slide"><img src="../../assets/petshop/img/banner.png" ></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>			
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev swiper-button-white"></div>
            <div class="swiper-button-next swiper-button-white"></div>    
        </div>
    </div>
</template>

<script>
export default {
    name:"carousel"
}
</script>

<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .swiper-slide{
        position: relative;
        top: -206px;
        left: 0;
        z-index: -1;
    }
    .swiper-slide img{
        width: 100%;
    }
</style>
