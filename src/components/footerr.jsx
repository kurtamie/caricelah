import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import logo from "../asset/logo.svg";

const Footer = () => {
  return (
    <div>
      
        <div className="bg-[#595959] py-8 sm:flex items-center">
            <button className="mx-auto flex flex-col justify-center underline text-white font-bold py-2 px-4">
                 Unduh Sekarang
            </button>
        </div>
        <div className="bg-[#211F20] py-12">
        <div className="container mx-auto flex justify-center items-center flex-col">
          <div className="flex space-x-8 mb-5 text-3xl">
          
            <a href="https://www.instagram.com/" target="" rel="noopener noreferrer" className="text-white">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/?locale=id_ID" target="" rel="noopener noreferrer" className="text-white">
              <FaFacebook />
            </a>
            <a href="https://mail.google.com/mail/u/0/" className="text-white">
              <FaEnvelope />
            </a>
          </div>
          <img src={logo} alt="" className="h-20 w-18" draggable="false"/>
          <div className="text-white text-sm mt-2">
            <a href="/privacy-policy" className="underline font-bold">Kebijakan Privasi</a> | <a href="/terms-of-use" className="underline font-bold">Ketentuan Penggunaan</a>
          </div>
          <div className="text-white text-sm py-2 justify-center">
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            &copy; {new Date().getFullYear()} Caricelah Company. Caricelah adalah produk atau alat yang dilibatkan dalam hal spiritualisme.
          </div>
          
        </div>
      </div>
      </div>
  );
}

export default Footer;
