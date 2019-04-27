<template>
    <div class="sss">
        <cart></cart>
        <gempty></gempty>
    </div>
</template>

<script>
    import cart from "./cart.vue";
    import gempty from "./gempty.vue";
    export default {
        name: "sss",
        components:{
            cart,
            gempty
        }
    }
</script>

<style scoped>

</style>