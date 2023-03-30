import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, loginUser } from '../slices/userSlice';
import { Link } from 'react-router-dom';
import './SignIn.css';
import sociableLogo from './assets/Logo.png';

const SignIn = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const error = useSelector((state) => state.user.error);

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const handleSignUp = () => {
    setShowSignUp(true);
  };

  return (
    <div>
      <h1 className='words'>
        Welcome Back
        <br />
        <br />
        Sign In
      </h1>
      <img className='logo' src={sociableLogo} alt='logo' />
      <form className='login' onSubmit={handleSignIn}>
        <label className='label'>Email:</label>
        <input
          className='formBox'
          type='email'
          value={email}
          onChange={handleEmailChange}
        />

        <br />
        <label className='label'>Password:</label>
        <input
          className='formBox'
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />

        <br />
        {error && <p>{error}</p>}
        <Link to='/dashBoard'>
          <button className='button' type='submit'>
            Sign In
          </button>
        </Link>
      </form>
      <br />
      <Link to='/signUp'>
        <button className='button' onClick={handleSignUp}>
          Sign Up
        </button>
      </Link>
      {showSignUp && <div>This will navigate to the Sign Up page.</div>}
    </div>
  );
};

export default SignIn;
