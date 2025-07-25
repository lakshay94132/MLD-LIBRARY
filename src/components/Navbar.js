
import { Link } from 'react-router-dom';
import "./App.css";
export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding: '0px'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/assets/LOGOPNG.png" alt="MLD Library Logo" style={{ height: '60px', width: '130', padding: '0px'}} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="custom-toggler-bar"></span>
          <span className="custom-toggler-bar"></span>
          <span className="custom-toggler-bar"></span>
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
        </div>
      </div>
    </nav>
   
  );
}
