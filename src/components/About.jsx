import { FaCode } from "react-icons/fa6";

const Points = [
    "Innovative Coding Workshops and Events",
    "Join a Supportive Tech Community",
    "Opportunities for Growth and Networking"
];

const About = () => {
    return (
        <div id="about" className="bg-[#121212] mt-20 px-6 md:px-28 py-10 md:py-20 lg:py-28">
            <div className="md:grid grid-cols-2 gap-8">
                <div>
                    <h1 className="text-xl md:text-3xl font-semibold pt-2 md:pt-20 lg:pt-20 pb-3 text-[#F8B607]">About Our Programming Club</h1>
                    <p className="text-gray-300 text-sm md:text-xl pb-6 md:pb-16">We foster innovation, collaboration, and the spirit of coding excellence in our vibrant community.</p>
                    <div className="space-y-4">
                        {Points.map((item, index) => (
                            <div key={index} className="flex items-center text-[#28A745] text-sm md:text-xl">
                                <FaCode className="text-2xl md:text-4xl text-[#F8B607] mr-2" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-end pt-10 mt-10 px-0" style={{ backgroundImage: "url('https://res.cloudinary.com/dbyioi2qq/q_auto/v1700130426/static/vector-13png_1700130200_54679.png')", backgroundPosition: "0% 0%", backgroundSize: "50% auto", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", backgroundClip: "border-box", backgroundOrigin: "padding-box", padding: "50px 0px 0px 0px" }}>
                        <span className="block w-full relative" style={{ maxWidth: "575px", maxHeight: "600px", minHeight: "400px" }}>
                            <img src="https://res.cloudinary.com/dbyioi2qq/image/upload/v1716652635/vpe9gbmm8nmpoq7h5a82.jpg" alt="sl" className="w-full h-full object-contain rounded-2xl" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
