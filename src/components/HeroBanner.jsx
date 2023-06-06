import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaInstagram, FaSoundcloud, FaTwitch, FaYoutube } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import logo from '../assets/logo.webp';

const HeroBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="relative bg-hero" >
      <div className="max-w-screen-xl px-4 py-32 mx-auto lg:flex lg:h-screen lg:items-center" data-aos="fade-up">
        <div className="mx-auto max-w-3xl text-center mt-[190px] lg:mt-[90px]">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto mb-4 max-h-[24vh] max-w-[70%] lg:max-w-[90%] w-full h-auto object-contain"
            width="420"
            height="auto"
          />
          <h1 className="mb-8 text-4xl font-bold text-gray-300" >El sonido que merecés.</h1>
          <ul className="flex justify-center space-x-8" data-aos="fade-up">
            <li>
              <a href="https://www.facebook.com/algenstudio" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/algenestudio/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@AlgenEstudio" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-2xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" />
              </a>
            </li>
            <li>
              <a href="https://soundcloud.com/algen-estudio" target="_blank" rel="noopener noreferrer">
                <FaSoundcloud className="text-2xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" />
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/horax_x_x" target="_blank" rel="noopener noreferrer">
                <FaTwitch className="text-2xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" />
              </a>
            </li>
          </ul>
          <button className="mt-12 focus:outline-none">
            <a href="#about">
              <IoIosArrowDown className="text-4xl text-white animate-bounce" />
            </a>
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-90 h-1/2 bg-gradient-to-t from-black"></div>
    </section>
  );
};

export default HeroBanner;
