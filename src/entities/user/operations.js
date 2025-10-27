import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../shared/api/axiosInstance";

export const loginUserThunk = createAsyncThunk(
  "/user/login",
  async (body, { rejectWithValue }) => {
    try {
      const response = await authInstance.post("/user/login", body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const registerUserThunk = createAsyncThunk(
  "/user/register",
  async (body, thunkAPI) => {
    try {
      const response = await authInstance.post("/user/register", body);
      thunkAPI.dispatch(
        loginUserThunk({ email: body.email, password: body.password })
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
