import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters, AiOutlineClose } from 'react-icons/ai';
import LazyLoad from 'react-lazyload';

// Import your images here
import g4Img from '../images/gallery/g1.webp';
import cyberSessionImg from '../images/gallery/session-cyber.webp';
import CSImg2 from '../images/gallery/session-cyber2.webp';
import codathonImg from '../images/gallery/codathon.webp';
import Linux1 from '../images/gallery/Linux1.webp';
import Linux2 from '../images/gallery/Linux2.webp';
import codeChronicles from '../images/gallery/codeChronicles.jpg';
import codeChronicleImg from '../images/gallery/codeChroniclesImg.jpg';
import srcasHackathon from '../images/gallery/srcashackathon-1.jpg';
import srcasHackathon2 from '../images/gallery/srcashackathon-2.jpg';
import srcasHackathon3 from '../images/gallery/srcashackathon-3.jpg';
import srcasHackathon4 from '../images/gallery/srcashackathon-4.jpg';

const Gallery = () => {
    const eventImages = [
        {
            event: 'SRCAS Hackathon',
            images: [srcasHackathon, srcasHackathon2, srcasHackathon3, srcasHackathon4],
        },
        {
            event: 'Code Chronicles (Quiz competition)',
            images: [codeChronicles, codeChronicleImg],
        },
        {
            event: 'Mastering the art of Web Designing',
            images: [g4Img],
        },
        {
            event: 'Cyber Session',
            images: [cyberSessionImg, CSImg2],
        },
        {
            event: 'Codathon 2k24',
            images: [codathonImg],
        },
        {
            event: 'Linux session - Mr. S.PRATHAPAN',
            images: [Linux1, Linux2],
        },
    ];

    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);
    const [currentEvent, setCurrentEvent] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1400);
        return () => clearTimeout(timer);
    }, []);

    const openModal = (images, event) => {
        setCurrentImages(images);
        setCurrentEvent(event);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="mt-10 px-10 pb-10">
            {loading ? (
                <div className="flex justify-center items-center mt-20">
                    <AiOutlineLoading3Quarters className="animate-spin text-5xl text-secondary" />
                    <span className="text-2xl text-secondary ml-4">Code to Innovate!</span>
                </div>
            ) : (
                <>
                    <h1 className="text-center text-secondary text-4xl font-semibold underline underline-offset-8 decoration-secondary">Event Gallery</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
                        {eventImages.map((data, index) => (
                            <div key={index} onClick={() => openModal(data.images, data.event)}>
                                <GalleryItem img={data.images[0]} event={data.event} />
                            </div>
                        ))}
                    </div>
                    <p className='text-gray-500 text-center font-medium mt-10'>Stay tuned for more exciting events!</p>
                </>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
                    <div className="bg-dark p-5 rounded-lg mx-auto max-w-full overflow-hidden border-gray-500 border-2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-secondary text-2xl font-semibold">{currentEvent}</h2>
                            <button onClick={closeModal} className="text-secondary text-3xl">
                                <AiOutlineClose />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[80vh] overflow-y-auto">
                            {currentImages.map((img, index) => (
                                <LazyLoad key={index} height={200} offset={100}>
                                    <img
                                        src={img}
                                        alt={`Gallery Image ${index}`}
                                        className="w-full h-auto object-cover rounded-md"
                                        loading="lazy"
                                    />
                                </LazyLoad>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const GalleryItem = ({ img, event }) => {
    return (
        <div className="relative w-full pb-[100%] overflow-hidden group cursor-pointer transition-all duration-500 ease-in-out">
            <LazyLoad height={200} offset={100}>
                <img
                    src={img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-sm border-2 border-transparent group-hover:border-secondary"
                    loading="lazy"
                />
            </LazyLoad>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-secondary bg-[#000] p-2 rounded-lg text-lg font-bold">{event}</p>
            </div>
        </div>
    );
};

export default Gallery;
