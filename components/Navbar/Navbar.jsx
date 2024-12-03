"use client";
import React from "react";
import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import NavbarDropDown from "./NavbarDropDown";

const Navbar = () => {
  return (
    <nav className="bg-[#17A43B] hidden md:flex md:justify-center md:items-center text-white font-bold align-baseline md:text-sm max-w-[4000px] 2xl:justify-center xl:pl-16 2xl:pl-0">
      <ul className=" flex justify-center items-center">
        <div className=" flex items-center">
          <Link href="/">
            {" "}
            <li className=" md:pr-4 lg:pr-6 xl:pr-14">HOME</li>
          </Link>
          <div className=" w-[0.5px] h-16 bg-white"></div>
        </div>

        <div className=" flex items-center">
          <Link href="/about">
            {" "}
            <li className=" md:px-4 lg:px-6 xl:px-14">ABOUT</li>
          </Link>
          <div className=" w-[0.5px] h-16 bg-white"></div>
        </div>

        <div className=" flex items-center z-50">
          <NavbarDropDown />
          <div className=" w-[0.5px] h-16 bg-white"></div>
        </div>

        <div className=" flex items-center ">
          <Link href="/gallery">
            {" "}
            <li className="  md:px-4 lg:px-6 xl:px-14">GALLERY</li>
          </Link>
          <div className=" w-[0.5px] h-16 bg-white"></div>
        </div>

        <div className=" flex items-center">
          <Link href="/contact">
            {" "}
            <li className="md:px-4 lg:px-6 xl:px-14">CONTACT</li>
          </Link>
          <div className=" w-[0.5px] h-16 bg-white"></div>
        </div>
        <div className="grid col-span-2">
          <div className="bg-green-500 flex items-center lg:px-8 p-2 text-white text-sm">
            <input
              placeholder="SEARCH NOW"
              className="bg-green-500 md:p-3 lg:px-10 p-2 text-left  border-b font-normal text-white  w-full outline-none "
            />
            <BsSearch size={23} className="lg:mb-1 inline" />
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
