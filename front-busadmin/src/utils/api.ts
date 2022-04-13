import axios from 'axios';
import { getAuthTokenUser } from './localStorage';

const api = axios.create({
  // baseURL: process.env.PUBLIC_END_POINT, 
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  const token = getAuthTokenUser();
  (config.headers as any).Authorization = `Bearer ${token}`;
  return config;
});

export const setUserApi = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `bearer ${token}`
};

export default api;
