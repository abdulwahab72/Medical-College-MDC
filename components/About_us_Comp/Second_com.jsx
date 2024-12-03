"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Second_com = () => {
  const [counter, setcounter] = useState(false);

  return (
    <div>
      <ScrollTrigger
        onEnter={() => setcounter(true)}
        onExit={() => {
          setcounter(false);
        }}
      >
        <div
          className={`  relative bg-[url('../public/bg.webp')] bg-cover
    
    -z-10  over overflow-hidden md:min-h-[400px] xl:min-h-[500px]`}
        >
          <div className="py-16 mx-5">
            <h2 className="text-center text-sm text-[#24353B] xl:text-xl">
              THE NUMBERS SAY IT ALL{" "}
            </h2>
            <h2 className=" text-center text-[#24353B] text-2xl font-[Roboto- 400] font-bold xl:text-5xl">
              WHY CHOOSE US
            </h2>
          </div>

          <ul
            className="text-center grid grid-cols-2 md:grid-cols-4 lg:flex  lg:justify-center lg:gap-12


text-[#24353B] gap-4 "
          >
            <li className="border-[#94d3a4] md:border-r flex flex-col justify-center items-center text-md lg:px-6    ">
              <div className="">
                <img
                  src="./practical-ico.webp"
                  className="md:w-24 rounded-2xl shadow-xl"
                />
              </div>
              <p className="text-xl md:text-2xl xl:text-4xl font-[Roboto] text-[#24353B] font-bold xl:py-1">
                {counter && (
                  <CountUp start={0} end={8} duration={2} delay={0} />
                )}
              </p>

              <div className="md:text-lg">Certified Courses</div>
            </li>
            <li className="border-[#94d3a4] md:border-r flex flex-col justify-center items-center text-md  lg:px-6   ">
              <div className="">
                <img
                  src="./practical-ico.webp"
                  className="md:w-24 rounded-2xl shadow-xl"
                />
              </div>
              <p className="text-xl md:text-2xl xl:text-4xl  xl:py-1 font-[Roboto] text-[#24353B] font-bold">
                {counter && (
                  <CountUp start={0} end={367} duration={2} delay={0} />
                )}
              </p>

              <div className="md:text-lg">Students Enrolled </div>
            </li>
            <li className="border-[#94d3a4] md:border-r flex flex-col justify-center items-center text-md   lg:px-6  ">
              <div className="">
                <img
                  src="./practical-ico.webp"
                  className="md:w-24 rounded-2xl shadow-xl"
                />
              </div>
              <p className="text-xl md:text-2xl xl:text-4xl  xl:py-1 font-[Roboto] text-[#24353B] font-bold">
                {counter && (
                  <CountUp start={0} end={95} duration={2} delay={0} />
                )}
                %
              </p>

              <div className="md:text-lg">Passing to Universities</div>
            </li>
            <li className="  flex flex-col justify-center items-center text-md   lg:px-6   ">
              <div className="">
                <img
                  src="./practical-ico.webp"
                  className="md:w-24 rounded-2xl shadow-xl"
                />
              </div>
              <p className="text-xl md:text-2xl xl:text-4xl  xl:py-1 font-[Roboto] text-[#24353B] font-bold">
                {counter && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                %
              </p>

              <div className="md:text-lg ">Satisfied Parents</div>
            </li>
          </ul>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Second_com;
