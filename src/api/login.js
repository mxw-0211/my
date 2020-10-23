import createRequest from '@/utils/request'
const request = createRequest('/login-api')
export default {
  login(data) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  }
}