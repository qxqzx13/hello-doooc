 <template>
        <!-- 购物车详情 -->
        <div class="cpp">
            <navigation></navigation>
            <div id="middle">
                <div id="car">
                    <div class="petpic"></div>
                    <h3 v-if="$route.query.goodsId">商品详情</h3>
                    <h3 v-else>商品详情</h3>
                    <div class="nan">
                        <div class="details-detail">
                            <h1></h1>
                            <h2></h2>
                            <div class="commodity">
                                <p>商品详细</p>
                                <p>麦富迪 双拼标准颗粒成犬粮10KG</p>
                                <P>4:1牛肉粒配比，适口性更好！营养更丰富,
                                    全犬种成犬可用
                                </P>
                            </div>
                            <ul>
                                <li>
                                    <p>适用阶段</p>
                                    <span>幼犬</span>
                                </li>
                                <li>
                                    <p class="taste">口味</p>
                                    <select name="" id="">
                                        <option value="1">xl</option>
                                    </select>
                                </li>
                                <li>
                                    <p>生产地址</p>
                                    <span>中国</span>
                                </li>
                                <li>
                                    <p class="taste">重量</p>
                                    <span>2000g</span>
                                </li>
                                <li>
                                    <p class="taste1">保质期<i></i></p>
                                    <span>18个月</span>
                                </li>
                            </ul>
                            <el-row>
                                <el-button round @click="$router.push({path:'/shoppingcar'})">加入购物车</el-button>
                            </el-row>
                            <p class="price">单价<span>￥500</span></p>
                            <p class="total">总计：<span>￥5000</span></p>
                            <p class="quantity">数量<span>x1</span><img src="../assets/petshop/img/plus.svg" alt=""><img src="../assets/petshop/img/minus.svg"
                                                                                                                       alt=""></p>
                        </div>
                    </div>
                </div>
            </div>
            <commonFooter></commonFooter>
        </div>
    </template>

<script>
    import navigation from "../components/shopcommonality/navigation";
    import commonFooter from "../components/common/commonFooter.vue";
    import {mapState, mapMutations, mapGetters, mapActions} from "vuex";
    export default {
        name: "detail",
        methods:mapActions(["toShoppingCar"]),
        mounted(){
            console.log(111111)
            this.toShoppingCar(this.$route.query.goodsId);
        },
        components:{
            navigation,
            commonFooter
        }
    }
</script>

<style scoped>
    div,ul,li,h1,h2,h3,h4,h6,span,img,i,b,p,h5{
        margin:0;
        padding:0;
    }
    .cpp{
        background: url(../assets/petmarket/img/bg.png);
        background-size: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height:100%;
    }
    #middle{
        height:735px;
        width:100%;
    }
    #middle #car{
        padding-top:76px;
        height:580px;
        width:1300px;
        margin:0 auto;
        position: relative;
    }
    #middle #car .petpic{
        height:105px;
        width:110px;
        background:#000000;
    }
    #middle #car h3{
        height:22px;
        text-align:center;
        position:absolute;
        left:160px;
        top:94px;
        font-size:14px;
        border-bottom:4px solid #f5a64a;
    }
    #middle #car .nan{
        height:578px;
        width:840px;
        background:#f7e2cb;
        margin-top:-106px;
        margin-left:294px;
    }
    .details-detail{
        height:515px;
        width:730px;
        background:#fbf1e6;
        left:60px;
        top:30px;
        position:relative;

    }
    .details-detail h1{
        width: 0;
        border: 12px solid transparent;
        border-right: 12px solid #f5a64a;
        position:absolute;
        top:234px;
        left:24px;
    }
    .details-detail h2{
        height:270px;
        width:270px;
        background:#fff;
        position:absolute;
        top:76px;
        left:64px;
    }
    .details-detail .el-button{
        height:22px;
        width:108px;
        line-height:1px;
        background: #f99725;
        color: #000;
        position: absolute;
        top: 464px;
        right:46px;
    }
    .details-detail .quantity{
        position:absolute;
        bottom:154px;
        right:110px;
        height:24px;
        text-align: center;
    }
    .details-detail .quantity img{
        height:18px;
        width:24px;
        cursor: pointer;
        vertical-align: middle;

    }
    .details-detail .total{
        position: absolute;
        bottom:28px;
        right:200px;
        font-size:16px;
        color:#f99725
    }
    .details-detail .total span{
        color:#000;
    }
    .details-detail .price{
        position: absolute;
        bottom:154px;
        right:274px;
        font-size:16px;
    }
    .commodity{
        position:absolute;
        left:384px;
        top:72px;
        height:76px;
        width:186px;
    }
    .commodity p{
        font-size:10px;
        line-height:24px;
    }
    .details-detail ul{
        height:96px;
        width:192px;
        position:absolute;
        top:208px;
        left:384px;

    }
    .details-detail ul li{
        font-size:10px;
    }
    .details-detail ul li p{
        display: inline-table;
        margin-right:12px;
        width:48px;
    }
    .details-detail ul li:nth-child(odd){
        background: #f5a64a;
    }
    .details-detail ul li:nth-child(even){
        line-height:30px;
        height:30px;
    }
    .taste{
        text-align: justify;

    }
    .taste:after {
        display: inline-block;
        width: 100%;
        content: '';
    }
    .taste1{
        text-align: justify;
        text-align-last: justify;
    }
</style>