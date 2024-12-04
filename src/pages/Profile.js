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
          <h1 className="display-4">Web Biologi Kelas 12</h1> 
        </div>
      </header>

      {/* Main Content */}
      <div className="container my-5">
        <h1 className="heading text-center mb-4">Developers Team</h1>

        <p className="paragraph">
          Developers :
        </p>

        <p className="paragraph">
          <ul>

            <li>
              <strong>Shinta Eldo Marpaung</strong>
              <div className="text-center mb-3">
              <img src="" alt="Shinta E.M." className="img-fluid rounded" />
              </div>
              <em>
              Nama : Shinta Eldo Marpaung <br />
              NIM : 41424026 <br />
              Prodi : Sarjana Terapan Teknologi Rekayasa Perangkat Lunak <br />
              Tempat/Tanggal Lahir : 09 Oktober 2005 <br />
              Instagram : @klibraharuka
              </em>
            </li> <br />

            <li>
              <strong>Nova</strong>
              <div className="text-center mb-3">
              <img src="" alt="Nova W.S." className="img-fluid rounded" />
              </div>
              <em>
              Nama : <br />
              NIM : 
              Prodi : Sarjana Terapan Teknologi Rekayasa Perangkat Lunak <br />
              Tempat/Tanggal Lahir : 
              Instagram : <br />
              </em>
            </li> <br />

            <li>
              <strong>Nahesson</strong>
              <div className="text-center mb-3">
              <img src="" alt="Nahesson" className="img-fluid rounded" />
              </div>
              <em>
              Nama :Nahesson Sugos Nainggolan<br />
              NIM : 41424006<br />
              Prodi : Sarjana Terapan Teknologi Rekayasa Perangkat Lunak <br />
              Tempat/Tanggal Lahir : Pematangsiantar/05-01-2007<br />
              Instagram : @nessongl<br />
              </em>
            </li> <br />

            <li>
              <strong>Shandra</strong>
              <div className="text-center mb-3">
              <img src="" alt="Shandra G.N." className="img-fluid rounded" />
              </div>
              <em>
              Nama : Shandra Grace Nainggolan <br />
              NIM : 41424029 <br />
              Prodi : Sarjana Terapan Teknologi Rekayasa Perangkat Lunak <br />
              Tempat/Tanggal Lahir : 13 Juni 2006 <br />
              Instagram : @shndrangln <br />
              </em>
            </li> <br />
            
          </ul>
        </p>

        <button type="button" onClick={displayDate} className="btn btn-primary">
          Display Date
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
