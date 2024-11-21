import React from "react";
import "./Navbar.css"; // Import file CSS untuk styling tambahan
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span className="nav-title">BIOSCIENTIVE</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link className="nav-link hover-grow" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link hover-grow" to="/registration">
                Registration
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link hover-grow" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link hover-grow" to="/bioteknologi">
                Bioteknologi
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link hover-grow" to="/enzymemetabolism">
                Enzim dan Metabolisme
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link hover-grow" to="/pembelahansel&pewarisansifat">
                Pembelahan sel dan Pewarisan Sifat
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
