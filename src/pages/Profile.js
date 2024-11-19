import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const displayDate = () => {
    document.getElementById("demo").innerHTML = new Date().toLocaleDateString();
  };

  return (
    <div>
      <header className="text-center py-3 bg-light">
        <div className="division">
          <h1 className="display-4">SMA Bintang Timur Balige</h1>
          <div className="logo mx-auto">
            <img src="/public\Logo3.jpg" alt="logo" className="img-fluid rounded" />
          </div>
        </div>
      </header>

      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
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
            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link" to="/register">Registration</Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link" to="/facilities">Facilities</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container my-5">
        <h1 className="heading text-center mb-4">Profile</h1>
        <div className="text-center mb-3">
          <img src="" alt="School Logo" className="img-fluid rounded" />
        </div>

        <p className="paragraph">
          Developers :
        </p>

        <h2 className="heading text-center my-4">Team Developers</h2>
        <p className="paragraph">
          <ul>

            <li>
              <strong>Shinta Eldo Marpaung</strong>
              <div className="text-center mb-3">
              <img src="" alt="Shinta E.M." className="img-fluid rounded" />
              </div>
              <em>
              Nama : Shinta Eldo Marpaung
              NIM : 41424026
              Prodi : Sarjana Terapan Teknologi Rekayasa Perangkat Lunak
              Tempat/Tanggal Lahir : 09 Oktober 2005
              Instagram : @klibraharuka
              </em>

              <strong>Nova Windyana Simanjuntak</strong>

            </li>
          </ul>
        </p>

        <button type="button" onClick={displayDate} className="btn btn-primary">
          Display Date & Time
        </button>
        <p id="demo" className="mt-3"></p>
      </div>

      {/* Footer Section */}
      <footer className="text-center py-4 bg-light mt-5">
        <hr />
        <p>BIOSCIENTIVE</p>
      </footer>
    </div>
  );
};

export default Profile;
