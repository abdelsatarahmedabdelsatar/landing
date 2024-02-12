import React, { useEffect, useRef } from "react";
import "./Services.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="md:container mx-auto py-4 my-9 md:px-4" id="services">
      <div className="flex xl:text-left text-center justify-center  items-center xs:flex-col  md:px-4 xl:flex-row relative  ">
        <div className="block xl:hidden">
          <div className="img__wrapper md:w-80 w-72 md:h-96 h-80 mt-16 relative">
            <img
              src=" ./services.png"
              className="absolute md:h-96 sm:h-80 left-6 top-3"
            />
          </div>
        </div>
        <motion.div
          ref={ref}
          className="md:w-[70%] pt-11  ml-11"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
<<<<<<< HEAD
          <h2 className="font-bold text-5xl py-7">{t("Services")}</h2>
          <main class="card-container  xl:block hidden">
            <div class="card ball-bouncing">
              <div class="ball"></div>
=======
          <h2 className="font-bold text-5xl py-7">Services</h2>
          <main className="card-container  xl:block hidden">
            <div className="card ball-bouncing">
              <div className="ball"></div>
>>>>>>> b7eba8af2b5dd4e7ac7b9022adcde0526f3ec4ee
            </div>
          </main>
          <p className=" text-2xl text-[#707070] font-semibold py-1 md:pr-28">
            {t(
              "Our company provides comprehensive livestock logistics throughout the United Arab Emirates"
            )}
          </p>
          <p className=" text-1xl text-[#707070] font-semibold py-1 md:pr-28">
            {t(
              "We deliver safe and efficient animal transportation, including the transfer of essential animal materials and nutrients. Our team ensures smooth and stress-free livestock relocation within farms and facilities,"
            )}
          </p>
          <p className=" text-1xl text-[#707070] font-semibold py-1 md:pr-28">
            {t(
              "adhering to the highest standards of animal welfare. We are committed to your livestock's well-being and strive to exceed your service expectations."
            )}
          </p>
        </motion.div>
        <div className="xl:block hidden w-[30%]">
          <div className="img__wrapper w-80 h-96 mt-16 relative">
            <img src=" ./services.png" className="absolute h-96 left-6 top-3" />
          </div>
        </div>
        <img
          src=" ./services1.png"
          className="absolute right-[16rem] top-[-80px] z-0 sm:hidden   xl:block"
        />
      </div>
    </div>
  );
};

export default Services;
