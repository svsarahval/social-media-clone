import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, loginUser } from '../slices/userSlice';

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
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Email:
          <input type='email' value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        {error && <p>{error}</p>}
        <button type='submit'>Sign In</button>
      </form>
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
      {showSignUp && <div>This will navigate to the Sign Up page.</div>}
    </div>
  );
};

export default SignIn;
