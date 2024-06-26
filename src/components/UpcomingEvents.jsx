import React from 'react';
import { useInView } from 'react-intersection-observer';
import cptImg from '../images/cpt.jpg'
import webdesignImg from '../images/web design event.jpg';
import comingSoon from '../images/code.jpg';
import gameDev from '../images/Events/game dev.png'
import powerBi from '../images/Events/Microsoft Power BI.jpeg'
import aiChallenge from '../images/Events/microsoft-ai-tool-revolution-edge.jpg'
import footPrint from '../images/Events/footprint.jpg'
import githubDev from '../images/Events/github.jpg'
import codingQuiz from '../images/Events/quiz.png'

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
        { img: webdesignImg, class: true },
        { img: cptImg, class: true },
        { img: gameDev, class: true },
        { img: powerBi, class: true },
        { img: aiChallenge, class: true },
        { img: footPrint, class: true },
        { img: githubDev, class: true },
        { img: codingQuiz, class: true },
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
                Upcoming Events
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
