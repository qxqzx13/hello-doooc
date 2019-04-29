<template>
    <!-- 基本信息里的组件 -->
    <div class="base">
        <div class="username">
            <h4></h4>
            <p @click="fn({mobile:'5'})">用户名：{{$store.state.personal.mobile}}</p>
            
        </div>
        <ul class="details">
            <li>手机号：{{$store.state.personal.mobile}}</li>
            <li>性别：{{$store.state.personal.sex}}</li>
            <li>邮箱：{{$store.state.personal.email}}</li>
            <li>QQ：{{$store.state.personal.qq}}</li>
            <li>收货地址：{{$store.state.personal.address}}</li>
        </ul>
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
export default{
    name:"userinfo",
    methods: Object.assign(mapActions(["getUserInfo"]),{
        fn(obj){
            if(obj.mobile){
                this.$route.query.mobile =obj.mobile
            }
            this.$router.push({query:{
                    typeId: this.$route.query.typeId
            }})
            this.getUserInfo(this.$route.query)
        }
    }),
    mounted () {
        this.getUserInfo();
    },
}
</script>
<style scoped>
    div,ul,ol,li,a{
        margin:0;
        padding:0;
    }
    .base{
        height:578px;
        width:958px;
    }
    .username{
        margin-left:600px;
        height:126px;
        width: 86px;
        text-align: center;
    }
    .username h4{
        margin: 0;
        height:86px;
        width:86px;
        border-radius:50%;
        border:1px solid #999;
    }
    .username p{
        width: 202px;
        margin-top:18px;
        font-size:20px;
    }
    .details{
        margin-left: 200px;
        margin-top: 115px;
       width:200px;
    }
    .details li{
        font-size:20px;
        text-align: left;
        width:350px;
        line-height:54px;
        color: #595959;
    }
    .details li:nth-of-type(4){
        margin-left: 60px;
    }
    .details li:nth-of-type(5){
        margin-left: 60px;
    }
</style>
