import axios from 'axios';
import { getAuthTokenUser } from './localStorage';

const api = axios.create({
  // baseURL: process.env.PUBLIC_END_POINT, 
  baseURL: 'http://localhost:3001',
  headers: {
    
  }
});

api.interceptors.request.use((config) => {
  const token = getAuthTokenUser();
  (config.headers as any).Authorization = `bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NTA0MTc1Njl9.dBdOVlsfxl2uqLBnT9c5PpdsLx1EeKHbWpaVK6evC3U"}`;
  // "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NTA0MTc0NzN9.thpKLqckqvlVgde0mWyNYEhkwASIQVJFH6-olKjYRuk"
  // eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NTA0MTc1Njl9.dBdOVlsfxl2uqLBnT9c5PpdsLx1EeKHbWpaVK6evC3U
  return config;
});

export const setUserApi = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `bearer ${token}`
};

export default api;
