import React from "react";

function Bioteknologi() {
    return (
        <div style={styles.container}>

            <header style={styles.header}>
                <h1>Bioteknologi</h1>
                <p>Pengetahuan yang Mengubah Dunia</p>
            </header>


            <section style={styles.introSection}>
                <div style={styles.text}>
                    <h2>Apa itu Bioteknologi?</h2>
                    <p>
                        Bioteknologi adalah cabang ilmu yang menggunakan organisme hidup,
                        sistem, atau proses biologis untuk mengembangkan produk atau
                        teknologi yang bermanfaat. Bidangnya mencakup berbagai aplikasi
                        seperti kesehatan, pertanian, dan lingkungan.
                    </p>
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
                    Browser Anda tidak mendukung elemen video.
                </video>
            </section>


            <section style={styles.featuresSection}>
                <h2>Aplikasi Bioteknologi</h2>
                <div style={styles.features}>
                    <div style={styles.featureCard}>
                        <h3>Kesehatan</h3>
                        <p>
                            Penggunaan bioteknologi untuk pengembangan vaksin dan terapi
                            genetik.
                        </p>
                    </div>
                    <div style={styles.featureCard}>
                        <h3>Pertanian</h3>
                        <p>
                            Produksi tanaman tahan hama dan peningkatan hasil panen melalui
                            rekayasa genetik.
                        </p>
                    </div>
                    <div style={styles.featureCard}>
                        <h3>Lingkungan</h3>
                        <p>
                            Bioremediasi untuk membersihkan limbah menggunakan mikroorganisme.
                        </p>
                    </div>
                </div>
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
        backgroundColor: "#f9f9f9",
    },
    header: {
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#4caf50",
        color: "white",
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
