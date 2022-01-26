import axios from 'axios';

const api = axios.create({
  baseURL: process.env.PUBLIC_END_POINT,
});

export const setUserApi = (token: string) => {
  api.defaults.headers.common["Authorization"] = `bearer ${token}`;
};

export default api;