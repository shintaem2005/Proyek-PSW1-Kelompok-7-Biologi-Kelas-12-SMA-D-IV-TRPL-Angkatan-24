import React from "react";

function PolaHereditas() {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Pola-Pola Hereditas</h1>
                <p style={styles.subtitle}>Mengenal Cara Pewarisan Sifat dalam Genetika</p>
            </header>

            {/* Introduction Section */}
            <section style={styles.introSection}>
                <div style={styles.text}>
                    <h2 style={styles.heading}>Apa itu Pola-Pola Hereditas?</h2>
                    <p>
                        Pola-pola hereditas merujuk pada cara pewarisan sifat dari orangtua ke keturunannya. Setiap individu mewarisi informasi genetik dalam bentuk gen dari kedua orang tuanya.
                        Pola pewarisan ini mengatur bagaimana sifat-sifat fisik atau biologi diturunkan kepada keturunan, dan bagaimana variasi genetik terjadi pada suatu populasi.
                    </p>
                    <p>
                        Berikut adalah beberapa pola pewarisan yang dapat ditemukan pada organisme:
                    </p>
                    <ul style={styles.list}>
                        <li>Pewarisan Sifat Mendel</li>
                        <li>Pewarisan Sifat Dominan dan Resesif</li>
                        <li>Pewarisan Sifat Kodominan</li>
                        <li>Pewarisan Sifat Intermediat</li>
                        <li>Pewarisan Sifat Lintas X (X-linked)</li>
                        <li>Pewarisan Sifat Poligenik</li>
                    </ul>
                </div>
                <img
                    src="https://cdn-2.tstatic.net/batam/foto/bank/images/ilustrasi-dna-berkaitan-dengan-genetika-manusia.jpg"
                    alt="Pewarisan Genetik"
                    style={styles.image}
                />
            </section>

            {/* Video Section */}
            <section style={styles.videoSection}>
                <h2 style={styles.heading}>Video Tentang Pola Hereditas</h2>
                <div style={styles.videoWrapper}>
                    <video controls style={styles.video}>
                        <source src="https://youtu.be/Rd1oGwQEx6k?si=M1Fd5bvIm2YwBHZL" type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* Detailed Inheritance Patterns Section */}
            <section style={styles.detailedSection}>
                <h2 style={styles.heading}>Pola-Pola Hereditas yang Lebih Lanjut</h2>
                {/* Detailed Cards */}
                <div style={styles.detailedCard}>
                    <h3>Pewarisan Sifat Mendel</h3>
                    <p>
                        Gregor Mendel, melalui eksperimennya pada tanaman kacang polong, mengidentifikasi dua hukum dasar yang mengatur pewarisan sifat:
                    </p>
                    <ul style={styles.list}>
                        <li><strong>Hukum Segregasi:</strong> Setiap individu mewariskan satu aleli untuk setiap sifat yang dipilih, yang terpisah secara acak selama pembentukan gamet.</li>
                        <li><strong>Hukum Pemisahan Independen:</strong> Aleli untuk sifat yang berbeda diwariskan secara independen satu sama lain.</li>
                    </ul>
                    <p>
                        Hukum Mendel ini mendasari prinsip dasar genetika modern dan memungkinkan pemahaman lebih lanjut tentang pewarisan sifat pada makhluk hidup.
                    </p>
                </div>

                <div style={styles.detailedCard}>
                    <h3>Pewarisan Sifat Dominan dan Resesif</h3>
                    <p>
                        Pewarisan sifat dominan dan resesif terjadi ketika satu aleli lebih kuat dalam mengekspresikan sifatnya dibandingkan yang lain. Contoh:
                    </p>
                    <ul style={styles.list}>
                        <li><strong>Dominan:</strong> Aleli yang terekspresikan meski hanya ada satu salinan aleli dominan. Contoh: golongan darah A dan B.</li>
                        <li><strong>Resesif:</strong> Aleli yang terekspresikan hanya jika dua salinan aleli resesif hadir. Contoh: golongan darah O.</li>
                    </ul>
                    <p>
                        Sifat dominan dan resesif berperan dalam banyak penyakit genetik, seperti penyakit Huntington (dominannya aleli) dan cystic fibrosis (resesif).
                    </p>
                </div>

                <div style={styles.detailedCard}>
                    <h3>Pewarisan Sifat Kodominan</h3>
                    <p>
                        Dalam pewarisan kodominan, dua aleli dominan terekspresikan secara bersamaan. Contoh klasik adalah golongan darah AB pada manusia, di mana kedua aleli A dan B terekspresikan dalam fenotipe.
                    </p>
                </div>

                <div style={styles.detailedCard}>
                    <h3>Pewarisan Sifat Intermediat</h3>
                    <p>
                        Pada pewarisan intermediat, dua aleli dominan menciptakan fenotipe campuran atau peralihan antara kedua aleli tersebut. Contoh: warna bunga pada tanaman, di mana aleli merah dan aleli putih menghasilkan bunga berwarna pink.
                    </p>
                </div>

                <div style={styles.detailedCard}>
                    <h3>Pewarisan Sifat Lintas X (X-linked)</h3>
                    <p>
                        Pewarisan sifat yang dikendalikan oleh kromosom X dikenal sebagai pewarisan X-linked. Penyakit seperti buta warna dan hemofilia lebih umum terjadi pada pria karena mereka hanya memiliki satu kromosom X.
                    </p>
                </div>

                <div style={styles.detailedCard}>
                    <h3>Pewarisan Sifat Poligenik</h3>
                    <p>
                        Pewarisan poligenik melibatkan lebih dari satu gen yang mempengaruhi suatu sifat. Contohnya adalah tinggi badan, warna kulit, dan berat badan pada manusia, yang dipengaruhi oleh banyak gen yang bekerja bersama.
                    </p>
                    <p>
                        Fenomena ini menunjukkan bahwa variasi dalam populasi lebih kompleks dan dipengaruhi oleh banyak faktor genetik.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <p> Pola-Pola Hereditas - Semua Hak Cipta Terlindungi. </p>
            </footer>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#e8f5e9",
        color: "#333",
    },
    header: {
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#00796b",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "3.5rem",
        fontWeight: "700",
    },
    subtitle: {
        fontSize: "1.5rem",
        fontStyle: "italic",
        marginTop: "10px",
    },
    introSection: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        backgroundColor: "#ffffff",
        marginTop: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    text: {
        maxWidth: "50%",
    },
    list: {
        marginTop: "15px",
        paddingLeft: "20px",
        lineHeight: "1.8",
        fontSize: "1.1rem",
    },
    image: {
        width: "45%",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    },
    videoSection: {
        marginTop: "50px",
        textAlign: "center",
    },
    videoWrapper: {
        display: "flex",
        justifyContent: "center",
    },
    video: {
        width: "100%",
        maxWidth: "800px",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    },
    detailedSection: {
        marginTop: "50px",
    },
    detailedCard: {
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
        marginBottom: "40px",
        transition: "transform 0.3s ease-in-out",
        ":hover": {
            transform: "scale(1.03)",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
        },
    },
    heading: {
        fontSize: "2.2rem",
        color: "#00796b",
    },
    footer: {
        textAlign: "center",
        marginTop: "50px",
        padding: "20px",
        backgroundColor: "#00796b",
        color: "white",
        borderRadius: "12px",
    },
};

export default PolaHereditas;
