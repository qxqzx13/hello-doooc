<template>
    <div class="teach">
        <h3>爱宠不会养?doooc让你满意</h3>
        <div class="over">
            <div class="details">
                <!--<div v-for="item in homeTeach" @click="">-->
                    <!--<h4>{{item.name}}</h4>-->
                    <!--<img :src="item.imgSrc" />-->
                <!--</div>-->
                <div @click="">
                    <h4>美容沙龙</h4>
                    <img src="../../assets/home/img/001.jpg" />
                </div>
                <div>
                    <h4>洗护清洁</h4>
                    <img src="../../assets/home/img/002.jpg" />
                </div>
                <div>
                    <h4>爱宠训练</h4>
                    <img src="../../assets/home/img/003.jpg" />
                </div>
                <div>
                    <h4>兽医护理</h4>
                    <img src="../../assets/home/img/004.jpg" />
                </div>
                <div>
                    <h4>爱宠寄养</h4>
                    <img src="../../assets/home/img/005.jpg" />
                </div>
                <div>
                    <h4>领养中心</h4>
                    <img src="../../assets/home/img/006.jpg" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"raisingPets"
}
</script>
<style scoped>
    div,h3,h4,img{
        margin:0;
        padding:0;
    }
    .teach {
        width: 1300px;
        margin: 0 auto;
        padding-bottom:120px;
    }
    .teach h3 {
        padding-top: 87px;
        text-align: center;
        font-size: 20px;
        padding-bottom:50px;
        
    }

    .teach h3{
        color: #000;
    }
    .teach .over{
        margin: 0 auto;
        width: 1076px;
        height:562px;
        border-radius:20px;
        overflow: hidden;
    }

    .teach .over .details{
        width:1117px;
        height:600px;
    }

    .teach .over .details div{
        float: left;
        margin-right:38px;
        margin-bottom:38px;
    }
    .teach .over .details div:hover{
        cursor: pointer;
    }
    .teach .over .details h4 {
        text-align: center;
        width: 334px;
        font-size: 22px;
        background: #f5a64a;
        height: 60px;
        line-height: 60px;
        color: #000;
        border-bottom:2px solid #fff;
    }
    .teach .over .details div img {
        width: 100%;
        height: 200px;
    }


</style>
