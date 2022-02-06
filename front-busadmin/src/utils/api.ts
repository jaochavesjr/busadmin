import axios from 'axios';
import { getAuthTokenUser } from './localStorage';

const api = axios.create({
  // baseURL: process.env.PUBLIC_END_POINT, 
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const setUserApi = (token: string) => {
  console.log(token, 'tokenapi');

  api.interceptors.request.use((config) => {
    // const token = getAuthTokenUser().toString();
    console.log(token, 'tokenapi');
    if (token) {
      console.log(token, 'linha 22 api');
    
      (config.headers as any).Authorization = `Bearer ${token}`;
    }
    return config;
  });
  api.defaults.headers.common["Authorization"] = `Bearer ${token.toString()}`;
  console.log(`Bearer ${token}`);
};

api.interceptors.request.use((config) => {
  const token = getAuthTokenUser().toString();
  console.log(token, 'tokenapi');
  if (token) {
    console.log(token, 'linha 22 api');
    
    (config.headers as any).Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
