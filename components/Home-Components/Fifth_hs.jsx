"use client";
import React from "react";
import { IoIosPlayCircle } from "react-icons/io";

const Fifth_hs = () => {
  return (
    <section>
      {/* Fifth component  */}

      <div
        className={` bg-gray-100 bg-cover overflow-hidden pb-10 xl:min-h-[600px]`}
      >
        <div className="xl:mt-10">
          <div className="py-8 mx-5">
            <h2 className="text-center text-sm text-gray-500  2xl:text-[2rem] ">
              UNIQUE FEATURES OF OUR PROGRAMS{" "}
            </h2>
            <h2 className=" text-center text-[#2d4256] text-2xl font-bold xl:text-4xl  ">
              WHAT DO YOU WANT TO STUDY?
            </h2>
          </div>
        </div>
        <div className="CARDS md:flex justify-center gap-5 md:gap-0">
          <div
            className=" CARD-1 relative bg-[url('../public/3.jpeg')] bg-cover h-[400px] mx-4 shadow-2xl border-0 md:w-[370px] md:h-[200px] lg:h-[220px] xl:w-[360px] xl:h-[300px]
            flex flex-col justify-center mb-4"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-brightness-75 hover:opacity-100 hover:bg-black/90 transition ease-in duration-300 opacity-100">
              <div className=" flex justify-center py-32 md:py-16 lg:py-28 xl:py-40">
                <div>
                  <h1 className="text-white text-2xl px-4 md:text-lg xl:text-2xl">
                    <div className=" border-b-4 w-[100px] md:w-[60px] lg:w-[80px] border-green-600 mb-3  xl:border-b-[6px] xl:w-[100px] md:mb-1"></div>
                    Self-paced distance learning{" "}
                  </h1>

                  <p className="text-gray-200 px-4 md:px-3  text-[15px] mt-2 md:text-xs xl:text-sm">
                    Lorem Ipsum is simply dummy text of the printing...
                  </p>
                </div>
                <div className=" absolute bottom-5 right-5 md:bottom-2 xl:bottom-5 xl:right-8">
                  <IoIosPlayCircle className="cursor-pointer text-white text-[32px] xl:text-4xl hover:text-red-600 transition ease-in duration-300 xl:top-[170px] md:top-32 md:right-10 lg:top-28 " />
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className=" CARD-2 relative bg-[url('../public/4.jpeg')] bg-cover h-[400px] mx-4 shadow-2xl border-0 md:w-[370px] md:h-[200px] lg:h-[220px] xl:w-[360px] xl:h-[300px]
            flex flex-col justify-center mb-4"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-brightness-75 hover:opacity-100 hover:bg-black/90 transition ease-in duration-300 opacity-100">
              <div className=" flex justify-center py-32 md:py-16 lg:py-28 xl:py-40">
                <div>
                  <h1 className="text-white text-2xl px-4 md:text-lg xl:text-2xl">
                    <div className=" border-b-4 w-[100px] md:w-[60px] lg:w-[80px] border-red-600 mb-3  xl:border-b-[6px] xl:w-[100px] md:mb-1"></div>
                    Self-paced distance learning{" "}
                  </h1>

                  <p className="text-gray-200 px-4 md:px-3  text-[15px] mt-2 md:text-xs xl:text-sm">
                    Lorem Ipsum is simply dummy text of the printing...
                  </p>
                </div>
                <div className=" absolute bottom-5 right-5 md:bottom-2 xl:bottom-5 xl:right-8">
                  <IoIosPlayCircle className=" cursor-pointer text-red-600 text-[32px] xl:text-4xl hover:text-green-600 transition ease-in duration-300 xl:top-[170px] md:top-32 md:right-10 lg:top-28 " />
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className=" CARD-3 relative bg-[url('../public/5.jpeg')] bg-cover h-[400px] mx-4 shadow-2xl border-0 md:w-[370px] md:h-[200px] lg:h-[220px] xl:w-[360px] xl:h-[300px]
            flex flex-col justify-center mb-4"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-brightness-75 hover:opacity-100 hover:bg-black/90 transition ease-in duration-300 opacity-100">
              <div className=" flex justify-center py-32 md:py-16 lg:py-28 xl:py-40">
                <div>
                  <h1 className="text-white text-2xl px-4 md:text-lg xl:text-2xl">
                    <div className=" border-b-4 w-[100px] md:w-[60px] lg:w-[80px] border-green-600 mb-3  xl:border-b-[6px] xl:w-[100px] md:mb-1"></div>
                    Self-paced distance learning{" "}
                  </h1>

                  <p className="text-gray-200 px-4 md:px-3  text-[15px] mt-2 md:text-xs xl:text-sm">
                    Lorem Ipsum is simply dummy text of the printing...
                  </p>
                </div>
                <div className=" absolute bottom-5 right-5 md:bottom-2 xl:bottom-5 xl:right-8">
                  <IoIosPlayCircle className="cursor-pointer text-white text-[32px] xl:text-4xl hover:text-red-600 transition ease-in duration-300 xl:top-[170px] md:top-32 md:right-10 lg:top-28 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fifth_hs;
