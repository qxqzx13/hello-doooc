<template>
    <div class="news">
        <h3>怎么样让狗狗安度晚年？论老年犬的护理要点</h3>
        <div v-for="paragraph in designation" class="designation">
            <p>{{designation.litie}}</p>
            <p>{{designation.litie}}</p>
            <p>{{designation.litie}}</p>
            <p>{{designation.litie}}</p>
            <p>{{designation.litie}}</p>
            <p>{{designation.litie}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "news",
        data(){
            return {
                designation: {
                    litie: "狗狗步入老年以后,身体各方面的机能都在衰退狗狗步入老年以后,身体各方面的机能都在衰退狗狗步入老年以后,身体各方面的机能都在衰退狗狗步入老年以后,身体各方面的机能都在衰退狗狗步入老年以后,身体各方面的机能都在衰退",
                }
            }
        }
    }
</script>

<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .news{
        height:1378px;
        width:1300px;
        margin:0 auto;
    }
    .news h3{
        padding-top:164px;
        font-size:30px;
        font-weight:400;
        padding-bottom:90px;
    }
    .news .designation{
        width:1094px;
        margin:0 auto;
        font-size:24px;
        text-indent:48px;
        margin-bottom:298px;
    }
    .news .designation p{
        padding-bottom:66px;
    }
</style>