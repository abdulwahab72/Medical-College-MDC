"use client";
import React, { useState } from "react";
import { BsBook } from "react-icons/bs";
import { LuClock9 } from "react-icons/lu";
import { BiBookBookmark } from "react-icons/bi";
import { MdPeopleOutline } from "react-icons/md";
import ModernSliderTable1 from "./ModernSliderTable1";
import ModernSliderTable2 from "./ModernSliderTable2";

import ModernSliderSemester from "./ModernSliderSemester";
import TeacherSlider from "./Home-Components/TeacherSlider";

const ModernSlider = () => {
  const [ActiveTab, setActiveTab] = useState("table1");
  return (
    <div className=" bg-[#ebeff3] mt-[3em] lg:mt-[30em] xl:pl-[3em] xl:pr-[3em]">
      {/* TABLES HEADER */}
      <div className=" p-2 lg:pt-[5em]">
        <div className="grid grid-cols-4 text-[#a4b1bc] pl-3 border-b-2 md:flex md:justify-center md:items-center xl:w-[100%] xl:flex xl:grid-cols-none ">
          <div
            className={`pb-3 hover:text-[#17A43B] border-b-2 hover:border-[#17A43B] xl:w-[25%] xl:mr-[em] xl:pl-[5em] ${
              ActiveTab === "table1"
                ? "text-[#17A43B] , border-[#17A43B]"
                : "text-[#a4b1bc] , border-[#a4b1bc]"
            }
            `}
            onClick={() => {
              setActiveTab("table1");
            }}
          >
            <BsBook className="text-[40px] md:text-[50px] md:ml-[1em] " />
            <h1 className="text-[11px] w-[10vw] md:text-[14px] md:w-[25vw] md:font-bold">
              OVERVIEW / DESCRIPTION
            </h1>
          </div>
          <div
            className={`pb-3 hover:text-[#17A43B] border-b-2 hover:border-[#17A43B] xl:w-[25%] xl:mr-[0em] xl:pl-[5em] ${
              ActiveTab === "feeTable"
                ? "text-[#17A43B] , border-[#17A43B]"
                : "text-[#a4b1bc] , border-[#a4b1bc]"
            } 
           
            `}
            onClick={() => {
              setActiveTab("feeTable");
            }}
          >
            <LuClock9 className="text-[40px] md:text-[50px] md:ml-[0.7em] " />
            <h1 className="text-[11px] w-[10vw] md:text-[14px] md:w-[25vw] md:font-bold md:ml-[1em]">
              FEE STRUCTURE
            </h1>
          </div>
          <div
            className={`pb-3 hover:text-[#17A43B] border-b-2 hover:border-[#17A43B] xl:w-[25%] xl:mr-[0em] xl:pl-[5em] ${
              ActiveTab === "semTable"
                ? "text-[#17A43B] , border-[#17A43B]"
                : "text-[#a4b1bc] , border-[#a4b1bc]"
            }`}
            onClick={() => {
              setActiveTab("semTable");
            }}
          >
            <BiBookBookmark className="text-[40px] md:text-[50px] md:ml-[1.5em]" />
            <h1 className="text-[11px] w-[15vw] md:text-[14px] md:w-[25vw] md:font-bold">
              STRUCTURE OF THE PROGRAM
            </h1>
          </div>
          <div
            className={`pb-3 mr-[0.7em] hover:text-[#17A43B] border-b-2 hover:border-[#17A43B] xl:w-[25%] xl:mr-[0em] xl:pl-[5em] ${
              ActiveTab === "teacherTable"
                ? "text-[#17A43B] , border-[#17A43B]"
                : "text-[#a4b1bc] , border-[#a4b1bc]"
            }`}
            onClick={() => {
              setActiveTab("teacherTable");
            }}
          >
            <MdPeopleOutline className="text-[40px] md:text-[50px] md:ml-[0.6em]" />
            <h1 className="text-[11px] md:text-[14px] md:font-bold">
              FACULTY PROFILES
            </h1>
          </div>
        </div>
        {/* THIS IS TABLE 1 */}
        <div className={`${ActiveTab === "table1" ? "block" : "hidden"}`}>
          <div className=" flex items-center justify-center">
            <img src="./overview.png" alt="" />
          </div>
        </div>
        {/* THIS IS TABLE 2 */}
        <div className={`${ActiveTab === "feeTable" ? "block" : "hidden"}`}>
          <div className=" flex items-center justify-center">
            <img src="./fee.png" alt="" />
          </div>
        </div>
        {/* 3RD COMPONENT */}
        <div className={`${ActiveTab === "semTable" ? "block" : "hidden"}`}>
          <div className=" flex flex-col items-center justify-center">
            <img src="./semester1.png" alt="" />
            <img src="./semester2.png" alt="" />
          </div>
        </div>
        {/* TEACHERS DETAIL */}
        <div className={`${ActiveTab === "teacherTable" ? "block" : "hidden"}`}>
          <TeacherSlider />
        </div>
      </div>
    </div>
  );
};

export default ModernSlider;
