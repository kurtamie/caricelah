import React from "react";
import line from '../asset/line.svg';
import oke from '../asset/pl.jpg';
import oke1 from '../asset/bz.jpeg';
import kosong from '../asset/cs.jpeg';



const Helpcom = () => {
    return (
        <div>
                <div className="absolute left-8 top-0 bottom-0 flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-4" >
                    <img src={line} alt="" className="w-8 h-8 md:w-72 md:h-80" draggable="false"/>
                    <img src={line} alt="" className="w-8 h-8 md:w-72 md:h-80" draggable="false"/>
                    <img src={line} alt="" className="w-8 h-8 md:w-72 md:h-80" draggable="false"/>
                </div>
                <div className="absolute right-8 top-0 bottom-0 flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-4" draggable="false">
                    <img src={line} alt="" className="w-8 h-8 md:w-72 md:h-80" draggable="false"/>
                    <img src={line} alt="" className="w-8 h-8 md:w-72 md:h-80" draggable="false"/>
                    <img src={line} alt="" className="w-8 h-8 md:w-72 md:h-80" draggable="false"/>
                </div>
                <h1 data-aos="fade-up" className="text-2xl font-bold md:text-5xl absolute top-20 md:top-24 left-0 right-0  text-center w-full">BERITA & PEMBARUAN</h1>
                <div className="flex items-center italic justify-center absolute top-40 left-8 md:left-48 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <p data-aos="fade-up" className="text-sm md:text-base">Geser untuk melihat berita lainnya</p>
                </div>

                <div className="flex gap-x-4 md:gap-x-16 absolute top-[200px] right-8 left-8 md:right-48 md:left-48 bottom-0 overflow-x-scroll snap-x py-16 md:py-16">
                    {/* Gambar 1 */}
                    <a href="https://kompas.com/tren/read/2023/12/20/185129265/penumpang-rosalia-indah-kehilangan-barang-di-dalam-bus-ipad-diganti-buku?page=all" className="flex-none w-full md:w-[300px]">
                        <h4 className='text-white bg-[#04975F] text-center font-bold text-1xl px-2 py- md:text-2xl lg:text-3xl xl:text-xl rounded-full'>Berita</h4>   
                        <img src={oke} alt="Gambar 1" className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110" draggable="false"/>
                        <p className='text-center flex flex-col font-bold text-2xl px-2 py-4 md:text-2xl lg:text-3xl xl:text-sm'>Penumpang Kehilangan Barang </p> 
                        <p className='text-center flex flex-col text-1xl px-2 py-4 md:text-2xl lg:text-3xl xl:text-sm'>Penumpang Rosalia Indah Kehilangan Barang di Dalam Bus, iPad Diganti Buku dan Keramik, Ini Kata Manajemen Artikel ini telah tayang di Kompas.com dengan judul "Penumpang Rosalia Indah Kehilangan Barang di Dalam Bus</p>   
                    </a>
                    {/* Gambar 2 */}
                    <a href="https://tailwindcss.com/docs/transition-property" className="flex-none w-full md:w-[300px]">
                        <h4 className='text-white bg-[#068757] text-center font-bold text-1xl px-2 py- md:text-2xl lg:text-3xl xl:text-xl rounded-full'>Pembaruan</h4>   
                        <img src={oke1} alt="Gambar 2" className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110" draggable="false"/>
                        <p className='text-center flex flex-col font-bold text-1xl px-2 py-4 md:text-2xl lg:text-3xl xl:text-sm'>Penambahan Buzzer Pada Alat</p>   
                        <p className='text-center flex flex-col text-1xl px-2 py-4 md:text-2xl lg:text-3xl xl:text-sm'>Belajar Tailwind</p>   
                    </a>
                    {/* Gambar 3 */}
                    <a href="https://www.akscoding.com/2020/12/berpindah-halaman-pada-react-js-dengan-menggunakan-react-router.html" className="flex-none w-full md:w-[300px]">
                    <h4 className='text-white bg-[#333] text-center font-bold text-1xl px-2 py- md:text-2xl lg:text-3xl xl:text-xl rounded-full'>Belajar</h4>   
                        <img src={kosong} alt="Gambar 3" className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110" draggable="false"/>
                    </a>
                    <a href="link-ke-gambar1" className="flex-none w-full md:w-[300px]">
                    <h4 className='text-white bg-[#333] text-center font-bold text-1xl px-2 py- md:text-2xl lg:text-3xl xl:text-xl rounded-full'>Tidak ada</h4>   
                        <img src={kosong} alt="Gambar 3" className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110" draggable="false"/>
                    </a>
                </div>
        </div>
    );
}

export default Helpcom;