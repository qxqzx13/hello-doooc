<template>
    <div id="daily">
        <commonHeader></commonHeader>
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
export default {
    name:"daily",
    components: {
        choice,
        commodity,
        commonHeader,
        commonFooter,
    }
}
</script>
