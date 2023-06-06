import { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Horacio from "../assets/team/Horacio.webp";
import Pipo from "../assets/team/Pipo.webp";

const Team = () => {

  const people = [
    {
      firstname: "Horacio",
      lastname: "Lator",
      role: "Técnico en Grabación y Sonido en Vivo",
      picture: Horacio,
    },
    {
      firstname: "Octavio",
      lastname: "Dopazo",
      role: "Licenciado en sonorización y grabación",
      picture: Pipo,
    },
  ]

  const [member, setMember] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className='bg-section-reverse'>
      <div className="relative w-full py-10 mx-auto text-gray-700 max-w-7xl mt-14" data-aos="fade-up">
        <div className="flex items-center justify-center mb-8">
          <span className="h-1 bg-gray-700 w-14 rounded-3xl" />
          <h2 className="px-3 text-sm font-semibold text-white uppercase">
            Nuestro Equipo
          </h2>
          <span className="h-1 bg-gray-700 w-14 rounded-3xl" />
        </div>
        <div className="grid w-full max-w-5xl grid-cols-2 px-4 mx-auto gap-y-4 sm:gap-y-10">
          <div className="flex flex-col items-center justify-center col-span-full lg:col-span-1 sm:flex-row">
            <ul className="flex items-center justify-center px-4 mb-4 space-x-3 sm:mb-0 sm:flex-col sm:space-x-0 sm:space-y-3">
              {people.map((person, index) => (
                <li key={person.lastname} className={`w-16 h-16 rounded-full overflow-hidden filter border-2 border-gray-500 ${index !== member ? "saturate-0 hover:brightness-125" : "saturate-100"}`}>
                  <button className="w-full h-full" onClick={() => setMember(index)}>
                    <img src={person.picture} alt="team" className="object-cover" />
                  </button>
                </li>
              ))
              }
            </ul>
            <div className="overflow-hidden rounded">
              <img src={people[member].picture} alt="team-select" className="object-cover w-full max-w-xs" />
            </div>
          </div>
          <div className="flex flex-col justify-center max-w-lg mx-auto space-y-4 col-span-full lg:col-span-1 lg:mx-0">
            <span className="font-bold tracking-wider text-gray-300 uppercase">{people[member].role}</span>
            <h3 className="space-y-2 text-4xl font-bold sm:text-5xl">
              <span className="block text-gray-300">{people[member].firstname}</span>
              <span className="block text-gray-300">{people[member].lastname}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;
