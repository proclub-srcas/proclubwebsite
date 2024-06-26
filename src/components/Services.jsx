import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FcIdea } from 'react-icons/fc';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { GrCertificate, GrProjects } from 'react-icons/gr';
import { SiSololearn } from 'react-icons/si';

const cardContent = [
    {
        imgSrc: <FcIdea className="text-4xl text-[#F8B607]" />,
        name: "Hackathons",
        desc: "Experience the thrill of solving real-world problems under pressure!",
    },
    {
        imgSrc: <FaChalkboardTeacher className="text-4xl text-[#F8B607]" />,
        name: "Seminars",
        desc: "Join our seminars to learn cool tech tips from industry experts.",
    },
    {
        imgSrc: <GiTeacher className="text-4xl text-[#F8B607]" />,
        name: "Workshops",
        desc: "Hands-on sessions to build and enhance your coding skills."
    },
    {
        imgSrc: <GrCertificate className="text-4xl text-[#F8B607]" />,
        name: "Certifications",
        desc: "Earn credentials to validate and showcase your skills.",
    },
    {
        imgSrc: <SiSololearn className="text-4xl text-[#F8B607]" />,
        name: "Webinars",
        desc: "Learn from industry experts and expand your tech knowledge.",
    },
    {
        imgSrc: <GrProjects className="text-4xl text-[#F8B607]" />,
        name: "Projects",
        desc: "Collaborate on exciting realtime projects to showcase your skills and gain experience.",
    }
];

const ServicesSection = () => {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="mt-20 md:mt-28 text-center">
            <h1 ref={titleRef} className={`text-[#F8B607] underline underline-offset-8 decoration-[#007F00] text-3xl font-semibold transition-opacity duration-1000 ${titleInView ? 'opacity-100' : 'opacity-0'}`}>
                Our Club Activities 
            </h1>

            {/* Cards */}
            <div className="flex justify-center mt-10 px-3 md:px-28 pb-4 text-[#3CB371]">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
                    {
                        cardContent.map((item, index) => (
                            <ServiceCard key={index} imgSrc={item.imgSrc} name={item.name} desc={item.desc} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

const ServiceCard = ({ imgSrc, name, desc }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`bg-[#1c1c24] text-left rounded-lg p-6 flex flex-col items-center transition-all duration-[1500ms] ease-in-out transform ${inView ? 'translate-y-0 rotate-0 opacity-100 scale-100' : 'translate-y-10 rotate-3 opacity-0 scale-95'} shadow-xl hover:shadow-2xl hover:bg-[#1e521e] hover:text-white hover:scale-105`}
        >
            <div className="mb-4">
                {imgSrc}
            </div>
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-400 text-xs md:text-base">{desc}</p>
        </div>
    );
};

export default ServicesSection;
