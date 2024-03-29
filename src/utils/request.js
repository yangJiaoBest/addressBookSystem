/**
 * @file request.js
 */
import axios from 'axios';
import { message } from 'ant-design-vue';

//创建axios实例
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_HOST,
  timeout: 5000
})


const GATE = import.meta.env.VITE_APP_HOST + 'login';
// 请求数据格式为form-data
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';

//响应拦截器
request.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  //处理网络错误
  let msg = '';
  let status = error.response.status;
  switch (status) {
    case 401:
      msg = "token过期";
      window.location.href = GATE;
      break;
    case 403:
      msg = '无权访问';
      break;
    case 404:
      msg = "请求地址错误";
      break;
    case 500:
      msg = "服务器出现问题";
      break;
    default:
      msg = "无网络";

  }
  message({
    type: 'error',
    message: msg
  })
  return Promise.reject(error);
});





export default request;
