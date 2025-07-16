import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Facility from './pages/Facility';
import Owner from './pages/Owner';

function App() {
  return (
    <Router>
      <Header/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
