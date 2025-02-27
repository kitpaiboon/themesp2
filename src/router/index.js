import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Register from '../components/Register.vue'
import RealtimeDatabaseCrud from '../components/RealtimeDatabaseCrud.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/realtimedatabasecrud',
    name: 'RealtimeDatabaseCrud',
    component: RealtimeDatabaseCrud
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router