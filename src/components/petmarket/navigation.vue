<template>
    <div class="dpp">
        <div class="top">
        <div class="top-box">
            <p>首页</p>
            <p>商城</p>
            <p>知宠</p>
            <h3>订单中心</h3>
            <div class="headerlogo"></div>
            <div class="arrows"></div>
            <div class="head-portrait"></div>
        </div> 
        </div>
        <div class="header">
            <div class="header-box">
                <div class="seek">
                    <input class="wen" type="text" placeholder="搜索商品">
                    <input class="sou" type="button" value="">
                    <div class="shopping-car">
                        <input type="button">
                        <a>购物车(0)</a>
                    </div>
                </div>
                <div class="header-bottom">
                    <div class="pet-foot">
                        <p>宠物食品</p>
                        <h3></h3>
                    </div>
                    <div class="pet-daily">
                        <p>宠物日常</p>
                        <h3></h3>
                    </div>
                    <div class="pet-market">
                        <p>宠物市场</p>
                        <h3></h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="pet-mall_pet-market">
            <div>
                <span class="small-mall">宠物商城</span>
                <span class="lt">></span>
                <span>宠物市场</span>
            </div>
        </div>
        <div class="classify">
            <div class="small-classify">
                <ul>
                    <li>分类:</li>
                    <li class="all">全部</li>
                    <li class="cat">喵喵</li>
                    <li class="dog">汪汪</li>
                </ul>
            </div>
        </div>

    </div>
    
</template>
<script>
export default {
    name:"navigation",
}
</script>
<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .dpp{
        z-index:999;
    }

    .top {
        
        height: 94px;
        background: #eee;
        background-color: rgba(172, 172,172,.5)
    }

    .top .top-box {
        position: relative;
        width: 1300px;
        height: 94px;
        margin: 0 auto;
        line-height: 94px
    }

    .top .top-box p {
        display: inline-table;
        font-size: 30px;
        padding-right: 80px;
        cursor: pointer
    }

    .top .top-box p:hover {
        color: #f5a64a
    }

    .top .top-box h3 {
        font-size: 24px;
        float: right;
        margin-right: 156px
    }

    .top .top-box .head-portrait {
        line-height: 1;
        position: absolute;
        top: 0;
        right: 60px;
        height: 49px;
        width: 49px;
        background-position: 10px 20px
    }

    .top .top-box .arrows {
        line-height: 1;
        position: absolute;
        top: 0;
        right: 0;
        height: 12px;
        width: 24px
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
        background: #d4d2d2
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

    .header .header-box .seek .shopping-car a {
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
    .pet-mall_pet-market {
        width: 100%;
        height: 56px;
        line-height: 56px
    }

    .pet-mall_pet-market div {
        width: 1300px;
        margin: 0 auto;
        font-size: 14px
    }

    .pet-mall_pet-market div .lt {
        margin: 0 10px
    }

    .pet-mall_pet-market div .small-mall {
        margin-left: 18px
    }
    .classify {
        width: 100%;
        height: 40px
    }
    .classify .small-classify {
        width: 1300px;
        background: #f5a64a;
        margin: 0 auto;
        height: 40px;
        line-height: 40px;
        background-color: rgba(245, 166, 74, .7)
    }

    .classify .small-classify ul li {
        float: left;
        margin-left: 18px;
        font-size: 14px
    }

    .classify .small-classify ul .all,
    .classify .small-classify ul .cat,
    .classify .small-classify ul .dog {
        margin-left: 20px;
        cursor: pointer
    }

    .classify .small-classify ul .all:hover,
    .classify .small-classify ul .cat:hover,
    .classify .small-classify ul .dog:hover {
        color: #fff
    }
</style>

