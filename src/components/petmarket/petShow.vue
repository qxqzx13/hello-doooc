        <template>
    <div class="pet">
        <div class="pet-show">
            <h3>宠物展示</h3>
            <div class="pet-cat1" v-for="item in petmarket.petShowArr" @click="$router.push({name:'petmarkettwo',query:{productDescription:item.productDescription}})">
                <div class="photo"><img :src="item.productIcon"></div>
                <h2>{{item.productPrice}}</h2>
                <p>{{item.productName}}</p>
                <h4>品种：{{item.productType}}</h4>
                <h5><img src="../../assets/petmarket/img/shopcar.svg"></h5>
            </div>
            <!--<div class="pet-cat1" @click="$router.push('/petmarkettwo')">
                <div class="photoone"></div>
                <h2>￥3000</h2>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
                <h5><img src="../../assets/petmarket/img/shopcar.svg" alt=""></h5>
            </div>
            <div class="pet-cat2" @click="$router.push('/petmarkettwo')">
                <div class="phototwo"></div>
                <h2>￥3000</h2>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
                <h5><img src="../../assets/petmarket/img/shopcar.svg" alt=""></h5>
            </div>
            <div class="pet-cat3" @click="$router.push('/petmarkettwo')">
                <div class="photothree"></div>
                <h2>￥3000</h2>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
                <h5><img src="../../assets/petmarket/img/shopcar.svg" alt=""></h5>
            </div>
            <div class="pet-cat4" @click="$router.push('/petmarkettwo')">
                <div class="photofour"></div>
                <h2>￥3000</h2>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
                <h5><img src="../../assets/petmarket/img/shopcar.svg" alt=""></h5>
            </div>
            <div class="pet-cat5" @click="$router.push('/petmarkettwo')">
                <div class="photofive"></div>
                <h2>￥3000</h2>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
                <h5><img src="../../assets/petmarket/img/shopcar.svg" alt=""></h5>
            </div>
            <div class="pet-cat6" @click="$router.push('/petmarkettwo')">
                <div class="photosix"></div>
                <h2>￥3000</h2>
                <p>布偶猫</p>
                <h4>品种：布偶猫</h4>
                <h5><img src="../../assets/petmarket/img/shopcar.svg" alt=""></h5>
            </div>-->
            <p class="prevs" @click="downPage" v-show="$route.query.pageIndex > 1">
                上一页
            </p>
            <p class="curpage">当前第{{nowPage}}页/共{{petmarket.pageSum}}页</p>
            <p class="uanext" @click="upPage" v-show="isShow">
                下一页
            </p>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
    export default {
        name:"petShow",
        data(){
            return {
                nowPage : 1
            }
        },
        computed : mapState(["petmarket"]),
        methods: Object.assign(mapActions(["getPetShow"]),{
            downPage(){
                if(this.$route.query.pageIndex == false){
                    this.$route.query.pageIndex=1
                }
                this.$router.push({
                    query:{
                        pageIndex:this.$route.query.pageIndex/1-1,
                        productType:this.$route.query.productType/1 || 1,
                        boyOrGirl:this.$route.query.boyOrGirl/1 || 1,
                        petAge:this.$route.query.petAge/1 || 1,
                        dogOrCat:this.$route.query.dogOrCat/1 || 1
                    }
                });
                this.orShow();
                this.getNowPage();
            },
            upPage(){
                if(!this.$route.query.pageIndex){
                    this.$route.query.pageIndex=1
                }
                this.$router.push({
                    query:{
                        pageIndex:this.$route.query.pageIndex/1+1,
                        productType:this.$route.query.productType/1 || 1,
                        boyOrGirl:this.$route.query.boyOrGirl/1 || 1,
                        petAge:this.$route.query.petAge/1 || 1,
                        dogOrCat:this.$route.query.dogOrCat/1 || 1
                    }
                });
                this.orShow();
                this.getNowPage();
            },
            orShow(){
                if(this.$route.query.pageIndex/1 > this.petmarket.pageSum/1-1){
                    this.isShow = false;
                    this.nowPage = this.petmarket.pageSum/1
                }else if(this.petmarket.pageSum/1 === 1){
                    this.isShow = false;
                }else{
                    this.isShow = true;
                }
            },
            getNowPage(){
                if(this.$route.query.pageIndex < 2){
                    this.nowPage = 1;
                }else if(this.$route.query.pageIndex/1 >= this.petmarket.pageSum/1){
                    this.nowPage = this.petmarket.pageSum;
                    this.$route.query.pageIndex = this.petmarket.pageSum/1;
                }else{
                    this.nowPage = this.$route.query.pageIndex/1 || 1;
                }
            }
        }),
        mounted(){
            this.orShow();
            this.getNowPage();
            this.getPetShow({
                productType: this.$route.query.productType/1 || 1,
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
    .photo{
        width: 370px;
        height:312px;
    }
    .photo img{
        width: 100%;
        height: 100%;
    }
    .pet .pet-show {
        width: 1300px;
        min-height: 1218px;
        margin: 0 auto;
        text-align: center;
        position: relative
    }
    .pet .pet-show .pet-cat1 h5,
    .pet .pet-show .pet-cat2 h5,
    .pet .pet-show .pet-cat3 h5,
    .pet .pet-show .pet-cat4 h5,
    .pet .pet-show .pet-cat5 h5,
    .pet .pet-show .pet-cat6 h5{
        position:absolute;
        bottom:12px;
        right:26px;
    }
    .pet .pet-show .pet-cat1 h5 img,
    .pet .pet-show .pet-cat2 h5 img,
    .pet .pet-show .pet-cat3 h5 img,
    .pet .pet-show .pet-cat4 h5 img,
    .pet .pet-show .pet-cat5 h5 img,
    .pet .pet-show .pet-cat6 h5 img{
        height:40px;
        width:40px;
    }
    .pet .pet-show h3 {
        padding-top:40px;
        font-size: 44px;
        padding-bottom: 70px
    }

    .pet .pet-show div {
        position: relative;
        min-height: 400px;
        width: 400px;
        background: #bfbfbf;
        display: inline-table;
        text-align: center;
        font-size: 14px
    }

    .pet .pet-show div div {
        width: 370px;
        min-height: 312px;
        background: #fff;
        margin-top: 16px
    }
    .pet .pet-show div div img{
        width:100%;
        height:100%;
    }
    .pet .pet-show div p {
        padding-top: 14px
    }

    .pet .pet-show div h4 {
        padding-top: 10px;
        font-weight: 400
    }

    .pet .pet-show div h2 {
        position: absolute;
        bottom: 20px;
        left: 16px;
        font-weight: 350;
        font-size: 18px
    }

    .pet .pet-show .prevs {
        left: 500px
    }
    .pet .pet-show .curpage{
        position: absolute;
        bottom:10px;
        left:590px;
        z-index:999;
    }

    .pet .pet-show .prevs,
    .pet .pet-show .uanext{
        position: absolute;
        bottom:0px;
        height: 50px;
        width: 132px;
        line-height: 50px;
        background: #f5a64a;
        margin:0 220px;
    }

    .pet .pet-show .uanext {
        right: 500px
    }

    .pet .pet-show div:nth-child(4),
    .pet .pet-show div:nth-child(5) {
        margin-top: 74px
    }

    .pet .pet-show div:nth-child(6) {
        margin-top: 74px;
        margin: 0 45px
    }
</style>
