import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { executiveDetails } from "./ExecutiveDetails"
import { RiGlobalLine } from "react-icons/ri";


const Executive = () => {


    return (
        <div className=" mt-20">
            <h2 className="md:text-4xl text-2xl font-semibold text-teal-400 mb-8 text-center relative">
                Executive Members & Volunteers
                <span className="block md:h-1 md:w-96 h-1 w-28 bg-yellow-500 mt-2 mx-auto rounded"></span>
            </h2>
            <section className=" mt-10">
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {executiveDetails.map((item, index) => (
                        <div key={index} className="relative bg-gray-800 p-6 rounded-lg shadow-lg ">
                            <div className="flex flex-col items-center">
                                <div className="relative w-32 h-32 bg-[#f8b607] rounded-full overflow-hidden border-4 border-teal-600 mb-4">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                                </div>
                                <h3 className="text-2xl font-bold">{item.name}</h3>
                                <p className="text-lg text-gray-400">{item.dept}</p>
                                <p className="text-lg text-gray-400">{item.role}</p>
                                <div className="flex mt-4 space-x-4">
                                    <a href={item.instagram} className="text-pink-500 hover:text-pink-400" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram size={24} />
                                    </a>
                                    <a href={item.linkedin} className="text-blue-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={24} />
                                    </a>
                                    <a href={item.portfolio} className="text-black hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                                        <RiGlobalLine size={24} />

                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Executive