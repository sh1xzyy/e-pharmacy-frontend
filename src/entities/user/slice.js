import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  loginUserThunk,
  logoutUserThunk,
  refreshUserThunk,
  registerUserThunk,
} from "./operations";

const initialState = {
  user: {
    image: null,
    name: null,
    email: null,
    spent: null,
    phone: null,
    address: null,
    accessToken: null,
    refreshToken: null,
  },
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.user.accessToken = action.payload.data.accessToken;
        state.user.refreshToken = action.payload.data.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        console.log(action.payload);

        state.user.accessToken = action.payload.data.accessToken;
        state.user.refreshToken = action.payload.data.refreshToken;
      })
      .addCase(logoutUserThunk.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          loginUserThunk.pending,
          registerUserThunk.pending,
          refreshUserThunk.pending,
          logoutUserThunk.pending,
          (state) => {
            state.isLoading = true;
          }
        )
      )
      .addMatcher(
        isAnyOf(
          loginUserThunk.rejected,
          registerUserThunk.rejected,
          refreshUserThunk.rejected,
          logoutUserThunk.rejected,
          (state) => {
            state.isLoading = false;
          }
        )
      );
  },
});

export default authSlice.reducer;
