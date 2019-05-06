import personal from "../../views/personal";
import userinfo from "../../components/personal/userinfo";
import sunpet from "../../components/personal/sunpet";
import personalCenter from "../../components/personal/personalCenter";

export default [
    {
        path: '/personal',
        name: 'personal',
        component: personal,
        meta:{
            isAuthorization:true
        },
        children:[
            {
                path:"/",
                alias:"userinfo",
                component:userinfo,
                meta:{
                    isAuthorization:true
                }
            },
            {
                path:"sunpet",
                component:sunpet,
                meta:{
                    isAuthorization:true
                }
            },
            {
                path:"personalCenter",
                component:personalCenter,
                meta:{
                    isAuthorization:true
                }
            }
        ]
    }
]