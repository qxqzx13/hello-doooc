<template>
             <!-- 晒宠 -->
        <div class="sunpet">
            <div class="particulars">
                <div class="lalal"></div>
                <div class="lalal"></div>
                <div class="lalal"></div>
                <div class="lalal"></div>
            </div>
            <div>
                <ul>
                    <li><input type="button" value="上一页"></li>
                    <li><span>1</span>/<span>3</span></li>
                    <li><input type="button" value="下一页"></li>
                </ul>
            </div>
        </div>
</template>

<script>
 export default {
   name : "sunpet"
 }
</script>

<style scoped>
    ul{
        padding-top: 740px;
        margin-left: 584px;
    }
    ul li:nth-of-type(2){
        padding: 0 8px;
    }
    li{
        float: left;
        list-style: none;
    }
    div{
        margin:0;
        padding:0;
    }
    .sunpet{
        height:762px;
        width:1300px;
        margin:0 auto;
    }
    .particulars{
        padding-left:36px;
        width:950px;
        height:612px;
        float: left;
    }
    .lalal{
        display: inline-table;
        width:244px;
        height:284px;
        background: #aaa;
        border-radius:5px;
        margin-top: 60px;
        margin-left:74px;
    }
</style>
