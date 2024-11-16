import React from 'react';
import './styling.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import RegistrationForm from './pages/RegistrationForm.js';
import LoginForm from './pages/LoginForm.js';
import Homepage from './pages/Homepage.js';
import Materi from './pages/Materi.js';
import Profile from './pages/Profile.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <Router>
      <Navbar />
      <h1>Welcome to BIOSCIENTIVE</h1>

        <Routes>
          <Route path='/register' element={<RegistrationForm/>} />

          <Route path='/login' element={<LoginForm />} />

          <Route path='/home' element={<Homepage />} />

          <Route path='/materi' element={<Materi />} />

          <Route path='/profile' element ={<Profile />} /> 

          <Route path="/" element={<Navigate to="/register" replace />} />

        </Routes>

    </Router>
  );
}

export default App;


