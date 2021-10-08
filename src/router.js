import Vue from 'vue';
import Router from 'vue-router';
import landing from '@/views/Landing';
import Home from '@/views/Home';
import Error from '@/views/Error404';
import UserDetail from '@/views/UserDetail';
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'landing',
            component: landing
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/user/:id',
            name: 'usr-detail',
            component: UserDetail
        },
        {

            path: '*',
            name: 'error',
            component: Error
        }
    ],

});