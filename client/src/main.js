import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import TeachComponent from './components/TeachComponent.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import store from './store.js';

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent,
      meta: { 
        requiresAuth: false
      }
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: { 
      requiresAuth: false
    }
  },
  {
    name: 'register',
    path: '/register',
    component: Register,
    meta: {
      requiresAuth: false
    }
  },
  {
      name: 'create',
      path: '/create',
      component: CreateComponent,
      meta: { 
        requiresAuth: true
      }
  },
  {
    name: 'teach',
    path: '/teach',
    component: TeachComponent,
    meta: { 
      requiresAuth: true
    }
  },
  {
      name: 'posts',
      path: '/posts',
      component: IndexComponent,
      meta: { 
        requiresAuth: true
      }
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent,
      meta: { 
        requiresAuth: true
      }
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue(Vue.util.extend({ router,store }, App)).$mount('#app');
