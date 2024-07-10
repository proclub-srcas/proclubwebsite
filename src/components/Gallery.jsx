import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import g4Img from '../images/gallery/g1.webp';
import cyberSessionImg from '../images/gallery/session-cyber.webp';
import CSImg2 from '../images/gallery/session-cyber2.webp';
import codathonImg from '../images/gallery/codathon.webp';
import Linux1 from '../images/gallery/Linux1.webp';
import Linux2 from '../images/gallery/Linux2.webp';
import codeChronicles from '../images/gallery/codeChronicles.jpg'
import codeChronicleImg from '../images/gallery/codeChroniclesImg.jpg'

const Gallery = () => {
    const Imgdata = [
        { img: codeChronicles, event: 'Code Chronicles (Quiz competition)' },
        { img: codeChronicleImg, event: 'Code Chronicles (Quiz competition)' },
        { img: g4Img, event: 'Mastering the art of Web Designing' }, 
        { img: cyberSessionImg, event: 'Cyber Session' },
        { img: CSImg2, event: 'Cyber Session 2' },
        { img: codathonImg, event: 'Codathon 2k24' },
        { img: Linux1, event: 'Linux session - Mr. S.PRATHAPAN' },
        { img: Linux2, event: 'Linux session - Mr. S.PRATHAPAN' },
    ];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1400); // Simulate a loading time of 1.4 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="mt-10 px-10 pb-10">
            {loading ? (
                <div className="flex justify-center items-center mt-20 ">
                    <AiOutlineLoading3Quarters className="animate-spin text-5xl text-secondary" />
                    <span className="text-2xl text-secondary ml-4">Think, code, create. !</span>
                </div>
            ) : (
                <>
                    <h1 className="text-center text-secondary text-4xl font-semibold underline underline-offset-8 decoration-secondary">Event Gallery</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
                        {Imgdata.map((data, index) => (
                            <GalleryItem key={index} img={data.img} event={data.event} delay={index * 150} />
                        ))}
                    </div>
                    <p className='text-gray-500 text-center font-medium mt-10'>Stay tuned for more exciting events!</p>
                </>
            )}
        </div>
    );
};

const GalleryItem = ({ img, event, delay }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 150); // Simulate a slight delay before displaying image
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`relative w-full pb-[100%] overflow-hidden group transition-opacity duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <img
                src={img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-sm"
                onLoad={() => setLoaded(true)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-secondary bg-[#000] p-2 rounded-lg text-lg font-bold">{event}</p>
            </div>
        </div>
    );
};

export default Gallery;
