import React, { useEffect, useRef } from "react";
import "./Services.css";
import { motion, useAnimation, useInView } from "framer-motion";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="container mx-auto py-4 my-9 px-4">
      <div className="flex text-left   items-center sm:flex-col  px-4 xl:flex-row relative  ">
        <motion.div
          ref={ref}
          className="w-[70%] pt-11  ml-11"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <h2 className="font-bold text-5xl py-7">Services</h2>
          <p className=" text-2xl text-[#707070] font-semibold py-1 pr-28">
            Our company provides comprehensive livestock logistics throughout
            the United Arab Emirates
          </p>
          <p className=" text-1xl text-[#707070] font-semibold py-1 pr-28">
            We deliver safe and efficient animal transportation, including the
            transfer of essential animal materials and nutrients. Our team
            ensures smooth and stress-free livestock relocation within farms and
            facilities,
          </p>
          <p className=" text-1xl text-[#707070] font-semibold py-1 pr-28">
            adhering to the highest standards of animal welfare. We are
            committed to your livestock's well-being and strive to exceed your
            service expectations.
          </p>
        </motion.div>
        <div className="w-[30%]">
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
