import createRequest from '@/utils/request'
const request = createRequest('/user-api')
export default {
  getPermission(data) {
    return request({
      url: '/getPermission',
      method: 'post',
      data
    })
  },
  getUserInfo(data) {
    return request({
      url: '/getUserInfo',
      method: 'post',
      data
    })
  }
}