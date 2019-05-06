import pet from '../../views/pet'
import ailment from '../../components/get/ailment.vue'
import conserve from '../../components/get/conserve'
import contact from '../../components/get/contact'
import drill from '../../components/get/drill'
import intellectual from '../../components/get/intellectual'
import medical from '../../components/get/medical'
import news from '../../components/get/news'

export default [
    {
        path: '/pet',
        name: 'pet',
        component: pet,
        meta:{
            isAuthorization:false
        },
        children:[
            {
                alias:'ailment',
                path:'/',
                component:ailment,
                meta:{
                    isAuthorization:false
                }
            },
            {
                path:'conserve',
                component:conserve,
                meta:{
                    isAuthorization:false
                }
            },{
                path:'drill',
                component:drill,
                meta:{
                    isAuthorization:false
                }
            },
            {
                path:'medical',
                component:medical,
                meta:{
                    isAuthorization:false
                }
            },
            {
                path:'intellectual',
                component:intellectual,
                meta:{
                    isAuthorization:false
                }
            },{
                path:'contact',
                component:contact,
                meta:{
                    isAuthorization:false
                }
            },{
                path:'news',
                component:news,
                meta:{
                    isAuthorization:false
                }
            }
        ]
    }
]