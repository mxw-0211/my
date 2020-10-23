import axios from 'axios'
import packageConfig from '../../package.json'
import store from '@/store'
import { Message } from 'element-ui'
const baseUrl = process.env.NODE_RNV === 'production' ? 'http://prod.com:8090' : 'http://localhost:8080'
let headers = {
  token: store.getters.token
}
let body = {
  appName: packageConfig.name
}
function createQuest (moduleUrl) {
  const request = axios.create({
    baseURL: baseUrl + moduleUrl,
    timeout: 1000 * 60
  })
  request.interceptors.request.use(config => {
    config.headers = headers
    config.data = {
      ...body,
      data: config.data
    }
    return config
  })
  request.interceptors.response.use(response => {
    const data = response.data
    if (data.code !== 0) {
      Message.error(data.message)
      return Promise.reject(data)
    }
    return data
  }, err => {
    return Promise.reject(err)
  })
  return request
}
export default createQuest