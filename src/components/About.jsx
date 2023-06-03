import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutImg from "../assets/about/about.jpeg";
import Publi from "../assets/about/publi.mp3";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <section id="about" className="bg-section">
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4" data-aos="fade-up">
        <div className="pt-14"></div>
        <div className="grid gap-10 pt-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
            <div className="bg-gradient-to-r from-[#1f0019] to-transparent bg-opacity-50 rounded-lg px-4 py-6 mx-auto sm:px-8 sm:py-8 md:px-10 md:py-8 lg:max-w-xl lg:px-12 lg:py-10" data-aos="fade-up">
              <div className="flex items-center mb-6 justify-right sm:justify-start" data-aos="fade-up">
                <h1 className="px-3 text-5xl font-semibold text-gray-300 uppercase">
                  NOSOTROS
                </h1>
              </div>
              <p className="text-gray-400 text-lg" data-aos="fade-up">
                Somos un estudio de grabación profesional. Nos dedicamos, desde hace más de 5 años, a trabajar con grupos y solistas, llevando adelante el desarrollo técnico en función de las necesidades artísticas de cada proyecto que abordamos, asesorando a los músicos desde el primer momento en el que se acercan a nosotros. Nuestra premisa es brindar calidad y originalidad a cada proyecto.
              </p>
              <div className="mt-14">
                <audio controls controlsList="nodownload" preload="auto" src={Publi} className="w-full" data-aos="fade-up"/>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={AboutImg} alt="" className="w-[592px] rounded-2xl" data-aos="fade-up" />
          </div>
        </div>
      </div>
      <div>
      </div>
    </section>
  );
};

export default About;
