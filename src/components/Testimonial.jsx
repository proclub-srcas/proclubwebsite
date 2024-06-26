import { useInView } from 'react-intersection-observer';
import raviImg from '../images/ravi.png';
import priyaImg from '../images/priya.png';
import PravinImg from '../images/Pravin.png';

// Testimonial data
const testimonials = [
    {
        title: "The club’s efforts to stay with current industry trends are remarkable, and I was eager to contribute my skills.",
        imgSrc: raviImg,
        name: "Pravin Boopathi",
    },
    
    {
        title: "There’s a strong emphasis on practical experience, with numerous project-based learning opportunities.",
        imgSrc: priyaImg,
        name: "Seetha Mahalakshmi",
    },
    {
        title: "The club offers a fantastic range of activities, from beginner workshops to advanced coding competitions.",
        imgSrc: PravinImg,
        name: "Tamil Amuthan",
    },
];

// Main Testimonial component
const Testimonial = () => (
    <div className="mt-10 pt-10 pb-10 px-6 md:px-28">
        <h1 className="text-center text-3xl font-semibold text-gray-200">Hear from Our Club Members</h1>
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16">
            {testimonials.map((review, index) => (
                <ReviewCard key={index} {...review} />
            ))}
        </div>
    </div>
);

// Sub-component to render individual review cards
const ReviewCard = ({ title, imgSrc, name }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`rounded-lg p-2 w-full md:w-fit md:p-5 bg-[#121212] text-white transition-all duration-1000 ease-in-out transform ${inView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'} hover:bg-gray-800`}
        >
            <h1 className="text-xs md:text-xl text-left text-gray-400">{title}</h1>
            <div className="flex justify-start gap-4 pt-3 items-center">
                <img src={imgSrc} className="w-12 md:w-20" alt={name} />
                <p className="font-semibold">{name}</p>
            </div>
        </div>
    );
};

export default Testimonial;
