import './SignIn.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from './actions/userActions';
import { LOGIN_USER } from './actions/actionTypes';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Validate input
    if (!username || !password) {
      alert('Please enter your username and password.');
      return;
    }

    // Dispatch login action
    dispatch(loginUser(username, password));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      <p>
        Don't have an account? <a href='/signup'>Sign up</a>
      </p>
    </div>
  );
};

export default LoginPage;
