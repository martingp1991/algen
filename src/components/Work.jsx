import { useEffect } from "react";
import audio1 from "../assets/work/1.mp3"
import audio2 from "../assets/work/2.mp3"
import audio3 from "../assets/work/3.mp3"
import audio4 from "../assets/work/4.mp3"
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const audios = [
    {
      title: "La Caravana - Universo Paralelo",
      source: audio1,
    },
    {
      title: "Teo Barbosa - Qué sabrás de mí",
      source: audio2,
    },
    {
      title: "Leo Benítez - Como en sueños",
      source: audio3,
    },
    {
      title: "Hijos de Protón - Tierra profanada",
      source: audio4,
    },
  ];

  return (
    <section id="work" className="bg-section">
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="pt-14"></div>
        <div className="grid gap-10 pt-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
            <div
              className="bg-gradient-to-r from-[#1f0019] to-transparent bg-opacity-50 rounded-lg px-4 py-6 mx-auto sm:px-8 sm:py-8 md:px-10 md:py-8 lg:max-w-xl lg:px-12 lg:py-10"
              data-aos="fade-up"
            >
              <div
                className="flex items-center mb-8 justify-right sm:justify-start"
                data-aos="fade-up"
              >
                <h1 className="px-3 text-5xl font-semibold text-gray-300 uppercase">
                  TRABAJOS
                </h1>
              </div>
              <p
                className="text-gray-400 text-lg"
                data-aos="fade-up"
              >
                En nuestro estudio de grabación, nos esforzamos por brindar el
                mejor servicio posible para ayudar a nuestros clientes a lograr
                su visión musical. Desde la grabación hasta la mezcla y
                masterización. Nuestro objetivo es ofrecer una experiencia de
                grabación profesional y de alta calidad que refleje la
                creatividad y el talento de nuestros clientes. ¡Vení a trabajar
                con nosotros y hacé que tu música cobre vida!
              </p>
            </div>
          </div>
          <div className="mt-20">
            {audios.map((audio, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-gray-400 font-bold" data-aos="fade-up">{audio.title}</h2>
                <audio controls className="mt-2 w-full lg:w-[500px]" data-aos="fade-up" controlsList="nodownload" preload="auto">
                  <source src={audio.source} type="audio/mp3" />
                </audio>
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40 h-1/2 bg-gradient-to-t from-black"></div>
        </div>
      </div>
    </section>
  );
};

export default Work;
