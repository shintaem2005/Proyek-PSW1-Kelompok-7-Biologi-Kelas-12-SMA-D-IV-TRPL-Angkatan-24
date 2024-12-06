import React, { useState } from "react";

const PembelahanseldanPewarisansifat = () => {
  const [showFact, setShowFact] = useState(false);

  const toggleFact = () => setShowFact(!showFact);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Materi Biologi: Pewarisan Sifat & Pembelahan Sel</h1>
        <p style={styles.subtitle}>Mengenal lebih dalam tentang genetika dan biologi sel.</p>
      </header>

      {/* Bagian Pewarisan Sifat */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Pewarisan Sifat</h2>
        <p style={styles.paragraph}>
          Pewarisan sifat adalah proses di mana informasi genetik diturunkan dari orangtua kepada anak melalui kromosom yang membawa gen.
        </p>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Apa Itu Pewarisan Sifat?</h2>
          <p style={styles.paragraph}>
            Pewarisan sifat adalah proses di mana informasi genetik diturunkan dari orangtua kepada anak. 
            Sifat tubuh, seperti warna mata, golongan darah, dan banyak lagi, dikendalikan oleh gen yang ada pada kromosom.
            Pewarisan sifat dapat mengikuti pola tertentu yang telah dipelajari dalam genetika.
            Ada beberapa jenis pola pewarisan sifat yang umum ditemukan, di antaranya adalah pewarisan dominan dan resesif, kodominan, dan intermediat.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Pola Pewarisan Sifat</h2>
          <h3 style={styles.subHeading}>1. Pewarisan Dominan dan Resesif</h3>
          <p style={styles.paragraph}>
            Pada pewarisan dominan dan resesif, alel dominan akan selalu terekspresikan meskipun hanya satu alel dominan yang ada. 
            Sedangkan sifat resesif hanya akan muncul jika kedua alel yang ada adalah resesif.
          </p>
          <ul style={styles.list}>
            <li><strong>Alel Dominan (A):</strong> Menentukan sifat yang dominan, misalnya warna mata coklat.</li>
            <li><strong>Alel Resesif (a):</strong> Menentukan sifat yang resesif, misalnya warna mata biru.</li>
          </ul>

          <h3 style={styles.subHeading}>2. Pewarisan Kodominan</h3>
          <p style={styles.paragraph}>
            Pada pewarisan kodominan, kedua alel yang berbeda akan terekspresikan secara bersamaan, tanpa ada yang dominan.
          </p>
          <ul style={styles.list}>
            <li><strong>Contoh:</strong> Golongan darah AB yang dihasilkan dari kombinasi alel A dan alel B.</li>
          </ul>

          <h3 style={styles.subHeading}>3. Pewarisan Intermediat</h3>
          <p style={styles.paragraph}>
            Pada pewarisan intermediat, fenotipe anak merupakan campuran dari kedua alel yang diwariskan.
          </p>
          <ul style={styles.list}>
            <li><strong>Contoh:</strong> Warna bunga merah muda yang dihasilkan dari pencampuran warna merah dan putih.</li>
          </ul>
        </section>

        <img 
          src="https://3.bp.blogspot.com/-hpgsxUUQDWk/WMAh52akhjI8B8PS12Xat09P1EPKhhBliEkk3ttVDpFQCLcB/s1600/1.png" 
          alt="Pewarisan Sifat" 
          style={styles.image} 
        />
      </section>

      {/* Bagian Pembelahan Sel */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Pembelahan Sel</h2>
        <p style={styles.paragraph}>
          Pembelahan sel adalah proses yang memungkinkan sel untuk membelah menjadi dua atau lebih sel anak.
          Pembelahan sel diperlukan untuk berbagai proses biologis seperti pertumbuhan, perbaikan jaringan, dan reproduksi.
          Pembelahan sel terbagi menjadi dua jenis utama: mitosis dan meiosis.
        </p>

        <h3 style={styles.subHeading}>Mitosis</h3>
        <p style={styles.paragraph}>
          Mitosis adalah proses pembelahan sel yang menghasilkan dua sel anak yang identik secara genetik dengan sel induk. Mitosis penting untuk pertumbuhan, perbaikan, dan regenerasi sel tubuh.
        </p>

        <h4 style={styles.subHeading}>Tahapan Mitosis</h4>
        <ul style={styles.list}>
          <li><strong>Profase:</strong> Kromosom memadat dan membran inti mulai pecah. Sentriol mulai bergerak ke kutub sel.</li>
          <li><strong>Metafase:</strong> Kromosom berjajar di tengah sel pada papan metafase.</li>
          <li><strong>Anafase:</strong> Kromatid terpisah dan bergerak menuju kutub sel yang berlawanan.</li>
          <li><strong>Telofase:</strong> Membran inti terbentuk kembali, kromosom mulai mengendur.</li>
          <li><strong>Sitokinesis:</strong> Pembelahan sitoplasma yang menghasilkan dua sel anak.</li>
        </ul>

        <h3 style={styles.subHeading}>Meiosis</h3>
        <p style={styles.paragraph}>
          Meiosis menghasilkan empat sel anak dengan jumlah kromosom setengah dari sel induk. Proses ini penting dalam reproduksi seksual.
        </p>

        <h4 style={styles.subHeading}>Miosis I</h4>
        <p style={styles.paragraph}>
          Pada Meiosis I, terjadi pembelahan reduksi, di mana kromosom homolog (kromosom dengan pasangan gen yang sama) dipisahkan. Hasilnya adalah dua sel anak yang masing-masing memiliki setengah jumlah kromosom dari sel induk.
        </p>
        <ul style={styles.list}>
          <li><strong>Profase I:</strong> Kromosom memadat dan berpasangan dengan kromosom homolognya. Proses <strong>pertukaran silang (crossing over)</strong> terjadi, menciptakan variasi genetik.</li>
          <li><strong>Metafase I:</strong> Kromosom homolog berjajar di tengah sel.</li>
          <li><strong>Anafase I:</strong> Kromosom homolog ditarik ke kutub yang berlawanan.</li>
          <li><strong>Telofase I:</strong> Sel membelah menjadi dua sel anak yang haploid.</li>
        </ul>

        <h4 style={styles.subHeading}>Miosis II</h4>
        <p style={styles.paragraph}>
          Meiosis II menyerupai Mitosis, namun terjadi pada sel haploid. Pada tahap ini, kromatid saudara dipisahkan, dan akhirnya menghasilkan empat sel haploid.
        </p>
        <ul style={styles.list}>
          <li><strong>Profase II:</strong> Kromosom memadat kembali dan pembelahan dimulai di dua sel haploid.</li>
          <li><strong>Metafase II:</strong> Kromosom berjajar di tengah sel haploid.</li>
          <li><strong>Anafase II:</strong> Kromatid saudara ditarik ke kutub yang berlawanan.</li>
          <li><strong>Telofase II:</strong> Sel membelah, menghasilkan empat sel anak haploid yang masing-masing memiliki satu set kromosom.</li>
        </ul>

        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Stages_of_Mitosis.svg/500px-Stages_of_Mitosis.svg.png" 
          alt="Pembelahan Sel" 
          style={styles.image} 
        />
      </section>

      <div style={{ width: "100%", height: "auto" }}>
      <h2>Video Pembelajaran Mitosis dan Meiosis</h2>
      <div style={{ marginTop: "20px" }}>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/W8BNvnGqJ-8"  // URL embed video YouTube
          title="Pembelahan Sel - Mitosis dan Meiosis"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>

      {/* Fakta Menarik */}
      <section style={styles.factsSection}>
        <button onClick={toggleFact} style={styles.button}>
          {showFact ? "Sembunyikan Fakta Menarik" : "Tampilkan Fakta Menarik"}
        </button>
        {showFact && (
          <div style={styles.factBox}>
            <p>
              Tahukah Anda? Sel manusia memiliki sekitar 20.000 hingga 25.000 gen yang mengontrol seluruh sifat tubuh kita!
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
    backgroundColor: "#f4f4f4",
    color: "#333",
  },
  header: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#00695c", 
    color: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#f4c542",
  },
  subtitle: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "#e3f2fd",
  },
  section: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "2rem",
    color: "#00695c",
    marginBottom: "15px",
    textAlign: "left", // Ubah ke kiri
  },
  subHeading: {
    fontSize: "1.5rem",
    color: "#ff5722",
    marginTop: "20px",
    textAlign: "left", // Ubah ke kiri
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  list: {
    textAlign: "left",
    fontSize: "1.1rem",
    marginTop: "10px",
  },
  image: {
    width: "80%",
    maxWidth: "800px",
    borderRadius: "8px",
    marginTop: "20px",
  },
  videoWrapper: {
    marginTop: "20px",
  },
  factBox: {
    backgroundColor: "#ffeb3b",
    padding: "15px",
    borderRadius: "8px",
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#ff5722",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  footer: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#00695c",
    color: "white",
    borderRadius: "8px",
    marginTop: "30px",
  },
};

export default PembelahanseldanPewarisansifat;
