import React, { useState, useEffect } from "react";
import popupImg from '../images/Events/devops.jpg';

const PopupAd = () => {
  const [showAd, setShowAd] = useState(false);
  const linktoAd = '';

  useEffect(() => {
    const hasSeenAd = sessionStorage.getItem("hasSeenAd");
    if (!hasSeenAd) {
      setShowAd(true);
    }
  }, []);

  const handleClose = () => {
    setShowAd(false);
    sessionStorage.setItem("hasSeenAd", true);
  };

  return (
    <>
      {showAd && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-auto max-w-3xl bg-white rounded-lg shadow-lg">
              <button
                className="absolute top-2 right-2 text-black text-3xl font-bold rounded-full w-8 h-8 flex justify-center items-center bg-yellow-300 hover:bg-yellow-400 transition-all"
                onClick={handleClose}
              >
                ×
              </button>
              <a href={linktoAd} target="_blank" rel="noopener noreferrer">
                <img
                  src={popupImg}
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
