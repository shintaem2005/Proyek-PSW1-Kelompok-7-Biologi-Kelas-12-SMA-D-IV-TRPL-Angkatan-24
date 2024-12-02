import React, { useState } from "react";
import growthImg from "./images/growth.jpg";
import developmentImg from "./images/development.jpg";
import nutritionImg from "./images/nutrition.jpg";

function App() {
    const data = [
        { age: "0-1 Tahun", growth: "Tinggi bertambah 25 cm, belajar duduk dan merangkak", development: "Mengenal suara ibu, merespon senyum" },
        { age: "1-3 Tahun", growth: "Tinggi bertambah sekitar 10 cm per tahun", development: "Mulai berjalan, berbicara kata-kata sederhana" },
        { age: "3-5 Tahun", growth: "Motorik halus berkembang pesat", development: "Menggambar, mengenal warna, bermain dengan teman" },
        { age: "6-12 Tahun", growth: "Pertumbuhan stabil, berat badan meningkat", development: "Meningkatkan kemampuan logis dan sosial" },
        { age: "12-18 Tahun", growth: "Pertumbuhan tinggi cepat (pubertas)", development: "Pemikiran abstrak, kematangan emosional" },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter((item) =>
        item.age.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const tips = [
        "Berikan makanan bergizi seimbang, seperti protein, vitamin, dan mineral.",
        "Pastikan anak tidur cukup untuk membantu pertumbuhan.",
        "Ajak anak bermain di luar ruangan untuk mendapatkan vitamin D.",
        "Perhatikan kesehatan emosional anak dengan komunikasi yang baik.",
        "Berikan aktivitas fisik seperti olahraga untuk memperkuat tulang dan otot.",
    ];

    const images = [
        { src: growthImg, caption: "Pertumbuhan fisik yang sehat." },
        { src: developmentImg, caption: "Perkembangan kognitif dan sosial anak." },
        { src: nutritionImg, caption: "Nutrisi penting untuk pertumbuhan optimal." },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const styles = {
        container: {
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#f9f9f9",
        },
        header: {
            textAlign: "center",
            backgroundColor: "#e8f4ff",
            padding: "20px",
            borderRadius: "5px",
        },
        carouselSection: {
            textAlign: "center",
            marginBottom: "30px",
        },
        carousel: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        carouselImage: {
            maxWidth: "500px",
            borderRadius: "10px",
        },
        carouselButton: {
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            margin: "0 10px",
            cursor: "pointer",
            borderRadius: "5px",
        },
        carouselButtonHover: {
            backgroundColor: "#0056b3",
        },
        section: {
            marginBottom: "30px",
        },
        searchInput: {
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
        },
        dataTable: {
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
        },
        tableCell: {
            border: "1px solid #ddd",
            padding: "10px",
        },
        tableHeader: {
            backgroundColor: "#f0f8ff",
            fontWeight: "bold",
        },
        tipsList: {
            listStyle: "square",
            paddingLeft: "20px",
        },
        footer: {
            textAlign: "center",
            backgroundColor: "#e8f4ff",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "20px",
        },
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
                <h1>Pertumbuhan dan Perkembangan</h1>
                <p>Mempelajari proses penting dalam kehidupan manusia, mulai dari bayi hingga dewasa.</p>
            </header>

            {/* Carousel */}
            <section style={styles.carouselSection}>
                <h2>Galeri Pertumbuhan</h2>
                <div style={styles.carousel}>
                    <button style={styles.carouselButton} onClick={handlePrev}>
                        &lt;
                    </button>
                    <div>
                        <img style={styles.carouselImage} src={images[currentIndex].src} alt="Carousel" />
                        <p>{images[currentIndex].caption}</p>
                    </div>
                    <button style={styles.carouselButton} onClick={handleNext}>
                        &gt;
                    </button>
                </div>
            </section>

            {/* Pengantar */}
            <section style={styles.section}>
                <h2>Apa Itu Pertumbuhan dan Perkembangan?</h2>
                <p>
                    <b>Pertumbuhan</b> adalah peningkatan ukuran fisik tubuh seperti tinggi badan dan berat badan. Contohnya, bayi yang awalnya memiliki tinggi 50 cm dapat mencapai 75 cm dalam tahun pertama.
                </p>
                <p>
                    <b>Perkembangan</b> melibatkan kemampuan emosional, sosial, dan kognitif, seperti bayi yang awalnya hanya menangis belajar berbicara dan memahami lingkungan.
                </p>
            </section>

            {/* Pencarian Tabel */}
            <section style={styles.section}>
                <h2>Tabel Perkembangan Berdasarkan Usia</h2>
                <input
                    type="text"
                    style={styles.searchInput}
                    placeholder="Cari berdasarkan usia..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <table style={styles.dataTable}>
                    <thead>
                        <tr>
                            <th style={{ ...styles.tableCell, ...styles.tableHeader }}>Usia</th>
                            <th style={{ ...styles.tableCell, ...styles.tableHeader }}>Pertumbuhan</th>
                            <th style={{ ...styles.tableCell, ...styles.tableHeader }}>Perkembangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td style={styles.tableCell}>{item.age}</td>
                                <td style={styles.tableCell}>{item.growth}</td>
                                <td style={styles.tableCell}>{item.development}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* Tips */}
            <section style={styles.section}>
                <h2>Tips Mendukung Pertumbuhan</h2>
                <ul style={styles.tipsList}>
                    {tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>&copy; 2024 Pertumbuhan dan Perkembangan. Semua Hak Dilindungi.</p>
            </footer>
        </div>
    );
}

export default App;





