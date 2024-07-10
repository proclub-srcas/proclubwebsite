import { useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="pt-10 md:pt-20 pb-4 bg-black">
            <hr className="border-gray-700" />
            <h1 className="mt-10 text-center text-2xl md:text-4xl font-semibold text-yellow-500 pb-4">
                Ready to Elevate Your Coding Skills?
            </h1>
            <p className="text-center text-xl md:text-2xl font-medium text-gray-200">
                Join Programming Club for unmatched coding experiences and growth.
            </p>
            <div className="flex items-center justify-center gap-5 mt-10 md:mt-10">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfC7lBbe_fA92j5auQPd7-mHeB9tD-GMopx-CqQJLD_-NgJfQ/viewform" target="_blank" rel="noopener noreferrer">
                    <button className="hover:bg-yellow-600 bg-yellow-500 font-semibold text-black transition-all text-xl md:text-3xl rounded-2xl py-3 px-5">
                        Join Now
                    </button>
                </a>
                <button onClick={() => handleNavigation('/join')} className="py-3 px-5 rounded-2xl text-white text-xl md:text-2xl border border-yellow-500 hover:text-black hover:bg-yellow-500 transition-all">
                    Contact Us
                </button>
            </div>
            <div className="flex justify-center gap-8 mt-10">
                <a href="https://instagram.com/proclub_srcas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                    <FaInstagram size={30} />
                </a>
                <a href="https://www.linkedin.com/company/proclub-srcas/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://youtube.com/@proclub_srcas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                    <FaYoutube size={30} />
                </a>
            </div>
            <h1 className="text-gray-400 text-md text-center mt-10">
                Designed by Programming Club, SRCAS
            </h1>
        </div>
    );
};

export default Footer;
