// src/components/Homepage.js

import React, {useState} from 'react';
import Navbar from '../components/navbar';
import './homepage.css';
import logo from '../asset/logocc.svg';
import patt from '../asset/patt.svg';
import ImageSlider from '../pageComponents/imageslider';
import Aboutcom from '../pageComponents/aboutcom';
import AccordionItem from '../pageComponents/accordion';
import Grs from '../pageComponents/grs';
import Helpcom from '../pageComponents/newscom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const Homepage = () => {
    const [isFAQ, setIsFAQ] = useState(true);
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(true);
        setTimeout(() => {
          setIsFAQ(!isFAQ);
          setAnimate(false);
        }, 500); // Durasi animasi harus sesuai dengan durasi dalam CSS
      };

    const faqs = [
        { question: 'Bagaimana cara kerja alat pelacak ini?', answer: 'Jawaban untuk pertanyaan 1' },
        { question: 'Apakah saya perlu koneksi internet untuk menggunakan alat ini?', answer: 'Jawaban untuk pertanyaan 2' },
        { question: 'Bagaimana cara memasang dan menggunakan alat pelacak ini?', answer: 'Jawaban untuk pertanyaan 2' },
        { question: 'Berapa jangkauan maksimal sinyal Bluetooth dari alat ini?', answer: 'Jawaban untuk pertanyaan 2' },
        { question: 'Bagaimana cara kerja alat pelacak ini?', answer: 'Jawaban untuk pertanyaan 2' },
        { question: 'Apakah saya perlu koneksi internet untuk menggunakan alat ini?', answer: 'Tidak, alat ini menggunakan sinyal Bluetooth dan tidak memerlukan koneksi internet untuk melacak lokasi. Namun, untuk mengakses data dan kontrol melalui aplikasi, mungkin diperlukan koneksi internet.' },
        { question: 'Bagaimana cara memasang dan menggunakan alat pelacak ini?', answer: 'Jawaban untuk pertanyaan 2' },
        { question: 'Berapa jangkauan maksimal sinyal Bluetooth dari alat ini?', answer: 'Jawaban untuk pertanyaan 2' },
        { question: 'Berapa jangkauan maksimal sinyal Bluetooth dari alat ini?', answer: 'Jawaban untuk pertanyaan 2' },
        { question: 'Berapa jangkauan maksimal sinyal Bluetooth dari alat ini?', answer: 'Jawaban untuk pertanyaan 2' },
        { question: 'Berapa jangkauan maksimal sinyal Bluetooth dari alat ini?', answer: 'Jawaban untuk pertanyaan 2' },
        { question: 'Berapa jangkauan maksimal sinyal Bluetooth dari alat ini?', answer: 'Jawaban untuk pertanyaan 2' },
        // Tambahkan pertanyaan dan jawaban yang lain di sini
      ];
    return (
        <div>
            <Navbar />
            <section id="home" className="section bg-[#EEEBD8] h-screen flex items-center justify-center diagonal-box1">
                <div className="flex flex-col items-center">
                <img className="absolute top-0 right-0 mb-4 md:mb-0" src={patt} alt="" draggable="false"/>
                    <img className="absolute bottom-0 left-0 mb-4 md:mb-0 rotate-360" src={patt} alt="" draggable="false"/>
                    <img data-aos="fade-up" className="w-[90%] h-[50%] md:w-[60%] md:h-auto" src={logo} alt="" draggable="false"/>
                    <h1 data-aos="fade-up" className="mt- text-xl font-bold text-black text-center md:text-5xl">
                        Solusi Pencari Untuk <br /> Masalah Kamu
                    </h1>
                </div>

            </section>
            <section id="about" className="section bg-[#B8D8C9] text-black h-screen flex flex-col items-center justify-center p-4 md:p-10 relative diagonal-box line">
                <h1 data-aos="fade-up" className="text-2xl font-bold absolute top-20 left-16 md:top-24 md:left-48 md:text-5xl">TENTANG APLIKASI</h1>
                <h3 data-aos="fade-up" className="text-1xl absolute top-28 left-16 md:top-36 md:left-48 md:text-2xl max-w-md">Aplikasi bernama caricelah dapat terkoneksi oleh alat</h3>
                <div data-aos="fade-up" className="w-full md:w-3/4 lg:w-1/2 mt-32 md:mt-48 flex justify-center">
                    <ImageSlider />
                </div>
                <Aboutcom />
            </section>

                        
            <section id="help" className="section bg-[#81A393] text-black h-screen relative overflow-hidden">
                <Grs />
                <Helpcom />
            </section>

            <section id="faq" className="section bg-[#EEEBD8] text-black min-h-screen flex flex-col items-center justify-center">
            <h1
                onClick={handleClick}
                className={`text-2xl font-bold mt-6 md:mt-16 md:text-4xl md:absolute md:left-60 cursor-pointer transition-transform duration-500 ease-in-out transform ${
                    animate ? 'fade' : ''
                }`}
                >
                {isFAQ ? 'FAQs' : 'Frequently Asked Questions'}
                </h1>
                <div className="w-full max-w-screen-lg flex flex-col md:flex-row justify-center md:justify-start">
                    <div className="md:w-1/2 p-8 hidden md:block">
                    {/* Ini untuk ruang kosong di sebelah kiri saat tampilan web */}
                    </div>
                    <div data-aos="fade-up" className="md:w-1/2 p-2">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
