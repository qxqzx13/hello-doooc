<template>
    <div id="food">
        <commonHeader></commonHeader>
        <search></search>
        <choice></choice>
        <commodity></commodity>  
        <commonFooter></commonFooter> 
    </div>
</template>

<script>
import commonHeader from "../components/common/commonHeader.vue";
import choice from "../components/food/choice.vue";
import commodity from "../components/food/commodity.vue"
import commonFooter from "../components/common/commonFooter.vue";
import search from "../components/shopcommonality/search.vue";
export default {
    name:"food",
    components: {
        choice,
        commodity,
        commonHeader,
        commonFooter,
        search
    }
}
</script>

