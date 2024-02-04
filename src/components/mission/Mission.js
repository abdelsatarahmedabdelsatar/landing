import React from "react";
const Mission = () => {
  return (
    <div className="container mx-auto  px-4">
      <div className="flex text-left  items-center  sm:flex-col  px-4 xl:flex-row ">
        <div className="w-[30%]">
          <div className="img__wrapper w-80 h-96 mt-16 relative">
            <img src=" ./mission.png" className="absolute h-96 left-6 top-3" />
          </div>
        </div>
        <div className="w-[70%] pt-11 relative ml-11">
          <h2 className="font-bold text-5xl py-7">Mission</h2>
          <p className=" text-2xl text-[#707070] font-semibold py-1 pr-28">
            Our mission is to revolutionize the agricultural sector by
            pioneering the use of electric vehicles for livestock
            transportation. We aim to create a healthier and more efficient
            environment for both individuals and animals.
          </p>
          <p className=" text-1xl text-[#707070] font-semibold py-1 pr-28">
            By harnessing the power of sustainable technology, we seek to reduce
            carbon emissions and contribute to a greener future, while ensuring
            the utmost care for the animals in transit.
          </p>
          <p className=" text-1xl text-[#707070] font-semibold py-1 pr-28">
            Our commitment extends beyond mere transportation - we strive to
            drive innovation, promote animal welfare, and foster a sustainable
            future for the agricultural industry
          </p>
          <img src=" ./mission2.png" className="absolute right-0 bottom-0" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
