import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../entities/user/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
