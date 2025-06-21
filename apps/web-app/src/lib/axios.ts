import axios from "axios"
import Cookies from "js-cookie"

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

request.interceptors.request.use((config) => {
  const token = Cookies.get("authToken")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default request
