<template>
    <div class="picshow">
        <!-- 达人晒宠 -->
            <h3 style="width: 293px">
                <p style="width: 262px;">
                    达人晒宠
                </p>
                <span></span>
            </h3>
            <ul class="picture">
                <li class="listone"><img class="pic1" src="../../assets/home/img/1.jpg" /></li>
                <li class="listtwo">
                    <img class="pic2" src="../../assets/home/img/2.jpg" />
                    <img class="pic5" src="../../assets/home/img/4.jpg" />
                </li>
                <li class="listthr">
                    <img class="pic3" src="../../assets/home/img/3.jpg" />
                    <img class="pic6" src="../../assets/home/img/5.jpg" />
                    <img class="pic7" src="../../assets/home/img/6.jpg" />
                </li>
                <li class="listfour">
                    <img class="pic4" src="../../assets/home/img/8.jpg" />
                    <img class="pic8" src="../../assets/home/img/7.jpg" />
                </li>
            </ul>
        </div>
</template>
<script>
export default {
    name:"expertPet"
}
</script>
<style scoped>
    div,ul,li,h3,span,p{
        padding: 0;
        margin: 0;
    }
    .picshow {
        width: 1300px;
        margin: 0 auto;
        margin-top: 120px;
        overflow: hidden;
    }    
    .picshow h3 {
        width: 479px;
        height: 36px;
    }
    .picshow h3 p {
        float: left;
        border: 2px solid #F5A64A;
        width: 448px;
        height: 32px;
        padding-left: 10px;
        line-height: 32px;
        font-size: 22px;
    }
    .picshow h3 p a {
        color: #000;
    }       
    .picshow span {
        float: right;
        border: 2px solid #F5A64A;
        border-left: none;
        width: 15px;
        height: 32px;
        border-radius: 0 16px 16px 0;
    }
        
    .picshow .picture {
        width: 100%;
        margin-top: 56px;
    }
    .picshow .picture li {
        float: left;
    }
    .picshow .picture li img {
        vertical-align: middle;
        border: none;
        float: left;
    }
            
    .picshow .listone {
        width: 419px;
    }
    .picshow .listtwo,
    .picshow .listthr {
        width: 320px;
    }
    .picshow .listfour {
        width: 241px
    }
        
    
</style>


