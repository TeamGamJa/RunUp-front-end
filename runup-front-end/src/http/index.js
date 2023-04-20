import axios from "axios"
import store from "../store"

const http = axios.create({
  baseURL: "http://localhost:8081/", // 내가 실행시킬 홈페이지 주소를 입력하면 된다. 
  headers: { "content-type": "application/json" },
})

http.interceptors.request.use(
  config => {
    const isAuthenticated = store.getters["isAuthenticated"]
    if (isAuthenticated) {
      config.headers.common["Authorization"] = store.getters["getAccessToken"]
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)
http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"

export default http 

// 서버를 틀어놓고 있지 않으면 문제가 생길 여지가 있는 곳