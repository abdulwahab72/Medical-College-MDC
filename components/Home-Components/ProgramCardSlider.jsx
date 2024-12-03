"use client";
import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
const ProgramCardSlider = () => {
  return (
    <div
      className={` relative bg-[url('../public/h11.jpg')]
     bg-cover overflow-hidden h-[470px] py-10`}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-brightness-75">
        <div className="py-8 mx-5">
          <h2 className="text-center text-sm text-gray-400  2xl:text-[2rem] ">
            UNIQUE FEATURES OF OUR PROGRAMS{" "}
          </h2>
          <h2 className=" text-center text-white text-2xl font-bold xl:text-4xl  ">
            WHAT DO YOU WANT TO STUDY?
          </h2>
        </div>

        {/* Carousal Start  */}

        <div className="">
          <Swiper
            loopPreventsSliding={true}
            loop={true}
            centeredSlides={true}
            breakpoints={{
              375: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              425: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 6,
                spaceBetween: 70,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="">
                <HomeCard name={"CARDIOLOGY "} cardImage="/16.jpeg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" ">
                <HomeCard name={"ANESTHESIA"} cardImage="/17.jpeg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" ">
                <HomeCard name={"DENTAL "} cardImage="/18.jpeg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="">
                <HomeCard name={"LHV & CMW "} cardImage="/22.jpeg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" ">
                <HomeCard name={"CATEGORY-B "} cardImage="/19.jpeg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" ">
                <HomeCard name={"DIALYSIS "} cardImage="/20.jpeg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" ">
                <HomeCard name={"LABORATORY "} cardImage="/21.jpeg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" ">
                <HomeCard name={"PHARMACY "} cardImage="/23.jpeg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" ">
                <HomeCard name={"PHYSIOTHERAPIST "} cardImage="/24.jpeg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" ">
                <HomeCard name={"X-RAY "} cardImage="/25.jpeg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" ">
                <HomeCard name={"SURGICAL "} cardImage="/26.jpeg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" ">
                <HomeCard name={"HEALTH "} cardImage="/27.jpeg" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Carosal End */}
    </div>
  );
};

export default ProgramCardSlider;
