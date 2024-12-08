import React from "react";
import './styles.css';
import './Card.css';

const Homepage = () => {
  
  return (
  
    <div>
      <div className="container-fluid py-5 mb-5 hero-header bg-animated">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown  herald">
                Welcome to BIOSCIENTIVE
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Temukan materi dan sumber daya terbaik untuk mendukung perjalanan pendidikan Anda, dari dasar hingga mahir!
              </p>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Temukan Materi"
                />
                <button
                  type="button"
                  className="btn btn-success rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ marginTop: 7 }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <section className="row align-items-center mt-4 bg-white p-4 shadow-sm rounded">

      <div className="col-md-3">
        <div className="card-container">
            <img class="card-img-top" src="https://cdn.prod.website-files.com/62041b52ed8a5756a8361408/650b76b2a66ebc491e52d45f_abundance-2.jpg" alt="Card Enzim dan Metabolisme" />
            <div class="card-content">
              <h5 class="card-title">Pertumbuhan dan Perkembangan</h5>
              <p class="card-text"></p>
              <button className="btn"><a href="./pertumbuhandanperkembangan" className="btn">Go To Page</a>
              </button>
            </div>
        </div>
        </div>

        <div className="col-md-3">
        <div className="card-container">
            <img class="card-img-top" src="https://bpsbioscience.com/media/wysiwyg/Landing_Pages/Metabolism_Diagram.png" alt="Card Enzim dan Metabolisme" />
            <div class="card-content">
              <h5 class="card-title">Enzim dan Metabolisme</h5>
              <p class="card-text"></p>
              <button className="btn"><a href="./enzymemetabolism" className="btn">Go To Page</a>
              </button>
            </div>
        </div>
        </div>

        <div className="col-md-3">
        <div className="card-container">
            <img class="card-img-top" src="https://cdn.prod.website-files.com/62041b52ed8a5756a8361408/650b76b2a66ebc491e52d45f_abundance-2.jpg" alt="Card Enzim dan Metabolisme" />
            <div class="card-content">
              <h5 class="card-title">Reproduksi Sel</h5>
              <p class="card-text"></p>
              <button className="btn"><a href="./reproduksisel" className="btn">Go To Page</a>
              </button>
            </div>
        </div>
        </div>

        <div className="col-md-3">
        <div className="card-container">
            <img class="card-img-top" src="https://mmc.tirto.id/image/2024/01/02/ilustrasi-dna-istock-1447532807_ratio-16x9.jpg" alt="Card Enzim dan Metabolisme" />
            <div class="card-content">
              <h5 class="card-title">Substansi Materi Genetika</h5>
              <p class="card-text"></p>
              <button className="btn"><a href="./substansimaterigenetika" className="btn">Go To Page</a>
              </button>
            </div>
        </div>
        </div>

        <div className="col-md-3">
        <div className="card-container">
            <img class="card-img-top" src="https://www.w3schools.com/w3images/forestbridge.jpg" alt="Card Pembelahan Sel dan Pewarisan Sifat" />
            <div class="card-content">
              <h5 class="card-title">Pembelahan Sel dan Pewarisan Sifat</h5>
              <p class="card-text"></p>
              <button className="btn"><a href="./PembelahanseldanPewarisansifat" className="btn">Go To Page</a>
              </button>
            </div>
        </div>
        </div>

        <div className="col-md-3">
        <div className="card-container">
            <img class="card-img-top" src="https://cdn-2.tstatic.net/batam/foto/bank/images/ilustrasi-dna-berkaitan-dengan-genetika-manusia.jpg" alt="Card Mutasi" />
            <div class="card-content">
              <h5 class="card-title">Pola-Pola Hereditas</h5>
              <p class="card-text"></p>
              <button className="btn"><a href="./polapolahereditas" className="btn">Go To Page</a>
              </button>
            </div>
        </div>
        </div>

        <div className="col-md-3">
        <div className="card-container">
            <img class="card-img-top" src="https://d1bpj0tv6vfxyp.cloudfront.net/articles/554273_9-4-2021_21-50-26.webp" alt="Card Mutasi" />
            <div class="card-content">
              <h5 class="card-title">Mutasi</h5>
              <p class="card-text"></p>
              <button className="btn"><a href="./Mutasi" className="btn">Go To Page</a>
              </button>
            </div>
        </div>
        </div>

        <div className="col-md-3">
        <div className="card-container">
            <img class="card-img-top" src="https://cdn.prod.website-files.com/62041b52ed8a5756a8361408/650b76b2a66ebc491e52d45f_abundance-2.jpg" alt="Card Evolusi" />
            <div class="card-content">
              <h5 class="card-title">Evolusi</h5>
              <p class="card-text"></p>
              <button className="btn"><a href="./evolusi" className="btn">Go To Page</a>
                </button>
            </div>
        </div>
        </div>

        <div className="col-md-3">
        <div className="card-container">
            <img class="card-img-top" src="https://awsimages.detik.net.id/community/media/visual/2023/07/04/biologist-researcher-analyzing-biological-slide-for-agriculture-expertise.jpeg?w=1200&q=90" alt="Card Bioteknologi" />
            <div class="card-content">
              <h5 class="card-title">Bioteknologi</h5>
              <p class="card-text"></p>
              <button className="btn"><a href="./bioteknologi" className="btn">Go To Page</a>
              </button>
            </div>
        </div>
        </div>

      </section>

    </div>
  );
};

export default Homepage;
