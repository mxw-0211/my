import Vuex from 'vuex'
import Vue from 'Vue'
import getters from './getters.js'
import app from './app'
import user from './user'
import login from './login'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    app,
    user,
    login
  },
  getters
})
export default store