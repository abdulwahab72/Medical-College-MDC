"use client";
import Link from "next/link";
import React from "react";
import { BsPlayFill } from "react-icons/bs";

const HomeCard = ({ cardImage }) => {
  function navigatePage() {
    location.href = "/about";
  }
  return (
    <div className={`px-10 z-50 cursor-pointer `}>
      <div className=" w-[189px] h-[274px]">
        <div className=" relative shadow-lg rounded-lg  w-[189px] h-[209px]">
          <img
            src={cardImage}
            alt="Course Image"
            className=" absolute bg-cover bg-center h-full"
          />
        </div>

        <div
          className=" flex item-center text-center"
          onClick={() => navigatePage()}
        >
          <span className="bg-[#16A43B] leading-4 text-white font-bold w-[28rem] py-5">
            <h1>FULL DETAILS</h1>
          </span>
          <span className=" bg-[#169333] w-full flex justify-center py-[17px] h-full ">
            <BsPlayFill className=" text-3xl text-[#169333] px-1 py-1 bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
