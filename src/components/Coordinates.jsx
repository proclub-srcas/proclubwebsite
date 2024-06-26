import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; //icons 
import { RiGlobalLine } from "react-icons/ri"; //icons
import { staffCoordinators, officeBearers } from './Co-ordinates Details'; //details
import Executive from './Executive' 

const Coordinators = () => {
  return (
    <div className="bg-[#010101] text-white min-h-screen p-6 md:p-12">
      <h1 className="text-4xl md:text-4xl font-extrabold text-yellow-500 text-center mb-12">Co-ordinators</h1>

      <section className="mb-16">
        <h2 className="md:text-4xl text-2xl font-semibold text-teal-500 mb-8 text-center relative">
          Staff Coordinators
          <span className="block h-1 w-24 mt-2 bg-yellow-500 mx-auto rounded"></span>
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
          {staffCoordinators.map((coordinator, index) => (
            <div key={index} className="relative bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 bg-[#f8b607] rounded-full overflow-hidden border-4 border-[#38b2ac] mb-4">
                  <img src={coordinator.img} alt={coordinator.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl font-bold">{coordinator.name}</h3>
                <p className="text-lg text-gray-400 text-center mt-2">{coordinator.dept}</p>
                <p className="text-lg text-[#fbbf68] font-bold text-center mt-2">{coordinator.intro}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-gray-700 mt-5 w-full" />
      </section>

      <section>
        <h2 className="md:text-4xl text-2xl font-semibold text-teal-400 mb-8 text-center relative">
          Office Bearers
          <span className="block h-1 w-24 bg-yellow-500 mt-2 mx-auto rounded"></span>
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          {officeBearers.map((bearer, index) => (
            <div key={index} className="relative bg-gray-800 p-6 rounded-lg shadow-lg transform md:hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 bg-[#f8b607] rounded-full overflow-hidden border-4 border-teal-600 mb-4">
                  <img src={bearer.img} alt={bearer.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold">{bearer.name}</h3>
                <p className="text-lg text-gray-400">{bearer.dept}</p>
                <p className="text-lg text-[#fbbf68] font-bold">{bearer.role}</p>
                <div className="flex mt-4 space-x-4">
                  <a href={bearer.instagram} className="text-pink-500 hover:text-pink-400" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                  </a>
                  <a href={bearer.linkedin} className="text-blue-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                  </a>
                  <a href={bearer.portfolio} className="text-black hover:text-blue-400 transform hover:scale-105 md:hover:scale-100 transition-transform duration-300" target="_blank" rel="noopener noreferrer">
                    <RiGlobalLine size={24} />
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-gray-700 mt-5 w-full" />
      </section>

      {/* Executive members  */}
      <Executive />


    </div>
  );
};

export default Coordinators;
