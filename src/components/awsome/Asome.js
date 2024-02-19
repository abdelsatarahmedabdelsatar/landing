import React from "react";
import "./Asome.css";
import { useTranslation } from "react-i18next";
const Asome = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="conatiner mx-auto" id="about">
      <div className="flex ">
        <div className="w-full relative xl:start-9 sm:start-0  lg:text-start xs:text-center md:ps-20 xs:ps-2">
          <p className="md:text-7xl xs:text-4xl font-bold text-[#0000007e] py-2">
            {t("Awesome")}
          </p>
          <p className="md:text-7xl xs:text-4xl font-bold text-[#2f892fb0] py-2">
            {t("Livestock")}
          </p>
          <p className="md:text-7xl xs:text-4xl font-bold text-[#C9AE55] py-2">
            {t("Transportation")}
          </p>
        </div>
        <div className="w-full lg:block xs:hidden relative right-40 xl:right-11">
          <p
            className="font-extrabold  text-[8rem]  opacity-5 
        "
          >
            {t("GreenYard")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Asome;
