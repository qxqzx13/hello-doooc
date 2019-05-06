import daily from "../../views/daily";

export default [
    {
        path: '/daily',
        name:"daily",
        component: daily,
        meta:{
            isAuthorization:false
        }
    }
]