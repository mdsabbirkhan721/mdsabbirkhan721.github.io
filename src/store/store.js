import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import wishListReducer from './wishListSlice';
import authReducer from './authSlice';
import productsReducer from './productsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,

    wishlist: wishListReducer,
    auth: authReducer,
    products: productsReducer,
  },
});

export default store;
