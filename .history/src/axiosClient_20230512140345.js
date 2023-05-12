import axios from 'axios'
const axiosClient = axios.create({
  baseURL: import.meata.API_BASE_URL,
})

export default axiosClient
