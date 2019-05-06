
import home from "../../views/home";
import login from "../../views/login";

export default [
    {
        path: '/',
        name: 'home',
        component: home,
        meta:{
            isAuthorization:false
        }
    },{
        path: '/login',
        name: 'login',
        component: login,
        meta:{
            isAuthorization:false
        }
    }
]