import axios, { AxiosRequestConfig } from 'axios'

export const Request = (config: AxiosRequestConfig) => {
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })

  // 请求拦截器
  instance.interceptors.request.use(reqConfig => {
    return reqConfig;
  }, error => { })

  // 响应拦截器
  instance.interceptors.response.use(result => {
    return result;
  }, error => { })

  return instance(config)
}