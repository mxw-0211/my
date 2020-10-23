import Vue from 'Vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import Home from '@/pages/Home'
import User from '@/pages/User'
import Setting from '@/pages/Setting'
Vue.use(VueRouter)
const constantRouter = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  }
]
const dynamicRouter = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    meta: {
      code: 98
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      code: 99
    }
  },
  {
    path: '/User',
    name: 'user',
    component: User,
    meta: {
      code: 100
    }
  },
  {
    path: '/Setting',
    name: 'setting',
    component: Setting.Login,
    meta: {
      code: 101
    }
  },
  {
    path: '*',
    name: 'fallback',
    redirect: '/404',
    meta: {
      code: 0
    }
  }
]
const router = new VueRouter({ routes: constantRouter })
export default router
export { dynamicRouter }