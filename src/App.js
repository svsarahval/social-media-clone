import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import SignIn from './Components/SignIn';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './Components/SignUp';
import Dashboard from './Components/DashBoard';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/dashBoard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
