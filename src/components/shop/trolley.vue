<template>
    <!--购物车页判断有没有东西-->
    <div class="sss">
        <gempty v-if="!shop.shopCar"></gempty><!--空车-->
        <cart v-else></cart>
    </div>
</template>

<script>
    import cart from "./cart.vue";
    import gempty from "./gempty.vue";
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
    export default {
        name: "trolley",
        components:{
            cart,
            gempty
        },
        computed:mapState(["shop"]),
        methods:mapActions(["getShoppingCar"]),
        mounted(){
            this.getShoppingCar({
                }
            );
        }
    }
</script>

<style scoped>

</style>