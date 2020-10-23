const store = {
  state: {
    name: 'allen',
    permissionRoutes: []
  },
  mutations: {
    setName (state, payload) {
      state.name = payload
    },
    setPermissionRoutes (state, payload) {
      state.setPermissionRoutes = payload
    }
  },
  actions: {
    setName ({ commit }, payload) {
      commit('setName', payload)
    },
    setPermissionRoutes ({ commit }, payload) {
      commit('setPermissionRoutes', payload)
    }
  },
  namespaced: true
}
export default store