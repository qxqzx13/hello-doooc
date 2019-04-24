<template>
 <div>
     <ol class="notpay">
            <!-- li 1-->
            <li>
                <div></div>
            </li>
            <!-- li 2-->
            <li>
                <div></div>
            </li>
            <!-- li 3-->
            <li>RMB</li>
            <!-- li 4-->
            <li>500</li>
            <!-- li 5-->
            <li>
                <select name="" id="">
                    <option value="1">xl</option>
                    <option value="2">xxl</option>
                    <option value="3">xxxl</option>
                    <option value="4">xxxxl</option>
                </select>
            </li>
            <!-- li 6-->
            <li>口味</li>
            <!-- li 7-->
            <li>
                <select name="" id="">
                    <option value="1">金枪鱼</option>
                    <option value="2">鳗鱼</option>
                    <option value="3">xxxl</option>
                    <option value="4">xxxxl</option>
                </select>
            </li>
            <!-- li 8-->
            <li>删除</li>
        </ol>
 </div>
</template>

<script>
 export default {
   name : "notpay"
 }
</script>

<style scoped>
    .notpay{
        width: 642px;
        height:148px;
        border-bottom: 1px solid #353434;
        margin-left: 400px;
        margin-top: -145px;
    }
    .notpay li{
        float: left
    }
    .notpay li:nth-of-type(1) div{
        margin-right: 48px;
        width: 90px;
        height: 110px;
        background: #353434;
    }
    .notpay li:nth-of-type(2) div{
        margin-right: 38px;
        margin-top: 40px;
        width: 88px;
        height: 26px;
        background: #353434;
    }
    .notpay li:nth-of-type(3){
        margin-right: 16px;
        margin-top: 40px;
        font-size: 18px;
    }
    .notpay li:nth-of-type(4){
        margin-right: 12px;
        margin-top: 40px;
        font-size: 18px;
    }
    .notpay li:nth-of-type(5){
        margin-right: 40px;
        margin-top: 40px;
    }
    .notpay li:nth-of-type(6){
        margin-right: 12px;
        margin-top: 40px;
        font-size: 18px;
    }
    .notpay li:nth-of-type(7){
        margin-right: 30px;
        margin-top: 40px;
    }
    .notpay li:nth-of-type(8){
        font-size: 18px;
        margin-top: 40px;
    }
</style>
