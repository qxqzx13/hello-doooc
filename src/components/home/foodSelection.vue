<template>
    <!-- 食材选取 -->
    <div class="choose">
        <h3>
            <p>
                <a href="javascript:;">食物选取</a>
            </p>
            <span></span>
        </h3>
        <ul>
            <li>
                <img src="../../assets/home/img/a.jpg" />
                <p>深海鱼油含有非常丰富的多元不饱和脂肪酸</p>
                <p>促进毛囊脂腺和表皮分泌,让毛发更加靓丽,还可以健脑益智</p>
                <p>,使宠物更加活泼聪明</p>
            </li>
            <li>
                <img src="../../assets/home/img/b.jpg" />
                <p>精选新鲜优质的鸡肉,均衡的高蛋白、低脂肪及营养素,</p>
                <p class="one">保障爱宠充沛的体力</p>
            </li>
            <li>
                <img src="../../assets/home/img/c.jpg" />
                <p>1.壮骨助发育 2.亮毛防皮炎 3.缓解眼部泪痕</p>
                <p class="one">4.排泄助消化 5.均衡营养</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"foodSelection"
}
</script>
<style scoped>
    div,ul,li,h3,span,p{
        margin: 0;
        padding: 0;
    }
    .choose {
        width: 1300px;
        margin: 0 auto;
        margin-top: 120px;
        overflow: hidden;
    }
    .choose h3 {
        width: 279px;
        height: 36px;
    }
    .choose h3 p {
        float: left;
        border: 2px solid #F5A64A;
        width: 248px;
        height: 32px;
        padding-left: 10px;
        line-height: 32px;
        font-size: 22px;
    }
    .choose h3 p a {
        color: #000;
    }     
    .choose span {
        float: right;
        border: 2px solid #F5A64A;
        border-left: none;
        width: 15px;
        height: 32px;
        border-radius: 0 16px 16px 0;
    }   
    .choose ul {
        width: 1150px;
        padding: 0 75px;
        margin-top: 60px;
    }
    .choose ul li {
        float: left;
        width: 343px;
        margin: 0 20px;
        padding-bottom: 12px;
        background: #f5a64a;
    }
    .choose ul li img {
        margin-bottom: 14px;
    }
    .choose ul li p {
        line-height: 24px;
        font-size: 12px;
        text-align: center;
    }
    .choose ul li .one {
        margin-bottom: 24px;
    }
    
</style>
