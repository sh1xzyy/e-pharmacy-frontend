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

export const logoutUserThunk = createAsyncThunk(
  "/user/logout",
  async (_, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.user.accessToken;
      console.log(accessToken);

      if (!accessToken) {
        return thunkAPI.rejectWithValue("No accessToken");
      }

      const response = await authInstance.get("/user/logout", {
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
