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
            <div id="footer">
			<img src="../assets/pet/img/bottom.png">
			<div id="last-footer">
				<p>友情连接: 
        			<span>宠物用品商城</span>
        			<b>|</b>
        			<span>兽药营销策划</span>
        			<b>|</b>
        			<span>兽药动保咨询</span>
        		</p>
        		<p>
        			<span>关于我们</span>
        			<b>|</b>
        			<span>联系我们</span>
        			<b>|</b>
        			<span>商家入驻</span>
					<b>|</b>
        			<span>友情链接</span>
					<b>|</b>
        			<span>站点地图</span>
					<b>|</b>
        			<span>手机商城</span>
					<b>|</b>
        			<span>销售联盟</span>
        			<b>|</b>
        			<span>商城社区</span>
        			<b>|</b>
        			<span>企业文化</span>
        			<b>|</b>
        			<span>帮助中心</span>
        			<span class="num">ICP备案证书号:粤ICP备17156774号-2</span>
        		</p>
        		<p>&copy;2015-2019 道奇宠物商城 版权所有,并保留所有权利。中国广东省深圳市</p>
			</div>
		</div>
    </div>
</template>
<script>
    import commonHeader from "../components/common/commonHeader";
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
            commonHeader
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
#footer{
     height:675px;
     width:100%;
    img{
        display: block;
        width: 100%;
        min-width: 1300px;
        height: 550px;
    }
    #last-footer{
        height:125px;
        width:100%;
        background:black;
        p{
           text-align: center;
           line-height: 34px;
           font-size: 14px;
           color: #fff;
           span{
               color: #fff;
			   cursor: pointer;
           }
			b{
				font-weight:400;
			}
           span:hover{
               color: #F0A34B;
               text-decoration: underline;
           }
           .num{
               display: inline-block;
               margin-left: 12px;
           }
       }
    } 
 }

</style>


