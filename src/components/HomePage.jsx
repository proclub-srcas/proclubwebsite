import React from 'react';
import hackSphereImg from '../images/hacksphere.jpg';
import HomeImg from '../images/home .jpg'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div>
            <div id='Home' className="flex items-center justify-center mt-28">
                <div className="text-center px-6 md:px-0">
                    <h1 style={{ lineHeight: "1.3" }} className="text-[#F8B607] text-3xl md:text-6xl font-semibold leading-tight font-raleway">
                        Empowering Coding at <br /> College Club
                    </h1>
                    <p className="text-gray-400 mt-4 pb-10 text-sm md:text-2xl">
                        Join our vibrant community of coders, developers, and tech enthusiasts <br />
                        where innovation and collaboration drive success.
                    </p>
                    <div className="flex items-center justify-center gap-5 mt-5 md:mt-10">
                       <a href="https://forms.gle/hb8b8uyfHMSfY8hv6" target='blank'><button  className="hover:bg-[#3CB371] bg-[#28A745] font-semibold text-white transition-all text-xl font-poppins md:text-4xl rounded-xl py-3 px-5">Join Now</button></a>
                        {/* <button className="p-4 rounded-2xl text-[#28A745] text-xl md:text-2xl py-3 px-5 border border-[#28A745] hover:text-white hover:bg-[#28A745] transition-all">Learn More</button> */}
                    </div>
                </div>
            </div>
            <div className='px-4 mt-16 md:mt-24 flex justify-center items-center'>
                <img src={HomeImg} className='rounded-lg w-full ease-in-out md:w-[66%] h-auto md:h-[600px] border-4 border-secondary transition-all' alt="Coding Image" />
            </div>
        </div>
    );
};

export default HomePage;
