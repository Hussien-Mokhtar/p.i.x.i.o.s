import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.wishlist.find(
        (item) => item.id === newProduct.id
      );

      if (existingProduct) {

        existingProduct.quantity += 1;
      } else {

        state.wishlist.push({ ...newProduct, quantity: 1 });
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
