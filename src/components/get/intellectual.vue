<template>
    <div>
		  <div id="pic-1-4">
		  	<div id="pic-1-4-title">
		  	  		<h1>关于宠物<br>About pets</h1>
		  	</div>
						<div id="pic-1-4-img">
							<ul>
								<li><img src="../../assets/pet/img/li1.png"></li>
								<li><img src="../../assets/pet/img/li2.png"></li>
								<li><img src="../../assets/pet/img/li3.png"></li>
								<li><img src="../../assets/pet/img/li4.png"></li>
							</ul>
						</div>
		  </div>
		  <div id="pic-2-4">
				<ul>
				<li><img src="../../assets/pet/img/first.png">
				 <h5>每只狗狗的鼻纹是独特的
				   <p>宠物狗狗的鼻子是有纹路的，它的纹路就像是我们人类的指纹，是独一无二的。曾经有个人用自己狗狗的 鼻纹录入手机的系统，最后成功的解锁。而在国外，一些动物公益组织会通过狗狗的鼻纹来辨认它们的身份。</p>
				 </h5>
				</li>
				<li><img src="../../assets/pet/img/second.png">
				<h5>狗狗的尿液具有腐蚀性
					<p>狗狗的尿液具有腐蚀性。据说因为有太多的狗狗在上面小解了，因此造成了克罗地亚当地的一些街灯柱倒塌，一场因为狗尿引发的地震。</p>
				</h5>
				</li>
				<li><img src="../../assets/pet/img/third.png">
				<h5>狗狗可以听到，闻到，感受到天气的变化哦！
					<p>狗狗可以听到，闻到，感受到天气的变化哦！所以如果你家狗开始捣乱或是开始做各种事情来要引起你的注意，甚至时表现得 不安，那么很有可能是因为风暴来了。</p>
				</h5>
				</li>
				</ul>
			</div>
		
    </div>
</template>
<style lang="scss" scoped>
#pic-1-4{
  height:860px;
  width:1300px;
  margin:0 auto; 
  #pic-1-4-title{
        height:275px;
        width:100%;
        
        h1{
        text-align: center;
        line-height: 2;
        padding-top:80px;
        font-size:30px;
    }
        
    }
		#pic-1-4-img{
			heigth:580px;
			width:1300px;
			margin:0 atuo;
			ul{
				width:100%;
				height:580px;
				li{
					width:25%;
					heigth:580px;
					list-style: none;
					float:left;
					img{
						cursor: pointer;
						heigth:570px;
						width:300px;
					}
					img:hover{
						box-shadow: 0px 0px 20px cornflowerblue;
						opacity:0.7;
					}
				}
			}
		}
}
#pic-2-4{
  height:1000px;
  width:1300px;
  margin:0 auto;  
	ul{
		list-style:none;
		li{
		margin-left:54px;
	  margin-top:30px;

			img{
				cursor: pointer;
				height:300px;
				width:320px;
			}
			img:hover{
				box-shadow: 0px 0px 20px cornflowerblue;
				opacity:0.7;
			}
			h5{
				float:right;
				height:230px;
				width:455px;
				font-size:30px;
				margin-right:190px;

				p{
					font-size:16px;
					font-weight:normal;
					line-height:2;
					margin-top:50px;
				
				}
				
			}
		}
	}
}
</style>

