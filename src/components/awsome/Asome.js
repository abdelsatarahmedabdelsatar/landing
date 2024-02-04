import React from "react";
import "./Asome.css";

const Asome = () => {
  return (
    <div className="conatiner mx-auto">
      <div className="flex justify-around">
        <div className="w-full relative xl:left-9 sm:left-0">
          <p className="text-7xl font-bold text-[#0000007e] py-2">Awesome</p>
          <p className="text-7xl font-bold text-[#2f892fb0] py-2">Livestock </p>
          <p className="text-7xl font-bold text-[#C9AE55] py-2">
            Transportation{" "}
          </p>
        </div>
        <div className="w-full xl:block  sm:hidden relative right-11">
          <p
            className="font-extrabold text-[11rem]  opacity-5 
        "
          >
            GreenYard
          </p>
        </div>
      </div>
    </div>
  );
};

export default Asome;
