const store = {
  state: {
    name: 'allen'
  },
  mutations: {
    setName (state, payload) {
      state.name = payload
    }
  },
  actions: {
    setName ({ commit }, payload) {
      commit('setName', payload)
    }
  },
  namespaced: true
}
export default store