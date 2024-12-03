"use client";
import First from "@/components/About_us_Comp/First";
import Second_com from "@/components/About_us_Comp/Second_com";
import Forth from "@/components/Home-Components/Forth";
import React from "react";

import TeacherSlider from "@/components/Home-Components/TeacherSlider";

const About = () => {
  return (
    <div>
      {/* Wahab Start */}
      <div>
        {/* Banner Start  */}
        <div
          className=" bg-[url('../public/bg.webp')] bg-cover bg-opacity-8 relative pt-20 pb-28
        ]"
        >
          <div className="">
            <h2 className=" font-bold text-[30px] text-[#24353B] text-center font-['texgyreadventorbold'] md:text-[46px] md:text-center lg:text-[46px] ">
              ABOUT US
            </h2>
            <p className=" text-[14px] text-center text-[#24353B] md:text-[16px] md:text-center md:p-[10rem] md:pt-1 md:pb-0 lg:p-[18rem] lg:pt-1 lg:pb-0 lg:text-[16px] xl:p-[30rem] xl:pt-1 xl:pb-0 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <First />
        <Second_com />
        <Forth />
        {/* Banner End  */}
        {/* Teacher Slider Start  */}
        <TeacherSlider />
        {/* Teacher Slider End  */}
      </div>
      {/* Wahab End */}
    </div>
  );
};

export default About;
