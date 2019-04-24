import personal from "../../views/personal";
import userinfo from "../../components/personal/userinfo";
import sunpet from "../../components/personal/sunpet";
import personalCenter from "../../components/personal/personalCenter";

export default [
    {
        path: '/personal',
        name: 'personal',
        component: personal,
        children:[
            {
                path:"/",
                alias:"userinfo",
                component:userinfo
            },
            {
                path:"sunpet",
                component:sunpet
            },
            {
                path:"personalCenter",
                component:personalCenter
            }
        ]
    }
]