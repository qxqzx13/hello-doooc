<template>
<div id="commonFooter">
        <div class="joinus" :style="backgroundPic">
            <div class="mark">
                <div class="jointitle">
                    <img class="amm" src="../../assets/common/img/ammmm.gif" />
                    <img class="foothello" src="../../assets/common/img/foothello.png" />
                </div>
                <p>我们乐意与对未知拥有极强探索欲,能快速接受并学习新事物,对任何感兴趣的事情能大胆尝试的人共事,</p>
                <p>我们相信简单、热情且善于沟通的人总是充满了能量并拥有一颗年轻的心</p>
                <p>我们希望聚集最优秀的人才,致力于追求卓越、持续创新、解决问题、创造价值为世界的发展探寻正确的</p>
                <p>方向,成为驱动前进的力量</p>
                <div class="idea">
                    <a class="wechat" href=""></a>
                    <a class="qq" href=""></a>
                    <a class="sina" href=""></a>
                </div>
            </div>

        </div>
        <div class="copy">
            <p>友情连接:
                <a href="javascript:;">宠物用品商城</a>
                <span>|</span>
                <a href="javascript:;">兽药营销策划</a>
                <span>|</span>
                <a href="javascript:;">兽药动保咨询</a>
            </p>
            <p>
                <a href="javascript:;">关于我们</a>
                <span>|</span>
                <a href="javascript:;">联系我们</a>
                <span>|</span>
                <a href="javascript:;">商家入驻</a>
                <span>|</span>
                <a href="javascript:;">友情链接</a>
                <span>|</span>
                <a href="javascript:;">站点地图</a>
                <span>|</span>
                <a href="javascript:;">手机商城</a>
                <span>|</span>
                <a href="javascript:;">销售联盟</a>
                <span>|</span>
                <a href="javascript:;">商城社区</a>
                <span>|</span>
                <a href="javascript:;">企业文化</a>
                <span>|</span>
                <a href="javascript:;">帮助中心</a>
                <span class="num">ICP备案证书号:粤ICP备17156774号-2</span>
            </p>
            <p>&copy;2015-2019 道奇宠物商城 版权所有,并保留所有权利。中国广东省深圳市</p>
        </div>
    </div>
</template>

<script>
    export default {
    name:'commonFooter',
        props:["imgSrc"],
        data(){
            return {
                backgroundPic:{
                    background: "url("+require("../../assets/common/img/best.jpg")+")"
                }
            }
        },
        mounted(){
            if(this.imgSrc){
                this.backgroundPic.background = this.imgSrc;
            }
        }
    }
</script>

<style scoped>
    div,span,p{
        margin: 0;
        padding: 0;
    }
    #commonFooter {
        width: 100%;
    }
    #commonFooter .joinus{
        background-position: center;
    }
    #commonFooter .joinus .mark {
        width: 100%;
        padding-top: 92px;
        padding-bottom: 100px;
    }

    #commonFooter .joinus .mark .jointitle {
        width: 166px;
        height: 162px;
        margin: 0 auto 38px;
        position: relative;
    }

    #commonFooter .joinus .mark .jointitle .amm {
        width: 100%;
        height: 100%;
    }

    #commonFooter .joinus .mark .jointitle .foothello {
        position: absolute;
        left: -18px;
        top: 50px;
    }

    #commonFooter .joinus .mark p {
        text-align: center;
        font-size: 14px;
        color: #fff;
        line-height: 24px;
    }

    #commonFooter .joinus .mark .idea {
        width: 368px;
        margin: 76px auto 0;
    }

    #commonFooter .joinus .mark .idea a {
        display: block;
        float: left;
        margin: 0 40px;
    }

    #commonFooter .joinus .mark .idea .wechat {
        width: 46px;
        height: 37px;
        background: url(../../assets/common/img/wechat1.png) no-repeat center;
    }

    #commonFooter .joinus .mark .idea .wechat:hover {
        background: url(../../assets/common/img/wechat2.png) no-repeat center;
    }

    #commonFooter .joinus .mark .idea .qq {
        width: 32px;
        height: 37px;
        background: url(../../assets/common/img/QQ1.png) no-repeat center;
    }

    #commonFooter .joinus .mark .idea .qq:hover {
        background: url(../../assets/common/img/QQ2.png) no-repeat center;
    }

    #commonFooter .joinus .mark .idea .sina {
        width: 48px;
        height: 37px;
        background: url(../../assets/common/img/sina1.png) no-repeat center;
    }

    #commonFooter .joinus .mark .idea .sina:hover {
        background: url(../../assets/common/img/sina2.png) no-repeat center;
    }

    #commonFooter .copy {
        height: 100px;
        padding-top: 10px;
        width: 100%;
        background: #2c2c2c;
    }

    #commonFooter .copy p {
        text-align: center;
        line-height: 34px;
        font-size: 14px;
        color: #fff;
    }

    #commonFooter .copy p a {
        color: #fff;
    }

    #commonFooter .copy p a:hover {
        color: #F0A34B;
        text-decoration: underline;
    }

    #commonFooter .copy p .num {
        display: inline-block;
        margin-left: 12px;
    }
</style>