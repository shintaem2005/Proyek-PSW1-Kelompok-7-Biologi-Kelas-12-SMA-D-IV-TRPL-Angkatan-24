import React, { useState } from "react";

const Evolusi = () => {
  const [showFact, setShowFact] = useState(false);

  const toggleFact = () => setShowFact(!showFact);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 display-4">Evolusi</h1>

      <img src="https://cdn.prod.website-files.com/62041b52ed8a5756a8361408/650b76b2a66ebc491e52d45f_abundance-2.jpg" alt="Evolusi" className="img-fluid rounded shadow my-4" />

      <ul>
        <li>Charles</li>
        <li>VA</li>
      </ul>

      <section className="mb-5">
        <h2 className="mt-4">
        Pengertian Evolusi
        </h2>
        <p className="text-justify">
        berarti perubahan pada sifat-sifat terwariskan suatu populasi organisme dari satu generasi ke generasi berikutnya. Perubahan-perubahan ini disebabkan oleh kombinasi tiga proses utama: variasi, reproduksi, dan seleksi. 
        <br />
        Sifat-sifat yang menjadi dasar evolusi ini dibawa oleh gen yang diwariskan kepada keturunan suatu makhluk hidup dan menjadi bervariasi dalam suatu populasi. Ketika organisme bereproduksi, keturunannya akan mempunyai sifat-sifat yang baru. 
        <br/>
        Sifat baru dapat diperoleh dari perubahan gen akibat mutasi ataupun transfer gen antar populasi dan antar spesies. Pada spesies yang bereproduksi secara seksual, kombinasi gen yang baru juga dihasilkan oleh rekombinasi genetika, yang dapat meningkatkan variasi antara organisme. Evolusi terjadi ketika perbedaan-perbedaan terwariskan ini menjadi lebih umum atau langka dalam suatu populasi.
        </p>
        </section>

      <section className="mb-5">
        <h2 className="mt-4">
          Faktor utama
        </h2>

        <p className="text-justify">
        Evolusi didorong oleh dua mekanisme utama, yaitu <strong> seleksi alam </strong>dan <strong> hanyutan genetik</strong>. Seleksi alam merupakan sebuah proses yang menyebabkan sifat terwaris yang berguna untuk keberlangsungan hidup dan reproduksi organisme menjadi lebih umum dalam suatu populasi - dan sebaliknya, sifat yang merugikan menjadi lebih berkurang.
        <br />
        Hal ini terjadi karena individu dengan sifat-sifat yang menguntungkan lebih berpeluang besar bereproduksi, sehingga lebih banyak individu pada generasi selanjutnya yang mewarisi sifat-sifat yang menguntungkan ini. Setelah beberapa generasi, adaptasi terjadi melalui kombinasi perubahan kecil sifat yang terjadi secara terus menerus dan acak ini dengan seleksi alam.
        <br />
        Sementara itu, hanyutan genetik (Bahasa Inggris: Genetic Drift) merupakan sebuah proses bebas yang menghasilkan perubahan acak pada frekuensi sifat suatu populasi. Hanyutan genetik dihasilkan oleh probabilitas apakah suatu sifat akan diwariskan ketika suatu individu bertahan hidup dan bereproduksi.
        </p>
        </section>

      <section className="mb-5">
        <h2 className="mt-4">Evolusi Kehidupan</h2>
        <p>
        Walaupun terdapat ketidakpastian bagaimana kehidupan bermula, adalah umumnya diterima bahwa prokariota hidup di bumi sekitar 3–4 miliar tahun yang lalu. Tidak terdapat perubahan yang banyak pada morfologi atau organisasi sel yang terjadi pada organisme ini selama beberapa miliar tahun ke depan.
        </p>

        <p>
        Eukariota merupakan perkembangan besar pada evolusi sel. Ia berasal dari bakteri purba yang ditelan oleh leluhur sel prokariotik dalam asosiasi kooperatif yang disebut endosimbiosis. Bakteri yang ditelan dan sel inang kemudian menjalani koevolusi, dengan bakteri berevolusi menjadi mitokondria ataupun hidrogenosom. Penelanan kedua secara terpisah pada organisme yang mirip dengan sianobakteri mengakibatkan pembentukan kloroplas pada ganggang dan tumbuhan. Tidaklah diketahui kapan sel pertama eukariotik muncul, walaupun sel-sel ini muncul sekitar 1,6 - 2,7 miliar tahun yang lalu.
        </p>

        <p>
        Sejarah kehidupan masih berupa eukariota, prokariota, dan arkaea bersel tunggal sampai sekitar 610 miliar tahun yang lalu, ketika organisme multisel mulai muncul di samudra pada periode Ediakara. Evolusi multiselularitas terjadi pada banyak peristiwa yang terpisah, terjadi pada organisme yang beranekaragam seperti bunga karang, ganggang coklat, sianobakteri, jamur lendir, dan miksobakteri. 
        <br />
        Segera sesudah kemunculan organisme multisel, sejumlah besar keanekaragaman biologis muncul dalam jangka waktu lebih dari sekitar 10 juta tahun pada perstiwa yang dikenal sebagai ledakan Kambria. Pada masa ini, mayoritas jenis hewan modern muncul pada catatan fosil, demikian pula garis silsilah hewan yang telah punah. Beberapa faktor pendorong ledakan Kambria telah diajukan, meliputi akumulasi oksigen pada atmosfer dari fotosintesis. Sekitar 500 juta tahun yang lalu, tumbuhan dan fungi mengkolonisasi daratan, dan dengan segera diikuti oleh arthropoda dan hewan lainnya. Hewan amfibi pertama kali muncul sekitar 300 juta tahun yang lalu, diikuti amniota, kemudian mamalia sekitar 200 juta tahun yang lalu, dan aves sekitar 100 juta tahun yang lalu. Namun, walaupun terdapat evolusi hewan besar, organisme-organisme yang mirip dengan organisme awal proses evolusi tetap mendominasi bumi, dengan mayoritas biomassa dan spesies bumi berupa prokariota.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-danger">Sejarah Teori Evolusi</h2>
        <p>
        Pemikiran-pemikiran evolusi seperti nenek moyang bersama dan transmutasi spesies telah ada paling tidak sejak abad ke-6 SM ketika hal ini dijelaskan secara rinci oleh seorang filsuf Yunani, Anaximander. 
        <br />
        Beberapa orang dengan pemikiran yang sama meliputi Empedokles, Lucretius, biologiawan Arab Al Jahiz, filsuf Persia Ibnu Miskawaih, Ikhwan As-Shafa, dan filsuf Cina Zhuangzi.
        <br />
        Seiring dengan berkembangnya pengetahuan biologi pada abad ke-18, pemikiran evolusi mulai ditelusuri oleh beberapa filsuf seperti Pierre Maupertuis pada tahun 1745 dan Erasmus Darwin pada tahun 1796. Pemikiran biologiawan Jean-Baptiste Lamarck tentang transmutasi spesies memiliki pengaruh yang luas.
        <br />
        Charles Darwin merumuskan pemikiran seleksi alamnya pada tahun 1838 dan masih mengembangkan teorinya pada tahun 1858 ketika Alfred Russel Wallace mengirimkannya teori yang mirip dalam suratnya "Surat dari Ternate". Keduanya diajukan ke Linnean Society of London sebagai dua karya yang terpisah. Pada akhir tahun 1859, publikasi Darwin, On the Origin of Species, menjelaskan seleksi alam secara mendetail dan memberikan bukti yang mendorong penerimaan luas evolusi dalam komunitas ilmiah.
        </p>
        
        <button className="btn btn-info my-3" onClick={toggleFact}>
        {showFact ? "Sembunyikan" : "Fakta Menarik"}
        </button>
        {showFact && (<div className="alert alert-warning">
          Tahukan?
        </div>)}
      </section>

      <h2 className="mt-4">Con</h2>
      <p>
        sxsdndj
      </p>

      <footer className="text-center mt-5">
        <p></p>
      </footer>

    </div>
  );
};

export default Evolusi;
