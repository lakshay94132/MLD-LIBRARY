import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg ${mode === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">MLD LIBRARY</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/facility">Facility</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/owner">Owner</NavLink>
            </li>
          </ul>
          <button className={`btn btn-outline-${mode === 'light' ? 'dark' : 'light'}`} onClick={toggleMode}>
            {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}
