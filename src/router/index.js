import Vue from 'Vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import User from '@/pages/User'
import Setting from '@/pages/Setting'
Vue.use(VueRouter)
const constantRouter = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  }
]
const dynamicRouter = [
  {
    path: '/User',
    name: 'user',
    component: User
  },
  {
    path: '/Setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '*',
    name: 'fallback',
    redirect: '/404'
  }
]
const router = new VueRouter({ routes: constantRouter })
export default router
export { dynamicRouter }