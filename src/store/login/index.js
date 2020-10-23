import storage from '@/utils/localStorage'
const store = {
  state: {
    token: storage.getToken()
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
    }
  },
  actions: {
    setToken ({ commit }, payload) {
      commit('setToken', payload)
    }
  },
  namespaced: true
}
export default store