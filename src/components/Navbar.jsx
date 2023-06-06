
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "../assets/logo.webp";
import { FaInstagram, FaYoutube, FaFacebook, FaSoundcloud, FaTwitch } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [isActive, setIsActive] = useState(false);
  const [progressHeight, setProgressHeight] = useState("0%");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#000000");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight ||
        document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const progressHeight = `${(window.pageYOffset /
        (scrollHeight - clientHeight)) *
        100}%`;
      setProgressHeight(progressHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className={`${isActive ? 'h-[100px] lg:h-[100px] shadow-lg' : 'h-[120px] lg:h-[150px]'
        } fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div
        className="h-1 bg-gradient-to-r from-purple-900 to-red-900"
        style={{ width: progressHeight }}
      ></div>
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-2 text-white w-full ">
        <a href="/">
        <img className="w-[108px] ml-2 h-25" src={logo} alt="logo"/>
        </a>
        <ul className="hidden mt-2 sm:flex">
          <li className="p-4 ml-1 text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125">
            <a href="/" className="text-base">INICIO</a>
          </li>
          <li className="p-4 ml-1 text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125">
            <a href="/#about" className="text-base">NOSOTROS</a>
          </li>
          <li className="p-4 ml-1 text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125">
            <a href="/#service" className="text-base">SERVICIOS</a>
          </li>
          <li className="p-4 ml-1 text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125">
            <a href="/#work" className="text-base">TRABAJOS</a>
          </li>
          <li className="p-4 ml-1 text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125">
            <a href="/#contact" className="text-base">CONTACTO</a>
          </li>
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className="z-10 block cursor-pointer sm:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen backdrop-blur text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen backdrop-blur text-center ease-in duration-300 "
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125"
            >
              <a href="/">Inicio</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125"
            >
              <a href="/#about">Nosotros</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125"
            >
              <a href="/#service">Servicios</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125"
            >
              <a href="/#work">Trabajos</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125"
            >
              <a href="/#contact">Contacto</a>
            </li>
            <li className="flex justify-center mt-8 space-x-8">
              <a href="https://www.facebook.com/algenstudio" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" />
              </a>
              <a href="https://www.instagram.com/algenestudio/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" />
              </a>
              <a href="https://youtube.com/@AlgenEstudio" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-3xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" />
              </a>
              <a href="https://soundcloud.com/algen-estudio" target="_blank" rel="noopener noreferrer">
                <FaSoundcloud className="text-3xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" />
              </a>
              <a href="https://www.twitch.tv/horax_x_x" target="_blank" rel="noopener noreferrer">
                <FaTwitch className="text-3xl text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
