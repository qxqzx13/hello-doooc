import pet from '../../views/pet'
import ailment from '../../components/get/ailment.vue'
import conserve from '../../components/get/conserve'
import contact from '../../components/get/contact'
import drill from '../../components/get/drill'
import intellectual from '../../components/get/intellectual'
import medical from '../../components/get/medical'

export default [
    {
        path: '/pet',
        name: 'pet',
        component: pet,
        children:[
            {
                alias:'ailment',
                path:'/',
                component:ailment,
            },
            {
                path:'conserve',
                component:conserve,
            },{
                path:'drill',
                component:drill,
            },
            {
                path:'medical',
                component:medical,
            },
            {
                path:'intellectual',
                component:intellectual,
            },{
                path:'contact',
                component:contact,
            }


        ]
    }
]