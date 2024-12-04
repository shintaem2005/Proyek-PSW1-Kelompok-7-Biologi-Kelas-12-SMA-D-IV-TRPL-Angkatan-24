import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReproduksiSel = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Reproduksi Sel</h1>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Reproduksi Sel</h2>
          <p className="card-text">
            Reproduksi sel adalah proses yang terjadi dalam kehidupan, guna menjamin keabadian keberadaan, pertumbuhan, penggantian jaringan, serta reproduksi makhluk multiseluler.
          </p>
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Tujuan Reproduksi Sel</h2>
          <p className="card-text">
            Tujuan reproduksi sel adalah mengembangbiakkan tiap organisme multiseluler. Dari proses reproduksi akan tumbuh dan berkembang sebuah organisme. Selain itu, tiap reproduksi sel juga bisa menghasilkan sel-sel gamet untuk melakukan reproduksi sel secara genetik.
          </p>
        </div>
      </div>

      <h2 className="text-center mt-5 mb-3">Jenis-Jenis Pembelahan Sel</h2>

      <div className="accordion" id="cellDivisionAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="mitosisHeading">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#mitosisCollapse" aria-expanded="true" aria-controls="mitosisCollapse">
              Pembelahan Mitosis
            </button>
          </h2>
          <div id="mitosisCollapse" className="accordion-collapse collapse show" aria-labelledby="mitosisHeading" data-bs-parent="#cellDivisionAccordion">
            <div className="accordion-body">
              <p>
                Adalah pembelahan sel yang paling umum dari eukariotik. Mitosis dapat terjadi ketika area tubuh berkembang, sel tua diganti, atau ketika area tubuh menjadi rusak. Fase pembelahan mitosis dibagi menjadi 4:
              </p>
              <ul>
                <li><strong>Profase:</strong> Benang kromatin berkondensasi membentuk kromosom, membran inti pecah, dan nukleolus menghilang.</li>
                <li><strong>Metafase:</strong> Sentriol di kutub sel membentuk benang spindel yang mengikat sentromer kromosom dan mengatur kromosom pada bidang ekuatorial.</li>
                <li><strong>Anafase:</strong> Kromatid saling berpisah dari sentromer dan bergerak menuju kutub yang berlawanan.</li>
                <li><strong>Telofase:</strong> Kromatid sampai di tiap kutub, membran inti terbentuk, dan sitoplasma membelah menjadi dua sel anak.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="meiosisHeading">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#meiosisCollapse" aria-expanded="false" aria-controls="meiosisCollapse">
              Pembelahan Meiosis
            </button>
          </h2>
          <div id="meiosisCollapse" className="accordion-collapse collapse" aria-labelledby="meiosisHeading" data-bs-parent="#cellDivisionAccordion">
            <div className="accordion-body">
              <p>
                Adalah proses yang berbeda dari reproduksi sel yang khusus dilakukan oleh organ reproduksi. Hasil meiosis adalah gamet pria maupun sel telur wanita, yang merupakan sel yang bergabung selama konsepsi.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="amitosisHeading">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#amitosisCollapse" aria-expanded="false" aria-controls="amitosisCollapse">
              Pembelahan Amitosis
            </button>
          </h2>
          <div id="amitosisCollapse" className="accordion-collapse collapse" aria-labelledby="amitosisHeading" data-bs-parent="#cellDivisionAccordion">
            <div className="accordion-body">
              <p>
                Merupakan proses pembelahan secara langsung atau biner. Jenis pembelahan ini banyak dilakukan organisme uniseluler seperti bakteri, protozoa, dan mikroalga. Tiap pembelahan biner menghasilkan dua sel yang identik.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Gametogenesis</h2>
          <p>
            Proses pembentukan gamet disebut gametogenesis, berlangsung secara meiosis (pematangan). Gametogenesis dibedakan menjadi dua:
          </p>
          <ul>
            <li><strong>Spermatogenesis:</strong> Berlangsung di testis dan melibatkan pembentukan sperma.</li>
            <li><strong>Oogenesis:</strong> Berlangsung di ovarium dan melibatkan pembentukan ovum.</li>
          </ul>
        </div>
      </div>

      {/* Video Pembelajaran */}
      <div className="mt-5">
        <h3 className="text-center mb-3">Video Pembelajaran: Reproduksi Sel</h3>
        <div className="text-center mb-3">
          {/* Gantilah link src dengan link video yang sesuai */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MAt-PF5-E74?si=5R89B2pKPpgxa0sL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p className="text-center">
          Video ini memberikan penjelasan lebih mendalam mengenai proses-proses dalam reproduksi sel, termasuk mitosis, meiosis, dan gametogenesis. Dalam video ini, Anda akan memahami lebih jelas bagaimana pembelahan sel bekerja untuk menghasilkan sel-sel baru dalam tubuh organisme multiseluler.
        </p>
      </div>
    </div>
  );
};

export default ReproduksiSel;
