import React, { useState } from "react";

function Bioteknologi() {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Bioteknologi</h1>
                <p style={styles.subtitle}>
                    Mengubah Dunia dengan Pengetahuan dan Inovasi Modern
                </p>
            </header>

            
            <section style={styles.introSection}>
                <div style={styles.text}>
                    <h2>Apa itu Bioteknologi?</h2>
                    <p>
                        Bioteknologi adalah aplikasi teknologi yang memanfaatkan organisme
                        hidup, sistem, atau proses biologis untuk menghasilkan produk yang
                        bermanfaat. Bioteknologi memiliki potensi besar untuk mengubah cara
                        kita hidup dan berinteraksi dengan dunia.
                    </p>
                    <ul style={styles.list}>
                        <li>
                            *Kesehatan:* Inovasi vaksin, terapi gen, dan antibiotik baru.
                        </li>
                        <li>
                            *Pertanian:* Rekayasa genetika tanaman untuk hasil panen yang
                            lebih baik.
                        </li>
                        <li>
                            *Lingkungan:* Bioteknologi hijau untuk pengelolaan limbah dan
                            konservasi alam.
                        </li>
                        <li>
                            *Energi:* Produksi biofuel sebagai alternatif bahan bakar fosil.
                        </li>
                    </ul>
                </div>
                <img
                    src="https://awsimages.detik.net.id/community/media/visual/2023/07/04/biologist-researcher-analyzing-biological-slide-for-agriculture-expertise.jpeg?w=1200&q=90"
                    alt="Ilustrasi Bioteknologi"
                    style={styles.largeImage}
                />
            </section>
            
            <section style={styles.videoSection}>
                <h2>Video: Bagaimana Bioteknologi Mengubah Dunia</h2>
                <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/z4f--YdNzAM"
                    title="Video Tentang Bioteknologi"
                    allowFullScreen
                    style={{ border: "none", borderRadius: "10px" }}
                ></iframe>
            </section>

           
            <section style={styles.featuresSection}>
                <h2>Aplikasi Bioteknologi</h2>
                <div style={styles.features}>
                    <div style={styles.featureCard}>
                        <img
                            src="https://cdn1.katadata.co.id/media/images/thumb/2023/01/16/Contoh_Bioteknologi_Modern-2023_01_16-13_34_11_5c35e4f369673a7b6880f573bfb0c597_960x640_thumb.jpg"
                            alt="Kesehatan"
                            style={styles.cardImage}
                        />
                        <h3>Kesehatan</h3>
                        <p>
                            Penggunaan bioteknologi dalam pengembangan vaksin, terapi genetik,
                            dan biomedis modern untuk meningkatkan kualitas hidup manusia.
                        </p>
                    </div>
                    <div style={styles.featureCard}>
                        <img
                            src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/305/2024/01/24/15-2329069810.png"
                            alt="Pertanian"
                            style={styles.cardImage}
                        />
                        <h3>Pertanian</h3>
                        <p>
                            Produksi tanaman yang tahan terhadap hama, penyakit, dan kondisi
                            lingkungan yang ekstrem melalui rekayasa genetika.
                        </p>
                    </div>
                    <div style={styles.featureCard}>
                        <img
                            src="https://waterpedia.co.id/wp-content/uploads/2023/07/Pengolahan-air-limbah-dengan-bioteknologi.jpg"
                            alt="Lingkungan"
                            style={styles.cardImage}
                        />
                        <h3>Lingkungan</h3>
                        <p>
                            Teknologi untuk membersihkan limbah, menjaga biodiversitas, dan
                            mengurangi jejak karbon global.
                        </p>
                    </div>
                </div>
            </section>

          
            <section style={styles.quizSection}>
                <h2>Uji Pengetahuanmu</h2>
                <Quiz />
            </section>

            <footer style={styles.footer}>
                <p>
                    © 2024 Bioteknologi Web | Lihat detail lebih lanjut{" "}
                    <a
                        href="https://id.wikipedia.org/wiki/Bioteknologi"
                        style={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        di Wikipedia
                    </a>
                </p>
            </footer>
        </div>
    );
}

function Quiz() {
    const questions = [
        {
            questionText: "Apa yang dimaksud dengan bioteknologi?",
            answerOptions: [
                { answerText: "Ilmu yang mempelajari makhluk hidup", isCorrect: false },
                { answerText: "Teknologi yang menggunakan organisme hidup", isCorrect: true },
                { answerText: "Teknik untuk memanipulasi DNA", isCorrect: false },
                { answerText: "Ilmu tentang mikrobiologi", isCorrect: false },
            ],
        },
        {
            questionText: "Apa contoh bioteknologi tradisional?",
            answerOptions: [
                { answerText: "Pembuatan roti dan keju", isCorrect: true },
                { answerText: "Produksi antibiotik", isCorrect: false },
                { answerText: "Kloning hewan", isCorrect: false },
                { answerText: "Terapi gen", isCorrect: false },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div style={quizStyles.container}>
            {showScore ? (
                <div style={quizStyles.scoreSection}>
                    Anda mendapatkan skor {score} dari {questions.length}!
                </div>
            ) : (
                <div>
                    <div style={quizStyles.questionSection}>
                        <div style={quizStyles.questionCount}>
                            <span>Pertanyaan {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div style={quizStyles.questionText}>
                            {questions[currentQuestion].questionText}
                        </div>
                    </div>
                    <div style={quizStyles.answerSection}>
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button
                                key={index}
                                style={quizStyles.answerButton}
                                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                            >
                                {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#fff",
    },
    header: { textAlign: "center", marginBottom: "20px" },
    title: { fontSize: "2.5rem", margin: 0 },
    subtitle: { fontSize: "1.2rem" },
    introSection: { display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" },
    text: { flex: 1 },
    list: { marginTop: "10px", paddingLeft: "20px" },
    largeImage: { width: "50%", borderRadius: "20px" },
    videoSection: { marginBottom: "20px" },
    featuresSection: { marginBottom: "20px" },
    features: { display: "flex", gap: "20px" },
    featureCard: { flex: 1, textAlign: "center", padding: "10px", backgroundColor: "#333", borderRadius: "10px" },
    cardImage: { width: "100%", borderRadius: "10px" },
    quizSection: { marginBottom: "20px" },
    footer: { textAlign: "center", padding: "10px", marginTop: "20px" },
    link: { color: "#4CAF50", textDecoration: "none" },
};

const quizStyles = {
    container: { marginTop: "20px", padding: "20px", backgroundColor: "#444", borderRadius: "10px" },
    questionSection: { marginBottom: "20px" },
    questionCount: { fontSize: "1rem", marginBottom: "5px" },
    questionText: { fontSize: "1.2rem" },
    answerSection: { display: "flex", flexDirection: "column", gap: "10px" },
    answerButton: { padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#4CAF50", color: "#fff" },
    scoreSection: { fontSize: "1.2rem" },
};

export default Bioteknologi;
