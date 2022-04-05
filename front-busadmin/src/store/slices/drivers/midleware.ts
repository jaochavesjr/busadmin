import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../utils/api";
import { ENDPOINTS } from "../../../config/endpoints";
import { IDriver } from "../../../types/drivers";
import { IResponseContract } from "../../../types/responseContract";

export const fetchDrivers = createAsyncThunk(
  'drivers,fetch',
  async (_, thunkAPI) => {
    try {
      const response = await api.get<IResponseContract<IDriver[]>>(ENDPOINTS.showDrivers);
      return response.data;
    } catch (error) {
      console.log((error as any).response);
    }
  }
)