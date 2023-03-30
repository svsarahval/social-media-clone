import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import SignIn from './Components/SignIn';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
