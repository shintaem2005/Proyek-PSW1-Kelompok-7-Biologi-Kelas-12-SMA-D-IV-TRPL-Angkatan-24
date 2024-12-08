import React from "react";
import "./Evolusi.css";

function Evolusi() {
    return (
        <div className="evolution-background">
        <div className="container mt-4">

            <header className="animated-header">
               <h1>Evolusi</h1>
                <p>Pengetahuan dari Zaman Awal</p>
            </header>

            {/* Intro Section */}
            <section className="row align-items-center mt-4 bg-white p-4 shadow-sm rounded">
                <div className="col-md-6">
                    <h2>Pengertian Evolusi</h2>
                    <p className="paragraph">
                    berarti perubahan pada sifat-sifat terwariskan suatu populasi organisme dari satu generasi ke generasi berikutnya. Perubahan-perubahan ini disebabkan oleh kombinasi tiga proses utama: variasi, reproduksi, dan seleksi.
                    </p>
                    <p className="paragraph">
                    Sifat-sifat yang menjadi dasar evolusi ini dibawa oleh gen yang diwariskan kepada keturunan suatu makhluk hidup dan menjadi bervariasi dalam suatu populasi. Ketika organisme bereproduksi, keturunannya akan mempunyai sifat-sifat yang baru.
                    </p>
                    <p className="paragraph">
                    Sifat baru dapat diperoleh dari perubahan gen akibat mutasi ataupun transfer gen antar populasi dan antar spesies. Pada spesies yang bereproduksi secara seksual, kombinasi gen yang baru juga dihasilkan oleh rekombinasi genetika, yang dapat meningkatkan variasi antara organisme. Evolusi terjadi ketika perbedaan-perbedaan terwariskan ini menjadi lebih umum atau langka dalam suatu populasi.
                    </p>
                    <p className="paragraph">
                    Evolusi didorong oleh dua mekanisme utama, yaitu <strong> seleksi alam </strong>dan <strong> hanyutan genetik</strong>. Seleksi alam merupakan sebuah proses yang menyebabkan sifat terwaris yang berguna untuk keberlangsungan hidup dan reproduksi organisme menjadi lebih umum dalam suatu populasi - dan sebaliknya, sifat yang merugikan menjadi lebih berkurang.
                    <br />
                    Hal ini terjadi karena individu dengan sifat-sifat yang menguntungkan lebih berpeluang besar bereproduksi, sehingga lebih banyak individu pada generasi selanjutnya yang mewarisi sifat-sifat yang menguntungkan ini. Setelah beberapa generasi, adaptasi terjadi melalui kombinasi perubahan kecil sifat yang terjadi secara terus menerus dan acak ini dengan seleksi alam.
                    <br />
                    Sementara itu, hanyutan genetik (Bahasa Inggris: Genetic Drift) merupakan sebuah proses bebas yang menghasilkan perubahan acak pada frekuensi sifat suatu populasi. Hanyutan genetik dihasilkan oleh probabilitas apakah suatu sifat akan diwariskan ketika suatu individu bertahan hidup dan bereproduksi.
                    </p>
                    <img
                    src="https://jurnalpost.com/wp-content/uploads/2024/05/dfrg.webp"
                    alt="Ilustrasi Evolusi"
                    className="img-fluid rounded"
                    />
                </div>

                <div className="col-md-6">
                    <p>
                        Ada faktor-faktor lain yang mempengaruhi, yaitu : 
                    </p>

                    <ul>
                        <li>Migrasi</li>
                        <p className="paragraph">Migrasi adalah perpindahan spesies-spesies ke tempattempat baru. Perpindahan tersebut menghasilkan pola kehidupan baru yang mendukung terjadinya perubahan pada spesies-spesies tersebut. Pada tempat yang baru generasigenerasi yang muncul akan berbeda dari spesies-spesies nenek moyang asal-usulnya.</p>

                        <li>Rekombinasi Gen</li>
                        <p className="paragraph">
                        Rekombinasi gen terjadi melalui perkawinan yang menyebabkan perubahan frekuensi gen pada generasi berikutnya. Melalui perkawinan silang, akan dihasilkan varietas baru. Varietas baru ini terjadi akibat pembuahan atau penyerbukan dari individu lain sehingga terjadi rekombinasi gen. Rekombinasi gen-gen yang disebabkan oleh perkawinan silang merupakan dasar terjadinya evolusi, karena melalui rekombinasi memungkinkan adanya variasi baru.
                        </p>
                    </ul> 

                    <p className="paragraph">
                    Apabila varietas-varietas baru yang terbentuk menempati daerah yang sangat berbeda dan tidak memungkinkan terjadinya interhibridisasi, dua varietas baru tersebut akan mengalami perubahan-perubahan yang pada akhirnya akan menjadi dua spesies yang berbeda. Proses pembentukan spesies baru ini disebut spesiasi. Spesiasi
                    dipengaruhi oleh beberapa faktor sebagai berikut.
                    </p>
                    <ul>
                        <li>Isolasi Reproduksi</li>
                        <p className="paragraph">
                        Apabila dua spesies yang asal-usulnya sama, kemudian terjadi perubahan yang mendasar sehingga mengakibatkan tidak terjadinya kesamaan alat reproduksi dan tidak terjadi interhibridisasi, maka spesies tersebut menjadi dua kelompok populasi simpatrik (populasi yang berbeda spesies).
                        </p>

                        <li>Isolasi Geografis</li>
                        <p className="paragraph">
                        Isolasi geografis merupakan pemisahan kedua spesies simpatrik karena letak geografis yang mengakibatkan tidak terjadinya interhibridisasi.
                        </p>

                        <li>Domestikasi</li>
                        <p className="paragraph">
                        Penjinakan hewan-hewan liar menjadi hewan peliharaan disebut domestikasi. Domestikasi menyebabkan terjadinya penyimpangan dari keadaan aslinya sehingga mengarah pada terbentuknya spesies baru. Secara alami, hewanhewan peliharaan akan memisahkan diri dari hewan-hewan
                        liar dan mempersempit peluang terjadinya interhibridisasi.
                        </p>

                        <li>Peristiwa Poliploidi</li>
                        <p className="paragraph">
                        Poliploidi adalah suatu keadaan yang tidak normal, di mana jumlah kromosom menjadi berlipat ganda sehingga tidak mewarisi sifat dari induknya dan menyebabkan terbentuknya spesies baru. Peristiwa poliploidi antara lain dipengaruhi oleh radiasi dan zat kimia tertentu.
                        </p>
                    </ul>
                </div>
            </section>

            {/* Video Section */}
            <section className="text-center mt-5">
                <h2 className="h2feature">Video Evolusi</h2>
                <div className="ratio ratio-16x9 mt-3">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Nu16eO1Qu88?si=baOlFMKJJRE9DGTp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section className="row align-items-center mt-4 bg-white p-4 shadow-sm rounded">
                <div className="col-md-6">
                    <h2>Evolusi Kehidupan</h2>
                    <p className="paragraph">
                    Walaupun terdapat ketidakpastian bagaimana kehidupan bermula, adalah umumnya diterima bahwa prokariota hidup di bumi sekitar 3-4 miliar tahun yang lalu. Tidak terdapat perubahan yang banyak pada morfologi atau organisasi sel yang terjadi pada organisme ini selama beberapa miliar tahun ke depan.
                    </p>
                    <p className="paragraph">
                    Eukariota merupakan perkembangan besar pada evolusi sel. Ia berasal dari bakteri purba yang ditelan oleh leluhur sel prokariotik dalam asosiasi kooperatif yang disebut endosimbiosis. Bakteri yang ditelan dan sel inang kemudian menjalani koevolusi, dengan bakteri berevolusi menjadi mitokondria ataupun hidrogenosom. Penelanan kedua secara terpisah pada organisme yang mirip dengan sianobakteri mengakibatkan pembentukan kloroplas pada ganggang dan tumbuhan. Tidaklah diketahui kapan sel pertama eukariotik muncul, walaupun sel-sel ini muncul sekitar 1,6 - 2,7 miliar tahun yang lalu.
                    </p>
                    <p className="paragraph">
                    Sejarah kehidupan masih berupa eukariota, prokariota, dan arkaea bersel tunggal sampai sekitar 610 miliar tahun yang lalu, ketika organisme multisel mulai muncul di samudra pada periode Ediakara. Evolusi multiselularitas terjadi pada banyak peristiwa yang terpisah, terjadi pada organisme yang beranekaragam seperti bunga karang, ganggang coklat, sianobakteri, jamur lendir, dan miksobakteri.
                    </p>
                    <p className="paragraph">
                    Segera sesudah kemunculan organisme multisel, sejumlah besar keanekaragaman biologis muncul dalam jangka waktu lebih dari sekitar 10 juta tahun pada perstiwa yang dikenal sebagai ledakan Kambria. Pada masa ini, mayoritas jenis hewan modern muncul pada catatan fosil, demikian pula garis silsilah hewan yang telah punah. Beberapa faktor pendorong ledakan Kambria telah diajukan, meliputi akumulasi oksigen pada atmosfer dari fotosintesis. Sekitar 500 juta tahun yang lalu, tumbuhan dan fungi mengkolonisasi daratan, dan dengan segera diikuti oleh arthropoda dan hewan lainnya. Hewan amfibi pertama kali muncul sekitar 300 juta tahun yang lalu, diikuti amniota, kemudian mamalia sekitar 200 juta tahun yang lalu, dan aves sekitar 100 juta tahun yang lalu. Namun, walaupun terdapat evolusi hewan besar, organisme-organisme yang mirip dengan organisme awal proses evolusi tetap mendominasi bumi, dengan mayoritas biomassa dan spesies bumi berupa prokariota.
                    </p>
                </div>

                <div className="col-md-6">
                <h2>Sejarah Evolusi</h2>
                <p className="paragraph">
                Pemikiran-pemikiran evolusi seperti nenek moyang bersama dan transmutasi spesies telah ada paling tidak sejak abad ke-6 SM ketika hal ini dijelaskan secara rinci oleh seorang filsuf Yunani, Anaximander. Beberapa orang dengan pemikiran yang sama meliputi Empedokles, Lucretius, biologiawan Arab Al Jahiz, filsuf Persia Ibnu Miskawaih, Ikhwan As-Shafa, dan filsuf Cina Zhuangzi.
                </p>
                <p className="paragraph">Seiring dengan berkembangnya pengetahuan biologi pada abad ke-18, pemikiran evolusi mulai ditelusuri oleh beberapa filsuf seperti Pierre Maupertuis pada tahun 1745 dan Erasmus Darwin pada tahun 1796. Pemikiran biologiawan Jean-Baptiste Lamarck tentang transmutasi spesies memiliki pengaruh yang luas.
                </p>
                <p className="paragraph">
                Charles Darwin merumuskan pemikiran seleksi alamnya pada tahun 1838 dan masih mengembangkan teorinya pada tahun 1858 ketika Alfred Russel Wallace mengirimkannya teori yang mirip dalam suratnya "Surat dari Ternate". Keduanya diajukan ke Linnean Society of London sebagai dua karya yang terpisah. Pada akhir tahun 1859, publikasi Darwin, On the Origin of Species, menjelaskan seleksi alam secara mendetail dan memberikan bukti yang mendorong penerimaan luas evolusi dalam komunitas ilmiah.
                </p>
                <img
                    src="https://i.pinimg.com/736x/3e/dc/db/3edcdbaaa90218b00127feb7bdcb3380.jpg"
                    alt="Ilustrasi Evolusi"
                    className="img-fluid rounded"
                />
                </div>

            </section>

            {/* Video Section */}
            <section className="text-center mt-5">
                <h2 className="h2feature">Video Evolusi</h2>
                <div className="ratio ratio-16x9 mt-3">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZVwPrhy7oK0?si=dBNm2gaAHQpSzNPr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            {/* Features Section */}
            <section className="mt-5">
                <h2 className="h2feature">PERKEMBANGAN TEORI EVOLUSI</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <h3 className="card-title">Plato</h3>
                                <p className="card-text">
                                Plato (427-347 SM) Plato menyatakan percaya pada dunia, yakni dunia yang ideal dan abadi serta dunia maya (khayal) yang tidak sempurna. Kedua dunia tersebut dapat dipahami dengan menggunakan indera manusia. Dikatakan evolusi akan mengubah dunia yang organismenya sudah ideal dan beradaptasi sempurna dengan lingkungan.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <h3 className="card-title">Aristoteles</h3>
                                <p className="card-text">
                                Aristoteles (384-322 SM) Aristoteles menganut teori skala alami. Dikutip situs Kementerian Pendidikan dan Kebudayaan (Kemendikbud), teori yang disampaikan Aristoteles membahas bahwa semua bentuk kehidupan disusun menurut suatu skala atau tangga yang kompleksitasnya meningkat ke atas. Menurutnya, setiap bentuk kehidupan makhluk hidup mempunyai suatu tangga dengan anak tangga masing-masing yang ada pada tingkatan yang berbeda.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <h3 className="card-title">Jean Baptise de Lamarck</h3>
                                <p className="card-text">
                                Jean Baptise de Lamarck (1744-1829) Pada teori evolusi Lamarck ada dua gagasan utama, yakni:Memiliki dua gagasan mengenai evolusi. Gagasan pertama berkaitan dengan bagian tubuh yang digunakan dan tidak digunakan oleh makhluk hidup. Melalui gagasannya ini, ia menganggap bahwa bagian tubuh yang terus-menerus dipakai makhluk hidup dalam menghadapi lingkungan tertentu akan menjadi lebih besar dan lebih kuat dibandingkan anggota tubuh yang jarang digunakan. Sementara anggota tubuh yang jarang digunakan akan mengalami kemunduran. Gagasan kedua Lamarck berkaitan dengan pewarisan sifat atau ciri-ciri yang diperoleh makhluk hidup dalam beradaptasi dengan lingkungannya. Pewarisan sifat atau ciri-ciri inilah yang memodifikasi organisme yang diperolehnya selama hidupnya. Contohnya, jerapah yang disebut berleher pendek, tapi karena lehernya terus menerus menjulur untuk mendapatkan daun di pohon yang tinggi, leher jerapah mulai menjadi panjang. Leher panjang inilah yang diwariskan ke semua keturunannya.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <h3 className="card-title">Charles Robert Darwin </h3>
                                <p className="card-text">
                                Charles Robert Darwin (1809-1882) Darwin menilai bahwa evolusi terjadi melalui proses seleksi alam. Makhluk hidup yang mampu menyesuaikan diri dengan alam dapat bertahan hidup. Sementara makhluk hidup yang tidak dapat menyesuaikanm diri dengan alam tidak akan bertahan hidup atau mati. Darwin merupakan pelopor teori modern. Teori tentang evolusi merupakan pengamatannya ketika berlayar dengan kapal Beagle ke kepulauan Galapagos. Melalui pengamatan dan kajian yang mendalam, akhirnya Darwin mengemukakan teori evolusinya lewat buku berjudul On  The Origin of Species by Means of Natural Selection (Asal Mula Spesies yang Terjadi Melalui Seleksi Alam). Buku tersebut diterbitkan pada 24 November 1859. Ada dua teori yang ada di dalam buku Darwin, yakni spesies-spesies yang hidup sekarang ini berasal dari spesies-spesies yang hidup dimasa lalu. Lalu seleksi alam merupakan penyebab evolusi adaptif.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <h3 className="card-title">Alfred Russel Wallace</h3>
                                <p className="card-text">
                                Alfred Russel Wallace (1823-1913) Teori evolusi Russel Wallace merupakan mengembangkan suatu teori seleksi alam yang dikemukan oleh Charles Darwin. Pemikiran Russel Wallace didapat dari hasil ekspedisi di Malaysia, kemudian Borneo (Kalimantan), Sulawesi, dan Maluku. Hasilnya menunjukan bahwa fauna di Indonesia Barat berbeda dengan Indonesia Timur. Wallace dan Darwin, berpendapat awaknya jerapah memiliki variasi leher, ada yang panjang dan pendek. Hasilnya seleksi alam lebih menguntungkan jerapah yang berleher panjang. Karena bisa menjangkau daun yang tinggi, bisa bertahan hidup. Bagi jerapah yang berleher pendek tidak bisa. Jerapah yang punya leher panjang diwariskan pada keturunnya.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <h3 className="card-title">August Weismann</h3>
                                <p className="card-text">
                                August Weismann - Pada teori August Weismann bahwa perubahan sel-sel tubuh akibat pengaruh lingkungan tidak diwariskan pada keturunannya. Evolusi menyangkut pewarisan gen-gen lewat sel-sel kelamin. Ini bermakna jika evolusi berkaitan dengan gejala seleksi alam pada faktor-faktor genetik. Weismann membuktikan teorinya dengan memakai tikus. Di mana mengawinkan dua tikus yang masing-masing ekornya dipotong. Selanjutnya anak-anak tikus yang sudah dewasa dipotong ekornya dan dikawinkan dengan sesamanya. Hasilnya anak-anak tikus berekor. Ia melakukan percobaan tersebut hingga 21 generasi tikus dan hasilnya sama.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="text-center mt-5">
                <h2 className="h2feature">Video Evolusi</h2>
                <div className="ratio ratio-16x9 mt-3">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lkbNT9mMQC8?si=fK9O7Ke0H3I9-m68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            {/* Footer */}
            <footer className="animated-footer">
                <p>© 2024 Evolusi Web. </p>
            </footer>
        </div>
        </div>
    );
}

export default Evolusi;