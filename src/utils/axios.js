import axios from 'axios';
import { getCookie } from "./cookie";

const AXIOSAPI = axios.create({
  baseURL: 'https://todolist-api.hexschool.io'
});
AXIOSAPI.interceptors.request.use(
  (config) => {
    const token = getCookie('token')
    if(token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

AXIOSAPI.interceptors.response.use((response) => {
  return response
},(error) => {
  if (error.response) {
    switch (error.response.status) {
      //可以在這裡針對不同 status code 做處理
      case 401:
        // alert("token 無效");
        console.log(error.message);
        break;
      case 404:
        // alert("頁面不存在");
        console.log(error.message);
        break;
      case 500:
        // alert("程式發生問題");
        console.log(error.message);
        break;
      default:
        // alert("程式發生問題");
        console.log(error.message);
    }
  }
  if (!window.navigator.onLine) {
    alert("請重新連線後重整網頁");
    return;
  }
  return Promise.reject(error)
})

export default AXIOSAPI