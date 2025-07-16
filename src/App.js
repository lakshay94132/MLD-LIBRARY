import React, { useState } from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Facility from './pages/Facility';
import Owner from './pages/Owner';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} />
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
