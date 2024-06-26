import { useState } from "react";
import { MdMenu, MdClose } from 'react-icons/md';
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoImg from '../images/logo-removebg-preview (1).png';
import snrLogo from '../images/clgLogo.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const MenuIcon = showMenu ? MdClose : MdMenu;

    const handleNavigation = (path) => {
        navigate(path);
        setShowMenu(false);
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery" },
        { name: "Humans", path: "/Humans" },
        { name: "Winners", path: "/Winners" },
        { name: "Magazines", path: "/Magazine" },
    ];

    return (
        <div className="sticky bg-black top-0 z-10 w-full shadow-md text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between py-4 px-7 md:px-28 border-b border-gray-950">
                <div className="flex items-center font-bold text-2xl cursor-pointer">
                   
                    <img onClick={() => handleNavigation('/')} src={snrLogo} alt="" className="text-4xl pl-1 md:px-3 h-14 w-48 md:h-16 md:w-50" />
                    <img onClick={() => handleNavigation('/')} src={logoImg} alt="" className="text-3xl pl-1 md:px-3 h-14 md:h-16 w-50" />
                   
                    
                    <div className="md:hidden ml-auto">
                        <MenuIcon onClick={toggleMenu} className="text-white text-3xl cursor-pointer" />
                    </div>
                </div>
                <ul className={`bg-blur md:flex items-center ${showMenu ? 'block' : 'hidden'} transition-all duration-300 ease-in-out transform ${showMenu ? 'translate-y-0' : 'translate-y-full md:translate-y-0'} md:mt-0 mt-4 md:flex-row flex-col w-full md:w-auto`}>
                    {navLinks.map((link, index) => (
                        <li key={index} className="text-xl cursor-pointer md:my-0 my-2 text-left md:text-center ">
                            {link.path.startsWith("#") ? (
                                <Link to={link.path} className={`md:ml-8 duration-300 ${location.pathname === link.path ? 'text-[#3CB371] font-semibold' : 'text-white hover:text-[#3CB371]'}`}>
                                    {link.name}
                                </Link>
                            ) : (
                                <div onClick={() => handleNavigation(link.path)} className={`md:ml-8 duration-300 ${location.pathname === link.path ? 'text-[#3CB371] font-bold' : 'text-white hover:text-[#3CB371]'}`}>
                                    {link.name}
                                </div>
                            )}
                        </li>
                    ))}
                
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
