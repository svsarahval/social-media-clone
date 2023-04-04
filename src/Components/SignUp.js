import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import sociableLogo from './assets/Logo.png';
import beautiful from './assets/youarebeautiful.jpg';

const USER_URL = 'https://login-page-sociable-default-rtdb.firebaseio.com/';
const EXT = `.json`;

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [confPass, setConfPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      birthDate,
      confPass,
    };

    fetch(`${USER_URL}${EXT}`, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(newUser);
        // window.location.href = 'Dashboard.js';
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <header>
        <h1 className='greeting1'>
          Welcome to Sociable
          <br />
          <br />
          Join our Community
        </h1>
        <img className='pic1' src={beautiful} alt='A Lady' />
      </header>
      <form className='form' onSubmit={handleSubmit}>
        <label className='label' htmlFor='firstName'>
          First Name:
        </label>
        <input
          className='formBox'
          type='text'
          id='firstName'
          name='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label className='label' htmlFor='lastName'>
          Last Name:
        </label>
        <input
          className='formBox'
          type='text'
          id='lastName'
          name='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label className='label' htmlFor='email'>
          Email:
        </label>
        <input
          className='formBox'
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label className='label' htmlFor='password'>
          Password:
        </label>
        <input
          className='formBox'
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label className='label' htmlFor='confPass'>
          Confirm Password:
        </label>
        <input
          className='formBox'
          type='password'
          id='confPass'
          name='confPass'
          value={confPass}
          onChange={(e) => setConfPass(e.target.value)}
        />
        <br />
        <label className='label' htmlFor='birthDate'>
          Birth Date:
        </label>
        <input
          className='dob'
          type='date'
          id='birthDate'
          name='birthDate'
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <br />
        <Link to='/DashBoard'>
          <button className='btn' type='submit'>
            Submit
          </button>
        </Link>
      </form>
      <footer>
        <img className='logo' src={sociableLogo} alt='logo' />
      </footer>
    </>
  );
}

export { SignUp };
