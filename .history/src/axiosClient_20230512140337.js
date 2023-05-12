import axios from 'axios'
const axiosClient = axios.create({
  baseURL: import.env.API_BASE_URL,
})

export default axiosClient
