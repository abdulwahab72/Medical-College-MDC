"use client";
import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

import {
  BiLogoFacebookSquare,
  BiLogoLinkedin,
  BiLogoYoutube,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

const MapContant = () => {
  return (
    <div className="">
      {/* Main 1 */}
      <div className="flex  mt-4 text-white font-[Roboto] font-normal p-4    ">
        <div className="mr-3 mt-1">
          <TfiLocationPin className="text-[#85DA9B] text-[30px] " />{" "}
        </div>
        <div className=" border-b pb-10 md:pb-6">
          <h2 className="text-xl font-bold">Medicaid College Chakdara</h2>
          <p className="text-sm text-[#85DA9B] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has...
          </p>
        </div>
      </div>
      {/* main 2  */}
      <div className="flex p-4  text-white font-[Roboto] ">
        <div className="mr-3 ">
          <BiSolidPhoneCall className=" text-[#85DA9B] text-[30px]" />
        </div>
        <h2 className="text-[22px] font-bold  border-b  pb-6 w-[90%]">
          +92345-9260037
        </h2>
      </div>
      {/* main 3  */}
      <div className="flex p-4  bg-green-600   text-white font-[Roboto] pb-8">
        <div className="mr-3 mt-1">
          <AiOutlineMail className=" text-[#85DA9B] text-[30px]" />
        </div>
        <h2 className="text-[20px] font-bold ">Arifshah715@gmail.com</h2>
      </div>
      {/* Second part  */}
      <ul className="bg-red-800 h-[70px] flex justify-center gap-2  items-center">
        <Link href="/">
          <li>
            <AiOutlineTwitter className="text-[53px] p-3 md:text-[40px] md:p-2 rounded-full  border-2 text-white" />
          </li>
        </Link>
        <Link href="/">
          <li>
            {" "}
            <BiLogoFacebookSquare className="text-[53px] p-3 md:p-2 md:text-[40px] rounded-full  text-white  border-2" />
          </li>
        </Link>
        <Link href="/">
          <li>
            <BiLogoLinkedin className="text-[53px] p-3 md:text-[40px] md:p-2 rounded-full  text-white border-2" />
          </li>
        </Link>
        <Link href="/">
          <li>
            <BiLogoYoutube className="text-[53px] p-3 md:text-[40px] md:p-2 rounded-full  text-white border-2" />
          </li>
        </Link>
        <Link href="/">
          <li>
            <BiLogoInstagramAlt className="text-[53px] p-3 md:text-[40px] md:p-2  text-white rounded-full border-2" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MapContant;
