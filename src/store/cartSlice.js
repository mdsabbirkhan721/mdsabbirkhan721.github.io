import { createSlice } from '@reduxjs/toolkit';
import { loadCartFromStorage, saveCartToStorage } from './cartStorage';

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromStorage(),
  reducers: {
    addToCart(state, action) {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveCartToStorage(state);
    },

    increaseQty(state, action) {
      const item = state.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
      saveCartToStorage(state);
    },

    decreaseQty(state, action) {
      const item = state.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      saveCartToStorage(state);
    },

    removeFromCart(state, action) {
      const updated = state.filter((i) => i.id !== action.payload);
      saveCartToStorage(updated);
      return updated;
    },

    clearCart() {
      saveCartToStorage([]);
      return [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
