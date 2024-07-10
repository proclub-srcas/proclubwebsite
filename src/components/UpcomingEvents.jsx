import React from 'react';
import { useInView } from 'react-intersection-observer';


import CodeChronicles from '../images/Events/code chronicles.jpg'
import ByteBattle from '../images/Events/byte battle.jpeg'
import Codathon from '../images/Events/codathon.webp'
import LinuxSession from '../images/Events/linux session.webp'
import cyberSecuritySession from '../images/Events/cyber security session.webp'
import powerBi from '../images/Events/Microsoft Power BI.jpeg'


//workshop
import flutter from '../images/Events/flutter .jpg'
import cyberSecurity from '../images/Events/cybersecurity.jpg'
import devOps from '../images/Events/devops.jpg'
import dataAnalysis from '../images/Events/dataAnalysis.png'
import appDev from '../images/Events/App Development Workshop.png'
import uiux from '../images/Events/uiux.png'
import iot from '../images/Events/iot.png'
import cloud from '../images/Events/cloud.png'

const UpcomingEvents = () => {
    const EventsInfo = [
        { img: CodeChronicles, class: false },
        { img: ByteBattle, class: false },
        { img: Codathon, class: false },
        { img: LinuxSession, class: false },
        { img: cyberSecuritySession, class: false },
        { img: powerBi, class: true },
    ];

    const workShop = [
        { img: flutter, class: true },
        { img: cyberSecurity, class: true },
        { img: devOps, class: true },
        { img: dataAnalysis, class: true },
        { img: appDev, class: true },
        { img: uiux, class: true },
        { img: iot, class: true },
        { img: cloud, class: true },
    ]
   
    
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (



        <div className='mt-7 flex flex-col justify-center items-center'>
            <h1 ref={titleRef} className={`text-white mt-16 text-center font-poppins font-bold text-3xl md:text-4xl underline underline-offset-8 decoration-secondary transition-opacity duration-1000 ${titleInView ? 'opacity-100' : 'opacity-0'}`}>
             Events ! 
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16 px-4 md:px-20'>
                {EventsInfo.map((item, index) => (
                    <EventCard key={index} img={item.img} isComingSoon={item.class} />
                ))}
            </div>
            <div className=' mt-20 text-white  '>
            <h1 className='text-center font-semibold text-4xl underline underline-offset-8 decoration-secondary '>Workshops </h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16 px-4 md:px-20'>
            {
                workShop.map(
                    (item,index)=>(
                        <EventCard key={index} img={item.img} isComingSoon={item.class} />
                    )
                )
            }
            </div>
            
            </div>
        </div>
    );
};

const EventCard = ({ img, isComingSoon }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`relative w-full h-40 md:h-48 lg:h-64 border rounded-md overflow-hidden transition-transform duration-[2000ms] md:duration-[1500ms] lg:duration-[1000ms] ease-in-out transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
            <img
                src={img}
                alt=""
                className={`w-full h-full transition-transform duration-300 ease-in-out ${isComingSoon ? 'grayscale-[35%]' : ''} rounded-md transform hover:scale-110`}
            />
            {isComingSoon && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <span className="bg-[#282727]  text-teal-400 border-2 border-teal-600 rounded-lg px-3 py-1 text-lg md:text-xl font-bold">Coming Soon</span>
                </div>
            )}

                
        </div>
    );
};

export default UpcomingEvents;
