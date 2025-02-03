import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../LOGIN & REGISTER/WishlistSlice";
export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});
