<template>
    <div class="topone">
        <div class="dd">
            <div class="ss">
                <navigation></navigation>
                <search></search>
                <classify></classify>
                <sizer1></sizer1>
            </div>           
        </div>
    </div>
</template>
<script>
import search from "../shopcommonality/search.vue"
import navigation from "../shopcommonality/navigation.vue"
import sizer1 from "./sizer1.vue"
import classify from "./classify.vue"
export default {
    name:"top",
    components: {
        search,
        sizer1,
        navigation,
        classify,
    }
}
</script>
<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .topone{
        background: url(../../assets/petmarket/img/bg.png);
        background-size: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height:100%;
        position: relative;
    }
    .ss{
        position:absolute;
        z-index:10;
        left:0;
        width:100%;
    }
    .dd{
        position: relative;
        height:830px;
    }
</style>
