import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
    mode: 'history',
    routes: [   
		{
            path:'/payment/:category',
            name: 'payment'
        },
    ]
})

export default router