<template>
    <!-- 零食小屋 -->
    <div class="snackhouse">
        <div class="title">
            <img src="../../assets/home/img/snacks.jpg" />
        </div>
        <ul>
            <li>
                <a href="javascript"><img src="../../assets/home/img/one.jpg" /></a>
            </li>
            <li>
                <a href="javascript"><img src="../../assets/home/img/two.jpg" /></a>
            </li>
            <li>
                <a href="javascript"><img src="../../assets/home/img/three.jpg" /></a>
            </li>
            <li>
                <a href="javascript"><img src="../../assets/home/img/fure.jpg" /></a>
            </li>
            <li>
                <a href="javascript"><img src="../../assets/home/img/five.jpg" /></a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"snacks",
}
</script>
<style scoped>
    div,ul,li{
        margin: 0;
        padding: 0;
    }
    .snackhouse {
        width: 1300px;
        margin: 0 auto;
        overflow: hidden;
    }
    .snackhouse .title {
        width: 1300px;
        text-align: center;
    }  
    .snackhouse .title img{
        margin-top: 120px;
        margin-bottom: 80px;
    } 
    .snackhouse ul{
        width: 1032px;
        padding: 0 134px;
    }
    .snackhouse ul li{
        float: left;
        width: 162px;
        height: 162px;
        text-align: center;
        line-height: 162px;
        border: 2px solid #f5a64a;
        border-radius: 100%;
        margin: 0 20px;
    }
</style>

