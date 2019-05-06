<template>
<div>
    <!--商城筛选器-->
    <div class="sizer">
        <div class="sizer1">
            <div class="click-sizer">
                <input type="button" value="显示筛选器" @click="isWan = !isWan">
                <h1 @click="isWan = !isWan" v-show = "isWan"></h1>
                <h2 @click="isWan = !isWan" v-show = "!isWan"></h2>
            </div>
            <transition name='fade'>
            <div class="hide-sizer" v-if = "!isWan">
                <div class="variety">
                    <p>品种</p>
                    <ul>
                        <!--<li-->
                            <!--v-for="item in petmarket.filtrateType"-->
                            <!--@click="setType(item.typeId)">{{item.typeName}}</li>-->
                        <li>暹罗猫</li>
                        <li>布偶猫</li>
                        <li>虎斑猫</li>
                        <li>波斯猫</li>
                        <li>斯芬克斯</li>
                    </ul>
                </div>
                <div class="gender">   
                    <p>性别</p>
                    <ul>
                        <li @click="setBoyOrGirl(1)">哥哥</li>
                        <li @click="setBoyOrGirl(2)">妹妹</li>
                    </ul>
                </div>
                <div class="age">
                    <p>年龄</p>
                    <ul>
                        <li @click="setAge(1)">幼年</li>
                        <li @click="setAge(2)">成年</li>
                    </ul>
                    
                </div>
                <div class="margin">
                    
                </div>
                <div class="pack-up">
                    <input type="button" value="收起筛选器" v-on:click="isWan = !isWan">
                    <h1></h1>
                </div>
            </div>
            </transition>
        </div>
    </div>
