import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSoundcloud,
  FaTwitch,
} from "react-icons/fa";
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_p7ktto7",
        "template_deam60f",
        event.target,
        "lPEp7M6nsO5NVPI8-"
      )
      .then((response) => {
        console.log(response);
        form.current.reset();
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
      })
      .catch((error) => console.log(error));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <section className="bg-section" id="contact">
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="pt-14"></div>
        <div className="container py-12 ">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="bg-gradient-to-r from-[#1f0019] to-transparent bg-opacity-50 rounded-lg px-4 py-6 mx-auto sm:px-8 sm:py-8 md:px-10 md:py-8 lg:max-w-xl lg:px-12 lg:py-10" data-aos="fade-up">
              <div className="flex items-center mb-8 justify-right sm:justify-start" data-aos="fade-up">
                <h1 className="px-3 text-5xl font-semibold text-white uppercase">
                  CONTACTO
                </h1>
              </div>
              <h1 className="text-2xl font-semibold text-gray-300 capitalize lg:text-3xl" data-aos="fade-up">
                ¡Comunicate con nosotros <br /> Para más info!
              </h1>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2" data-aos="fade-up">
                  <FaMapMarkerAlt className="w-6 h-6 mx-2 text-blue-400 dark:text-blue-400" />

                  <span className="font-bold tracking-wider text-gray-500 text-md">
                    Urquiza 658, La Paz, Entre Ríos
                  </span>
                </p>

                <p className="flex items-start -mx-2" data-aos="fade-up">
                  <FaPhoneAlt className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />

                  <span className="font-bold tracking-wider text-gray-500 text-md">
                    (03458) 40-0155
                  </span>
                </p>

                <p className="flex items-start -mx-2" data-aos="fade-up">
                  <AiOutlineMail className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />
                  <span className="font-bold tracking-wider text-gray-500 text-md">
                    estudioalgen@gmail.com
                  </span>
                </p>
              </div>

              <div className="mt-6 w-80 md:mt-8">
                <h3 className="font-bold tracking-wider text-white uppercase" data-aos="fade-up">
                  Nuestras redes
                </h3>

                <div className="flex mt-6 -mx-1.5" data-aos="fade-up">
                  <a
                    className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                    href="https://www.facebook.com/algenstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                  >
                    <FaFacebook className="w-6 h-6 mx-2 text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" data-aos="fade-up" />
                  </a>
                  <a
                    className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                    href="https://www.instagram.com/algenestudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="w-6 h-6 mx-2 text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" data-aos="fade-up" />
                  </a>
                  <a
                    className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                    href="https://youtube.com/@AlgenEstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="w-6 h-6 mx-2 text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" data-aos="fade-up" />
                  </a>
                  <a
                    className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                    href="https://soundcloud.com/algen-estudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSoundcloud className="w-6 h-6 mx-2 text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" data-aos="fade-up" />
                  </a>
                  <a
                    className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                    href="https://www.twitch.tv/horax_x_x"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitch className="w-6 h-6 mx-2 text-white duration-300 ease-in-out hover:text-blue-600 hover:scale-125" data-aos="fade-up"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50" data-aos="fade-up">
                {showSuccessMessage && (
                  <div className="px-4 py-2 mb-4 rounded-md">
                    <span className="font-bold" data-aos="fade-up">¡Mensaje enviado!</span>
                  </div>
                )}
                <form className="mt-6" ref={form} onSubmit={sendEmail}>
                  <div className="flex-1">
                    <label htmlFor="fullName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200" data-aos="fade-up">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="name"
                      id="fullName"
                      data-aos="fade-up"
                      autoComplete="name"
                    />
                  </div>
                  <div className="flex-1 mt-6">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200" data-aos="fade-up">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="email"
                      id="email"
                      data-aos="fade-up"
                      autoComplete="email"
                    />
                  </div>
                  <div className="w-full mt-6">
                    <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-200" data-aos="fade-up">
                      Mensaje
                    </label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md resize-none md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Mensaje"
                      name="mensaje"
                      id="message"
                      data-aos="fade-up"
                      autoComplete="off"
                    ></textarea>
                  </div>
                  <button className="relative inline-flex items-center justify-center w-full px-10 py-3 mt-10 overflow-hidden text-white bg-purple-900 rounded-lg group" data-aos="fade-up">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-700 rounded-full group-hover:w-full group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <input type="submit" className="relative" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center">
          <button
            className="flex flex-col items-center p-2 shadow-md mt-18"
            onClick={scrollToTop}
            data-aos="fade-up"
          >
            <IoIosArrowUp className="text-4xl text-white animate-bounce" />
            <span className="mt-2 font-extrabold">Volver a Inicio</span>
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40 h-1/2 bg-gradient-to-t from-black"></div>
    </section>
  );
};

export default Contact;