import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io"; //footer icon
import WinnerCompDetails from './WinnerCompDetails'; //receive winner details

const Winners = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    }

    return (
        <div className="bg-black text-white min-h-screen py-10 px-4 md:px-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary text-center mb-8 flex gap-4 items-center justify-center font-raleway">
                Achievers <ion-icon name="trophy-outline" className="ml-2 text-4xl md:text-5xl"></ion-icon>
            </h1>
            <p className='text-gray-300 text-center text-xl md:text-2xl italic mb-12'>"Dare to be different, dare to be an achiever." </p>
            {WinnerCompDetails.map((competition, index) => (
                <div key={index} className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-magenta-300">{competition.title}</h2>
                    <p className="text-center text-gray-400 mb-7 md:mb-10">{competition.date}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12">
                        {competition.winners.map((winner, idx) => (
                            <div key={idx} className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 md:hover:scale-105 flex flex-col items-center h-full">
                                <div className="flex flex-col items-center h-full">
                                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500 mb-4 md:mb-6">
                                        <img src={winner.img} alt={winner.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-md md:text-xl font-bold text-center text-teal-300">{winner.name}</h3>
                                    <div className='text-center mt-4 text-sm md:text-base flex-grow flex flex-col justify-end'>
                                        <p className="text-gray-400">Prize: {winner.prize}</p>
                                        <p className="text-gray-400">Reg No: {winner.regNo}</p>
                                        <p className="text-gray-400">Department: {winner.department}</p>
                                        <p className="text-gray-400 pb-2">Year: {winner.year}</p>
                                        {winner.socialImg && (
                                            <img src={winner.socialImg} alt={`${winner.name} social`} className='max-h-40 min-h-24 md:min-h-40 rounded-md mt-4' />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr className="border-gray-700 mt-16" />
                </div>
            ))}
            <div className='hover:cursor-pointer text-gray-500 text-sm text-center mt-5 hover:text-gray-400'>
                <p onClick={() => handleNavigation('/')} className="flex items-center justify-center">
                    <IoIosArrowBack />
                    Go back to Home 
                </p>
            </div>
        </div>
    );
};

export default Winners;
