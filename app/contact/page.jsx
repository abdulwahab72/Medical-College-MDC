"use client";
import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { TfiWorld } from "react-icons/tfi";
import { Map_s } from "@/components/Contact Pages Comp/Map_s";
import Still_qustion from "@/components/Contact Pages Comp/Still_qustion";
import Apply_Form from "@/components/Contact Pages Comp/Apply_Form";

const page = () => {
  return (
    <div>
      {/* Wahab Work Start */}
      <div>
        <div className=" bg-[url('../public/bg.webp')] bg-cover bg-opacity-8 relative -z-10 h-[40vh] md:h-[40vh] md:flex lg:h-[40vh] lg:gap-60 xl:h-[40vh] xl:flex xl:gap-[500px]">
          <div className="pt-6 md:pl-3 lg:pt-9 lg:pl-10 xl:pl-[6em]">
            <h2 className=" font-bold text-[28px] text-[#24353B] pl-4 font-['texgyreadventorbold'] md:text-[42px] md:pt-5  lg:text-[42px] ">
              CONTACT US
            </h2>
            <p className=" pl-4 pr-2 text-[14px] text-[#24353B] md:w-[60vw] md:text-[16px] lg:text-[16px] lg:w-[42vw] xl:w-[32vw] xl:mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <button className="py-5 mx-4 md:flex md:mt-10">
            <div className=" flex">
              <div className="bg-red-500 flex py-3 px-4 items-center space-x-3 ">
                <TfiWorld className="text-white text-[35px] " />
                <p className=" text-white font-bold flex items-center text-start pr-10">
                  APPLY
                  <br /> ONLINE
                </p>
              </div>
              <div className="bg-red-800 px-4 flex items-center  ">
                <LiaGreaterThanSolid className=" text-white " />
              </div>
            </div>
          </button>
        </div>
      </div>
      <Apply_Form />
      {/* Wahab Work END  */}

      <Map_s />
      <h1
        className="font-[texgyreadventorbold] font-bold p-6 mb-4

lg:text-[36px] text-[20px] md:text-[30px]  text-center text-[#2D4256]"
      >
        STILL HAVE QUESTIONS?
      </h1>
      <Still_qustion />
    </div>
  );
};

export default page;
