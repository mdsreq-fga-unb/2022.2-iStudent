import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL
    : 'http://localhost:3001',
});

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('ISTUDENT:TOKEN');
  if (!token) return config;
  return {
    ...config,
    headers: { Authorization: `Bearer ${token}` },
  };
});

export { api };
