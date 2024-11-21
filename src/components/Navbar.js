import React from "react";
import "./Navbar.css"; 
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/home">BIOSCIENTIVE</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
