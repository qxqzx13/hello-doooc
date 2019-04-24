<template>
    <div class="pet">
        <div class="pet-show">
            <h3>宠物展示</h3>
            <div class="pet-cat1" @click="$router.push('/petmarkettwo')">
                <div class="photoone"></div>
                <h2>￥3000</h2>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
                <h5><img src="../../assets/petmarket/img/shopcar.svg" alt=""></h5>
            </div>
            <div class="pet-cat2" @click="$router.push('/petmarkettwo')">
                <div class="phototwo"></div>
                <h2>￥3000</h2>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
                <h5><img src="../../assets/petmarket/img/shopcar.svg" alt=""></h5>
            </div>
            <div class="pet-cat3" @click="$router.push('/petmarkettwo')">
                <div class="photothree"></div>
                <h2>￥3000</h2>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
                <h5><img src="../../assets/petmarket/img/shopcar.svg" alt=""></h5>
            </div>
            <div class="pet-cat4" @click="$router.push('/petmarkettwo')">
                <div class="photofour"></div>
                <h2>￥3000</h2>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
                <h5><img src="../../assets/petmarket/img/shopcar.svg" alt=""></h5>
            </div>
            <div class="pet-cat5" @click="$router.push('/petmarkettwo')">
                <div class="photofive"></div>
                <h2>￥3000</h2>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
                <h5><img src="../../assets/petmarket/img/shopcar.svg" alt=""></h5>
            </div>
            <div class="pet-cat6" @click="$router.push('/petmarkettwo')">
                <div class="photosix"></div>
                <h2>￥3000</h2>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
                <h5><img src="../../assets/petmarket/img/shopcar.svg" alt=""></h5>
            </div>
            <p class="prevs">
                上一页
            </p>
            <p class="uanext">
                下一页
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:"petShow",
}
</script>

<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .pet .pet-show {
        width: 1300px;
        min-height: 1218px;
        margin: 0 auto;
        text-align: center;
        position: relative
    }
    .pet .pet-show .pet-cat1 h5,
    .pet .pet-show .pet-cat2 h5,
    .pet .pet-show .pet-cat3 h5,
    .pet .pet-show .pet-cat4 h5,
    .pet .pet-show .pet-cat5 h5,
    .pet .pet-show .pet-cat6 h5{
        position:absolute;
        bottom:12px;
        right:26px;
    }
    .pet .pet-show .pet-cat1 h5 img,
    .pet .pet-show .pet-cat2 h5 img,
    .pet .pet-show .pet-cat3 h5 img,
    .pet .pet-show .pet-cat4 h5 img,
    .pet .pet-show .pet-cat5 h5 img,
    .pet .pet-show .pet-cat6 h5 img{
        height:40px;
        width:40px;
    }
    .pet .pet-show h3 {
        padding-top:40px;
        font-size: 44px;
        padding-bottom: 70px
    }

    .pet .pet-show div {
        position: relative;
        min-height: 400px;
        width: 400px;
        background: #bfbfbf;
        display: inline-table;
        text-align: center;
        font-size: 14px
    }

    .pet .pet-show div div {
        width: 370px;
        min-height: 312px;
        background: #fff;
        margin-top: 16px
    }
    .pet .pet-show div div img{
        width:100%;
        height:100%;
    }
    .pet .pet-show div p {
        padding-top: 14px
    }

    .pet .pet-show div h4 {
        padding-top: 10px;
        font-weight: 400
    }

    .pet .pet-show div h2 {
        position: absolute;
        bottom: 20px;
        left: 16px;
        font-weight: 350;
        font-size: 18px
    }

    .pet .pet-show .prevs {
        left: 500px
    }

    .pet .pet-show .prevs,
    .pet .pet-show .uanext {
        position: absolute;
        bottom:0px;
        height: 50px;
        width: 132px;
        line-height: 50px;
        background: #f5a64a
    }

    .pet .pet-show .uanext {
        right: 500px
    }

    .pet .pet-show .pet-cat2 {
        margin: 0 45px
    }

    .pet .pet-show div:nth-child(4),
    .pet .pet-show div:nth-child(5) {
        margin-top: 74px
    }

    .pet .pet-show div:nth-child(6) {
        margin-top: 74px;
        margin: 0 45px
    }
</style>
