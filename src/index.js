import Vue from 'Vue'
import App from './App'
import elementUi from 'element-ui'
import store from './store'
import router from './router'
import './style'
import './style/element-variables.scss'
import './permission'

Vue.config.productionTip = false
Vue.use(elementUi)
new Vue({
  el: '#app',
  store,
  router,
  render: c => c(App)
})