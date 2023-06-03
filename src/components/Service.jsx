import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceImg1 from "../assets/service-img/service1.jpeg";
import ServiceImg2 from "../assets/service-img/service2.jpeg";
import ServiceImg3 from "../assets/service-img/service3.jpeg";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <section
      id="service" className="bg-section">
        <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="pt-14"></div>
      <div className="grid gap-10 pt-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
          <div className="bg-gradient-to-r from-[#1f0019] to-transparent bg-opacity-50 rounded-lg px-4 py-6 mx-auto sm:px-8 sm:py-8 md:px-10 md:py-8 lg:max-w-xl lg:px-12 lg:py-10" data-aos="fade-up">
            <div className="flex items-center mb-8 justify-right sm:justify-start">
              <h1 className="px-3 text-5xl font-semibold text-gray-300 uppercase" data-aos="fade-up">
                SERVICIOS
              </h1>
            </div>
            <p className="text-gray-400 text-lg" data-aos="fade-up">
            Te brindamos soluciones personalizadas para cada etapa de tu
          producción musical. Contamos con equipamiento de alta calidad y un
          equipo profesional y comprometido artísticamente que trabaja
          incansablemente para lograr resultados excepcionales.
            </p>
          </div>
        </div>
        <div className="grid items-center -mx-3 sm:-mx-4 md:flex md:flex-row md:space-x-4">
          <div className="w-full px-3 sm:px-4 xl:w-1/2">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-40 mb-10 md:h-48 xl:h-[360px] rounded-2xl"
            src={ServiceImg1}
            alt="img1"
            data-aos="fade-up"
          />
          <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40 h-1/2 bg-gradient-to-t from-black"></div>
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">
              PRODUCCIÓN MUSICAL
            </p>
            <p className="text-md tracking-wide text-gray-300">
              ¿Querés llevar tus ideas musicales al siguiente nivel? Nuestro
              servicio de producción musical te va a ayudar a crear un sonido único
              y profesional.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-40 mb-10 md:h-48 xl:h-[420px] rounded-2xl"
            src={ServiceImg2}
            alt="img2"
            data-aos="fade-up"
          />
          <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-90 h-1/2 bg-gradient-to-t from-black"></div>
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">MEZCLA</p>
            <p className="text-md tracking-wide text-gray-300">
              Nos aseguramos de que cada elemento de tu grabación, desde las
              voces hasta los instrumentos, se mezclen de manera equilibrada y
              se destaquen en la mezcla final.
            </p>
          </div>
        </div>
          </div>
          <div className="w-full px-3 sm:px-4 xl:w-1/2">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-40 mb-10 md:h-48 xl:h-[420px] rounded-2xl"
            src={ServiceImg3}
            alt="img3"
            data-aos="fade-up"
          />
          <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40 h-1/2 bg-gradient-to-t from-black"></div>
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">MASTERING</p>
            <p className="text-md tracking-wide text-gray-300">
              Ofrecemos servicios de mastering de alta calidad para darle a tus
              grabaciones el toque final que necesitan.
            </p>
          </div>
        </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Service;