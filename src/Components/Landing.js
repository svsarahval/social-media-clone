import react, { Component } from 'react';
import './Landing.css';

function Landing() {
  return (
    <div>
      <div>
        <header className='headers'>
          <h1 className='firstTitle'>
            Welcome to Sociable
            <br />
            <br />A place where anything is possible
          </h1>

          <img
            className='sociableLogoPic'
            src='assets/logo.png'
            alt='logo'
          ></img>
        </header>
      </div>

      <div className='pics'>
        <img src='assets/youAreBeautiful.jpg' alt='Picture of a Lady'></img>
        <img
          src='social-media-clone\public\assets\whats dropping.jpg'
          alt='Picture of a Man'
        ></img>
        <img src='assets/letsDoLunch.jpg' alt='Picture of a Family'></img>
      </div>

      <div>
        <button className='clickMe'>Sign Up</button>
        <button className='clickMe'>Sign In</button>
      </div>

      <div className='greeting'>
        <img src='assets/greetingImage.jpg' alt='Greeting' />
      </div>
    </div>
  );
}
export default Landing;
