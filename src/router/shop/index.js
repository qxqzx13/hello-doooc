import shop from "../../views/shop";
import shoppingcar from "../../views/shoppingcar";
import petmarket from "../../views/petmarket";
import petmarkettwo from "../../views/petmarkettwo";
import detail from "../../components/shop/detail";
import sss from "../../components/shop/trolley";
import login from "../../views/login";
import account from "../../views/account";
import details from "../../views/details";
export default [
    {
        path: '/shop',
        name:'shop',
        component: shop,
        meta:{
            isAuthorization:false
        }
    },{
            path:"/shoppingcar",
            name:'shoppingcar',
            component:shoppingcar,
            meta:{
                isAuthorization:true
            }
        },{
        path:"/petmarket",
        name:"petmarket",
        component:petmarket,
        meta:{
            isAuthorization:false
        }
    },{
        path:"/petmarkettwo",
        name:"petmarkettwo",
        component:petmarkettwo,
        meta:{
            isAuthorization:false
        }
    },{
        path:"/login",
        name:"login",
        component:login,
        meta:{
            isAuthorization:false
        }
    },{
        path:"/details",
        name:"details",
        component:details,
        meta:{
            isAuthorization:false
        }
    },{
        path:"/account",
        name:"account",
        component:account,
    }
]