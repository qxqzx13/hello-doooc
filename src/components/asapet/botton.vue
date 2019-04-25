<template>
        <div class="main_footer">
            <div class="main_footer_botton">
                <ul>
                    <li></li>
                    <li></li> 
                </ul>
                
                <input type="button" value="我也要发">
            </div>
        </div>
</template>

<script>
export default {
name:"botton"
}
</script>

<style scoped>
    
        .main_footer{
            width:1300px;
            height:156px;
           
        }

        .main_footer_botton{
            width:244px;
            height:142px;
            margin-right:85px;
            float:right;
        }
        .main_footer_botton ul{
            overflow: hidden;
            width:244px;
            height:49px;
        }
        .main_footer_botton li{
            width:122px;
            height:49px;
            float:left;
            border:none;
        }
        .main_footer_botton li:first-child{
            background:url(../../assets/asapet/img/zuoshou.jpg) no-repeat 62px 3px;
        }
        .main_footer_botton li:nth-child(2){
            background:url(../../assets/asapet/img/youshou.jpg)  no-repeat 14px 3px;
        }
        .main_footer_botton input{
            width:244px;
            height:90px;
            border:none;
            background:#cccccc;
            border-radius: 10px;
            font-size:30px;
        }
</style>
