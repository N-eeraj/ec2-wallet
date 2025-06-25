import axios from "axios"
import Cookies from "js-cookie"
import camelcaseKeys from "camelcase-keys"
import snakecaseKeys from "snakecase-keys"

// set base URL
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

request.interceptors.request.use((config) => {
  // send bearer token in request headers, if it exists in cookies
  const token = Cookies.get("authToken")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  // change payload to snake case based on env
  if (import.meta.env.VITE_API_USES_SNAKE_CASE === "true" && config.data && typeof config.data === "object") {
    config.data = snakecaseKeys(config.data, { deep: true })
  }

  return config
})

request.interceptors.response.use(
  (response) => {
    // change response data to camelcase
    if (response.data && typeof response.data === "object") {
      response.data = camelcaseKeys(response.data, { deep: true })
    }
    return response
  }, (error) => {
    return Promise.reject(error)
  }
)

export default request
