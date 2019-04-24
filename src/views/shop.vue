<template>
    <div class="shop">
        <shopHeader></shopHeader>
        <petfood></petfood>
        <petcommodity></petcommodity>
        <petagora></petagora>
        <commonFooter></commonFooter>
    </div>
</template>

<script>
import commonFooter from "../components/common/commonFooter.vue";
import shopHeader from "../components/shopcommonality/shopHeader.vue";
import petfood from "../components/shop/petfood"
import petcommodity from "../components/shop/petcommodity"
import petagora from "../components/shop/petagora"
export default {
    name:"shoplkajsd",
    components: {  
        commonFooter,
        shopHeader,
        petfood,
        petcommodity,
        petagora,
    }
}
</script>

<style scoped>
</style>
