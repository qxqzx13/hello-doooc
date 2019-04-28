<template>
    <!--购物车页判断有没有东西-->
    <div class="sss">
        <cart></cart>
        <gempty></gempty>
    </div>
</template>

<script>
    import cart from "./cart.vue";
    import gempty from "./gempty.vue";
    export default {
        name: "trolley",
        components:{
            cart,
            gempty
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>