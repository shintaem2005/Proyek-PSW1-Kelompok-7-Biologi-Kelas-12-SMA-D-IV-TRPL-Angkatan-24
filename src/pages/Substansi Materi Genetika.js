import React, { useState } from "react";

function Genetika() {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Substansi Materi Genetika</h1>
                <p style={styles.subtitle}>
                    Menjelajahi Dasar-Dasar Kehidupan Melalui DNA dan Gen
                </p>
            </header>

           
            <section style={styles.introSection}>
                <div style={styles.text}>
                    <h2>Apa itu Substansi Materi Genetika?</h2>
                    <p>
                        Substansi materi genetika adalah molekul biologis yang berperan dalam
                        pewarisan sifat dan penyimpanan informasi genetik pada makhluk hidup.
                        Contohnya adalah DNA dan RNA yang merupakan dasar dari semua bentuk kehidupan.
                    </p>
                    <ul style={styles.list}>
                        <li>
                            *DNA (Deoxyribonucleic Acid):* Molekul yang menyimpan informasi genetik.
                        </li>
                        <li>
                            *RNA (Ribonucleic Acid):* Berperan dalam sintesis protein dan pembawa pesan genetik.
                        </li>
                        <li>
                            *Gen:* Unit pewarisan sifat yang terdapat dalam DNA.
                        </li>
                        <li>
                            *Kromosom:* Struktur yang mengorganisasi DNA dalam sel.
                        </li>
                    </ul>
                </div>
                <img
                    src="https://cdn.pixabay.com/photo/2016/03/31/20/11/dna-1295667_960_720.png"
                    alt="Ilustrasi Materi Genetika"
                    style={styles.largeImage}
                />
            </section>

           
            <section style={styles.videoSection}>
                <h2>Video: Penjelasan Tentang DNA dan Gen</h2>
                <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/8m6hHRlKwxY"
                    title="Video Tentang DNA dan Gen"
                    allowFullScreen
                    style={{ border: "none", borderRadius: "10px" }}
                ></iframe>
            </section>

            
            <section style={styles.featuresSection}>
                <h2>Aplikasi Substansi Materi Genetika</h2>
                <div style={styles.features}>
                    <div style={styles.featureCard}>
                        <img
                            src="https://cdn.pixabay.com/photo/2020/12/20/15/15/genetics-5849462_960_720.png"
                            alt="Penelitian Genetik"
                            style={styles.cardImage}
                        />
                        <h3>Penelitian Genetik</h3>
                        <p>
                            Studi mendalam tentang gen dan mutasi untuk memahami penyakit dan
                            perkembangan manusia.
                        </p>
                    </div>
                    <div style={styles.featureCard}>
                        <img
                            src="https://cdn.pixabay.com/photo/2019/05/29/13/24/bioengineering-4232655_960_720.jpg"
                            alt="Rekayasa Genetik"
                            style={styles.cardImage}
                        />
                        <h3>Rekayasa Genetik</h3>
                        <p>
                            Teknik untuk memodifikasi DNA guna menghasilkan organisme dengan
                            sifat tertentu, seperti tanaman tahan hama.
                        </p>
                    </div>
                    <div style={styles.featureCard}>
                        <img
                            src="https://cdn.pixabay.com/photo/2020/09/14/19/33/science-5579576_960_720.jpg"
                            alt="Medis"
                            style={styles.cardImage}
                        />
                        <h3>Medis</h3>
                        <p>
                            Terapi gen untuk menyembuhkan penyakit genetik dan pengembangan obat
                            berbasis biologi molekuler.
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
                    © 2024 Substansi Materi Genetika Web | Lihat detail lebih lanjut{" "}
                    <a
                        href="https://id.wikipedia.org/wiki/Genetika"
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
            questionText: "Apa molekul utama yang menyimpan informasi genetik?",
            answerOptions: [
                { answerText: "RNA", isCorrect: false },
                { answerText: "DNA", isCorrect: true },
                { answerText: "Protein", isCorrect: false },
                { answerText: "Kromosom", isCorrect: false },
            ],
        },
        {
            questionText: "Apa peran RNA dalam tubuh?",
            answerOptions: [
                { answerText: "Penyimpanan informasi genetik", isCorrect: false },
                { answerText: "Sintesis protein", isCorrect: true },
                { answerText: "Pewarisan sifat", isCorrect: false },
                { answerText: "Replikasi DNA", isCorrect: false },
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
        backgroundImage: "url('https://images.unsplash.com/photo-1554941426-74da743f1b74')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
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

export default Genetika;
