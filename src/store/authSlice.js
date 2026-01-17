import { createSlice } from '@reduxjs/toolkit';

const savedAuth = JSON.parse(localStorage.getItem('auth')) || {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: savedAuth,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;

      state.user = {
        name: action.payload?.name || 'User',
        email: action.payload?.email || 'example@mail.com',
        phone: action.payload?.phone || 'Not set',
        address: action.payload?.address || 'Not set',
      };

      localStorage.setItem(
        'auth',
        JSON.stringify({
          isLoggedIn: state.isLoggedIn,
          user: state.user,
        })
      );
    },

    logout(state) {
      state.isLoggedIn = false;
      state.user = null;

      localStorage.setItem(
        'auth',
        JSON.stringify({
          isLoggedIn: false,
          user: null,
        })
      );
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
