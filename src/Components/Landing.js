import react from 'react';
import './Landing.css';

function Landing() {
  return (
    <div>
      <div className='firstTitle'>
        <header>
          <h1>
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
    </div>
  );
}
export default Landing;
