import axios from 'axios';

const api = axios.create({
  // baseURL: process.env.PUBLIC_END_POINT, 
  baseURL: 'http://localhost:3000/',
});

export const setUserApi = (token: string) => {
  api.defaults.headers.common["Authorization"] = `bearer ${token}`;
};

export default api;