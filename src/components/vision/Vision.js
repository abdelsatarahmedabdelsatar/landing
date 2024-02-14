import React, { useEffect, useRef } from "react";
import "./Vision.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const Vision = () => {
  const ref = useRef(null);
  const { t, i18n } = useTranslation();

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="md:container  mx-auto   px-4 py-4">
      <div className="flex xl:text-start  text-center items-center justify-center  xs:flex-col  md:px-4 xl:flex-row ">
        <div className="md:w-[30%]">
          <div className="img__wrapper md:w-80 w-72 md:h-96 h-80 mt-16  relative mx-auto">
            <img
              src=" ./vision.png"
              className="absolute md:h-96 sm:h-80 start-6 top-3"
            />
          </div>
        </div>
        <motion.div
          className="md:w-[70%] pt-11 relative  md:ml-11 xs:mx-3"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          ref={ref}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
        <h2 className="font-bold text-5xl py-1 md:pr-28">{t("Vision")}</h2>
          <main className="card-container xl:block hidden">
            <div className="card square-card">
              <div className="down">
                <div className="up">
                  <div className="squeeze">
                    <div className="rotate-in">
                      <div className="rotate-out">
                        <div className="square"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <p className=" text-2xl text-[#707070] font-semibold py-1 md:pr-28">
            {t(
              "Our vision is to be at the forefront of clean energy adoption in the agricultural sector, accelerating the transition towards sustainable practices."
            )}
          </p>
          <p className=" text-1xl text-[#707070] font-semibold py-1 md:pr-28">
            {t(
              "We are inspired by and align with the noble efforts of His Highness Sheikh Mohamed bin Zayed Al Nahyan and the UAE government ato reduce CO2 emissions and promote the use of clean energy."
            )}
          </p>
          <p className=" text-1xl text-[#707070] font-semibold py-1 md:pr-28">
            {t(
              "We envision a future where our livestock transportation services contribute significantly to this nation-wide initiative, fostering a greener agricultural landscape in the UAE. Our goal is to make a lasting impact, creating a sustainable legacy for future generations to inherit."
            )}
          </p>
          <img
            src=" ./vision2.png"
            className=" w-[60%] absolute right-0 top-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
