import { useRef, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
SwiperCore.use([Navigation, Pagination, Autoplay]);
import testimonialImg1 from "../assets/testimolials-img/1.png"
import testimonialImg2 from "../assets/testimolials-img/2.jpeg"
import testimonialImg3 from "../assets/testimolials-img/3.png"
import testimonialImg4 from "../assets/testimolials-img/4.png"
import testimonialImg5 from "../assets/testimolials-img/5.jpg"

const Testimonial = () => {
  const swiperRef = useRef(null);


  const testimonials = [
    {
      id: 1,
      name: "Tigre Ariel",
      jobTitle: "Cantante",
      image: testimonialImg1,
      title: "Sonido perfecto: Inspira y logra resultados excepcionales",
      comment:
        "En Algen, todo suena técnicamente impecable y todo es posible. Siempre que voy, la pasamos de diez, y eso es muy importante para trabajar y lograr el mejor ambiente donde la inspiración alcance los mejores resultados",
    },
    {
      id: 2,
      name: "Maxi López",
      jobTitle: "Cantante - Paceños en Acción",
      image: testimonialImg2,
      title: "Estudio Algen: ¡Sinónimo de calidad y experiencia!",
      comment:
        "¡Grabá tu música en Algen Studio! La buena onda de Horacio Lator y la calidad de sus grabaciones te invitan a seguir yendo. Sin duda, el mejor de la zona, con lo mejor en equipos de sonido y un experto en su campo. Nosotros lo elegimos desde hace años y nunca nos ha fallado. ¡Se los recomiendo!",
    },
    {
      id: 3,
      name: "Teo Barbosa",
      jobTitle: "Músico solista",
      image: testimonialImg3,
      title: "La Mejor Opción para Grabaciones de Calidad",
      comment:
        "Buen ambiente, gran adaptabilidad según el género, lo mejor de la zona. Grabé 4-5 canciones y las hicimos en una tarde cada una. El mastering es excelente y las mezclas suenan espectaculares. Sin duda, no te va a dejar decepcionado y vas a lograr un resultado mucho mejor de lo que esperas.",
    },
    {
      id: 4,
      name: "Nikoo Arrendondo",
      jobTitle: "Músico solista",
      image: testimonialImg4,
      title: "Una experiencia musical excepcional",
      comment:
        "Desde el momento en que ingresé, me sorprendió el ambiente cálido y acogedor que se respira en Algen. Los ingenieros de sonido son unos genios totales, siempre dispuestos a escuchar mis ideas y ayudarme a obtener el mejor sonido posible. Su profesionalismo y dedicación son inigualables.",
    },
    {
      id: 5,
      name: "Pablo Martinez",
      jobTitle: "Músico solista",
      image: testimonialImg5,
      title: "Gracias a Algen, mis sueños se hicieron realidad",
      comment:
        "Quiero expresar mi profunda gratitud por hacer realidad mis sueños. Durante este año 2023, hemos logrado concretar varios proyectos significativos, como el tema del triatlón y la creación de jingles, entre otros. Todo esto ha sido posible gracias a Algen, superando ampliamente todas mis expectativas.",
    },
  ];


  const handlePrevSlide = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }

  const handleNextSlide = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <section className="bg-section-reverse swiper-container" >
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4 ">
        <div className="flex items-center justify-center pt-24" data-aos="fade-up">
          <span className="h-1 bg-gray-700 w-14 rounded-3xl" />
          <h2 className="px-3 text-sm font-semibold text-white uppercase">
            COMENTARIOS
          </h2>
          <span className="h-1 bg-gray-700 w-14 rounded-3xl" />
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 1800 }}
          ref={swiperRef}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                <div className="lg:-mx-6 lg:flex lg:items-center">
                  <img
                    className="object-cover object-center lg:w-1/2 lg:mx-6  h-[250px] w-[250px] rounded-lg lg:h-[36rem]"
                    src={testimonial.image}
                    alt={testimonial.id}
                    data-aos="fade-up"
                  />
                  <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-60 h-1/2 bg-gradient-to-t from-black"></div>
                  <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 bg-gradient-to-l from-[#1f0019] to-transparent rounded-lg" data-aos="fade-up">
                    <p className="text-5xl font-semibold text-blue-500 ">“</p>
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96" data-aos="fade-up">
                      {testimonial.title}
                    </h1>
                    <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 text-md tracking-wide" data-aos="fade-up">
                      {testimonial.comment}
                    </p>
                    <h3 className="mt-6 text-lg font-medium text-blue-500" data-aos="fade-up">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300" data-aos="fade-up">
                      {testimonial.jobTitle}
                    </p>
                    <div className="flex items-center mt-8 lg:justify-start" >
                      <button title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border-2 rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100" onClick={handlePrevSlide}>
                        <IoIosArrowBack className="w-6 h-6" />
                      </button>
                      <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border-2 rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 mx-2 hover:bg-gray-100" onClick={handleNextSlide}>
                        <IoIosArrowForward className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
