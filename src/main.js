import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import router from '@/router';
import axios from 'axios' 
import VueAxios from 'vue-axios' 


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API axios.defaults.baseURL = 'http://localhost:
axios.defaults.baseURL = 'http://localhost:3000/api';

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

