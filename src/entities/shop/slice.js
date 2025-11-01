import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { createShopThunk } from "./operations";

const initialState = {
  shop: {
    name: null,
    ownerName: null,
    email: null,
    phone: null,
    address: null,
    city: null,
    zip: null,
    ownDeliverySystem: false,
    owner: null,
    productIds: [],
  },
  isLoading: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createShopThunk.fulfilled, (state, action) => {
        console.log(action.payload);

        state.shop = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(createShopThunk.pending, (state) => {
          state.isLoading = true;
        })
      )
      .addMatcher(
        isAnyOf(createShopThunk.rejected, (state) => {
          state.isLoading = false;
        })
      );
  },
});

export default shopSlice.reducer;
