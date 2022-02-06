import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILogin } from '../../../components/login';
import api from '../../../components/utils/api';
import { ENPOINTS } from '../../../config/endpoints';
import { IResponseLogin } from '../../../types/auth';
import { IResponseContract } from '../../../types/responseContract';
import { setUserApi } from '../../../utils/api';

export const login = createAsyncThunk(
  'login/login',
  async (credentials: ILogin, thunkAPI) => {
    try {
      const response = await api.post<IResponseLogin>(ENPOINTS.login, credentials);
      console.log(response);
      setUserApi(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createUser = createAsyncThunk(
  'createUser/add',
  async (_, thunkAPI) => {
    try {
      const response = await api.post(ENPOINTS.createUser, { email: 'email@email.com', user: 'admin', password: '123456' });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);