<template>
    <!-- 食材选取 -->
    <div class="choose">
        <h3>
            <p @click="$router.path('/food')">
                食物选取
            </p>
            <span></span>
        </h3>
        <ul>
            <li v-for="item in $store.state.home.homeFood" @click="$router.push({name:'shoppingcar',query:{productId:item.productId}})">
                <img :src="item.productIcon" />
                <p>{{item.productDescription}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
export default {
    name:"foodSelection",
    computed :mapState([]),
    methods:mapActions(["getChoose","toShoppingcCar"]),
    mounted(){
        this.getChoose();
    }
}
</script>
<style scoped>
    div,ul,li,h3,span,p{
        margin: 0;
        padding: 0;
    }
    .choose {
        width: 1300px;
        margin: 0 auto;
        margin-top: 120px;
        overflow: hidden;
    }
    .choose h3 {
        width: 279px;
        height: 36px;
    }
    .choose h3:hover{
        cursor:pointer;
    }
    .choose h3 p {
        float: left;
        border: 2px solid #F5A64A;
        width: 248px;
        height: 32px;
        padding-left: 10px;
        line-height: 32px;
        font-size: 22px;
    }

    .choose h3 p{
        color: #000;
    }     
    .choose span {
        float: right;
        border: 2px solid #F5A64A;
        border-left: none;
        width: 15px;
        height: 32px;
        border-radius: 0 16px 16px 0;
    }   
    .choose ul {
        width: 1150px;
        padding: 0 75px;
        margin-top: 60px;
    }
    .choose ul li {
        float: left;
        width: 343px;
        margin:20px;
        padding-bottom: 12px;
        background: #f5a64a;
    }
    .choose ul li:hover{
        cursor: pointer;
    }
    .choose ul li img {
        margin-bottom: 14px;
    }
    .choose ul li p {
        text-indent: 24px;
        height: 72px;
        padding: 0 20px;
        line-height: 24px;
        font-size: 12px;
        text-align: left;
    }
    
</style>
