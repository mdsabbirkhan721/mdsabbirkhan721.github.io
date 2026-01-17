import { createSlice } from '@reduxjs/toolkit';
import {
  loadWishListFromStorage,
  saveWishListToStorage,
} from './wishListStorage';

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState: loadWishListFromStorage(),
  reducers: {
    addToWishList(state, action) {
      const exists = state.find((item) => item.id === action.payload.id);

      if (!exists) {
        state.push(action.payload);
        saveWishListToStorage(state);
      }
    },

    removeFromWishList(state, action) {
      const updated = state.filter((item) => item.id !== action.payload);
      saveWishListToStorage(updated);
      return updated;
    },

    clearWishList() {
      saveWishListToStorage([]);
      return [];
    },
  },
});

export const wishListActions = wishListSlice.actions;
export default wishListSlice.reducer;
