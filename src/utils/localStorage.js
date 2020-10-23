const TOKEN = 'token'
export default {
  getToken() {
    return localStorage.getItem(TOKEN)
  },
  setToken(token) {
    return localStorage.setItem(TOKEN, token)
  }
}