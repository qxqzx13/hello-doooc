<template>
    <!-- 猜你喜欢 -->
    <div class="you">
        <h3>猜你喜欢</h3>
        <div class="mi"> 
            <el-row :gutter="10">
                <el-col :span="6"><div class="grid-content bg-purple">
                    <div class="img">
                        <img src="" alt="">
                    </div>
                        <h4>猫抓板瓦楞纸猫沙发逗猫玩具</h4>
                        <p>价格</p>
                    </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <h4>猫抓板瓦楞纸猫沙发逗猫玩具</h4>
                        <p>价格</p>
                    </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <h4>猫抓板瓦楞纸猫沙发逗猫玩具</h4>
                        <p>价格</p>
                    </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <h4>猫抓板瓦楞纸猫沙发逗猫玩具</h4>
                        <p>价格</p>
                    </div></el-col>
            </el-row>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"like",
}
</script>
<style  scoped>
    .you{
        height:440px;
        width:1300px;
        margin:0 auto;
        text-align:center;
    }
    .mi{
        margin-top:64px;
        margin-left:120px;
        width:1180px;
    }
    .you h3{
        font-size:34px;
        color:#f5a64a;
    }
    .el-row {
    margin-bottom: 20px;
    margin-left:100px; 
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        height:274px;
        width:164px;
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .img img{
        height:218px;
        width:164px;
        border-radius:5px;
    }
    .bg-purple h4{
        margin-top:10px;
        font-size:10px;
    }
    .bg-purple p{
        margin-top:10px;
        font-size:16px;
    }
    .img{
        height:210px;
        width:164px;
        border-radius:5px;
        background:tan;
    }
</style>

