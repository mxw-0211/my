import Vuex from 'vuex'
import Vue from 'Vue'
import getters from './getters.js'
import app from './app'
import user from './user'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  getters
})
export default store