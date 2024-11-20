import React from "react";

function Bioteknologi() {
    return (
        <div style={styles.container}>

            <header style={styles.header}>
               <h1 style={styles.title}>Bioteknologi</h1>
                <p style={styles.subtitle}>Pengetahuan yang Mengubah Dunia</p>
            </header>


            <section style={styles.introSection}>
                <div style={styles.text}>
                    <h2>Apa itu Bioteknologi?</h2>
                    <p>
                        Bioteknologi adalah cabang ilmu yang menggunakan organisme hidup,
                        sistem, atau proses biologis untuk mengembangkan produk atau
                        teknologi yang bermanfaat. Bidang ini mencakup berbagai aplikasi
                        seperti:
                    </p>
                     <ul style={styles.list}>
                        <li>Peningkatan kesehatan melalui teknologi modern.</li>
                        <li>Peningkatan kualitas hasil pertanian.</li>
                        <li>Konservasi lingkungan melalui bioteknologi hijau.</li>
                    </ul>   
                </div>
                <img
                    src="https://awsimages.detik.net.id/community/media/visual/2023/07/04/biologist-researcher-analyzing-biological-slide-for-agriculture-expertise.jpeg?w=600&q=90"
                    alt="Ilustrasi Bioteknologi"
                    style={styles.image}
                />
            </section>


            <section style={styles.videoSection}>
                <h2>Video Tentang Bioteknologi</h2>
                <video controls style={styles.video}>
                    <source src="https://youtu.be/z4f--YdNzAM" type="video/mp4" />
                </video>
            </section>


            <section style={styles.featuresSection}>
                <h2>Aplikasi Bioteknologi</h2>
                <div style={styles.features}>
                    <div style={styles.featureCard}>
                     <img
                            src="https://www.cbd.int/images/squares/biotechnology.jpg"
                            alt="Kesehatan"
                            style={styles.cardImage}
                        />
                        <h3>Kesehatan</h3>
                        <p>
                            Penggunaan bioteknologi untuk pengembangan vaksin dan terapi
                            genetik, dan obat obatan.
                        </p>
                    </div>
                    <div style={styles.featureCard}>
                      <img
                            src="https://cropgenetics.cimmyt.org/wp-content/uploads/2020/07/biotech-crop-genetics.jpg"
                            alt="Pertanian"
                            style={styles.cardImage}
                        />
                        <h3>Pertanian</h3>
                        <p>
                            Produksi tanaman tahan hama dan peningkatan hasil panen melalui
                            rekayasa genetik.
                        </p>
                    </div>
                    <div style={styles.featureCard}>
                         <img
                            src="https://www.nature.com/polopoly_fs/7.66986.1571932267!/image/environmental_biotech.jpg"
                            alt="Lingkungan"
                            style={styles.cardImage}
                        />
                        <h3>Lingkungan</h3>
                        <p>
                             Teknologi bioremediasi untuk membersihkan limbah menggunakan mikroorganisme dan melindungi keanekaragamanhayati.
                        </p>
                    </div>
                </div>
            </section>

             <section style={styles.quizSection}>
                <h2>Uji Pengetahuanmu</h2>
                <p>
                    Klik tombol di bawah ini untuk menuju halaman kuis dan menguji
                    pemahamanmu tentang bioteknologi!
                </p>
                <button
                    onClick={() => window.location.href = "/quiz"}
                    style={styles.quizButton}
                >
                    Mulai Kuis
                </button>
            </section>

            <footer style={styles.footer}>
                <p>© 2024 Bioteknologi Web. </p>
            </footer>
        </div>
    );
}


const styles = {
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "f0f4f8",
        color: "#333",
    },
    title: {
        fontSize: "2.5rem",
    },
    header: {
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#4caf50",
        color: "white",
        borderRadius: "8px",
    },
    introSection: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "#ffffff",
        marginTop: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    text: {
        maxWidth: "50%",
    },
    image: {
        width: "40%",
        borderRadius: "8px",
    },
    videoSection: {
        marginTop: "40px",
        textAlign: "center",
    },
    video: {
        width: "100%",
        maxWidth: "600px",
        borderRadius: "8px",
    },
    featuresSection: {
        marginTop: "40px",
    },
    features: {
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
    },
    featureCard: {
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        flex: 1,
    },
    footer: {
        textAlign: "center",
        marginTop: "40px",
        padding: "10px",
        backgroundColor: "#4caf50",
        color: "white",
        borderRadius: "8px",
    },
};

export default Bioteknologi;
