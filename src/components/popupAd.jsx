import React, { useState, useEffect } from "react";
import hackHunt from '../images/hackhunt.jpg';

const PopupAd = () => {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const hasSeenAd = sessionStorage.getItem("hasSeenAd");
    if (!hasSeenAd) {
      setShowAd(true);
    }
  }, []);

  const handleClose = () => {
    setShowAd(false);
    sessionStorage.removeItem("hasSeenAd");
  };

  return (
    <>
      {showAd && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-auto max-w-3xl bg-white rounded-lg shadow-lg">
              <button
                className="absolute top-0 right-0 m-2 text-white text-5xl bg-gray-600 hover:bg-black transition-all rounded-full px-2 "
                onClick={handleClose}
              >
                ×
              </button>
              <a href="https://forms.gle/nNKoErLWUNnhfoT48" target="blank">
                <img
                  src={hackHunt}
                  alt="Ad Content"
                  className="rounded-lg w-full h-96 md:h-auto border-2 border-yellow-600"
                  style={{ maxHeight: "80vh" }}
                />
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PopupAd;
