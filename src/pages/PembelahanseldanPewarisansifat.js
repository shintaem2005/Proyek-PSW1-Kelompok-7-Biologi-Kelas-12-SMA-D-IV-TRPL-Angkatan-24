import React, { useState } from "react";

const PembelahanseldanPewarisansifat = [
  {
    id: 1,
    title: "Pembelahan Sel",
    content: "Pembelahan sel adalah proses pembagian sel menjadi dua sel anak yang identik. Terdapat dua jenis utama pembelahan sel, yaitu mitosis dan meiosis. Mitosis menghasilkan dua sel anak yang identik dengan jumlah kromosom yang sama, sedangkan meiosis menghasilkan empat sel anak yang memiliki setengah jumlah kromosom dari sel induk. Pembelahan sel sangat penting dalam pertumbuhan, perbaikan jaringan, dan reproduksi organisme."
  },
  {
    id: 2,
    title: "Mitosis",
    content: "Mitosis adalah proses pembelahan sel yang menghasilkan dua sel anak yang memiliki jumlah kromosom yang sama dengan sel induk. Proses ini terjadi dalam beberapa tahap: 1. Profase, di mana kromosom mulai terlihat; 2. Metafase, kromosom berjajar di tengah sel; 3. Anafase, kromosom terpisah menuju kutub sel; dan 4. Telofase, sel anak terbentuk. Mitosis memungkinkan pertumbuhan dan perbaikan sel.",
    image: 'https://image4.slideserve.com/929989/pembelahan-mitosis-l.jpg'
  },
  {
    id: 3,
    title: "Meiosis",
    content: "Meiosis adalah pembelahan sel yang terjadi dalam pembentukan gamet (sel reproduksi), yang menghasilkan empat sel anak dengan setengah jumlah kromosom dari sel induk. Proses ini penting untuk memastikan bahwa jumlah kromosom dalam spesies tetap konstan ketika terjadi pembuahan. Meiosis memiliki dua tahap pembelahan yang disebut meiosis I dan meiosis II, dengan tahap-tahap seperti profase, metafase, anafase, dan telofase pada setiap tahap pembelahan.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Meiosis_diagram.jpg'
  },
  {
    id: 4,
    title: "Pewarisan Sifat",
    content: "Pewarisan sifat adalah proses di mana sifat atau ciri-ciri genetik diturunkan dari orang tua kepada anak-anaknya. Sifat-sifat ini dikendalikan oleh gen yang terdapat dalam DNA, dan pewarisan sifat mengikuti hukum-hukum genetika seperti hukum segregasi dan hukum dominasi. Hukum segregasi menyatakan bahwa aleli untuk suatu sifat akan terpisah selama pembelahan sel, sementara hukum dominasi menyatakan bahwa salah satu aleli dapat mendominasi yang lainnya.",
  },
  {
    id: 5,
    title: "Genetik dan DNA",
    content: "Genetik adalah cabang biologi yang mempelajari pewarisan sifat melalui gen. Gen adalah unit pewarisan yang terletak pada kromosom dan mengkode informasi yang digunakan untuk membentuk protein, yang pada gilirannya menentukan ciri-ciri organisme. DNA (asam deoksiribonukleat) adalah materi genetik yang menyimpan informasi tentang struktur dan fungsi sel. Setiap individu memiliki kombinasi gen yang unik, yang diwariskan dari orang tua. DNA terdiri dari dua untai yang membentuk heliks ganda, dengan empat jenis basa nitrogen: adenin (A), timin (T), sitosin (C), dan guanin (G).",
    video: 'https://youtu.be/VkNGwgXvg94?si=cqUOqAPFl31nrS5v'
  },
  {
    id: 6,
    title: "Aleli dan Genotipe",
    content: "Aleli adalah variasi bentuk gen yang mempengaruhi suatu sifat tertentu. Genotipe adalah kombinasi aleli yang dimiliki oleh suatu individu, sementara fenotipe adalah ekspresi fisik atau penampilan dari genotipe tersebut. Sebagai contoh, aleli untuk warna mata bisa memiliki variasi coklat atau biru, dan genotipe yang memiliki aleli coklat akan memiliki fenotipe warna mata coklat. Aleli bisa dominan atau resesif, dengan aleli dominan yang lebih berpengaruh terhadap fenotipe.",
    image: 'https://image.slidesharecdn.com/pewarisansifat-111122231707-phpapp01/95/pewarisan-sifat-6-1024.jpg?cb=1322003941'
  }
];

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleCardClick = (id) => {
    const topic = PembelahanseldanPewarisansifat.find(t => t.id === id);
    setSelectedTopic(topic);
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardContainer}>
        {PembelahanseldanPewarisansifat.map((topic) => (
          <div 
            key={topic.id} 
            style={styles.card} 
            onClick={() => handleCardClick(topic.id)}
          >
            <h2 style={styles.cardTitle}>{topic.title}</h2>
          </div>
        ))}
      </div>
      <div style={styles.detailsContainer}>
        {selectedTopic ? (
          <div style={styles.details}>
            <h2 style={styles.detailsTitle}>{selectedTopic.title}</h2>
            {selectedTopic.image && (
              <img 
                src={selectedTopic.image} 
                alt={selectedTopic.title} 
                style={selectedTopic.title === "Aleli dan Genotipe" ? styles.smallImage : styles.image} 
              />
            )}
            {selectedTopic.video && (
              <div style={styles.videoContainer}>
                <iframe
                  width={selectedTopic.title === "Genetik dan DNA" ? "80%" : "100%"} // If topic is Genetik dan DNA, video will be smaller
                  height={selectedTopic.title === "Genetik dan DNA" ? "250px" : "315px"} // Smaller height for the video
                  src={selectedTopic.video}
                  title={selectedTopic.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <p>{selectedTopic.content}</p>
          </div>
        ) : (
          <p style={styles.placeholderText}>Silakan pilih topik untuk melihat penjelasannya.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '30px',
    backgroundColor: '#f0f4f8',
    height: '100vh',
  },
  cardContainer: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    backgroundColor: '#4CAF50', // Green for better contrast
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
    color: 'white',
  },
  cardHover: {
    transform: 'translateY(-10px)',
    backgroundColor: '#388E3C', // Darker green on hover
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  detailsContainer: {
    width: '65%',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    transition: 'opacity 0.5s ease-in-out',
    opacity: 1,
    marginLeft: '20px',
  },
  details: {
    animation: 'fadeIn 0.5s ease-out',
  },
  detailsTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  placeholderText: {
    fontSize: '18px',
    color: '#888',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    margin: '20px 0',
  },
  smallImage: {
    width: '100%',
    maxWidth: '300px', // Smaller size for the Aleli and Genotipe image
    height: 'auto',
    margin: '20px 0',
  },
  videoContainer: {
    margin: '20px 0',
  },
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
};

export default App;
