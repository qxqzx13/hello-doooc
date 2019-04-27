<template>
    <!--购物车有-->
    <div class="details-cart">
        <h1></h1>
        <div class="mattou">
            <div class="matter">
                <ul>
                    <li class="pic"></li>
                    <li class="name">进口鳕鱼鸡肉</li>
                    <li>RMB</li>
                    <li>500</li>
                    <li>
                        <select name="" id="">
                            <option value="1">xl</option>
                            <option value="2">xxl</option>
                            <option value="3">xxxl</option>
                            <option value="4">xxxxl</option>
                        </select>
                    </li>
                    <li>口味</li>
                    <li>
                        <select name="" id="">
                            <option value="1">金枪鱼</option>
                            <option value="2">鳗鱼</option>
                            <option value="3">xxxl</option>
                            <option value="4">xxxxl</option>
                        </select>
                    </li>
                    <li>删除</li>
                </ul>
            </div>
            <div class="matter">
                <ul>
                    <li class="pic"></li>
                    <li class="name">进口鳕鱼鸡肉</li>
                    <li>RMB</li>
                    <li>500</li>
                    <li>
                        <select name="" id="">
                            <option value="1">xl</option>
                            <option value="2">xxl</option>
                            <option value="3">xxxl</option>
                            <option value="4">xxxxl</option>
                        </select>
                    </li>
                    <li>口味</li>
                    <li>
                        <select name="" id="">
                            <option value="1">金枪鱼</option>
                            <option value="2">鳗鱼</option>
                            <option value="3">xxxl</option>
                            <option value="4">xxxxl</option>
                        </select>
                    </li>
                    <li>删除</li>
                </ul>
            </div>
        </div>
        <ul class="close">
            <li>
                <el-row>
                    <el-button>上一页</el-button>
                </el-row>
            </li>
            <li>合计:</li>
            <li>RMB</li>
            <li>5000</li>
            <li>
                <el-row>
                    <el-button round>结算</el-button>
                </el-row>
            </li>
            <li>
                <el-row>
                    <el-button>下一页</el-button>
                </el-row>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "cart"
    }
</script>

<style scoped>
    .details-cart{
        padding-top:20px;
        height:495px;
        width:730px;
        background:#fbf1e6;
        left:60px;
        top:30px;
        position:relative;
    }
    .details-cart h1{
        width: 0;
        border: 12px solid transparent;
        border-right: 12px solid #444341;
        position:absolute;
        top:234px;
        left:-48px;
    }
    .mattou{
        height:360px;
    }
    .matter{
        width:640px;
        height:179px;
        border-bottom:1px solid #353434;
        margin-left:42px;
    }
    .matter ul{
        padding-top:35px;
        height:110px;
        line-height:110px;
    }
    .matter ul li{
        float: left;
    }
    .matter ul .pic{
        height:110px;
        width:90px;
        background:#fff;

    }
    .matter .name{
        height:24px;
        width:90px;
        text-align: center;
        font-size:12px;
        background:#f5a64a;
        line-height:24px;
        border-radius:2px;
        margin-left:48px;
        margin-top:43px;
    }
    .matter li:nth-of-type(3){
        margin-right: 16px;
        margin-left:34px;
        font-size: 18px;
    }
    .matter li:nth-of-type(4){
        margin-right: 12px;
        font-size: 18px;
    }
    .matter li:nth-of-type(5){
        margin-right: 40px;
    }
    .matter li:nth-of-type(6){
        margin-right: 12px;
        font-size: 18px;
    }
    .matter li:nth-of-type(7){
        margin-right: 30px;
    }
    .matter li:nth-of-type(8){
        font-size: 18px;
    }
    .close{
        padding-top:36px;
        height:40px;
        line-height:40px;
    }
    .close li{
        float: left;
    }
    .close .el-button{
        background:#f5a64a;
    }
    .close li:nth-child(1){
        margin-left:42px;
    }
    .close li:nth-child(2){
        margin-left:100px;
    }
    .close li:nth-child(3){
        margin-left:20px;
    }
    .close li:nth-child(4){
        margin-left:10px;
    }
    .close li:nth-child(5){
        margin-left:50px;
    }
    .close li:nth-child(6){
        margin-left:110px;
    }
</style>