import React, { useState } from "react";

const PembelahanseldanPewarisansifat = () => {
  const [showFact, setShowFact] = useState(false);

  const toggleFact = () => setShowFact(!showFact);

  return (
    <div className="container" style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Materi Biologi: Pewarisan Sifat & Pembelahan Sel</h1>
        <p style={styles.subtitle}>Mengenal lebih dalam tentang genetika dan biologi sel.</p>
      </header>

      {/* Bagian Pewarisan Sifat */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Pewarisan Sifat</h2>
        <p style={styles.paragraph}>
          Pewarisan sifat adalah proses di mana informasi genetik diturunkan dari orangtua kepada anak. Hal ini terjadi melalui kromosom yang membawa gen yang mendasari sifat fisik dan biologi. Gen adalah unit pewarisan yang diturunkan melalui pembelahan sel.
        </p>
        
        <p style={styles.paragraph}>
          Sifat-sifat yang diwariskan bisa bersifat dominan atau resesif. Dalam pewarisan sifat, ada berbagai pola yang mempengaruhi cara sifat-sifat tersebut diwariskan, seperti pewarisan dominan, resesif, kodominan, dan intermediat.
        </p>

        <h3 style={styles.subHeading}>Pola Pewarisan Sifat</h3>
        <ul style={styles.list}>
          <li><strong>Pewarisan Dominan dan Resesif:</strong> Sifat dominan akan lebih sering muncul, sementara sifat resesif hanya muncul jika kedua aleli resesif hadir.</li>
          <li><strong>Pewarisan Kodominan:</strong> Kedua aleli terekspresikan secara bersamaan. Contoh: Golongan darah AB.</li>
          <li><strong>Pewarisan Intermediat:</strong> Fenotipe campuran antara dua aleli, seperti warna bunga merah dan putih menghasilkan bunga berwarna merah muda.</li>
          <li><strong>Pewarisan X-Linked:</strong> Sifat yang dikendalikan oleh kromosom X, contohnya buta warna yang lebih sering terjadi pada laki-laki.</li>
        </ul>

        <img 
          src="https://3.bp.blogspot.com/-hpgsxUUQDWk/WMAh52akhjI…8B8PS12Xat09P1EPKhhBliEkk3ttVDpFQCLcB/s1600/1.pngp=" 
          alt="Pewarisan Sifat" 
          style={styles.image} 
        />
        
        <div style={styles.factBox}>
          <h4>Fakta Menarik tentang Pewarisan Sifat!</h4>
          <p>
            Tahukah kamu bahwa manusia memiliki sekitar 23 pasang kromosom, dan masing-masing kromosom tersebut membawa ribuan gen yang menentukan sifat-sifat fisik dan biologis kita?
          </p>
        </div>
      </section>

      {/* Bagian Pembelahan Sel */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Pembelahan Sel</h2>
        <p style={styles.paragraph}>
          Pembelahan sel adalah proses di mana satu sel membelah menjadi dua atau lebih sel anak. Pembelahan ini penting untuk pertumbuhan, perbaikan jaringan, dan reproduksi organisme. Ada dua jenis pembelahan sel: Mitosis dan Meiosis.
        </p>
        
        <h3 style={styles.subHeading}>Mitosis</h3>
        <p style={styles.paragraph}>
          Mitosis adalah proses pembelahan sel yang menghasilkan dua sel anak yang identik dengan sel induk. Proses ini terjadi pada sel somatik dan digunakan untuk pertumbuhan dan perbaikan tubuh. Proses mitosis terdiri dari beberapa tahap: profase, metafase, anafase, dan telofase.
        </p>

        <h3 style={styles.subHeading}>Meiosis</h3>
        <p style={styles.paragraph}>
          Meiosis adalah pembelahan sel yang menghasilkan sel gamet (sperma dan ovum). Berbeda dengan mitosis, meiosis menghasilkan empat sel anak yang masing-masing memiliki separuh jumlah kromosom dari sel induk. Proses ini penting dalam reproduksi seksual dan memastikan bahwa jumlah kromosom tetap konstan dari satu generasi ke generasi berikutnya.
        </p>

        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Stages_of_Mitosis.svg/500px-Stages_of_Mitosis.svg.png" 
          alt="Pembelahan Sel" 
          style={styles.image} 
        />
      </section>

      {/* Video Penjelasan Pembelahan Sel */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Video: Proses Pembelahan Sel</h3>
        <div style={styles.videoWrapper}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/KXzK9IsLgD4"
            title="Pembelahan Sel - Mitosis dan Meiosis"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Fakta Menarik */}
      <section style={styles.factsSection}>
        <button className="btn btn-info" onClick={toggleFact}>
          {showFact ? "Sembunyikan Fakta Menarik" : "Tampilkan Fakta Menarik"}
        </button>
        {showFact && (
          <div style={styles.factBox}>
            <p>
              Tahukan Anda? Sel manusia memiliki sekitar 20.000 hingga 25.000 gen yang mengontrol seluruh sifat tubuh kita!
            </p>
          </div>
        )}
      </section>

      <footer style={styles.footer}>
        <p>© 2024 Semua Hak Cipta Terlindungi</p>
      </footer>
    </div>
  );
};

// Style untuk tampilan website
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    background: "url('https://www.w3schools.com/w3images/forestbridge.jpg') no-repeat center center fixed", 
    backgroundSize: "cover",
    color: "#333",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "rgba(0, 105, 92, 0.8)", // semi-transparent green to blend with background
    color: "white",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    letterSpacing: "-1px",
    marginBottom: "10px",
    color: "#f4c542",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontStyle: "italic",
    color: "#e3f2fd",
  },
  section: {
    marginTop: "50px",
    padding: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.85)", // semi-transparent white background for sections
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    color: "#00695c",
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "1.8rem",
    color: "#ff5722",
    marginTop: "30px",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  list: {
    marginTop: "10px",
    paddingLeft: "20px",
    fontSize: "1.1rem",
    lineHeight: "1.8",
  },
  image: {
    width: "80%",
    maxWidth: "800px",
    borderRadius: "12px",
    marginTop: "20px",
  },
  videoWrapper: {
    marginTop: "30px",
    textAlign: "center",
  },
  factBox: {
    backgroundColor: "#ffeb3b",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  },
  footer: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#00695c",
    color: "white",
    borderRadius: "12px",
  },
};

export default PembelahanseldanPewarisansifat;
