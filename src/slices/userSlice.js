import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    email: '',
    password: '',
    error: '',
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    loginSuccess: (state) => {
      state.isLoggedIn = true;
      state.error = '';
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
  },
});

export const { setEmail, setPassword, loginSuccess, loginFailure } =
  userSlice.actions;

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://login-page-sociable-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalTo="${email}"`
    );
    const [userId, userData] = Object.entries(res.data)[0];
    if (userData.password === password && userId.email === email) {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure('Invalid email or password'));
    }
  } catch (error) {
    dispatch(loginFailure('Invalid email or password'));
  }
};

export default userSlice.reducer;
