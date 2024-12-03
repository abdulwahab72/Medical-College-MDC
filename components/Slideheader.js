"use client";
import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { TfiWorld } from "react-icons/tfi";
import { FcDocument } from "react-icons/fc";
const Slideheader = () => {
  return (
    <div className=" bg-[url('../public/bg.webp')] bg-cover bg-opacity-8 relative -z-10 h-[55vh] md:h-[50vh] md:flex lg:h-[40vh] xl:h-[40vh]">
      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
      <div className="pt-6 md:pl-3 lg:pt-9 lg:pl-10 xl:pl-[8em]">
        <h2 className=" font-bold text-[28px] text-white pl-4 font-['texgyreadventorbold'] md:text-[42px] md:pt-5  lg:text-[42px] ">
          OUR COURSES
        </h2>
        <p className=" w-[80vw] pl-4 text-sm text-white md:w-[50vw] md:text-[16px] lg:text-[16px] lg:w-[40vw] xl:w-[30vw] xl:mt-2">
          Here You Can Explore All The Courses We Offer.
        </p>
      </div>
      <div className="md:ml-[6em] md:mt-[3em] lg:ml-[14em] xl:ml-[30em] ml-3">
        <button className="mt-5">
          <div className="flex">
            <div className="bg-red-600 cursor-pointer py-5 px-4">
              <div className="flex space-x-2 items-center justify-center">
                <TfiWorld className="text-white text-[35px]" />
                <p className=" text-white font-bold pr-2">APPLY ONLINE</p>
              </div>
            </div>
            <div className="bg-red-800 px-4 pr-8 flex items-center">
              <LiaGreaterThanSolid className="absolute text-white " />
            </div>
          </div>
        </button>

        <div className="mt-5">
          <button>
            <div className="flex ">
              <FcDocument className="text-[40px]" />
              <p className="mt-3 text-white font-bold text-sm font-['texgyreadventorbold']">
                DOWNLOAD PROSPECTUS
              </p>
            </div>
          </button>
        </div>
      </div>
      <div>{/* <Image src={"/bg.jpg"} width={100} height={100}/> */}</div>
    </div>
  );
};

export default Slideheader;
