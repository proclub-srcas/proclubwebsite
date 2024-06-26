import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate()
    const handleNavigation=(path)=>{
        navigate(path);
    }

    return (
        <div className="pt-10 md:pt-20 pb-4 bg-black">
            <hr />
            <h1 className="mt-10 text-center text-2xl md:text-4xl font-semibold text-yellow-500 pb-4">Ready to Elevate Your Coding Skills?</h1>
            <p className="text-center text-xl md:text-2xl font-medium text-gray-200">Join Programming Club for unmatched coding experiences and growth.</p>
            <div className="flex items-center justify-center gap-5 mt-10 md:mt-10">
                <button onClick={()=>handleNavigation('/join')} className="hover:bg-yellow-600 bg-secondary font-semibold text-[#171717] transition-all text-xl md:text-3xl rounded-2xl py-3 px-5">Join Now</button>
                <button onClick={()=> handleNavigation('/join')} className="py-3 px-5 rounded-2xl text-white text-xl md:text-2xl border border-yellow-500 hover:text-black hover:bg-yellow-500 transition-all">Contact Us</button>
            </div>
            <h1 className=" text-gray-400 text-md text-center mt-10">Designed by Programming club, SRCAS </h1>
        </div>
    );
};

export default Footer;
