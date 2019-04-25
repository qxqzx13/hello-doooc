<template>
   <div class="asapet">
        <commonHeader></commonHeader>
        <background></background>
        <theWaterfallFlow></theWaterfallFlow>
        <botton></botton>
        <commonFooter></commonFooter>

   </div>
</template>

<script>
import commonHeader from "../components/common/commonHeader.vue";
import background from "../components/asapet/background.vue";
import theWaterfallFlow from "../components/asapet/theWaterfallFlow.vue";
import botton from "../components/asapet/botton.vue";
import commonFooter from "../components/common/commonFooter.vue";
export default {
    name:"asapet",
    components:{
        commonHeader,
        background,
        theWaterfallFlow,
        botton,
        commonFooter,
    }
}


</script>


