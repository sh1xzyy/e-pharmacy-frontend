import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../shared/api/axiosInstance";

export const createShopThunk = createAsyncThunk(
  "/shop/create-shop",
  async (body, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.user.accessToken;
      if (!accessToken) return thunkAPI.rejectWithValue("No accessToken");

      const response = await authInstance.post("/user/create-shop", body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
