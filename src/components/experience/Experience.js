import React, { useEffect, useRef } from "react";
import "./Experience.css";
import animation1 from "../../images/Animation - 1707000674803.json";

import { motion, useAnimation, useInView } from "framer-motion";
import Lottie from "lottie-react";
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });
  return (
    <div className="experience__wrapper text-center relative sm:h-[34rem]  mt-20 ">
      <div className="absolute top-0 right-0  sm:h-[34rem] xs:h-[100%]  w-full z-10  bg-black opacity-60"></div>
      <motion.div
        className="sm:container mx-auto px-4 z-10 relative"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        ref={ref}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, ease: "easeIn" }}
      >
        <h2 className="text-white lg:text-7xl xs:text-5xl font-bold pt-12 pb-6  ">
          Experience
        </h2>
        <Lottie
          className="contact__animation"
          animationData={animation1}
          style={{ height: 20 }}
        />
        <p className=" py-8 lg:text-2xl xs:text-xl text-white font-bold leading-loose">
          We are honored to have established a significant partnership with the
          Government of Sharjah Al-Sajaa livestock market, serving as their
          principal provider for livestock transportation services This
          collaboration has fortified our experience in the field, allowing us
          to deliver superior service and meet the specific needs of one of the
          region's most distinguished livestock markets. We are proud of our
          proven track record and continue to uphold our commitment to
          exceptional service and animal welfare.
        </p>
      </motion.div>
    </div>
  );
};

export default Experience;
