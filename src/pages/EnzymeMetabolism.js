import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EnzymeMetabolism = () => {
  return (
    <Container className="py-5" style={{ backgroundColor: '#f0f8ff' }}>
      <Row className="mb-4">
        <Col>
          <h1 className="text-center" style={{ color: '#2e4053', fontWeight: 'bold' }}>Enzim dan Metabolisme Organisme</h1>
          <p className="text-center" style={{ color: '#2c3e50', fontSize: '1.2em' }}>
            Pada halaman ini, kita akan membahas peran penting enzim dalam metabolisme organisme.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow" style={{ backgroundColor: '#d5f5e3', borderRadius: '10px' }}>
            <Card.Body>
              <Card.Title style={{ color: '#145a32' }}>Apa itu Enzim?</Card.Title>
              <Card.Text style={{ color: '#186a3b' }}>
                Enzim adalah molekul protein yang bertindak sebagai katalis dalam reaksi kimia di dalam sel organisme hidup. Enzim
                mempercepat reaksi tanpa berubah secara permanen dalam prosesnya.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4 shadow" style={{ backgroundColor: '#fadbd8', borderRadius: '10px' }}>
            <Card.Body>
              <Card.Title style={{ color: '#a93226' }}>Peran Enzim dalam Metabolisme</Card.Title>
              <Card.Text style={{ color: '#c0392b' }}>
                Enzim sangat penting dalam metabolisme karena memungkinkan reaksi kimia terjadi dengan cepat pada suhu tubuh. Tanpa enzim,
                banyak reaksi metabolisme akan berlangsung terlalu lambat untuk mendukung kehidupan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow" style={{ backgroundColor: '#f9e79f', borderRadius: '10px' }}>
            <Card.Body>
              <Card.Title style={{ color: '#b7950b' }}>Faktor-faktor yang Mempengaruhi Kerja Enzim</Card.Title>
              <Card.Text style={{ color: '#b9770e' }}>
                Kerja enzim dipengaruhi oleh suhu, pH, konsentrasi substrat, dan keberadaan inhibitor atau aktivator. Kondisi yang tidak
                sesuai dapat menyebabkan enzim kehilangan aktivitasnya.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4 shadow" style={{ backgroundColor: '#e8daef', borderRadius: '10px' }}>
            <Card.Body>
              <Card.Title style={{ color: '#6c3483' }}>Jenis-Jenis Enzim dalam Metabolisme</Card.Title>
              <Card.Text style={{ color: '#7d3c98' }}>
                Ada banyak jenis enzim, seperti oksidoreduktase, transferase, hidrolase, dan ligase. Masing-masing enzim bekerja pada
                reaksi spesifik dalam metabolisme tubuh.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4 text-center">
        <Col>
          <Button variant="primary" style={{ backgroundColor: '#2980b9', borderColor: '#2980b9', padding: '10px 20px', fontSize: '1.2em' }}>
            Pelajari Lebih Lanjut
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EnzymeMetabolism;
