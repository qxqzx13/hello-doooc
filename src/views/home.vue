<template>
    <div id="home">
        <home-header></home-header>
        <snacks></snacks>
        <food-selection></food-selection>
        <expert-pet></expert-pet>
        <raising-pets></raising-pets>
        <commonFooter></commonFooter>
    </div>
</template>

<script>
    import homeHeader from "../components/home/homeHeader";
    import commonFooter from "../components/common/commonFooter.vue";
    import FoodSelection from "../components/home/foodSelection";
    import ExpertPet from "../components/home/expertPet";
    import RaisingPets from "../components/home/raisingPets";
    import Snacks from "../components/home/snacks";

    export default {
        name: "home",
        components:{
            Snacks,
            RaisingPets,
            ExpertPet,
            FoodSelection,
            homeHeader,
            commonFooter
        }
    }
</script>

<style scoped>

</style>