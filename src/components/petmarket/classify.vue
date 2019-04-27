<template>
    <div class="classify">
        <div class="pet-mall_pet-market">
            <div>
                <span class="small-mall" @click="$router.push('/shop')">宠物商城</span>
                <span class="lt">></span>
                <span @click="$router.push('/petmarket')">宠物市场</span>
            </div>
        </div>
        <div class="classify-box">
            <div class="small-classify">
                <ul>
                    <li>分类:</li>
                    <li class="cat" @click="changeProductType(1)">喵喵</li>
                    <li class="dog" @click="changeProductType(2)">汪汪</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
    export default {
        name:"classify",
        computed :mapState(["petmarket"]),
        methods: Object.assign(mapActions(["getPetShow"]),{
            changeProductType(num){
                this.$store.commit("CHANGE_PRODUCT_TYPE",num);
                this.getPetShow(this.petmarket.productType,this.petmarket.pageIndex,this.petmarket.boyOrGirl,this.petmarket.petAge,this.petmarket.dogOrCat);
            }
        })
    }
</script>

<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .pet-mall_pet-market {
        
        width: 100%;
        height: 56px;
        line-height: 56px
    }

    .pet-mall_pet-market div {
        background: rgba(245, 166, 74, .5);
        width: 1300px;
        margin: 0 auto;
        font-size: 14px
    }
    .pet-mall_pet-market div span{
        cursor: pointer;
    }
    .pet-mall_pet-market div .lt {
        
        margin: 0 10px
    }

    .pet-mall_pet-market div .small-mall {
        margin-left: 18px
    }
    .classify-box {
        width: 100%;
        height: 40px
    }
    .classify-box .small-classify {
        width: 1300px;
        background: #f5a64a;
        margin: 0 auto;
        height: 40px;
        line-height: 40px;
        background-color: rgba(245, 166, 74, .7)
    }

    .classify-box .small-classify ul li {
        float: left;
        margin-left: 18px;
        font-size: 14px
    }

    .classify-box .small-classify ul .all,
    .classify-box .small-classify ul .cat,
    .classify-box .small-classify ul .dog {
        margin-left: 20px;
        cursor: pointer
    }

    .classify-box .small-classify ul .all:hover,
    .classify-box .small-classify ul .cat:hover,
    .classify-box .small-classify ul .dog:hover {
        color: #fff
    }
</style>
