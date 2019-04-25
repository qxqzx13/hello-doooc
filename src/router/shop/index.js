import shop from "../../views/shop";
import shoppingcar from "../../views/shoppingcar";
import petmarket from "../../views/petmarket";
import petmarkettwo from "../../views/petmarkettwo";
import login from "../../views/login";
export default [
    {
        path: '/shop',
        component: shop,
        meta:{
            isAuthorization:false
        }
    },{
            path:"/shoppingcar",
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
    }
]