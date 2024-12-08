import React, { useState } from "react";

function PertumbuhandanPerkembangan() {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Pertumbuhan dan Perkembangan</h1>
                <p style={styles.subtitle}>
                    Memahami Proses Kehidupan dari Awal Hingga Dewasa
                </p>
            </header>
            
            <section style={styles.introSection}>
                <div style={styles.text}>
                    <h2>Apa itu Pertumbuhan dan Perkembangan?</h2>
                    <p>
                        Pertumbuhan adalah peningkatan ukuran fisik dan jumlah sel pada
                        organisme, sedangkan perkembangan adalah proses menuju kematangan
                        fungsi organisme. Keduanya adalah bagian penting dalam siklus
                        kehidupan makhluk hidup.
                    </p>
                    <ul style={styles.list}>
                        <li>
                            *Pertumbuhan:* Penambahan tinggi, berat, dan ukuran tubuh.
                        </li>
                        <li>
                            *Perkembangan:* Peningkatan fungsi organ, kemampuan berpikir,
                            dan perilaku.
                        </li>
                        <li>
                            *Faktor Internal:* Genetik, hormon, dan metabolisme.
                        </li>
                        <li>
                            *Faktor Eksternal:* Nutrisi, lingkungan, dan aktivitas fisik.
                        </li>
                    </ul>
                </div>
                <img
                    src="https://cdn0-production-images-kly.akamaized.net/rSaVPF0K_3T8AeW5GTgkdiDCJZ0=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4006837/original/077291000_1654788618-morning-shot-of-woman-giving-food-to-her-daughter.jpg"
                    alt="Ilustrasi Pertumbuhan dan Perkembangan"
                    style={styles.largeImage}
                />
            </section>

            
            <section style={styles.videoSection}>
                <h2>Video: Proses Pertumbuhan dan Perkembangan</h2>
                <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/7HFWtiRW7es"
                    title="Video Tentang Pertumbuhan dan Perkembangan"
                    allowFullScreen
                    style={{ border: "none", borderRadius: "10px" }}
                ></iframe>
            </section>

           
            <section style={styles.featuresSection}>
                <h2>Faktor-Faktor Pertumbuhan dan Perkembangan</h2>
                <div style={styles.features}>
                    <div style={styles.featureCard}>
                        <img
                            src="https://cdn.popmama.com/content-images/post/20230420/bayi-yang-cukup-berat-badan-saat-lahir-akan-lebih-pintar-0a5d4b4c43f3ea8e9b5e28edb3bb9a29_750x500.jpg"
                            alt="Faktor Genetik"
                            style={styles.cardImage}
                        />
                        <h3>Faktor Genetik</h3>
                        <p>
                            Faktor genetik mempengaruhi potensi pertumbuhan tinggi badan,
                            struktur tubuh, dan bakat bawaan.
                        </p>
                    </div>
                    <div style={styles.featureCard}>
                        <img
                            src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1616732154/attached_image/makanan-yang-dapat-meningkatkan-imun-anak.jpg"
                            alt="Nutrisi"
                            style={styles.cardImage}
                        />
                        <h3>Nutrisi</h3>
                        <p>
                            Nutrisi yang cukup dan seimbang penting untuk mendukung proses
                            pertumbuhan fisik dan perkembangan otak.
                        </p>
                    </div>
                    <div style={styles.featureCard}>
                        <img
                            src="https://awsimages.detik.net.id/community/media/visual/2023/08/24/memahami-anak-anak-tantrum.jpeg?w=700&q=90"
                            alt="Pengaruh Lingkungan"
                            style={styles.cardImage}
                        />
                        <h3>Pengaruh Lingkungan</h3>
                        <p>
                            Lingkungan yang mendukung seperti keluarga, sekolah, dan
                            aktivitas sosial membantu perkembangan emosional dan kognitif.
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
                    © 2024 Pertumbuhan dan Perkembangan Web | Lihat detail lebih lanjut{" "}
                    <a
                        href="https://id.wikipedia.org/wiki/Pertumbuhan_dan_Perkembangan"
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
            questionText: "Apa perbedaan antara pertumbuhan dan perkembangan?",
            answerOptions: [
                { answerText: "Pertumbuhan bersifat fisik, perkembangan bersifat fungsi", isCorrect: true },
                { answerText: "Pertumbuhan bersifat mental, perkembangan bersifat fisik", isCorrect: false },
                { answerText: "Keduanya sama", isCorrect: false },
                { answerText: "Tidak ada hubungan", isCorrect: false },
            ],
        },
        {
            questionText: "Faktor apa yang memengaruhi pertumbuhan manusia?",
            answerOptions: [
                { answerText: "Genetik, nutrisi, dan lingkungan", isCorrect: true },
                { answerText: "Usia saja", isCorrect: false },
                { answerText: "Jumlah aktivitas", isCorrect: false },
                { answerText: "Pengaruh budaya", isCorrect: false },
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

export default PertumbuhandanPerkembangan;