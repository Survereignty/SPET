import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/students',
    name: 'Students',
    component: () => import('../views/Students.vue')
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import('../views/Docs.vue')
  },
  {
    path: '/comps',
    name: 'Comps',
    component: () => import('../views/Comps.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../views/Table.vue')
  }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
