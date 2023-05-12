import axios from 'axios'
const axiosClient = axios.create({
  baseURL: import.meta.API_BASE_URL,
})

export default axiosClient
