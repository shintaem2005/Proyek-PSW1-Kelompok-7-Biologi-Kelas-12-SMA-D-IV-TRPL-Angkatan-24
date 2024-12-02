import React, { useState } from "react";
import "./App.css"; 

const App = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Apa itu Genetika?",
      options: [
        "Ilmu tentang komputer",
        "Ilmu tentang pewarisan sifat",
        "Ilmu tentang cuaca",
        "Ilmu tentang hewan",
      ],
      answer: 1,
    },
    {
      question: "Siapa yang dikenal sebagai 'Bapak Genetika'?",
      options: ["Albert Einstein", "Gregor Mendel", "Charles Darwin", "Isaac Newton"],
      answer: 1,
    },
  
    {
      question: "Gen terletak di bagian mana dari sel?",
      options: ["Dinding sel", "Nukleus", "Sitoplasma", "Membran"],
      answer: 1,
    },
  ];

  const handleAnswer = (index) => {
    if (index === questions[quizStep].answer) {
      setScore(score + 1);
    }
    if (quizStep < questions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      alert(`Kuis selesai! Skor Anda: ${score + 1}`);
      setQuizStep(0);
      setScore(0);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Materi Genetika</h1>
      </header>

      <section style={styles.content}>
        <h2>Pengenalan Genetika</h2>
        <p>
          Genetika adalah cabang biologi yang mempelajari tentang gen, pewarisan sifat, dan bagaimana sifat-sifat
          tersebut diteruskan dari satu generasi ke generasi lainnya.
        </p>
        <img
          src="https://via.placeholder.com/600x300"
          alt="DNA Struktur"
          style={styles.image}
        />
        <video controls style={styles.video}>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Browser Anda tidak mendukung video.
        </video>
      </section>

      <section style={styles.quiz}>
        <h2>Kuis: Uji Pemahaman Anda</h2>
        {quizStep < questions.length ? (
          <div>
            <h3>{questions[quizStep].question}</h3>
            <div style={styles.options}>
              {questions[quizStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  style={styles.optionButton}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p>Kuis selesai! Skor Anda: {score}</p>
        )}
      </section>
    </div>
  );
};


const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    margin: "0 auto",
    padding: "20px",
    maxWidth: "800px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  content: {
    marginBottom: "30px",
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "20px",
  },
  video: {
    width: "100%",
    height: "auto",
    marginBottom: "20px",
  },
  quiz: {
    marginTop: "30px",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  optionButton: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
  },
};

export default App;
