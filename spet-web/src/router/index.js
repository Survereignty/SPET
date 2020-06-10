import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(to, from, next) {
      if (store.state.user.login) {
        next()
      } else {
        router.push('/login')
        store.state.user.from = from
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/students',
    name: 'Students',
    component: () => import('../views/Students.vue'),
    beforeEnter(to, from, next) {
      if (store.state.user.login) {
        next()
      } else {
        router.push('/login')
        store.state.user.from = from
      }
    }
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import('../views/Docs.vue'),
    beforeEnter(to, from, next) {
      if (store.state.user.login) {
        next()
      } else {
        router.push('/login')
        store.state.user.from = from
      }
    }
  },
  {
    path: '/comps',
    name: 'Comps',
    component: () => import('../views/Comps.vue'),
    beforeEnter(to, from, next) {
      if (store.state.user.login) {
        next()
      } else {
        router.push('/login')
        store.state.user.from = from
      }
    }
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../views/Table.vue'),
    beforeEnter(to, from, next) {
      if (store.state.user.login) {
        next()
      } else {
        router.push('/login')
        store.state.user.from = from
      }
    }
  }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
