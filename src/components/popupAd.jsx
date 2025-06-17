import React, { useState } from "react";
import { Link } from "react-router-dom";

const PopupAd = () => {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative bg-[#18181b] border-2 border-yellow-400 rounded-2xl shadow-2xl px-6 py-6 w-11/12 max-w-sm mx-auto flex flex-col items-center text-center animate-fadeIn">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-yellow-400 text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <span className="text-5xl mb-2 select-none">🚩</span>
        <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-2 font-raleway">Join Our Programming Club!</h2>
        <p className="text-gray-300 text-sm mb-4 font-poppins">Unlock coding events, workshops, and a vibrant community. Freshers welcome!</p>
        <Link to="/membership" className="w-full">
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg rounded-xl py-3 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopupAd;
