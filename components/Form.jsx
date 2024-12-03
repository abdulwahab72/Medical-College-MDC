"use client";
import React from "react";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineGlobal,
  AiOutlinePhone,
  AiOutlineCalendar,
  AiOutlineCalculator,
} from "react-icons/ai";
import { BsBriefcase, BsMortarboard } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import "react-datepicker/dist/react-datepicker.css";
const Form = () => {
  return (
    <div className="p-[3em] bg-[url('../public/h13.jpg')] md:p-[3em] lg:p-[4em]">
      <div className="bg-[white] xl:m-[4em]">
        {/* main heading  */}

        <div className=" bg-[#14A53B]  ">
          <h2 className=" font-bold text-[28px] text-center p-2 md:text-[34px] md:pt-5 lg:text-[42px] text-white">
            APPLY ONLINE
          </h2>
        </div>
        {/* Studend Info  */}

        <div className="md:flex md:justify-center">
          <div className="lg:p-3">
            <div>
              <h1 className="font-bold p-3 text-[20px] lg:text-[26px]">
                STUDENT INFORMATION
              </h1>
            </div>
            <div>
              <div className="m-3 flex items-center">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <AiOutlineUser className=" text-[white] " />
                </div>
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[75%] rounded-r-[0.5em] xl:w-[60%]"
                />
              </div>
              <div className="m-3 flex items-center">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <AiOutlineUser className=" text-[white] " />
                </div>
                <input
                  type="text"
                  placeholder="LAST NAME"
                  className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[75%] rounded-r-[0.5em] xl:w-[60%]"
                />
              </div>
            </div>
            <div
              className="m-3 md:mt-0 flex items-center
            "
            >
              <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                <AiOutlineMail className="text-[white]" />
              </div>
              <input
                type="text"
                placeholder="EMAIL"
                className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[75%] rounded-r-[0.5em] xl:w-[60%]"
              />
            </div>

            <div className="m-3 md:mt-0 flex items-center ">
              <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                <AiOutlineUser className=" text-[white] " />
              </div>
              <input
                type="number"
                placeholder="CNIC"
                className="w-[100%] h-[46px] pl-5 text-[12px] 
                outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[75%] rounded-r-[0.5em] xl:w-[60%]"
              />
            </div>
            <div>
              <div className="m-3 md:mt-0 flex items-center">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <AiOutlineHome className=" text-[white] " />
                </div>
                <input
                  type="text"
                  placeholder="ADDRESS"
                  className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[75%] rounded-r-[0.5em] xl:w-[60%]"
                />
              </div>
              <div className="m-3 md:mt-0 flex items-center">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <AiOutlineHome className=" text-[white] " />
                </div>
                <input
                  type="text"
                  placeholder="PERMANENT ADDRESS"
                  className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[75%] rounded-r-[0.5em] xl:w-[60%]"
                />
              </div>
              <div className="m-3 md:mt-0 flex items-center">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <AiOutlineHome className=" text-[white] " />
                </div>
                <select className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] text-[#757575] md:w-[75%] rounded-r-[0.5em] xl:w-[60%]">
                  <option value="">PROVINCE</option>
                  <option value="">KPK</option>
                  <option value="">ISLAMABAD CAPITAL TERRITORY</option>
                  <option value="">PUNJAB</option>
                  <option value="">SINDH</option>
                  <option value="">BALOCHISTAN</option>
                  <option value="">GILGIT BALTISTAN</option>
                </select>
              </div>
            </div>

            <div>
              <div className="m-3 md:mt-0 flex items-center">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <AiOutlineGlobal className=" text-[white] " />
                </div>
                <input
                  type="text"
                  placeholder="COUNTRY"
                  className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[75%] rounded-r-[0.5em] xl:w-[60%]"
                />
              </div>
              <div className="m-3 md:mt-0 flex items-center">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <AiOutlinePhone className=" text-[white] " />
                </div>
                <input
                  type="text"
                  placeholder="PHONE NUMBER"
                  className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[75%] rounded-r-[0.5em] xl:w-[60%]"
                />
              </div>
            </div>
            <div className="m-3 md:mt-0 flex items-center">
              <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                <AiOutlineCalendar className=" text-[white] " />
              </div>
              <input
                type="date"
                name="DATE OF BIRTH"
                className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] text-[#757575] md:w-[75%] rounded-r-[0.5em] xl:w-[60%]"
              />
            </div>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}
            {/* Bilal Work  */}
            <div className="my-10 space-y-5">
              <h3 className="text-2xl text-[#757575] ml-3">Add Image</h3>
              <div className="m-3 md:mt-0 flex items-end  border-b-[1px] placeholder:text-[#757575] truncate ">
                <input type="file" />
              </div>
            </div>
            {/* bilal work end */}

            {/* --------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////// */}
          {/* Gardian Info  */}
          <div className=" lg:p-3">
            <div className="p-3">
              <h2 className="font-bold text-[20px] lg:text-[26px]">
                GUARDIAN INFORMATION
              </h2>
            </div>
            <div className="m-3 flex items-center">
              <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                <AiOutlineUser className=" text-[white] " />
              </div>
              <input
                type="text"
                placeholder="GUARDIAN NAME"
                className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[80%] rounded-r-[0.5em] xl:w-[60%]"
              />
            </div>
            <div className="m-3 md:mt-0 flex items-center">
              <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                <AiOutlineUser className=" text-[white] " />
              </div>
              <input
                type="number"
                placeholder="GUARDIAN CNIC"
                className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[80%] rounded-r-[0.5em] xl:w-[60%]"
              />
            </div>
            <div className="m-3 md:mt-0 flex items-center">
              <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                <AiOutlinePhone className=" text-[white] " />
              </div>
              <input
                type="number"
                placeholder="GUARDIAN PHONE NO."
                className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[80%] rounded-r-[0.5em] xl:w-[60%]"
              />
            </div>
            <div className="m-3 md:mt-0 flex items-center">
              <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                <AiOutlineUser className=" text-[white] " />
              </div>
              <input
                type="text"
                placeholder="RELATION WITH GUARDIAN"
                className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[80%] rounded-r-[0.5em] xl:w-[60%]"
              />
            </div>
            <div className="m-3 md:mt-0 flex items-center">
              <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                <BsBriefcase className=" text-[white] " />
              </div>
              <input
                type="text"
                placeholder="GUARDIAN OCCUPATION"
                className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[80%] rounded-r-[0.5em] xl:w-[60%]"
              />
            </div>
          </div>
        </div>
        {/* Gardien Info */}
        <div className="lg:p-4 md:flex md:flex-col md:items-center md:justify-center ">
          <div>
            <h2 className="font-bold text-[20px] p-3 lg:text-[24px]">
              ACADEMIC INFORMATION
            </h2>
          </div>
          <div className="">
            <div>
              <h2 className="font-semibold text-[14px] p-3 lg:text-[18px]">
                MATRIC DETAIL
              </h2>
            </div>
            <div className="md:flex ">
              <div className="m-3 md:mt-0 flex items-center">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <AiOutlineCalculator className=" text-[white] " />
                </div>
                <input
                  type="number"
                  placeholder="TOTAL NUMBER"
                  className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[100%] rounded-r-[0.5em] xl:w-[100%]"
                />
              </div>
              <div className="m-3 md:mt-0 flex items-center md:ml-[4em] xl:ml-[13em]">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <AiOutlineCalculator className=" text-[white] " />
                </div>
                <input
                  type="number"
                  placeholder="OBTAINED NUMBER"
                  className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[100%] rounded-r-[0.5em] xl:w-[100%]"
                />
              </div>
            </div>
            <div className="md:flex ">
              <div className="m-3 md:mt-0 flex items-center">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <AiOutlineCalculator className=" text-[white] " />
                </div>
                <input
                  type="number"
                  placeholder="PERCENTAGE"
                  className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[100%] rounded-r-[0.5em] xl:w-[100%]"
                />
              </div>
              <div className="m-3 md:mt-0 flex items-center md:ml-[4em] xl:ml-[13em]">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <BsMortarboard className=" text-[white] " />
                </div>
                <select className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] text-[#757575] md:w-[65%] rounded-r-[0.5em] xl:w-[68%]">
                  <option value="">SELECT BOARD</option>
                  <option value="">KPK</option>
                  <option value="">ISLAMABAD CAPITAL TERRITORY</option>
                  <option value="">PUNJAB</option>
                  <option value="">SINDH</option>
                  <option value="">BALOCHISTAN</option>
                  <option value="">GILGIT BALTISTAN</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2 className="font-semibold text-[14px] p-3 lg:text-[18px]">
                INTERMEDIATE DETAIL
              </h2>
            </div>
            <div className="md:flex">
              <div className="m-3 md:mt-0 flex items-center">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <AiOutlineCalculator className=" text-[white] " />
                </div>
                <input
                  type="number"
                  placeholder="TOTAL NUMBER"
                  className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[100%] rounded-r-[0.5em] xl:w-[100%]"
                />
              </div>
              <div className="m-3 md:mt-0 flex items-center md:ml-[4em] xl:ml-[13em]">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <AiOutlineCalculator className=" text-[white] " />
                </div>
                <input
                  type="number"
                  placeholder="OBTAINED NUMBER"
                  className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[100%] rounded-r-[0.5em] xl:w-[100%]"
                />
              </div>
            </div>
            <div className="md:flex ">
              <div className="m-3 md:mt-0 flex items-center">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <AiOutlineCalculator className=" text-[white] " />
                </div>
                <input
                  type="number"
                  placeholder="PERCENTAGE"
                  className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] placeholder:text-[#757575] md:w-[100%] rounded-r-[0.5em] xl:w-[100%]"
                />
              </div>
              <div className="m-3 md:mt-0 flex items-center md:ml-[4em] xl:ml-[13em]">
                <div className="bg-[#757575] p-4 rounded-l-[0.5em]">
                  <BsMortarboard className=" text-[white] " />
                </div>
                <select className="w-[100%] h-[46px] pl-5 text-[12px] outline-none border-l-[1px] border-b-[1px] text-[#757575] md:w-[65%] rounded-r-[0.5em] xl:w-[68%]">
                  <option value="">SELECT BOARD</option>
                  <option value="">KPK</option>
                  <option value="">ISLAMABAD CAPITAL TERRITORY</option>
                  <option value="">PUNJAB</option>
                  <option value="">SINDH</option>
                  <option value="">BALOCHISTAN</option>
                  <option value="">GILGIT BALTISTAN</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:flex md:justify-center">
          <button className="bg-red-800 p-3 rounded-[0.25rem] m-3 text-white text-[14px] hover:bg-[#2C97EA] lg:ml-[2.7em] ">
            <div>APPLY NOW</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
