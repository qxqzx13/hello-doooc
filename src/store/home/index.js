const state = {
    imgPic:{
        
    },
    imgBackground : [{opacity:0},{opacity:100}],
    imgNum:[[0,1],[1,0]],
    timer: null,
    timerTwo: null,
}
const actions = {
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
    },130)},
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
        this.state.bannerBackground(imgPic[numIndex],this.$store.state.home.imgBackground[opacityIndex]);
        imgIndex += 1;
    },5000)}
}

export default{
    state,
    // getters,
    actions,
    // mutations,
    // mudoles
}