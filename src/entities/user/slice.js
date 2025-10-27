import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginUserThunk, registerUserThunk } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(loginUserThunk.pending, registerUserThunk.pending, (state) => {
          state.isLoading = true;
        })
      )
      .addMatcher(
        isAnyOf(
          loginUserThunk.rejected,
          registerUserThunk.rejected,
          (state) => {
            state.isLoading = false;
          }
        )
      );
  },
});

export default authSlice.reducer;
