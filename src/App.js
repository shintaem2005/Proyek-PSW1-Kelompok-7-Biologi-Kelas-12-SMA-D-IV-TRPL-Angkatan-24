import React from 'react';
import './styling.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import RegistrationForm from './pages/RegistrationForm.js';
import LoginForm from './pages/LoginForm.js';
import Homepage from './pages/Homepage.js';
import EnzymeMetabolism from './pages/EnzymeMetabolism.js';
import ReproduksiSel from './pages/ReproduksiSel.js';
import SubstansiMateriGenetika from './pages/SubstansiMateriGenetika.js';
import PembelahanseldanPewarisansifat from './pages/PembelahanseldanPewarisansifat.js';
import PolaPolaHereditas from './pages/PolaPolaHereditas.js';
import Mutasi from './pages/Mutasi.js';
import Evolusi from './pages/Evolusi.js';
import Bioteknologi from './pages/Bioteknologi.js';
import Profile from './pages/Profile.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <Router>
      <Navbar />
      

        <Routes>
          <Route path='/register' element={<RegistrationForm/>} />

          <Route path='/login' element={<LoginForm />} />

          <Route path='/home' element={<Homepage />} />

          <Route path='/profile' element ={<Profile />} />

          <Route path='/enzymemetabolism' element ={<EnzymeMetabolism />} />

          <Route path='/reproduksisel' element ={<ReproduksiSel />} />  

          <Route path='/substansimaterigenetika' element ={<SubstansiMateriGenetika />} /> 

          <Route path='/PembelahanseldanPewarisansifat' element ={<PembelahanseldanPewarisansifat />} /> 

          <Route path='/polapolahereditas' element ={<PolaPolaHereditas />} /> 

          <Route path='/mutasi' element ={<Mutasi />} /> 

          <Route path='/evolusi' element ={<Evolusi />} />

          <Route path='/bioteknologi' element ={<Bioteknologi />} />

          <Route path="/" element={<Navigate to="/home" replace />} />

        </Routes>

    </Router>
  );
}

export default App;


