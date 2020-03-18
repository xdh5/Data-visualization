/* eslint-disable */
/** 
 * 前后端通过请求头Authorization 和  sessionToken交互, 所有跳转都由sessionToken控制
 * 前端状态为 mode = normal, handle, start
 * 当sessionToken 为 空, 设置为 normal
 * 当sessionToken 为 normal, 不进行任何操作
 * 当sessionToken 为 handle, 数据正在处理中
**/

import axios from 'axios'
import store from '@/store/index'
import { Message } from 'element-ui';

var instance = axios.create({
  timeout: 1000 * 12
})

/**
 * 请求拦截器, 请求头引入mode
 */
instance.interceptors.request.use(
  config => {
    const mode = store.state.mode
    mode && (config.headers.Authorization = mode)
    return config
  },
  error => Promise.error(error)
)

/**
 * 响应拦截器, mode存入localStorage
 */
instance.interceptors.response.use(
  response => {
    const res = response.data
    if (res.sessionToken) {
      localStorage.setItem("mode", res.sessionToken)
      store.commit("SET_MODE", res.sessionToken)
    } else {
      localStorage.setItem("mode", 'normal')
      store.commit("SET_MODE", 'normal')
      return res
    }
  },
  error => {
    Message.error('系统错误，请联系管理员')
  }
)

export default instance
