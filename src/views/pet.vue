<template>
    <div>
        <commonHeader></commonHeader>
        <div id="nav">
				<img src="../assets/pet/img/t.png">
				<ul>
					<li :class="{'fff':num === 1}">
						<img src="../assets/pet/img/claw.svg" alt="">
						<p @click="chgColor(1,'/pet/ailment')" >疾病</p>
					</li>
					<li :class="{'fff':num === 2}">
						<img src="../assets/pet/img/claw.svg" alt="">
						<p @click="chgColor(2,'/pet/conserve')">养护</p>
					</li>
					<li :class="{'fff':num === 3}">
						<img src="../assets/pet/img/claw.svg" alt="">
						<p @click="chgColor(3,'/pet/drill')">训练</p>
					</li>
					<li></li>
					<li :class="{'fff':num === 4}">
						<img src="../assets/pet/img/claw.svg" alt="">
						<p @click="chgColor(4,'/pet/medical')">医疗</p>
					</li>
					<li :class="{'fff':num === 5}">
						<img src="../assets/pet/img/claw.svg" alt="">
						<p @click="chgColor(5,'/pet/intellectual')">冷知识</p>
					</li>
					<li :class="{'fff':num === 6}">
						<img src="../assets/pet/img/claw.svg" alt="">
						<p @click="chgColor(6,'/pet/contact')">联系我们</p>
					</li>
					
				</ul>
			</div>
            <router-view/>
		<commonFooter></commonFooter>
	</div>
</template>
<script>
    import commonHeader from "../components/common/commonHeader";
    import commonFooter from "../components/common/commonFooter";
    export default {
        data(){
            return{
                num : 1
			}
		},
        methods:{
            chgColor(num,url){
                this.$router.push(url);
                this.num = num;
			}
		},
        components:{
            commonHeader,
            commonFooter
        }
    }
</script>
<style lang="scss" scoped>
	.fff{
		background: #fff;
	}
#title-img{
    height:520px;
    width:100%;
    margin:0 auto;
    img{
       height:520px;
			 width:100%;
    }
}
#nav{
    width:100%;
    height:60px;
    background:#f5a64a;
	position: relative;
		img{
			position:absolute;
			margin-left: -105px;
			left:50%;
			top:-118px;
		}
    ul{
        list-style:none;
				heigth:60px;
				width:1300px;
				margin:0 auto;
        li{
            float:left;
            padding:0 10px;
            padding-top:20px;
			position: relative;
			text-align: right;
			cursor: pointer;
			img{
				height:20px;
				width:20px;
				position: absolute;
				left:130px;
				top:22px;
			}
            p{
				font-size:20px;
				margin-right:8px;
            }
        }
		li:nth-child(1),
		li:nth-child(2),
		li:nth-child(3),
		li:nth-child(5){
			width:88px;
			height:40px;
			margin:0 10px;
		}
		li:nth-child(4){
			width:400px;
			img{
				position: absolute;
				left:0;
				top:0;
			}
		}
		li:nth-child(6){
			width:110px;
			height:40px;
		}
		li:nth-child(7){
			width:130px;
			height:40px;
		}
    }
    a:hover{
        color:white;
    }
	a:active{
		color:white;
	}
}

</style>


