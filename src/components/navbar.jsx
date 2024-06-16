// src/components/Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asset/logo.svg";
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-[#211F20] shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#home">
                        <img className="h-16 w-auto" src={logo} alt="Logo" draggable="false"/></a>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                        <div className="hidden sm:block">
                            <div className="flex space-x-12">
                                <a href="#home" className="text-white hover:bg-[#04975F] hover:text-white px-3 py-2 rounded-md text-sm font-bold">Beranda</a>
                                <a href="#about" className="text-white hover:bg-[#04975F] hover:text-white px-3 py-2 rounded-md text-sm font-bold">Tentang Alat</a>
                                <a href="#help" className="text-white hover:bg-[#04975F] hover:text-white px-3 py-2 rounded-md text-sm font-bold">Berita & Pembaruan</a>
                                <a href="#faq" className="text-white hover:bg-[#04975F] hover:text-white px-3 py-2 rounded-md text-sm font-bold">FAQ</a>
                                <Link to="/peta" className="text-white hover:bg-[#04975F] hover:text-white px-3 py-2 rounded-md text-sm font-bold">Peta Sendiri</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center">
                        <Link to="/login" className="btn bg-[#04975F] text-white font-bold py-2 px-6 rounded-full">
                            Masuk
                        </Link>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-4">
                    <a href="#home" className="text-white hover:bg-[#04975F] hover:text-white px-3 py-2 block text-base rounded-md text-sm font-bold">Beranda</a>
                    <a href="#about" className="text-white hover:bg-[#04975F] hover:text-white px-3 py-2 block text-base rounded-md text-sm font-bold">Tentang Alat</a>
                    <a href="#help" className="text-white hover:bg-[#04975F] hover:text-white px-3 py-2 block text-base rounded-md text-sm font-bold">Berita & Pembaruan</a>
                    <a href="#faq" className="text-white hover:bg-[#04975F] hover:text-white px-3 py-2 block text-base rounded-md text-sm font-bold">FAQ</a>
                    <Link to="/peta" className="text-white hover:bg-[#04975F] hover:text-white px-3 py-2 rounded-md text-sm font-bold">Peta Sendiri</Link>
                    <button className="btn bg-[#04975F] text-white font-bold py-2 px-4 rounded-full">
                        Masuk
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
