import { useEffect, useRef } from "react";
import Video from "../assets/cursos/video.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaYoutube } from "react-icons/fa";

const Cursos = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="bg-section-reverse">
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4 mt-20">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div
            className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center mb-8">
              <span className="h-1 bg-gray-700 w-14 rounded-3xl" />
              <h2 className="px-3 text-sm font-semibold text-white uppercase">
                Formación
              </h2>
              <span className="h-1 bg-gray-700 w-14 rounded-3xl" />
            </div>
            <h2
              className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-center text-gray-300 sm:text-4xl md:mx-auto"
              data-aos="fade-up"
            >
              Transformá tu pasión por la música en una carrera profesional
            </h2>
            <p className="text-gray-400 text-lg" data-aos="fade-up">
              Potencia al máximo tus habilidades de producción de música con
              nuestros cursos de formación en producción musical, mezcla y
              mastering. Aprende de experimentados profesionales del sector y
              desarrolla las técnicas y conocimientos necesarios para crear y
              producir tu música como un verdadero profesional. ¡Unite a nuestros
              cursos ahora y comienza tu camino hacia una exitosa carrera en la
              industria musical!
            </p>
          </div>
          <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <div className="w-full video-container aspect-w-16 aspect-h-9">
              <video
                ref={videoRef}
                className="object-cover w-full h-full rounded shadow-lg"
                controls
                loop
                data-aos="fade-up"
                controlsList="nodownload"
                preload="auto"
              >
                <source src={Video} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="https://youtube.com/@AlgenEstudio"
              className="relative inline-flex items-center justify-center px-10 py-3 mt-10 overflow-hidden text-white bg-purple-900 rounded-lg group"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-700 rounded-full group-hover:w-full group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative flex items-center py-2 text-gray-300">
                <FaYoutube className="mr-2 text-gray-300" />
                Nuestro canal
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
