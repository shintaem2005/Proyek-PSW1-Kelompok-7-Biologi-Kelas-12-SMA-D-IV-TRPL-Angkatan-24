import React, { useState } from "react";
import { Container, Grid, Card, CardContent, Typography, Button, Box, Paper } from "@mui/material";
import { useSpring, animated } from 'react-spring';

// Data materi pola-pola hereditas
const PolapolaHereditas = [
  {
    id: 1,
    title: "Pewarisan Sifat Mendel",
    content: "Pewarisan sifat menurut Gregor Mendel berfokus pada pola pewarisan yang melibatkan gen dominan dan resesif. Mendel mengusulkan dua hukum dasar, yaitu Hukum Segregasi dan Hukum Pemisahan Independen. Hukum Segregasi menyatakan bahwa pasangan aleli terpisah selama pembelahan sel, dan hanya satu aleli yang akan diwariskan ke keturunannya.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mendel_Plant_Experiment.svg/1024px-Mendel_Plant_Experiment.svg.png',
  },
  {
    id: 2,
    title: "Pewarisan Sifat Dominan dan Resesif",
    content: "Sifat dominan adalah sifat yang muncul pada individu yang memiliki satu aleli dominan, sementara sifat resesif hanya muncul ketika individu memiliki dua aleli resesif. Sebagai contoh, warna mata coklat adalah sifat dominan, sedangkan warna mata biru adalah sifat resesif.",
  },
  {
    id: 3,
    title: "Pewarisan Sifat Kodominan",
    content: "Pewarisan sifat kodominan terjadi ketika dua aleli yang berbeda dalam suatu individu keduanya ekspresikan. Contoh yang terkenal adalah golongan darah manusia, di mana aleli A dan B keduanya ekspresikan sifatnya jika keduanya ada.",
  },
  {
    id: 4,
    title: "Pewarisan Sifat Tertaut X",
    content: "Pewarisan sifat tertaut X terjadi ketika gen yang mengatur sifat tersebut terletak pada kromosom X. Karena pria hanya memiliki satu kromosom X, sifat-sifat ini lebih sering muncul pada pria. Contoh penyakit yang diwariskan dengan cara ini adalah hemofilia.",
  },
  {
    id: 5,
    title: "Pewarisan Sifat Epistasis",
    content: "Epistasis adalah interaksi antara gen yang berbeda di mana satu gen dapat menutupi efek gen lain. Sebagai contoh, pada warna bulu anjing, gen untuk warna hitam bisa menutupi efek dari gen yang mengatur warna coklat.",
  }
];

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleCardClick = (id) => {
    const topic = PolapolaHereditas.find(t => t.id === id);
    setSelectedTopic(topic);
  };

  // Spring animation for the card click
  const fadeIn = useSpring({
    opacity: selectedTopic ? 1 : 0,
    transform: selectedTopic ? 'translateX(0)' : 'translateX(-100%)'
  });

  return (
    <Container maxWidth="lg">
      {/* Title at the top centered */}
      <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: 4, color: '#4CAF50' }}>
        Pola Pola Hereditas
      </Typography>

      <Grid container spacing={3} justifyContent="center" marginTop={4}>
        {/* Card Container */}
        <Grid item xs={12} sm={6} md={4}>
          {PolapolaHereditas.map((topic) => (
            <Card
              key={topic.id}
              onClick={() => handleCardClick(topic.id)}
              sx={{
                cursor: 'pointer',
                backgroundColor: '#4CAF50',  
                color: 'white',               
                transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: '#81C784', 
                },
                borderRadius: 2,              
                boxShadow: 3,                 
              }}
            >
              <CardContent>
                <Typography variant="h6">{topic.title}</Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Detail Content */}
        {selectedTopic && (
          <Grid item xs={12} sm={6} md={7}>
            <animated.div style={fadeIn}>
              <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4" sx={{ marginBottom: 2 }}>
                  {selectedTopic.title}
                </Typography>
                {selectedTopic.image && (
                  <img src={selectedTopic.image} alt={selectedTopic.title} style={{ width: '100%', height: 'auto', borderRadius: 10 }} />
                )}
                {selectedTopic.video && (
                  <iframe
                    width="100%"
                    height="315"
                    src={selectedTopic.video}
                    title={selectedTopic.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ marginTop: 20 }}
                  />
                )}
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                  {selectedTopic.content}
                </Typography>
                <Button sx={{ marginTop: 2 }} onClick={() => setSelectedTopic(null)} variant="contained">
                  Kembali
                </Button>
              </Paper>
            </animated.div>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default App;
