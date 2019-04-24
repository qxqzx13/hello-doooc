<template>
    <div id="banner">
        <ul class="picture">
            <img src="../../assets/home/img/banner1.jpg" ref="imgHeight" @load="getImg" />
            <img src="../../assets/home/img/banner2.jpg"/>
            <img src="../../assets/home/img/banner3.jpg" @load="getChild"/>
        </ul>
        <div class="hellotop">
        </div>
        <img class="white" src="../../assets/home/img/logowhite.png" />
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
    export default {
        name: "home-banner",
        computed:mapState(["imgBackground","imgNum","timer","timerTwo"]),
        methods: {
            getImg(){
                this.$emit("getHeight", this.$refs.imgHeight.offsetHeight);
            },
            bannerBackground(obj,json){
                clearInterval(this.$store.state.home.timer);
                this.$store.state.home.timer = setInterval(()=>{
                    var cur = getComputedStyle(obj,1).opacity * 100;
                    var speed = (json.opacity - cur) / 8;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if(cur === json.opacity){
                        clearInterval(this.$store.state.home.timer);
                    }else{
                        obj.style.opacity = (cur + speed) / 100;
                    }
                },130)
            },
            getChild(){
                var imgPic = document.querySelectorAll("#banner .picture img")
                var imgIndex = 0;
                var numIndex = 0;
                var opacityIndex = 0;
                var imgNumTwo = [];
                this.$store.state.home.timerTwo = setInterval(()=>{
                    if(imgIndex >= 2){
                        opacityIndex = opacityIndex === 0 ? 1 : 0 ;
                        imgIndex = 0;
                    }
                    imgNumTwo = this.$store.state.home.imgNum[opacityIndex];
                    numIndex = imgNumTwo[imgIndex];
                    this.bannerBackground(imgPic[numIndex],this.$store.state.home.imgBackground[opacityIndex]);
                    imgIndex += 1;
                },5000);
            }
        },
        destroyed(){
            clearInterval(this.$store.state.home.timer);
            clearInterval(this.$store.state.home.timerTwo);
        }
    }
</script>

<style scoped>
    div,ul{
        margin: 0;
        padding: 0;
    }
    #banner .picture {
        width: 100%;
    }
    #banner .picture img {
        display: block;
        width: 100%;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        opacity: 1;
    }
    #banner .picture img:nth-of-type(2){
        z-index: -2;
    }
    #banner .picture img:nth-of-type(3){
        z-index: -3;
    }
    #banner .white {
        position: absolute;
        top: 330px;
        left: 50%;
        margin-left: -86px;
    }

    #banner .hellotop {
        width: 520px;
        height: 500px;
        margin: 0 auto;
        background: url(../../assets/home/img/ammmm.gif);
        background-size: 100% 100%;
        text-align: center;
        line-height: 500px;
        opacity: 0.8;
        position: absolute;
        top: 100px;
        left: 50%;
        margin-left: -260px;
        -webkit-animation: wheelrotation 10s linear infinite;
    }

    @-webkit-keyframes wheelrotation {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    #banner .hellotop .ammm {
        width: 100%;
    }
</style>