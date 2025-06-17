import React from "react";

const GOOGLE_FORM_URL = "https://forms.gle/kVdJ3XwitZBKEhE48";

export default function Membership() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#010101] px-4 py-8">
      <div className="relative bg-gray-800 rounded-3xl shadow-2xl p-8 w-full max-w-md text-center border-2 border-yellow-500 flex flex-col items-center overflow-hidden">
        {/* Mascot/Avatar */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-8xl mb-2">👩‍💻</span>
          <h1 className="text-3xl font-extrabold text-yellow-400 mb-1 font-raleway tracking-tight">Join Our Programming Club</h1>
          <h2 className="text-lg font-semibold text-green-300 mb-2 font-poppins">For Freshers & Coders</h2>
        </div>
        <p className="text-gray-400 text-base mb-6 font-poppins italic">Start your coding journey with us!</p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg rounded-2xl py-4 mb-2 shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2"
        >
          🚀 Join Now
        </a>
        {/* Decorative accent */}
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-500 rounded-full opacity-20 z-0 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gray-700 rounded-full opacity-10 z-0 animate-pulse"></div>
      </div>
    </div>
  );
} 
