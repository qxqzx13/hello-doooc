import shop from "../../views/shop";
import shoppingcar from "../../views/shoppingcar"
export default [
    {
        path: '/shop',
        component: shop,
        meta:{
            isAuthorization:false
        }
    },
    {
        path:"/shoppingcar",
        component:shoppingcar,
        meta:{
            isAuthorization:true
        }
    }
]