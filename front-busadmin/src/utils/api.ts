import axios from 'axios';

const api = axios.create({
  // baseURL: process.env.PUBLIC_END_POINT, 
  baseURL: 'http://localhost:3000',
});

export const setUserApi = (token: string) => {
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
};

export default api;
