// userActions.js
import { LOGIN_USER } from './actionTypes';

export const loginUser = (username, password) => {
  return (dispatch) => {
    // Make API request to validate user credentials
    fetch('https://login-page-sociable-default-rtdb.firebaseio.com/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Dispatch successful login action
          dispatch({ type: LOGIN_USER, payload: data.user });
        } else {
          // Handle invalid credentials
          alert('Invalid username or password.');
        }
      })
      .catch((error) => {
        // Handle API request error
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
  };
};
