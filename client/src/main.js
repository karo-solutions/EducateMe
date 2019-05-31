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

import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';

import HomeComponent from './components/HomeComponent.vue';
import LoginComponent from './components/Login.vue';
import RegisterComponent from './components/Register.vue';
import TeachComponent from './components/Teach.vue';
import PracticeComponent from './components/Practice.vue';
import TestComponent from './components/Test.vue';
import StatsComponent from './components/Stats.vue';


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
    component: LoginComponent,
    meta: { 
      requiresAuth: false
    }
  },
  {
    name: 'register',
    path: '/register',
    component: RegisterComponent,
    meta: {
      requiresAuth: false
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
    name: 'practice',
    path: '/practice',
    component: PracticeComponent,
    meta: { 
      requiresAuth: true
    }
  },
  {
    name: 'test',
    path: '/test',
    component: TestComponent,
    meta: { 
      requiresAuth: true
    }
  },
  {
    name: 'stats',
    path: '/stats',
    component: StatsComponent,
    meta: { 
      requiresAuth: true
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
