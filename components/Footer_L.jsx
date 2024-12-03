import Link from "next/link";
import React from "react";
import { TiMail } from "react-icons/ti";
import {
  BiLogoFacebookSquare,
  BiLogoLinkedin,
  BiLogoYoutube,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer_L = () => {
  return (
    <div className=" pb-4 bg-[#2E5F85] text-white pt-1 ">
      {/* Main */}
      <div className="md:grid md:grid-cols-3 md:place-items-center ">
        {/* 1 */}
        <div className="flex items-center">
          <div className="flex flex-col items-center p-2 py-5">
            <h3 className="font-[texgyreadventor] font-bold text-[18.75px] mr-10 md:mr-0   mt-4">
              CONNECT WITH US
            </h3>
            <ul className="flex items-center pt-4 lg:pt-3 md:gap-1 ">
              <Link href="/">
                <li>
                  <AiOutlineTwitter className="text-[53px] p-3 md:text-[40px] md:p-2 rounded-full  border-2" />
                </li>
              </Link>
              <Link href="/">
                <li>
                  {" "}
                  <BiLogoFacebookSquare className="text-[53px] p-3 md:p-2 md:text-[40px] rounded-full  border-2" />
                </li>
              </Link>
              <Link href="/">
                <li>
                  <BiLogoLinkedin className="text-[53px] p-3 md:text-[40px] md:p-2 rounded-full border-2" />
                </li>
              </Link>
              <Link href="/">
                <li>
                  <BiLogoYoutube className="text-[53px] p-3 md:text-[40px] md:p-2 rounded-full border-2" />
                </li>
              </Link>
              <Link href="/">
                <li>
                  <BiLogoInstagramAlt className="text-[53px] p-3 md:text-[40px] md:p-2 rounded-full border-2" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {/* 2 */}
        <div>
          <form className="ml-4 md:ml-0 md:border-r md:border-l xl:pl-16 xl:pr-16 lg:pl-4 md:pl-4  ">
            <h3 className="font-[texgyreadventor] font-bold text-[18.75px]  mt-4 uppercase ">
              Subscribe with Us
            </h3>
            <div className="flex items-center mr-8 pt-5 lg:pt-3">
              <input
                placeholder="ENTER YOUR EMAIL"
                className="p-2 md:px-4 xl:px-10 w-full text-black
 text-md  md:rounded-l-md placeholder-black/60 "
              />
              <button className="p-[6px] bg-[#2C97EA] md:rounded-e-md">
                <TiMail size={30} />
              </button>
            </div>
          </form>
        </div>

        {/* 3 */}

        <div className="pt-10  md:pt-0 md:ml-0  ">
          <h3 className=" font-[texgyreadventor] font-bold text-[18.75px] ml-4 mt-4">
            INSTAGRAM
          </h3>

          <ul className="flex pt-4 gap-1 mx-3 md:mx-0 md:mr-1 mr-8">
            <li>
              <img
                src="./3.jpeg"
                className="w-[56px] h-[56px] md:w-[29px] md:h-[29px]
                 lg:w-[43px] lg:h-[43px]"
              />
            </li>
            <li>
              <img
                src="./4.jpeg"
                className="w-[56px] h-[56px] md:w-[29px] md:h-[29px]
                   lg:w-[43px] lg:h-[43px]"
              />
            </li>
            <li>
              <img
                src="./5.jpeg"
                className="w-[56px] h-[56px] md:w-[29px] md:h-[29px]
                   lg:w-[43px] lg:h-[43px]"
              />
            </li>
            <li>
              <img
                src="./8.jpeg "
                className="w-[56px] h-[56px] md:w-[29px] md:h-[29px]
                   lg:w-[43px] lg:h-[43px]"
              />
            </li>
            <li>
              <img
                src="./9.jpeg "
                className="w-[56px] h-[56px] md:w-[29px] md:h-[29px]
                   lg:w-[43px] lg:h-[43px]"
              />
            </li>
            <li>
              <img
                src="./10.jpeg "
                className="w-[56px] h-[56px] md:w-[29px] md:h-[29px]
                   lg:w-[43px] lg:h-[43px]"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer_L;
