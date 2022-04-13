import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { setUserApi } from "../../../utils/api";
import { ENDPOINTS } from "../../../config/endpoints";
import { IDriver } from "../../../types/drivers";
import { IResponseContract } from "../../../types/responseContract";
import { getAuthTokenUser } from "../../../utils/localStorage";
import { handleError } from "../../../utils/handleError";

export const fetchDrivers = createAsyncThunk(
  'drivers/fetch',
  async (_, thunkAPI) => {
    try {
      setUserApi(getAuthTokenUser());
      const response = await api.get<IResponseContract<IDriver[]>>(ENDPOINTS.showDrivers);
      return response.data;
    } catch (error) {
      handleError(error, thunkAPI);
    }
  }
)