<template>
  <div class="app">
    <commonHeader></commonHeader>
    <baskPet></baskPet>
    <like></like>
    <commonFooter></commonFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import commonHeader from "../components/common/commonHeader.vue";
import baskPet from "../components/personal/baskPet.vue";
import like from "../components/personal/like.vue"
import commonFooter from "../components/common/commonFooter.vue";

import "../assets/common/commonHeader.css"
export default {
  name: 'personal',
  components: {
    commonHeader,
    commonFooter,
    baskPet,
    like,
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
    }
    .lalal{
        display: inline-table;
        width:244px;
        height:284px;
        background: #aaa;
        border-radius:5px;
        margin-top: 60px;
        margin-left:74px;
    }
</style>