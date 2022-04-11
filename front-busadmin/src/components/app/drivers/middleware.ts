import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS } from "../../../config/endpoints";
import { IDriver } from "../../../types/drivers";
import api from "../../../utils/api";
import { handleError } from "../../../utils/handleError";

export const createDriver = createAsyncThunk(
  'driver/add',
  async (data: IDriver, thunkApi) => {
    try {
      const response = await api.post<IDriver>(ENDPOINTS.createDriver, data);
      return response.data;
    } catch (error) {
      handleError(error, thunkApi);
    }
  }
);

export const updateDriver = createAsyncThunk(
  'driver/update',
  async (data: any, thunkApi) => {
    try {
      const { id, ...dataDriver } = data;
      const response = await api.put<IDriver>(ENDPOINTS.updateDriver(id), dataDriver);
      return response.data
    } catch (error) {
      handleError(error, thunkApi);
    }
  }
);
