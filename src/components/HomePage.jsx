import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { useNavigate } from 'react-router-dom';

import hackSphereImg from '../images/hacksphere.jpg';
import HomeImg2 from '../images/Carousel/codeChronicles Winners.jpg';
import HomeImg3 from '../images/Carousel/session-cyber2.webp';

const HomePage = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };

    const carouselContent = [
        {
            type: 'text',
            content: (
                <div className="text-center -mt-10  md:px-0">
                    <h1 style={{ lineHeight: "1.3" }} className="text-[#F8B607] text-3xl mb-10 md:text-6xl font-semibold leading-tight font-raleway">
                        Empowering Coding at <br /> College Club
                    </h1>
                    <p className="text-gray-400 mt-4 pb-12 text-sm md:text-2xl">
                        Join our vibrant community of coders, developers, and tech enthusiasts <br />
                        where innovation and collaboration drive success.
                    </p>
                    <div className="flex items-center justify-center mb-8 pb-8 md:mb-16">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfC7lBbe_fA92j5auQPd7-mHeB9tD-GMopx-CqQJLD_-NgJfQ/viewform" target='blank'>
                        <button className="hover:bg-[#3CB371] bg-[#28A745] font-semibold text-white transition-all text-xl font-poppins md:text-4xl rounded-xl py-3 px-5">Join Now</button>
                    </a>
                </div>
                </div>
            ),
        },
        { type: 'image', src: HomeImg2 },
        { type: 'image', src: HomeImg3 },
        { type: 'image', src: hackSphereImg },
    ];

    const [showJoinButton, setShowJoinButton] = useState(false);

    const handleCarouselChange = (index) => {
        if (index === 0) {
            setShowJoinButton(false); // Hide button when first slide (text) is displayed
        } else {
            setShowJoinButton(true); // Show button for other slides (images)
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="md:mt-16 mt-10 mb-8 w-full max-w-6xl"> {/* Add max-w-6xl for better responsiveness */}
                <div className='rounded-md w-full md:px-10 h-auto md:h-[600px] transition-all overflow-hidden'>
                    <Carousel
                        showThumbs={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showStatus={false}
                        interval={3000}
                        transitionTime={600}
                        dynamicHeight={true}
                        className="carousel-container"
                        onChange={handleCarouselChange}
                    >
                        {carouselContent.map((item, index) => (
                            <div key={index} className="carousel-slide overflow-hidden  ">
                                {item.type === 'text' ? (
                                    <div className="px-6 md:px-0 mt-28">
                                        {item.content}
                                    </div>
                                ) : (
                                    <img src={item.src} alt={`Home Image ${index}`} className="w-full  px-8 object-fill h-[350px] md:h-[500px] rounded-md " />
                                )}
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            {showJoinButton && (
                <div className="flex items-center justify-center mb-8 md:mb-16">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfC7lBbe_fA92j5auQPd7-mHeB9tD-GMopx-CqQJLD_-NgJfQ/viewform" target='blank'>
                        <button className="hover:bg-[#3CB371] bg-[#28A745] font-semibold text-white transition-all text-xl font-poppins md:text-4xl rounded-xl py-3 px-5">Join Now</button>
                    </a>
                </div>
            )}
            <marquee className="text-white mt-10 font-medium text-base md:text-2xl animate-pulse" behavior="" direction="">
            Programming Club of SRCAS *** Upcoming Event - Power BI Session *** AI Gamified -  exclusively for 1st years *** 1Day workshop on DevOps ***
            </marquee>
        </div>
    );
};

export default HomePage;
