import axios from "axios";

export const api = axios.create({
  baseURL: 'https://code-burguer-node-production.up.railway.app/'
})

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('deveBurger:userData')

  const token = userData && JSON.parse(userData).token

  config.headers.authorization = `Bearer ${token}`

  return config
})
