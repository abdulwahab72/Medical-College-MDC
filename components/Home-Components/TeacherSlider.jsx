import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import TeacherCard from "./TeacherCard";

const TeacherSlider = () => {
  return (
    <div>
      {/* Teacher Components Start  */}
      <div className=" bg-white py-20">
        <div className="">
          <p className="font-['texgyreadventorbold'] text-[14px] text-center  text-[#7A7A7A]">
            THERE ARE MANNY WAYS TO LEARN
          </p>
          <p className="text-[26px] text-center font-bold text-[#2a4356] md:text-[30px] xl:text-[36px]">
            BROWSE BY TEACHER
          </p>
        </div>

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
              <TeacherCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeacherCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeacherCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeacherCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeacherCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeacherCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeacherCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Teacher Component End  */}
    </div>
  );
};

export default TeacherSlider;
