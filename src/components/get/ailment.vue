<template>
    <div>
        <div >
		 	
		  <div id="pic-1">
		  	<h1>世界那么大，而我只有你<br>The world is so big,and I only have you.</h1>
		  </div>
		    <div id="pic-2">
		    	<div id="pic-2-left">
		    		<ul>
		    			<li>注射狂犬疫苗需要注意什么</li>
		    			<li>得了狂犬疫苗的人有什么症状</li>
		    			<li>狗狗感冒了怎么办？</li>
		    			<li>狗狗感冒的症状及治疗方法</li>
		    			<li>狗狗发烧的症状及治疗方法</li>
		    		</ul>
		    	</div>
		    	<div id="pic-2-right"><img src="../../assets/pet/img/z.png"></div>
		    </div>
		       <div id="pic-3">
		       	<div id="pic-3-left"><img src="../../assets/pet/img/y.png"></div>
		    	<div id="pic-3-right">
		    		<ul>
		    			<li>注射狂犬疫苗需要注意什么</li>
		    			<li>得了狂犬疫苗的人有什么症状</li>
		    			<li>狗狗感冒了怎么办？</li>
		    			<li>狗狗感冒的症状及治疗方法</li>
		    			<li>狗狗发烧的症状及治疗方法</li>
		    		</ul>
		    	</div>
		       </div>
		       
		          <div id="pic-4">
		          	<ul>
		          		<li><<&nbsp;&nbsp;&nbsp;【吉娃娃犬】吉娃娃到底会长到多大？</li>
		          		<li><<&nbsp;&nbsp;&nbsp;【阿富汗猎犬】阿富汗犬眼角膜发炎</li>
		          		<li><<&nbsp;&nbsp;&nbsp;【苏格兰牧羊犬】狗狗膀胱结石的预防及治疗方法</li>
		          		<li><<&nbsp;&nbsp;&nbsp;【恩特步山地犬】成犬狗狗的基本护理知识有哪些？</li>
		          		<li><<&nbsp;&nbsp;&nbsp;【瓷器犬】老犬的基本护理知识有哪些？</li>
		          		<li><<&nbsp;&nbsp;&nbsp;【比熊犬】狗狗季节流行病该怎么治？</li>
		          		<li><<&nbsp;&nbsp;&nbsp;【大白熊犬】狗狗患脓皮症怎么办？</li>
		          		<li><<&nbsp;&nbsp;&nbsp;【西伯利亚雪橇犬】哈士奇得皮肤湿疹如何处理？</li>
		          		<li><<&nbsp;&nbsp;&nbsp;【巴吉度猎犬】狗狗患皮肤病的处理方法有哪些？</li>
		          		<li><<&nbsp;&nbsp;&nbsp;【约克夏】狗狗夏天怎么避暑？</li>
		          	</ul>
		          	<img src="../../assets/pet/img/x.png">
		          </div>
		</div>
		
    </div>
</template>
<style lang="scss" scoped>
#pic-1{
    height:275px;
    width:100%;
    h1{
        text-align: center;
        line-height: 2;
        padding-top:80px;
        font-size:30px;
    }
}
#pic-2{
    height:465px;
    width:1300px;
    margin:0 auto;
    #pic-2-left{
        height:465px;
        width:845px;
        float:left;
        background:#f0f4fd;
        ul{
            margin-left:180px;
            margin-top:50px;
            line-height:3;
            li{
				cursor: pointer;
                font-size:26px;
                color:#fb8192;
            }
			li:hover{
				font-size:30px;
				color:black;
			}
        }
    }
    
    #pic-2-right{
        height:465px;
        width:430px;
        float:right;
        background:#dcdcdc;
		cursor: pointer;
    }
		#pic-2-right:hover{
	 transform: scale(1);
   opacity: .4;
		}
}

#pic-3{
    height:465px;
    width:1300px;
    margin:0 auto;
    margin-top:60px;
    margin-bottom:60px;
    #pic-3-right{
        height:465px;
        width:845px;
        float:right;
        background:#f0f4fd;

      ul{
            margin-left:180px;
            margin-top:50px;
            line-height:3;
            li{
                font-size:26px;
                color:#fb8192;
				cursor: pointer;
            }
			li:hover{
				font-size:30px;
				color:black;
			}
        }  
    }
    
    #pic-3-left{
        height:465px;
        width:430px;
        float:left;
	 	background:#dcdcdc;
		cursor: pointer;
    }
		#pic-3-left:hover{
			transform: scale(1);
			opacity: .4;
		}

}
#pic-4{
    height:770px;
    width:1300px;
    background:#faf6f5;
    margin:0 auto;
    margin-bottom: 50px;
    ul{
        list-style:none;
        line-height:3;
        margin-left:30px;
        li{
			cursor: pointer;
            font-size:26px;
            
        }
				li:hover{
					color:palevioletred;
				}
    }
    img{
		cursor: pointer;
        position:relative;
        left:800px;
        top:-300px;
    }
		img:hover{
			 box-shadow: 5px 5px 5px grey;
		}
}
</style>

