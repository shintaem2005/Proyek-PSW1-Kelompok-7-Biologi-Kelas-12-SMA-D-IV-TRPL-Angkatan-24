import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EnzymeMetabolism.css';

const EnzymeMetabolism = () => {
  return (
    <div className="container-fluid enzyme-page">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="title mt-4">Enzim dan Metabolisme</h1>
          <p className="subtitle">Mengenal peran enzim dalam proses metabolisme</p>
        </div>
      </div>

      {/* Card Metabolisme */}
      <div className="row mt-4 justify-content-center">
        <div className="col-md-8">
          <div className="card metabolism-card">
            <div className="card-body">
              <h2 className="card-title">Apa itu Metabolisme?</h2>
              <p className="card-text">
                Metabolisme merupakan serangkaian peristiwa reaksi-reaksi kimia yang berlangsung dalam sel makhluk hidup. Metabolisme juga merupakan aktivitas hidup yang selalu terjadi pada setiap sel hidup.
              </p>
            </div>
            <div className="hidden-text">
              Metabolisme adalah serangkaian peristiwa reaksi-reaksi kimia yang terjadi dalam tubuh untuk mengubah makanan menjadi energi. Proses ini menghasilkan ATP yang diperlukan untuk berbagai aktivitas vital tubuh.
            </div>
          </div>
        </div>
      </div>

      {/* Card Enzim */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card enzyme-card">
            <div className="card-body">
              <h2 className="card-title">Apa itu Enzim?</h2>
              <p className="card-text">
                Enzim adalah molekul protein yang bertindak sebagai katalis dalam berbagai reaksi kimia biologis. Mereka mempercepat proses tanpa berubah secara permanen.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card enzyme-card">
            <div className="card-body">
              <h2 className="card-title">Proses Metabolisme</h2>
              <p className="card-text">
                Metabolisme mencakup semua reaksi kimia dalam tubuh yang membantu mempertahankan kehidupan, termasuk anabolisme (pembangunan) dan katabolisme (penguraian).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card enzyme-card">
            <div className="card-body">
              <h2 className="card-title">Jenis-jenis Enzim</h2>
              <ul>
                <li>Enzim Hidrolase</li>
                <li>Enzim Transferase</li>
                <li>Enzim Ligase</li>
                <li>Enzim Isomerase</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card enzyme-card">
            <div className="card-body">
              <h2 className="card-title">Faktor yang Mempengaruhi Kerja Enzim</h2>
              <p>
                Aktivitas enzim dipengaruhi oleh suhu, pH, konsentrasi substrat, dan inhibitor enzim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnzymeMetabolism;
