import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EnzymeMetabolism.css';

const EnzymeMetabolism = () => {
  return (
    <div className="container-fluid enzyme-page">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="title mt-4">Enzim dan Metabolisme</h1>
          <p className="subtitle">Mengenal peran enzim dalam proses metabolisme</p>
        </div>
      </div>

    
      <div className="row mt-4 justify-content-center">
        <div className="col-md-8">
          <div className="card metabolism-card">
            <div className="card-body">
              <h2 className="card-title">Apa itu Metabolisme?</h2>
              <p className="card-text">
                Metabolisme merupakan serangkaian peristiwa reaksi-reaksi kimia yang berlangsung dalam sel makhluk hidup. Metabolisme juga merupakan aktivitas hidup yang selalu terjadi pada setiap sel hidup.
              </p>
            </div>
            <div className="hidden-text">
              Metabolisme adalah serangkaian peristiwa reaksi-reaksi kimia yang terjadi dalam tubuh untuk mengubah makanan menjadi energi. Proses ini menghasilkan ATP yang diperlukan untuk berbagai aktivitas vital tubuh.
              Metabolisme dibagi dua yakni:<br />
              A. Katabolisme<br />
              Katabolisme merupakan reaksi pemecah atau penguraian senyawa kompleks menjadi senyawa sederhana yang disertai dengan pembebasan energi. Proses katabolisme terjadi di dalam sel, sehingga proses ini disebut respirasi sel. Berdasarkan ada dan tidaknya oksigen, respirasi sel dibedakan menjadi respirasi aerob dan respirasi anaerob.<br />
              B. Anabolisme<br />
              Berikutnya ada anabolisme yang merupakan lintasan metabolisme yang menyusun senyawa-senyawa organik sederhana menjadi senyawa kimia
atau molekul kompleks.
Proses tersebut membutuhkan energi dari luar. Energi yang digunakan dalam reaksi anabolisme dapat berupa energi cahaya ataupun kimia.
            </div>
          </div>
        </div>
      </div>

      
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card enzyme-card">
            <div className="card-body">
              <h2 className="card-title">Apa itu Enzim?</h2>
              <p className="card-text">
                
              Enzim adalah suatu senyawa kimia/protein khusus yang berperan sebagai katalisator suatu reaksi kimia di dalam tubuh makhluk hidup. 
              
              </p>
            </div>
            <div className="hidden-text">
            Enzim sebagai katalisator dapat mempercepat suatu reaksi kimia yaitu dengan cara menurunkan energi aktivasi. Energi aktivasi adalah energi awal yang digunakan untuk memulai suatu reaksi kimia. Enzim merupakan biokatalisator yang artinya dapat mempercepat reaksi-reaksi biologi tanpa mengalami perubahan struktur kimia.Sehingga, seluruh reaksi kimia yang terjadi di dalam tubuh makhluk hidup ini disebut metabolisme.Reaksi-reaksi kimia pada metabolisme ini terjadi sangat cepat. Enzim sebagai komponen yang sangat berperan terhadap reaksi-reaksi yang ada. 
      </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card enzyme-card">
            <div className="card-body">
              <h2 className="card-title">Struktur Enzim</h2>
              <p className="card-text">
              Keseluruhan bagian enzim disebut holoenzim. Enzim disusun oleh dua komponen utama yaitu:<br />

              </p>
            </div>
            <div className="hidden-text">
            1. Gugus protein (Apoenzim) : yaitu bagian dari enzim yang tersusun dari molekul protein <br />
2. Gugus non protein : yaitu bagian dari enzim yang tersusun dari senyawa non protein<br />

 Enzim memiliki sisi aktif, yakni bagian atau tempat pada enzim yang berfungsi sebagai tempat menempelnya substrat. Kerja enzim sangat spesifik karena sisi aktif dari enzim sangat selektif terhadap bentuk kimia dari substrat yang akan dikatalisis. Ikatan yang terbentuk antara enzim dengan substrat bersifat lemah sehingga reaksi dapat berlangsung bolak-balik. Substrat menempel pada sisi aktif enzim dan akan menghasilkan produk baru. Komponen nonprotein/gugus prostetik memiliki sifat stabil pada suhu yang relative tinggi dan tidak berubah pada akhir reaksi. Gugus prostetik di bedakan menjadi kofaktor dan koenzim. Kofaktor tersusun dari zat anorganik yang umumnya logam misalnya Cu, Fe, Mn, Zn, Ca, K dan Co. Koenzim tersusun dari senyawa organic nonprotein yang idak melekat erat pada bagian protein enzim, misalnya vitamin, NAD, NADP dan Koenzim A.
         </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card enzyme-card">
            <div className="card-body">
              <h2 className="card-title">Klasifikasi Enzim</h2>
              <ul>
                <li>Hidrolase</li>
                Hidrolase adalah enzim-enzim yang dapat melakukan penguraian terhadap suatu zat dengan adanya bantuan dari air.
                </ul>
                </div>
                <div className="hidden-text">               
                <li>Karbohidrase</li>
                Karbohidrase merupakan enzim yang mengeluarkan golongan karbohidrat. Kelompok ini masih dipecah lagi menurut karbohidrat yang diuraikan, misal :<br />
1.Amylase, yaitu enzim yang menguraikan amilum (suatu polisakarida) menjadi maltosa 9 suatu disakarida.<br />
2.Maltase, adalah enzim yang memproses maltosa menjadi glukosa.<br />
3.Sukrase, merupakan enzim yang mengubah sukrosa (gula tebu) menjadi glukosa dan fruktosa.
                <li>Esterase</li>
                Esterase merupakan enzim-enzim yang menguraikan golongan ester. Contoh-contohnya:<br/>
1.Lipase, adalah enzim yang menghancurkan lemak menjadi gliserol dan asam lemak.<br/>
2.Fosfatase, adalah enzim yang memproses suatu ester hingga terlepas asam fosfat.
                <li>Proteinase atau Protease</li>
                Proteinase atau protease yaitu enzim-enzim yang menghancurkan golongan protein. Contoh-contohnya :<br />
1.Peptidase, adalah enzim yang memproses petida menjadi asam amino.<br />
2.Gelatinase yaitu enzim yang menguraikan gelatin.<br />
3.Renin adalah enzim yang memecah kasein dari susu.
               <li>Oksidase dan Reduktase</li>
               Oksidase dan reduktase adalah enzim yang membantu dalam proses oksidasi dan reduksi. Enzim oksidase dibagi lagi menjadi :<br />
Dehydrogenase yaitu enzim ini memegang peranan penting dalam mengubah zat-zat organik menjadi hasil-hasil oksidasi.<br />
Katalase adalah enzim yang dapat melakukan penguraian terhadap hidrogen peroksida menjadi oksigen serta air.
               <li>Desmolase</li>
               Desmolase adalah enzim-enzim yang menguraikan ikatan-ikatan C-C, C-N dan beberapa ikatan lainnya. Enzim desmolase dibagi lagi menjadi :<br />
Karboksilase adalah enzim yang menguraikan asam piruvat menjadi asetaldehida.<br />
Transaminase yaitu enzim yang memindahkan gugusan amino dari suatu asam amino ke suatu asam organic sehingga yang terakhir ini berubah menjadi suatu asam amino.<br />
            </div>
            </div>
        </div>
        <div className="col-md-6">
          <div className="card enzyme-card">
            <div className="card-body">
              <h2 className="card-title">Faktor yang Mempengaruhi Kerja Enzim</h2>
              <p>
                Aktivitas enzim dipengaruhi oleh suhu, pH, konsentrasi substrat,zat zat pengikat serta penghambat

              </p>
            </div>
            <div className="hidden-text">   
            1.Suhu
Enzim tersusun dari protein sebab itu enzim sangat peka terhadap suhu. Suhu yang terlalu tinggi dapat menyebabkan denaturasi protein, dan suhu yang terlalu rendah dapat menghambat laju reaksi. Setiap enzim mempunyai suhu optimum yang spesifik, jika enzim berada di bawah suhu optimum maka kerja enzim akan terhambat.
<br/>
2.pH<br/>
Setiap enzim mempunyai pH optimun yang spesifik. Perubahan pH mengakibatkan sisi aktif enzim berubah sehingga dapat menghalangi terikatnya substrat pada sisi aktif enzim, selain itu perubahan pH juga mengakibatkan proses denaturasi pada enzim.
<br/>3.Konsentrasi Enzim dan substrat
Agar reaksi berjalan optimum, perbandingan jumlah antara enzim dan substrat harus sesuai. Jika enzim terlalu sedikit dan substrat terlalu banyak reaksi akan berjalan lambat dan bahkan ada substrat yang tidak terkatalisasi. Semakin banyak enzim maka reaksi akan berjalan semakin cepat.
<br />4.Zat-zat Pengikat
Aktivator yaitu zat yang berfungsi memacu atau mempercepat reaksi enzim. Contohnya Aktivator antara lain garam-garam dan logam alkali dalam kondisi encer (2%-5%) dan ion logam Ca, Mg, Mn, Ni, dan C1)
<br />5.Zat-zat Penghambat
Ada dua macam inhibitor enzim, yaitu inhibitor kompetitif dan inhibitor nonkompetitif. Inhibitor kompetitif adalah inhibitor yang berkaitan secara kuat pada sisi aktif enzim. inhibitor kompetitif dapat dihilangkan dengan cara menambah konsentrasi substrat.
Sedangkan inhibitor nonkompetitif adalah inhibitor yang terikat pada sisi elosterik enzim (selain sisi aktif enzim), inhibitor ini mengakibatkan sisi aktif enzim berubah hingga substart tidak dapat berkaitan dengan sifat sisi aktif enzim. inhibitor ini tidak dapat dihilangkan walaupun dengan menambahkan konsentrasi substart.
         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnzymeMetabolism;