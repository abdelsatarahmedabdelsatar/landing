import React from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <div className="experience__wrapper text-center relative h-[34rem] mt-20 ">
      <div className="absolute top-0 right-0  h-[34rem] w-full z-10  bg-black opacity-60"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-white lg:text-7xl sm:text-5xl font-bold py-12  ">
          Experience
        </h2>
        <p className=" py-8 lg:text-2xl sm:text-xl text-white font-bold leading-loose">
          We are honored to have established a significant partnership with the
          Government of Sharjah Al-Sajaa livestock market, serving as their
          principal provider for livestock transportation services This
          collaboration has fortified our experience in the field, allowing us
          to deliver superior service and meet the specific needs of one of the
          region's most distinguished livestock markets. We are proud of our
          proven track record and continue to uphold our commitment to
          exceptional service and animal welfare.
        </p>
      </div>
    </div>
  );
};

export default Experience;
