import Vue from  'vue';
import Router from  'vue-router';
import landing from '@/views/Landing';
import Home from '@/views/Home';


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
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
       path: '*',
       name: 'error',
       component: Error
    },

    {
    path: '/productos',
    name: 'Productos',    
    component: () => import( './views/productos.vue')
  }
    ],

});
