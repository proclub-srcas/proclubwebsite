import HackathonImg from '../images/hacksphere.jpg'

const Hackathon=() =>{

    return(
 
        <div className='text-center flex flex-col lg:flex-row gap-10 lg:gap-20 px-10 lg:px-20 justify-center items-center mt-20 transition-all duration-500 ease-in-out'>
        <div className='flex flex-col lg:order-2 items-center'>
          <h1 className='text-secondary font-semibold text-xl md:text-3xl italic underline underline-offset-4 md:underline-offset-8 decoration-teal-600 mb-5 lg:mb-10'>Don’t Blink, Something Epic Awaits..!</h1>
          <img src={HackathonImg} alt="" className='h-64 md:h-96 mt-5 rounded-tl-3xl rounded-br-3xl border-2 border-green transform hover:scale-105 transition-transform duration-300' />
          
          <button className=' mt-10 hover:bg-[#3CB371] bg-teal-400 font-semibold text-black font-poppins transition-all text-lg md:text-xl rounded-xl py-3 px-3 '>Registrations open soon !</button>
          
          <h1 className='text-teal-500 font-semibold md:text-2xl text-sm mt-5 lg:mt-10'>Compiling the Details - Keep Checking In!</h1>
        </div>
      </div>
      
    )
}

export default Hackathon