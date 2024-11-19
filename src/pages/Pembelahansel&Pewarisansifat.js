import React from 'react';

function App() {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '0',
    padding: '0',
    backgroundColor: '#f0f0f0', 
    color: '#333',
    minHeight: '100vh',
  };

  const containerStyle = {
    width: '80%',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#4CAF50',
    fontSize: '2.5em',
    marginBottom: '20px',
  };

  const sectionStyle = {
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '2px solid #f4f4f4',
  };

  const subHeadingStyle = {
    color: '#007BFF',
    fontSize: '1.8em',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
  };

  const listStyle = {
    marginLeft: '20px',
    fontSize: '18px',
    color: '#555',
  };

  const boxStyle = {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const codeStyle = {
    display: 'block',
    backgroundColor: '#2E3B4E',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '10px',
    fontFamily: 'Courier, monospace',
    fontSize: '16px',
  };

  return (
    <div style={appStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Materi Biologi: Pembelahan Sel & Pewarisan Sifat</h1>
        
        <section style={sectionStyle}>
          <h2 style={subHeadingStyle}>1. Pembelahan Sel</h2>
          <p style={paragraphStyle}>
            Pembelahan sel adalah proses penting dalam siklus hidup sel yang memastikan bahwa setiap sel baru yang terbentuk memiliki informasi genetik yang sama dengan sel induk.
            Ada dua jenis pembelahan sel utama yang perlu dipahami, yaitu <strong>mitosis</strong> dan <strong>meiosis</strong>.
          </p>

          <h3 style={subHeadingStyle}>a. Mitosis</h3>
          <p style={paragraphStyle}>
            Mitosis adalah pembelahan sel tubuh yang menghasilkan dua sel anak yang identik dengan sel induk. Proses mitosis dibagi menjadi beberapa tahap:
          </p>
          <ul style={listStyle}>
            <li><strong>Profase:</strong> Kromosom menjadi terlihat, dan membran inti mulai menghilang.</li>
            <li><strong>Metafase:</strong> Kromosom berbaris di tengah sel.</li>
            <li><strong>Anafase:</strong> Kromatid yang berpasangan dipisahkan menuju kutub yang berlawanan.</li>
            <li><strong>Telofase:</strong> Membran inti terbentuk kembali, dan kromosom mulai melonggar.</li>
            <li><strong>Sitokinesis:</strong> Pembagian sitoplasma yang membentuk dua sel anak.</li>
          </ul>

          <h3 style={subHeadingStyle}>b. Meiosis</h3>
          <p style={paragraphStyle}>
            Meiosis adalah jenis pembelahan sel yang menghasilkan sel gamet (sel telur atau sperma). Berbeda dengan mitosis, meiosis menghasilkan empat sel anak dengan jumlah kromosom setengah dari jumlah kromosom sel induk.
            Meiosis terdiri dari dua tahap pembelahan: Meiosis I dan Meiosis II.
          </p>

          <div style={boxStyle}>
            <h4 style={subHeadingStyle}>Tahap Meiosis I:</h4>
            <ul style={listStyle}>
              <li><strong>Profase I:</strong> Kromosom homolog berpasangan dan terjadi pertukaran gen (crossing over).</li>
              <li><strong>Metafase I:</strong> Kromosom homolog berbaris di tengah sel.</li>
              <li><strong>Anafase I:</strong> Kromosom homolog dipisahkan menuju kutub yang berlawanan.</li>
              <li><strong>Telofase I:</strong> Membran inti terbentuk, dan sitokinesis terjadi.</li>
            </ul>
          </div>

          <div style={boxStyle}>
            <h4 style={subHeadingStyle}>Tahap Meiosis II:</h4>
            <ul style={listStyle}>
              <li><strong>Profase II:</strong> Kromosom mulai muncul kembali tanpa duplikasi.</li>
              <li><strong>Metafase II:</strong> Kromosom berbaris di tengah sel.</li>
              <li><strong>Anafase II:</strong> Kromatid dipisahkan ke kutub yang berlawanan.</li>
              <li><strong>Telofase II:</strong> Empat sel anak terbentuk dengan jumlah kromosom setengah dari sel induk.</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={subHeadingStyle}>2. Pewarisan Sifat</h2>
          <p style={paragraphStyle}>
            Pewarisan sifat adalah proses bagaimana sifat-sifat individu diturunkan dari orang tua kepada keturunannya. Sifat ini dikendalikan oleh gen yang terdapat dalam kromosom.
            Pewarisan sifat mengikuti hukum-hukum genetika yang pertama kali dijelaskan oleh Gregor Mendel.
          </p>

          <h3 style={subHeadingStyle}>a. Hukum Pewarisan Mendel</h3>
          <p style={paragraphStyle}>
            Hukum pewarisan Mendel terdiri dari dua hukum utama: hukum segregasi dan hukum distribusi independen. 
            Berikut adalah penjelasan singkat tentang keduanya:
          </p>
          <ul style={listStyle}>
            <li><strong>Hukum Segregasi:</strong> Setiap individu mewarisi dua salinan gen, dan salinan ini dipisahkan selama pembentukan gamet.</li>
            <li><strong>Hukum Distribusi Independen:</strong> Gen-gen yang berada pada kromosom yang berbeda akan diwariskan secara independen satu sama lain.</li>
          </ul>

          <h3 style={subHeadingStyle}>b. Gen Dominan dan Resesif</h3>
          <p style={paragraphStyle}>
            Dalam pewarisan sifat, ada dua jenis alel yang terlibat, yaitu alel dominan dan alel resesif. Alel dominan akan menutupi efek dari alel resesif jika keduanya ada pada individu yang sama.
            Misalnya, warna mata coklat adalah sifat dominan, sedangkan warna mata biru adalah sifat resesif.
          </p>

          <h3 style={subHeadingStyle}>c. Genotype dan Phenotype</h3>
          <p style={paragraphStyle}>
            <strong>Genotype</strong> adalah susunan genetik individu, sedangkan <strong>phenotype</strong> adalah ekspresi fisik atau sifat yang dapat diamati dari individu tersebut. Genotype dapat berupa:
          </p>
          <ul style={listStyle}>
            <li><strong>Homozygot Dominan (AA):</strong> Dua alel dominan.</li>
            <li><strong>Homozygot Resesif (aa):</strong> Dua alel resesif.</li>
            <li><strong>Heterozygot (Aa):</strong> Satu alel dominan dan satu alel resesif.</li>
          </ul>

          <div style={boxStyle}>
            <h4 style={subHeadingStyle}>Contoh Pewarisan Sifat pada Keturunan:</h4>
            <p style={paragraphStyle}>
              Jika orang tua memiliki genotipe Aa (heterozygot), dan pasangan memiliki genotipe aa (homozygot resesif), maka kemungkinan keturunannya dapat memiliki genotype AA, Aa, atau aa.
            </p>
            <pre style={codeStyle}>
{`Peluang Pewarisan Gen:
- AA: 25% 
- Aa: 50%
- aa: 25%`}
            </pre>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default App;
