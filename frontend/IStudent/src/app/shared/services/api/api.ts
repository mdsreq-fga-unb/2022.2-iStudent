import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL ?  process.env.API_URL : "http://localhost:3001",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("ISTUDENT:TOKEN")
  if(!token) return config
  return {
    ...config,
    headers: { Authorization: `Bearer ${token}` }
  }
})

export {
  api
}
