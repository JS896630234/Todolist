// 路由接口
import VueRouter from "vue-router";

import MyDay from '../pages/MyDay'
import MyPlanned from '../pages/MyPlanned'

export default new VueRouter({
    routes:[
        {
            path:'/MyDay',
            component:MyDay
        },
        {
            path:'/MyPlanned',
            component:MyPlanned
        }
    ]
})