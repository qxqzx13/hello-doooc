<template>
    <div>
        <div id="title-img" @click="$router.push('/')">
			<img src="../assets/pet/img/title.png" alt="" >
		</div>
        <div id="nav">
				<img src="../assets/pet/img/t.png">
				<ul>
					<li><a href="javascript:;" @click="$router.push('/pet/ailment')">疾病</a></li>
					<li><a href="javascript:;" @click="$router.push('/pet/conserve')">养护</a></li>
					<li><a href="javascript:;" @click="$router.push('/pet/drill')">训练</a></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li><a href="javascript:;" @click="$router.push('/pet/medical')">医疗</a></li>
					<li><a href="javascript:;" @click="$router.push('/pet/intellectual')">冷知识</a></li>
					<li><a href="javascript:;" @click="$router.push('/pet/contact')">联系我们</a></li>
					
				</ul>
			</div>
            <router-view/>
            <div id="footer">
			<img src="../assets/pet/img/bottom.png">
			<div id="last-footer">
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
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="scss" scoped>
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
		img{
			position:absolute;
			left:600px;
			top:400px;
		}
    ul{
        list-style:none;
				heigth:60px;
				width:1300px;
				margin:0 auto;
        li{
            float:left;
            margin:0 40px;
            padding-top:20px;
            a{
                text-decoration: none;
                color:black;
				font-size:20px;
            }
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
     height:730px;
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
           a{
               color: #fff;
           }
           a:hover{
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


