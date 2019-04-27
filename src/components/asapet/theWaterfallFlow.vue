<template>
        <div id="box">
			<ul></ul>
			<ul></ul>
			<ul></ul>
       
        </div>
</template>

<script>
export default {
	name:"theWaterfallFlow",
	data:{
		
	}
}

window.onload = function(){
				let oUls = document.querySelectorAll('#box ul');
				let clientHeight = document.documentElement.clientHeight; //可视高度
// 				document.onscroll = function(){
// 					let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距顶端的距离
// 					let scrollHeight = document.body.scrollHeight;//页面的实际高度
// //					if(clientHeight + scrollTop >= scrollHeight * 0.8){
// //						loadImg();
// //					}
// 				}
				loadImg();
				//加载图片
				function loadImg(){
					for(let i = 1;i < 11;i ++){
						let li = document.createElement('li');
						let img = document.createElement('img');
						img.src = '../../assets/asapet/img/' + i + ".jpeg";
						img.title = i;
						li.appendChild(img);
						oUls[minHeight(oUls)].appendChild(li);
					}
				}
				//最小高度
				function minHeight(arr){
					let index = 0;
					let min = arr[0].offsetHeight;
					for(let i = 0,len = arr.length;i < len;i ++){
						if(min > arr[i].offsetHeight){
							min = arr[i].offstetHeigh;
							index = i;
							

						}
					}
					return index;
				}
			}
</script>

<style scoped>
div,ul,li{
            padding: 0;
            margin: 0;
        }  
li {
	list-style: none;
}   

#box {
			margin: 0 auto;
            width: 1300px;
            overflow: hidden;
		}
#box ul {
	width: 298px;
	float: left;
	margin: 0 auto;
    padding: 0 66px;
}
#box img {
	width: 298px;
    padding-bottom: 84px;	
}	
        
</style>
