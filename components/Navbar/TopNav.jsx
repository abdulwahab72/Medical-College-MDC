"use client";
import React from "react";

import { AiFillPlayCircle } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { MdLocationPin } from "react-icons/md";

const TopNav = () => {
  const router = useRouter();

  return (
    <div className=" 2xl:flex 2xl:justify-center  ">
      {/* for mobile button */}
      <nav className="flex py-4  items-center justify-between  md:hidden">
        <span className="flex items-center p-2 md:p-0 gap-1 md:mr-10">
          <img src="./Logo.jpeg" alt="logo" className="w-[40px] h-[40px]" />
          <p className="text-xs md:hidden">
            Medicaid College <br /> Chakdara
          </p>
        </span>
        <button className="p-2 border-blue-400 rounded-md border-2 md:hidden flex items-center gap-1 text-gray-600 font-bold text-sm">
          Apply Now
          <AiFillPlayCircle className="text-blue-400" />
        </button>
      </nav>

      {/* For Destop  */}

      <div className="hidden md:flex p-4 items-center xl:ml-6 2xl:ml-0 md:justify-between lg:justify-normal md:mr-6 lg:mr-0   ">
        {/* Logo Start  */}
        <div className="flex items-center p-2 md:p-0 gap-1 mr-[2px] xl:pr-[40px] xl:ml-4 ">
          <img src="./Logo.jpeg" className=" w-[60px] h-[60px]" />
          <h2 className="hidden md:block xl:text-[13px]  md:text-[10px] font-bold  xl:mr-[40px] ">
            MEDICAID COLLEGE OF NURSING
            <span className="md:block  "> ALLIED HEALTH SCIENCE CHAKDARA </span>
          </h2>
        </div>
        {/* Logo END  */}

        <ul className="flex mt-[14px] xl:mt-0  items-center ">
          <li className="hidden lg:block ">
            <div className=" border-r px-5">
              <h2 className="text-gray-600 text-xs lg:text-[13px]  flex items-center xl:gap-1 ">
                <AiOutlineMail className="inline xl:text-[22px]" />
                <p> EMAIL</p>
              </h2>
              <p className="lg:text-[12px] xl:text-[14px] font-bold lg:mt-1 text-[10px]  ">
                arifshah715@gmail.com
              </p>
            </div>
          </li>
          {/*2 end*/}
          <li className="hidden lg:block   ">
            <div className="border-r px-5 ">
              <h2 className="text-gray-600 text-xs lg:text-[13px]  flex items-center xl:gap-2 ">
                <BiSolidPhoneCall className="inline xl:text-[22px]" />
                <p> PHONE</p>
              </h2>
              <p className="lg:text-[12px] xl:text-[14px] font-bold lg:mt-1  md:text-[10px]  ">
                +92345-9260037
              </p>
            </div>
          </li>

          <li className="hidden lg:block   ">
            <div className="border-r pr-5 pl-5">
              <h2 className="text-gray-600 text-xs lg:text-[13px] flex items-center xl:gap-2 ">
                <MdLocationPin className="inline xl:text-[22px]" />
                <p> ADDRESS</p>
              </h2>
              <p className="lg:text-[1qpx] xl:text-[14px] font-bold lg:mt-1  md:text-[10px]  ">
                Chakdara Lower Dir Kpk Pakistan
              </p>
            </div>
          </li>
        </ul>

        <div className="flex items-center mt-2 xl:mt-0 xl:pl-10 ">
          <button
            className="p-2 md:px-8  border-blue-400 rounded-md border-2 flex items-center gap-1 
  text-gray-600 font-bold md:text-xs text-sm lg:p-3 lg:px-[50px] xl:px-[54px] xl:mr-10  
    "
            onClick={() => router.push("/onlineform")}
          >
            Apply Now
            <AiFillPlayCircle className="text-blue-400 lg:text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
