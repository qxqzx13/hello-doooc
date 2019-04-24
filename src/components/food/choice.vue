<template>
    <div class="head_box">
        <div class="head">
            
            <div class="petMall">
                <ul>
                    <li>宠物商城</li>
                    <li>></li>
                    <li>宠物食品</li>
                    <li>></li>
                    <li>宠物主粮</li>
                </ul>
            </div>
            <div class="classify">
                <ul>
                    <li>分类：</li>
                    <li>主粮</li>
                    <li>零食</li>
                    <li>保健</li>
                    
                </ul>
            </div>
            <div class="kind">
                <ul>
                    <li>品种:</li>
                    <li>喵喵</li>
                    <li>汪汪</li>
                </ul>

            </div>
            <div class="price">
                <ul>
                    <li>价格：</li>
                    <li>全部</li>
                    <li>￥0-50</li>
                    <li>￥51-100</li>
                    <li>￥101-200</li>
                    <li>￥201-500</li>
                </ul>
            </div>
            <div class="sort">
                <ul class="sort_one">
                    <li>排序:</li>
                    <li>默认↓</li>
                    <li>价格↓</li>
                    <li>销量↓</li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
name:"choice"
}
</script>

<style scoped>
div,ul,li{
    margin: 0;
    padding: 0;
}
.head_box{
    width:100%;
    height:100%;
}
.head{
    width:1300px;
        margin:0 auto;
}

.petMall{
    height:56px;
    width:1300px;
    overflow: hidden;
}
.petMall ul{
    height:56px;
    background:#ffffff;

}
.petMall ul li{
    float: left;
    height:56px;
    font-size:12px;
    padding:20px 0 0 16px;
}

.classify{
    height: 40px;
    overflow: hidden;
    border-bottom:1px solid #fff;
   
}
.classify ul{
    height:40px;
    background:#ff9900;
}
.classify ul li{
    float:left;
    padding:14px 0 0 16px;
    font-size:12px;
}
.classify ul li:not(:first-child):hover{
    color:#ffffff;
}

.kind{

    height: 40px;
    overflow: hidden;
    border-bottom:1px solid #fff;
}
.kind ul{
    height:40px;
    background:#ffcc99;
}
.kind ul li{
    float:left;
    padding:14px 0 0 16px;
    font-size:12px;
}
.kind ul li:not(:first-child):hover{
    color:#ffffff;
}

.price{
    height:40px;
    overflow: hidden;
    margin-bottom: 10px;

}
.price ul{
    height:40px;
    background:#ff9900;
}
.price ul li{
    float:left;
    padding:14px 0 0 16px;
    font-size:12px;
}
.price ul li:not(:first-child):hover{
    color:#ffffff;
}
.sort{
    height:57px;
    overflow: hidden;
    background: #ffcc99;
    margin-bottom: 30px;
}
.sort_one{
    float: left;
}
.sort_one li{
    float: left;
    padding:20px 0 0 16px;
    font-size:14px;
}
.sort_one li:not(:first-child):hover{
    color:#ffffff;
}

</style>
