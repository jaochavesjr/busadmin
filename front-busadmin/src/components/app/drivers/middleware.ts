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
      console.log(response);
      return response.data;
    } catch (error) {
      handleError(error, thunkApi);
    }
  }
);
