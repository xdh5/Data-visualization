/* eslint-disable */

import axios from 'axios'
import store from '@/store/index'
import { Message } from 'element-ui';

var instance = axios.create({
  timeout: 1000 * 12
})

instance.interceptors.request.use(
  config => {
    const mode = store.state.mode
    mode && (config.headers.Authorization = mode)
    return config
  },
  error => Promise.error(error)
)

instance.interceptors.response.use( response => {
  const res = response.data
  return res
}, error => {
  if(error.response.data.msg){
    Message.error(error.response.data.msg)
  }else{
    Message.error('系统错误，请联系管理员')
  }
  return Promise.reject(error);
})

export default instance
