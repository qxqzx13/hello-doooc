<template>
<div>
    <navigation></navigation>
    <search></search>
    <carousel></carousel> 
</div>  
</template>

<script>
import navigation from "./navigation"
import search from "./search"
import carousel from "../shop/carousel"

export default {
    name:"shopHeader",
    components: {
        navigation,
        search,
        carousel,
    }

}
</script>

<style>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
</style>
