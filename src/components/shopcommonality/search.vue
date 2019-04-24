<template>
    <div class="dpp">
        <div class="header">
            <div class="header-box">
                <div class="seek">
                    <input class="wen" type="text" placeholder="搜索商品">
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <div class="shopping-car">
                        <input type="button">
                        <span @click="$router.push('/shoppingcar')">购物车(0)</span>
                    </div>
                </div>
                <div class="header-bottom">
                    <div class="pet-foot" @click="$router.push('/food')">
                        <p>宠物食品</p>
                        <h3></h3>
                    </div>
                    <div class="pet-daily" @click="$router.push('/daily')">
                        <p>宠物日常</p>
                        <h3></h3>
                    </div>
                    <div class="pet-market" @click="$router.push('/petmarket')">
                        <p>宠物市场</p>
                        <h3></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    name:"navigation"
}
</script>
<style>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .dpp{
        z-index:999;
    }
    .header {
        height: 110px;
        width: 100%
    }

    .header .header-box {
        position: relative;
        width: 1300px;
        margin: 0 auto;
        height: 110px;
        background: #c3c3c1;
        background-color: hsla(60, 2%, 76%, .2)
    }

    .header .header-box .seek {
        height: 38px;
        margin-left: 436px;
        font-size: 0
    }
    .header .header-box .seek .el-button{
        margin-top:31px;
        height: 42px;
        background: #f5a64a;
    }
    .header .header-box .seek .wen {
        margin-top: 32px;
        width: 316px;
        height: 38px;
        float: left;
        border: none;
        font-size: 12px;
        padding-left: 4px
    }

    .header .header-box .seek .sou {
        margin-top: 32px;
        width: 50px;
        height: 38px;
        float: left;
        border: none;
        background: #d4d2d2;
    }

    .header .header-box .seek .shopping-car {
        margin-right: 36px;
        margin-top: 36px;
        float: right;
        width: 114px;
        height: 38px
    }

    .header .header-box .seek .shopping-car input {
        float: left;
        height: 38px;
        width: 44px;
        border: none;
        border-radius: 4px 0 0 4px;
        background: #d4d2d2
    }

    .header .header-box .seek .shopping-car span{
        cursor: pointer;
        background: #f5a64a;
        border-radius: 0 4px 4px 0;
        border-left: 1px solid #fff;
        width: 69px;
        text-align: center;
        height: 38px;
        line-height: 38px;
        display: block;
        float: left;
        font-size: 12px
    }

    .header .header-box .header-bottom {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 36px
    }

    .header .header-box .header-bottom div {
        height: 36px;
        width: 160px;
        display: inline-table;
        text-align: center;
        line-height: 36px;
        margin-right: 90px;
        position: relative;
        cursor: pointer
    }

    .header .header-box .header-bottom div h3 {
        opacity: 1;
        margin-left: 10px;
        width: 0;
        border: 8px solid transparent;
        border-top: 8px solid #9c9c96;
        display: none;
        position: absolute;
        top: 15px;
        right: 24px
    }

    .header .header-box .header-bottom .pet-market h3 {
        border: none
    }

    .header .header-box .header-bottom div:hover {
        background: #fff;
        color: #272727
    }

    .header .header-box .header-bottom div:hover h3 {
        display: block
    }
</style>

