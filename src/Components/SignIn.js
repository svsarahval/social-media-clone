import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, loginUser } from '../slices/userSlice';
import { Link } from 'react-router-dom';
import './SignIn.css';
import sociableLogo from './assets/Logo.png';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(email, password));
    } catch (error) {
      setError(error.message);
    }
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
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <label className='label'>Password:</label>
        <input
          className='formBox'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        {/* {error && <p>{error}</p>} */}
        <Link to='/dashBoard'>
          <button className='button' type='submit'>
            Sign In
          </button>
        </Link>
      </form>
      <br />
      <Link to='/signUp'>
        <button className='button' onClick={handleSignIn}>
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default SignIn;
