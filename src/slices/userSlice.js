import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    error: '',
  },
  reducers: {
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

const { loginSuccess, loginFailure } = userSlice.actions;

const loginUser = (email, password) => async (dispatch) => {
  try {
    const res = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAMz5TdOBI8Z9gYTJgW3I_2RsT_hFbCGc0',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: true }),
      }
    );
    const data = await res.json();
    console.log(data);
    dispatch(loginSuccess());
  } catch (error) {
    dispatch(loginFailure('Invalid email or password'));
  }
};

export { userSlice, loginUser };
