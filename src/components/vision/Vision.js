import React, { useEffect, useRef } from "react";
import "./Vision.css";
import { motion, useAnimation, useInView } from "framer-motion";

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div id="about" className="container mx-auto   px-4 py-4">
      <div className="flex text-left  items-center  sm:flex-col  px-4 xl:flex-row ">
        <div className="w-[30%]">
          <div className="img__wrapper w-80 h-96 mt-16  relative">
            <img src=" ./vision.png" className="absolute left-6 top-3" />
          </div>
        </div>
        <motion.div
          className="w-[70%] pt-11 relative  ml-11"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          ref={ref}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <h2 className="font-bold text-5xl py-7">Vision</h2>
          <p className=" text-2xl text-[#707070] font-semibold py-1 pr-28">
            Our vision is to be at the forefront of clean energy adoption in the
            agricultural sector, accelerating the transition towards sustainable
            practices.
          </p>
          <p className=" text-1xl text-[#707070] font-semibold py-1 pr-28">
            We are inspired by and align with the noble efforts of His Highness
            Sheikh Mohamed bin Zayed Al Nahyan and the UAE government ato reduce
            CO2 emissions and promote the use of clean energy.
          </p>
          <p className=" text-1xl text-[#707070] font-semibold py-1 pr-28">
            We envision a future where our livestock transportation services
            contribute significantly to this nation-wide initiative, fostering a
            greener agricultural landscape in the UAE. Our goal is to make a
            lasting impact, creating a sustainable legacy for future generations
            to inherit.
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
