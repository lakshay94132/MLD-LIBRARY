import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar({ mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg ${mode === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MLD LIBRARY</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Facility">Facility</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Owner">Owner</Link>
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
