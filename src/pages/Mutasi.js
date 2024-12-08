import React, {useState} from "react";
import "./Mutasi.css";

const Images = [
    "https://blokbojonegoro.com/files/2021/03/10/mut-var.png",
    "https://d1bpj0tv6vfxyp.cloudfront.net/articles/554273_9-4-2021_21-50-26.webp",
    "https://www.kalderanews.com/wp-content/uploads/2021/02/Virus-Corona-326x245.jpg",
    "https://asset.kompas.com/data/photo/2020/11/08/5fa7eb234390c.jpeg"
];

function Mutasi() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => 
        prevSlide === 0 ? Images.length - 1 : prevSlide - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) =>
        prevSlide === Images.length - 1 ? 0 : prevSlide + 1
        );
    };

    return (
        <div className="mutasi-background">
        <div className="container mt-4">

            <header className="animated-header1">
               <h1>Mutasi</h1>
                <p>Pengetahuan yang Terus Berkembang</p>
            </header>

            {/* Intro Section */}

            <section className="row align-items-center mt-4 bg-white p-4 shadow-sm rounded">
                <div className="col-md-6">
                    <h2>Apa itu Mutasi?</h2>
                    <p className="paragraph">
                    Pengertian mutasi adalah perubahan yang terjadi pada urutan nukleotida. Mutasi terdiri atas dua macam, jika perubahan nukleotida terjadi di suatu gen, maka disebut mutasi gen atau mutasi genetik. Sedangkan, jika perubahannya pada struktur atau jumlah kromosom, maka disebut mutasi kromosom. Mutasi ini bisa mempengaruhi sifat-sifat fisik, fisiologi, atau bahkan perilaku suatu organisme.
                    </p>
                    <img
                    src="https://umsu.ac.id/artikel/wp-content/uploads/2023/07/Mutasi-Genetik.jpg"
                    alt="Ilustrasi Mutasi"
                    className="img-fluid rounded"
                    />
                    <p className="paragraph">
                    Perubahan tersebut bisa terjadi pada taraf urutan gen (disebut juga mutasi gen) maupun pada taraf urutan kromosom. Uniknya, peluang terjadinya mutasi di alam itu cukup langka guys! Setiap jenis mutasi memiliki probabilitas yang berbeda. Misalnya mutasi kromosom pada penyakit kelainan down syndrome dengan peluang 1:1.300, maupun mutasi paling langka yakni KAT6A syndrome yang hanya dimiliki oleh 150 orang di dunia sepanjang sejarah!
                    </p>
                    <p className="paragraph">
                    Salah satu mutasi yang sering kita dengar belakangan ini, yakni mutasi dari virus SARS-CoV-2 yang kini bermutasi menjadi varian omicron. Dengan mutasi, virus dapat berpotensi lebih berbahaya dari sebelumnya, terutama jika virus tersebut sudah mampu menghindari sistem imun atau vaksin yang tersedia bagi kita.
                    </p>
                    
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/F1RZIweCBBs?si=4O0YefTPtNyIzQ-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className="col-md-6">
                    <h2>Syarat Mutasi</h2>

                    <ul>
                        <li>Materi Genetik</li>
                        <p className="paragraph">Syarat utama mutasi adalah adanya materi genetik yang mengalami perubahan. Materi genetik ini terdiri dari DNA (asam deoksiribonukleat) pada organisme eukariotik dan prokariotik. Perubahan pada urutan DNA dapat menyebabkan perubahan pada sifat-sifat organisme.
                        </p>

                        <li>Perubahan dalam DNA</li>
                        <p className="paragraph">
                        Mutasi terjadi ketika terjadi perubahan dalam urutan DNA. Perubahan ini dapat berupa substitusi, delesi, atau insersi pada satu atau beberapa basa nitrogen di dalam DNA. 
                        </p>
                        <p className="paragraph">
                        Substitusi terjadi ketika satu basa nitrogen digantikan oleh basa nitrogen lain, delesi terjadi ketika satu atau beberapa basa nitrogen hilang dari urutan DNA, sedangkan insersi terjadi ketika satu atau beberapa basa nitrogen ditambahkan ke urutan DNA.
                        </p>

                        <li>Perubahan pada Kromosom</li>
                        <p className="paragraph">
                        Selain perubahan pada urutan DNA, mutasi juga dapat terjadi akibat perubahan pada struktur kromosom. Hal ini bisa terjadi melalui perubahan dalam jumlah kromosom (aneuploidi) atau perubahan dalam struktur kromosom (translokasi, inversi, duplikasi, dll.).
                        </p>

                        <li>Perubahan pada Kromosom</li>
                        <p className="paragraph">
                        Selain perubahan pada urutan DNA, mutasi juga dapat terjadi akibat perubahan pada struktur kromosom. Hal ini bisa terjadi melalui perubahan dalam jumlah kromosom (aneuploidi) atau perubahan dalam struktur kromosom (translokasi, inversi, duplikasi, dll.).
                        </p>

                        <li>Sifat Acak</li>
                        <p className="paragraph">
                        Mutasi adalah perubahan genetik yang terjadi secara acak. Artinya, mutasi tidak dapat diprediksi atau terjadi sesuai dengan kebutuhan organisme. Perubahan genetik ini muncul akibat kesalahan selama replikasi DNA, paparan radiasi, zat kimia, atau faktor lingkungan lainnya.
                        </p>

                        <li>Dalam Pewarisan</li>
                        <p className="paragraph">
                        Mutasi dapat diwariskan dari satu generasi ke generasi berikutnya. Jika terjadi mutasi pada sel reproduksi (sel telur atau sperma), maka mutasi tersebut dapat diturunkan kepada keturunannya. Hal ini bisa menyebabkan perubahan pada karakteristik fisik, fisiologis, atau perilaku pada keturunan yang menerima mutasi.
                        </p>                        
                    </ul> 
                </div>
            </section>

            {/* Image Slider */}
            <section className="text-center mt-5">
                <div className="divslide">
                    <button 
                    onClick={handlePrev}   className="prevslide">
                        Prev
                    </button>

                    <img src={Images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="imgslide"
                    />

                    <button 
                    onClick={handleNext}
                    className="nextslide">
                        Next
                    </button>
                </div>
            </section>

            <section className="row align-items-center mt-4 bg-white p-4 shadow-sm rounded">
                <div className="col-md-6">
                    <h2>Klasifikasi Mutasi</h2>
                    <p className="paragraph">
                    Mutasi adalah perubahan yang terjadi pada bahan genetik, baik DNA maupun RNA.  Berdasarkan klasifikasinya, mutasi dibagi menjadi beberapa jenis. yaitu:
                    </p>
                    <ul>
                        <li>Mutasi berdasarkan jenis sel</li>
                        <p className="paragraph">
                        Mutasi jenis sel terbagi pula menjadi 2 macam, yakni mutasi somatis dan germinal.
                        </p>
                        <ul>
                            <li>Mutasi Somatis</li>
                            <p className="paragraph">
                            Mutasi somatik adalah adalah mutasi yang terjadi pada sel somatik, yaitu sel tubuh seperti sel kulit. Mutasi ini tidak akan diwariskan pada keturunannya.
                            </p>
                            <li>Mutasi Gametik</li>
                            <p className="paragraph">
                            Mutasi ini terjadi pada sel gamet, yaitu sel organ reproduksi yang meliputi sperma dan ovum pada manusia. Oleh sebab itu, mutasi ini terjadi akibat faktor keturunan.
                            </p>
                        </ul>

                        <li>Mutasi berdasarkan cara terjadi</li>
                        <p className="paragraph">
                            Klasifikasi selanjutnya adalah terjadinya mutasi dibedakan berdasarkan proses atau cara terjadinya. Mutasi berdasarkan cara terjadi dibagi menjadi 2 macam, yakni mutasi alami dan mutasi buatan yang dirancang oleh manusia untuk memenuhi tujuan tertentu.
                        </p>
                        <ul>
                            <li>Mutasi Alami</li>
                            <p className="paragraph">
                            Perubahan genetik dalam mutasi alami terjadi secara alami tanpa campur tangan manusia. Hal ini karena faktor terdapatnya mutagen alami yang menyebabkan mutasi. Kasus dari mutasi alami sangat jarang terjadi.
                            </p>
                            <li>Mutasi Buatan</li>
                            <p className="paragraph">
                            Mutasi ini terjadi pada sel gamet, yaitu sel organ reproduksi yang meliputi sperma dan ovum pada manusia. Oleh sebab itu, mutasi ini terjadi akibat faktor keturunan.
                            </p>
                        </ul>

                        <li>Mutasi berdasarkan sifat genetik</li>
                        <p className="paragraph">
                            Selanjutnya, mutasi berdasarkan sifat genetik tertentu dari suatu individu. Umumnya, ada 2 macam mutasi pada klasifikasi ini, yakni:
                        </p>
                        <ul>
                            <li>Mutasi Dominan</li>
                            <p className="paragraph">
                            Mutasi dominan terekspresi dalam keadaan genotip homozigot dan heterozigot dominan. Gen dominan tersebut kemudian akan membawa sifat penyebab mutasi.
                            </p>
                            <li>Mutasi Resesif</li>
                            <p className="paragraph">
                            Mutasi dominan terekspresi dalam keadaan genotip homozigot yang resesif. Gen resesif tersebut akan membawa sifat penyebab mutasi.
                            </p>
                        </ul>

                        <li>Mutasi berdasarkan arah mutasi</li>
                        <p className="paragraph">
                            Kemudian, ada mutasi yang digolongkan berdasarkan arah mutasinya. Ada dua jenis mutasi berdasarkan arah mutasinya yakni:
                        </p>
                    </ul>
                </div>

                <div className="col-md-6">
                    <ul>
                    <ul>
                        <li>Mutasi Maju</li>
                        <p className="paragraph">
                            Mutasi ini mengubah fenotip organisme yang sebelumnya abnormal menjadi normal. Mutasi ini umumnya terjadi secara buatan. Karena sifatnya membawa dampak positif dan digunakan sebagai teknologi dalam bidang kesehatan. Contohnya yakni pengobatan dengan metode radioterapi.
                        </p>
                        <li>Mutasi Mundur</li>
                        <p className="paragraph">
                            Mutasi ini menyebabkan fenotip organisme yang sebelumnya normal menjadi abnormal. Contohnya ada pada penyakit anemia sel sabit yang menyerang sel darah merah.
                        </p>
                    </ul>

                    <li>Mutasi berdasarkan peran bagi mutan</li>
                    <p className="paragraph">
                        Nah, untuk klasifikasi ini, mutasi banyak dibahas dari segi peranannya yang terjadi pada mutan (individu yang bermutasi tersebut). Diantaranya adalah
                    </p>
                    <ul>
                        <li>Mutasi Menguntungkan</li>
                        <p className="paragraph">
                            Mutasi ini terjadi dan membuat organisme mengalami perubahan menjadi adaptif. Contohnya adalah mutasi pada gen CETP yang menyebabkan produksi kolesterol dalam tubuh menjadi rendah. Sehingga individu terhindar dari masalah pada pembuluh darah dan penyakit jantung meskipun mengkonsumsi kolesterol dalam jumlah besar. 
                        </p>
                        <li>Mutasi Merugikan</li>
                        <p className="paragraph">
                            Kebalikan dari mutasi menguntungkan, mutasi ini terjadi dan membuat organisme mengalami perubahan menjadi tidak adaptif. Contohnya yakni mutasi genetik pada belalang yang justru mengubah warnanya menjadi merah muda, sehingga mudah dimangsa oleh predatornya.
                        </p>
                    </ul>

                    <li>Mutasi berdasarkan perubahan fenotip</li>
                    <p className="paragraph">
                        Mutasi selanjutnya digolongkan berdasarkan perubahan pada fenotip. Mutasi ini terbagi menjadi 2 jenis, yakni: 
                    </p>
                    <ul>
                        <li>Mutasi Makro</li>
                        <p className="paragraph">
                            Pada mutasi makro, perubahan terjadi cukup signifikan karena perubahan besar terjadi pada fenotip. Umumnya mutasi ini dapat terlihat dengan jelas, seperti mutasi pada belalang berwarna merah muda.
                        </p>
                        <li>Mutasi Mikro</li>
                        <p className="paragraph">
                            Mutasi mikro sendiri hanya menyebabkan sedikit perubahan pada fenotip. Selain itu, mutasi tersebut seringkali tidak bisa diamati secara langsung dan memerlukan penelitian lebih lanjut. 
                        </p>
                    </ul>

                    <ul>
                        <li>Mutasi Makro</li>
                        <p className="paragraph">
                            Pada mutasi makro, perubahan terjadi cukup signifikan karena perubahan besar terjadi pada fenotip. Umumnya mutasi ini dapat terlihat dengan jelas, seperti mutasi pada belalang berwarna merah muda.
                        </p>
                    </ul>
                    </ul>
                </div>
            </section>

            {/* Video Section */}
            <section className="text-center mt-5">
                <h2 className="h2feature">Video Mutasi</h2>
                <div className="ratio ratio-16x9 mt-3">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/MWSAyHvH3tQ?si=6k7xK9sgLHe4Y9qq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            {/* Features Section */}
            <section className="mt-5">
                <h2 className="h2feature">Dampak Mutasi</h2>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm bgsec">
                            <div className="card-body text-center">
                                <h3 className="card-title">Dampak Positif Mutasi</h3>
                                <p className="card-text">
                                1. Sebagai terapi pengobatan kanker<br />
                                Pengobatan kanker memanfaatkan mutagen berupa sinar radioaktif untuk merusak DNA sel kanker agar bermutasi kembali dan menghentikan pertumbuhannya. <br />
                                2. Produksi Antibodi Monoklonal<br />
                                Sel hibridoma merupakan hasil fusi atau penyatuan sel kanker dengan sel limfosit untuk menghasilkan antibodi monoklonal. Digunakannya sel kanker pada pembuatan sel hibridoma karena sifatnya yang cepat membelah. Sel limfosit digunakan untuk menghasilkan antibodi.<br />
                                3. Resistensi Penderita Sicklemia Terhadap Malaria<br />
                                Mutasi menyebabkan seorang individu menjadi penderita sicklemia. Kondisi ini membuat individu tersebut memiliki bentuk sel darah merah menyerupai bulan sabit. Dengan kondisi tersebut, seorang penderita sicklemia cukup resisten dan akan lebih sulit tertular malaria.<br />
                                4. Meningkatkan Keanekaragaman<br />
                                Dengan kemajuan teknologi pengetahuan, mutasi dimanfaatkan untuk dapat meningkatkan keanekaragaman biologis, yakni:<br />
                                Mutagen buatan dapat menciptakan produk pangan yang lebih disukai oleh masyarakat, seperti buah poliploidi yang tidak memiliki biji.<br />
                                Bibit unggul dapat diciptakan atau dibentuk dengan memanfaatkan mutasi, bahkan dapat menjadi spesies baru yang memiliki sifat yang diinginkan (dengan kata lain terjadi proses evolusi).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm bgsec1">
                            <div className="card-body text-center">
                                <h3 className="card-title">Dampak Negatif Mutasi</h3>
                                <p className="card-text">
                                1. Sindrom Turner<br />
                                merupakan kelainan genetik pada perempuan karena kekurangan satu kromosom X. Biasanya, perempuan memiliki kromosom seks XX yang berjumlah 46 buah, tetapi pada penderita Sindrom Turner, kromosomnya menjadi XO dan hanya berjumlah 45 buah. Penderita Sindrom Turner juga mengalami infertil.<br />
                                2. Sindrom Jacob<br />
                                diderita oleh pria. Sindrom Jacob terjadi karena ada 1 tambahan kromosom Y pada pria, sehingga kromosomnya menjadi XYY. Meskipun disebabkan kelainan genetik, sindrom ini biasanya bukan berasal dari kelainan yang diwariskan secara turun temurun. Tetapi diwariskan hanya dari ayah yang mengalami kelainan spontan saat pembentukan spermanya.<br />
                                3.Sindrom Klinefelter<br />
                                adalah kelainan yang disebabkan oleh kelebihan kromosom X pada laki-laki. Oleh karena itu, pada penderita Klinefelter, kromosomnya menjadi XXY. Salah satu ciri fisik yang terlihat dari penderita sindrom ini adalah payudara yang membesar. Selain Sindrom Klinefelter, kelainan lain yang disebabkan oleh mutasi kromosom adalah sindrom patau.<br />
                                5.Sindrom Edward<br />
                                juga merupakan kelainan pada kromosom. Kromosom yang mengalami kelainan pada Sindrom Edward adalah kromosom nomor 18. Salah satu ciri bayi yang mengalami Sindrom Edward adalah jari yang tumpang tindih dengan kondisi telapak tangan yang menggenggam. Sindrom selanjutnya yang disebabkan oleh kelainan kromosom adalah sindrom metafemale.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Video Section */}
            <section className="text-center mt-5">
                <h2 className="h2feature">Video Mutasi</h2>
                <div className="ratio ratio-16x9 mt-3">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/OBcNgttpjsk?si=HWZUjdWPo-ODpZpv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            {/* Footer */}
            <footer className="animated-footer1">
                <p>© 2024 Mutasi Web. </p>
            </footer>
        </div>
        </div>
    );
}

export default Mutasi;