<template>
    <div id="daily">
        <commonHeader></commonHeader>
        <navigation></navigation>
        <search></search>
        <choice></choice>
        <commodity></commodity>  
        <commonFooter></commonFooter> 
    </div>
</template>

<script>
import commonHeader from "../components/common/commonHeader.vue";
import choice from "../components/daily/choice.vue";
import commodity from "../components/daily/commodity.vue"
import commonFooter from "../components/common/commonFooter.vue";
import navigation from "../components/shopcommonality/navigation.vue"
import search from "../components/shopcommonality/search.vue"
export default {
    name:"daily",
    components: {
        choice,
        commodity,
        commonHeader,
        commonFooter,
        navigation,
        search,
    }
}
</script>