</div>
    
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
export default {
      name:"sizer1",
    computed :mapState(["petmarket"]),
    data(){
        return{
            isWan:true
        }
    },
    methods: Object.assign(mapActions(["getPetShow"]),{
        setAge(num){
            if(!this.$route.query.typeId){
                this.$route.query.typeId=1
            }
            if(!this.$route.query.boyOrGirl){
                this.$route.query.boyOrGirl=1
            }
            if(!this.$route.query.petAge){
                this.$route.query.petAge=1
            }
            if(!this.$route.query.dogOrCat){
                this.$route.query.dogOrCat=1
            }
            this.$router.push({
                query:{
                    pageIndex:1,
                    typeId:this.$route.query.typeId/1,
                    boyOrGirl:this.$route.query.boyOrGirl/1,
                    petAge:num,
                    dogOrCat:this.$route.query.dogOrCat/1
                }
            });
        },
    setBoyOrGirl(num){
        if(!this.$route.query.typeId){
            this.$route.query.typeId=1
        }
        if(!this.$route.query.boyOrGirl){
            this.$route.query.boyOrGirl=1
        }
        if(!this.$route.query.petAge){
            this.$route.query.petAge=1
        }
        if(!this.$route.query.dogOrCat){
            this.$route.query.dogOrCat=1
        }
        this.$router.push({
            query:{
                pageIndex:1,
                typeId:this.$route.query.typeId/1,
                boyOrGirl:num,
                petAge:this.$route.query.petAge/1,
                dogOrCat:this.$route.query.dogOrCat/1
            }
        });
    },
    setType(num){
        if(!this.$route.query.typeId){
            this.$route.query.typeId=1
        }
        if(!this.$route.query.boyOrGirl){
            this.$route.query.boyOrGirl=1
        }
        if(!this.$route.query.petAge){
            this.$route.query.petAge=1
        }
        if(!this.$route.query.dogOrCat){
            this.$route.query.dogOrCat=1
        }
        this.$router.push({
            query:{
                pageIndex:1,
                typeId:num,
                boyOrGirl:this.$route.query.boyOrGirl/1,
                petAge:this.$route.query.petAge/1,
                dogOrCat:this.$route.query.dogOrCat/1
            }
        });
    }
    }),
    mounted(){
        this.getPetShow({
            typeId: this.$route.query.typeId/1 || 1,
            pageIndex:this.$route.query.pageIndex/1 || 1,
            boyOrGirl:this.$route.query.boyOrGirl/1 || 1,
            petAge:this.$route.query.petAge/1 || 1,
            dogOrCat:this.$route.query.dogOrCat/1 || 1
        });
    }
}
</script>
<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .sizer {
        padding-top: 1px;
        width: 100%;
        height: 38px
    }

    .sizer .sizer1 {
        width: 1300px;
        height: 38px;
        margin: 0 auto;
        background: #f5a64a;
        line-height: 38px;
        position: relative;
        background-color: rgba(245, 166, 74, .7)
    }

    .sizer .sizer1 .click-sizer {
        float: right;
        margin-right: 36px;
        width: 108px
    }

    .sizer .sizer1 .click-sizer input {
        width: 80px;
        border: 0;
        outline: none;
        background-color: transparent;
        cursor: pointer
    }

    .sizer .sizer1 .click-sizer h1 {
        width: 0;
        border: 8px solid transparent;
        border-top: 8px solid #fff;
        position: absolute;
        top: 16px;
        right: 36px;
        cursor: pointer
    }

    .sizer .sizer1 .click-sizer h2 {
        width: 0;
        border: 8px solid transparent;
        border-bottom: 8px solid #fff;
        position: absolute;
        top: 6px;
        right: 36px;
        cursor: pointer
    }

    .sizer .sizer1 .fade-enter-active,
    .sizer .sizer1 .fade-leave-active {
        transition: opacity 1s
    }

    .sizer .sizer1 .fade-enter,
    .sizer .sizer1 .fade-leave-to {
        opacity: 0
    }

    .sizer .sizer1 .hide-sizer {
        background-color: rgba(245, 166, 74, .39);
        border-top: 3px solid #f2ad5c;
        position: absolute;
        top: 38px;
        left: 0;
        height: 228px;
        width: 1300px
    }

    .sizer .sizer1 .hide-sizer .variety {
        position: absolute;
        top: -3px;
        left: 0;
        width: 182px;
        height: 231px;
        border-right: 1px solid #fff
    }

    .sizer .sizer1 .hide-sizer .variety p {
        cursor: pointer;
        position: absolute;
        top: -38px;
        left: 18px;
        width:100px;
    }

    .sizer .sizer1 .hide-sizer .variety ul {
        margin-left: 18px
    }
    .sizer .sizer1 .hide-sizer .variety ul li,
    .sizer .sizer1 .hide-sizer .gender ul li,
    .sizer .sizer1 .hide-sizer .age ul li{
        cursor: pointer;
    }
    .sizer .sizer1 .hide-sizer .gender {
        position: absolute;
        top: -3px;
        left: 183px;
        width: 258px;
        height: 231px;
        border-right: 1px solid #fff
    }

    .sizer .sizer1 .hide-sizer .gender p {
        cursor: pointer;
        position: absolute;
        top: -38px;
        left: 92px;
        width: 100px
    }

    .sizer .sizer1 .hide-sizer .gender ul {
        margin-left: 92px
    }

    .sizer .sizer1 .hide-sizer .age {
        position: absolute;
        top: -3px;
        left: 442px;
        width: 340px;
        height: 231px;
        border-right: 1px solid #fff
    }

    .sizer .sizer1 .hide-sizer .age p {
        cursor: pointer;
        position: absolute;
        top: -38px;
        left: 90px;
        width: 100px
    }

    .sizer .sizer1 .hide-sizer .age ul {
        margin-left: 90px
    }

    .sizer .sizer1 .hide-sizer .margin {
        position: absolute;
        top: -3px;
        right: 0;
        height: 231px;
        width: 517px
    }

    .sizer .sizer1 .hide-sizer .pack-up {
        background-color: rgba(245, 166, 74, .7);
        position: absolute;
        bottom: -36px;
        left: 0;
        height: 36px;
        width: 100%;
        text-align: center;
        line-height: 36px
    }

    .sizer .sizer1 .hide-sizer .pack-up input {
        width: 80px;
        border: 0;
        outline: none;
        background-color: transparent;
        cursor: pointer
    }

    .sizer .sizer1 .hide-sizer .pack-up h1 {
        width: 0;
        border: 8px solid transparent;
        border-bottom: 8px solid #fff;
        position: absolute;
        bottom: 16px;
        right: 588px;
        cursor: pointer
    }
</style>
