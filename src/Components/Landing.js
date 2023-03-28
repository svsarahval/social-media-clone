import React from 'react';
import './Landing.css';
import beautiful from './assets/youarebeautiful.jpg';
import whatsDropping from './assets/whatsdropping.jpg';
import letsDoLunch from './assets/letsdolunch.jpg';
import greetingImage from './assets/greetingimage.jpg';
import sociableLogo from './assets/Logo.png';
import useNavigate from 'react-router';

function Landing() {
  return (
    <div>
      <header className='headers'>
        <h1 className='firstTitle'>
          Welcome to Sociable
          <br />
          <br />A place where anything is possible
        </h1>
        <img className='logo' src={sociableLogo} alt='logo' />
      </header>

      <div className='pics'>
        <img className='pic1' src={beautiful} alt='A Lady' />
        <img className='pic2' src={whatsDropping} alt='A Man' />
        <img className='pic3' src={letsDoLunch} alt='A Family' />
      </div>

      <div>
        <button className='clickMe'>Sign Up</button>
        <button className='clickMe'>Sign In</button>
      </div>

      <div className='greeting'>
        <img src={greetingImage} alt='Greeting' />
      </div>
    </div>
  );
}

export default Landing;
