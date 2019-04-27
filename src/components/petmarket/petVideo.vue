<template>
    <div class="video">
        <div class="pet-video">
            <h3>宠物视频</h3>
            <div class="pet-cat1">
                <video controls="controls">
                    <source src="../../assets/petmarket/img/one.mp4" type="video/mp4" width="100%" height="100%">
                </video>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
            </div>
            <div class="pet-cat2">
                <video controls="controls">
                    <source src="../../assets/petmarket/img/two.mp4" type="video/mp4" width="100%" height="100%">
                </video>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
            </div>
            <div class="pet-cat3">
                <video controls="controls">
                    <source src="../../assets/petmarket/img/three.mp4" type="video/mp4" width="100%" height="100%">
                </video>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"petVideo"
}
</script>

<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .video .pet-video {
        min-height: 450px;
        width: 1300px;
        margin: 0 auto;
        text-align: center;
        padding-bottom:60px;
    }

    .video .pet-video h3 {
        padding-top: 42px;
        font-size: 44px;
        padding-bottom: 70px
    }

    .video .pet-video div {
        min-height: 310px;
        width: 400px;
        background: #bfbfbf;
        display: inline-table;
        text-align: center;
        font-size: 14px
    }

    .video .pet-video div video {
        width: 370px;
        min-height: 209px;
        background: #fff;
        margin-top: 16px
    }

    .video .pet-video div p {
        padding-top: 14px
    }

    .video .pet-video div h4 {
        padding-top: 10px;
        font-weight: 400
    }

    .video .pet-video .pet-cat2 {
        margin: 0 45px
    }
</style>
