<template>
  <!-- 宠物市场 -->
  <div class="app">
    <div id="bigBackground"></div>
    <top></top>
    <sale></sale>
    <commonFooter></commonFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import commonFooter from "../components/common/commonFooter.vue";
import top from "../components/petmarket/top.vue";
import sale from "../components/petmarket/sale.vue";
export default {
  name: 'petmarket',
  components: {
    commonFooter, 
    top,
    sale
  }
}
</script>
<style scoped>
div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
  #bigBackground{
    height: 100%;
    width:100%;
    background-image:url(../assets/petmarket/img/bg.png);
    background-size: 100%;
    position:fixed;
    z-index: -5;
    top:0;
    left:0;
  }
</style>

