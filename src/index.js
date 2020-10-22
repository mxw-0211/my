import Vue from 'Vue'
import App from './App'
import store from './store'
import router from './router'
import './style'
import './permission'
const vm = new Vue({
  el: '#app',
  store,
  router,
  render: c => c(App)
})
console.log(vm)