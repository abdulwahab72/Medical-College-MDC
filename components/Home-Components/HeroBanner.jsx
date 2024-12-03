"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { AiFillPlayCircle } from "react-icons/ai";

import { useState, useEffect } from "react";
import Link from "next/link";

const HeroBanner = () => {
  const [value, setValue] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue(!value);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [value]);

  return (
    <div className=" relative text-white">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={7000}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        {/* First Hover */}
        <div
          className="relative bg-[url('../public/banner1.jpeg')] bg-cover bg-center
                 overflow-hidden 
                h-[400px] md:h-[600px] 2xl:h-[700px]  "
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          {/* For Md and Lg */}
          <div>
            <AnimatePresence>
              {value && (
                <motion.div
                  initial={{ x: 0, opacity: 0, zIndex: 50 }}
                  animate={{ x: 90, opacity: 1, zIndex: 50 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  exit={{ x: 0, opacity: 0, zIndex: 50 }}
                  className="h-96 md:flex justify-center mt-10 flex-col overflow-hidden  text-white absolute ml-0 xl:hidden hidden"
                >
                  <div className=" w-[500px]  text-left">
                    {" "}
                    <h1 className="text-4xl lg:text-5xl font-extrabold px-4 py-1">
                      ONLINE MBA
                    </h1>
                    <p className=" p-4 lg:mb-1">
                      is simply dummy text of the printing and
                      <br /> typesetting industry. Lorem Ipsum has
                    </p>
                    <Link
                      href="/"
                      className=" cursor-pointer mx-4 flex items-center"
                    >
                      <button
                        className="border-2 hover:border-green-600 
       
        bg-green-600 hover:text-white transition

ease-in-out delay-150  p-2"
                      >
                        Know More <AiFillPlayCircle className="inline mb-1" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* FOR XL */}
          <div>
            <AnimatePresence>
              {value && (
                <motion.div
                  initial={{ x: 0, opacity: 0, zIndex: 50 }}
                  animate={{ x: 100, opacity: 1, zIndex: 50 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  exit={{ x: 0, opacity: 0, zIndex: 50 }}
                  className="h-96  justify-center mt-16 flex-col overflow-hidden  text-white absolute ml-0 hidden xl:flex "
                >
                  <div className=" w-[500px]  text-left">
                    {" "}
                    <h1 className="text-6xl font-extrabold px-4 py-1">
                      ONLINE MBA
                    </h1>
                    <p className=" p-6 text-xl">
                      is simply dummy text of the printing and
                      <br /> typesetting industry. Lorem Ipsum has
                    </p>
                    <Link
                      href="/"
                      className=" cursor-pointer mx-6 mt-1 flex items-center"
                    >
                      <button
                        className=" hover:border 
       
        bg-green-600 hover:text-white transition

ease-in-out delay-150   py-4 px-6"
                      >
                        Know More <AiFillPlayCircle className="inline mb-1" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* moble */}

          <div>
            <AnimatePresence>
              {value && (
                <motion.div
                  initial={{ x: 0, opacity: 0, zIndex: 50 }}
                  animate={{ x: 40, opacity: 1, zIndex: 50 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  exit={{ x: 0, opacity: 0, zIndex: 50 }}
                  className="h-96 md:hidden flex justify-center  flex-col overflow-hidden  text-white absolute ml-0 "
                >
                  <div className=" w-[500px]  text-left">
                    <h1 className="text-4xl font-extrabold px-4 py-1">
                      ONLINE MBA
                    </h1>
                    <p className=" p-4 mb-1 text-[15px]">
                      is simply dummy text of the printing and
                      <br />
                      typesetting industry. Lorem Ipsum has
                    </p>

                    <Link
                      href="/"
                      className=" cursor-pointer mx-4 flex items-center "
                    >
                      <button
                        className="border-2 hover:border-green-600 
       
        bg-green-600 hover:text-white transition 

ease-in-out delay-150  p-2"
                      >
                        Know More <AiFillPlayCircle className="inline mb-1" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* SECOND hover */}

        <div
          className="relative bg-[url('../public/banner2.jpeg')]
                 bg-cover bg-center h-[400px] md:h-[600px] overflow-hidden 2xl:h-[700px] "
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          {/* For Md */}
          <div className="hidden  md:block lg:hidden">
            <AnimatePresence>
              {value && (
                <motion.div
                  initial={{ x: "90%", opacity: 0, zIndex: 0 }}
                  animate={{ x: "80%", opacity: 1, zIndex: 50 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  exit={{ x: "90%", opacity: 0, zIndex: 0 }}
                  className="h-96 flex justify-center mt-8 flex-col  text-white absolute overflow-hidden"
                >
                  <div className=" w-[500px]  text-left">
                    <h2 className="px-5 text-xl font-bold">
                      EXPLORE THE WORLD OF
                    </h2>
                    <h1 className="text-4xl font-extrabold px-4 pb-1 uppercase">
                      Our Graduates
                    </h1>

                    <p className=" px-4 py-2  ">
                      is simply dummy text of the printing and
                      <br /> typesetting industry.
                    </p>

                    <Link
                      href="/"
                      className=" cursor-pointer mx-4 flex items-center p-2"
                    >
                      <button
                        className="border-2 hover:border-green-600 
       
        bg-green-600 hover:text-white transition

ease-in-out delay-150  p-2"
                      >
                        Know More <AiFillPlayCircle className="inline mb-1" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* For LG */}
          <div className="hidden  md:hidden lg:block xl:hidden">
            <AnimatePresence>
              {value && (
                <motion.div
                  initial={{ x: 700, opacity: 0, zIndex: 0 }}
                  animate={{ x: 580, opacity: 1, zIndex: 50 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  exit={{ x: 1000, opacity: 0, zIndex: 0 }}
                  className="h-96 flex justify-center mt-10 flex-col  text-white absolute overflow-hidden"
                >
                  <div className=" w-[500px]  text-left">
                    <h2 className="px-5 text-xl font-bold">
                      EXPLORE THE WORLD OF
                    </h2>
                    <h1 className="text-[46px] font-extrabold px-4 pb-1 lg:pb-0 uppercase">
                      Our Graduates
                    </h1>

                    <p className=" px-4 py-2  ">
                      Is simply dummy text of the printing and
                      <br /> typesetting industry.
                    </p>

                    <Link
                      href="/"
                      className=" cursor-pointer flex items-center p-2 mx-2"
                    >
                      <button
                        className="border-2 hover:border-green-600 
       
        bg-green-600 hover:text-white transition

ease-in-out delay-150  p-2"
                      >
                        Know More <AiFillPlayCircle className="inline mb-1" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* For XL */}
          <div className="hidden  md:hidden xl:block ">
            <AnimatePresence>
              {value && (
                <motion.div
                  initial={{ x: 1000, opacity: 0, zIndex: 0 }}
                  animate={{ x: 750, opacity: 1, zIndex: 0 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  exit={{ x: 1000, opacity: 0, zIndex: 0 }}
                  className="h-96 flex justify-center mt-14 flex-col  text-white absolute overflow-hidden"
                >
                  <div className=" w-[600px]  text-left">
                    <h2 className="px-5 text-xl font-bold">
                      EXPLORE THE WORLD OF
                    </h2>
                    <h1 className="text-6xl font-extrabold px-4 pb-1 lg:pb-0 uppercase">
                      Our Graduates
                    </h1>

                    <p className=" px-4 py-2  ">
                      Is simply dummy text of the printing and
                      <br /> typesetting industry.
                    </p>

                    <Link
                      href="/"
                      className=" cursor-pointer flex items-center p-2 mx-2"
                    >
                      <button
                        className=" hover:border-2  py-4 px-6
       
        bg-green-600 hover:text-white transition

ease-in-out delay-150  p-3"
                      >
                        Know More <AiFillPlayCircle className="inline mb-1" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile */}
          <div className="block md:hidden">
            <AnimatePresence>
              {value && (
                <motion.div
                  initial={{ x: "60%", opacity: 0, zIndex: 0 }}
                  animate={{ x: "15%", opacity: 1, zIndex: 50 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  exit={{ x: "60%", opacity: 0, zIndex: 0 }}
                  className="h-96 flex justify-center flex-col  text-white absolute overflow-hidden"
                >
                  <div className=" w-[500px]  text-left">
                    <h2 className=" text-xl font-bold ml-4">
                      EXPLORE THE WORLD OF
                    </h2>
                    <h1 className="text-3xl font-extrabold  pb-4 pt-1 uppercase">
                      Our Graduates
                    </h1>

                    <p className=" text-[12px] pb-2 ">
                      is simply dummy text of the printing and typesetting.....
                    </p>

                    <Link
                      href="/"
                      className=" cursor-pointer  flex items-center p-2"
                    >
                      <button
                        className="border-2 hover:border-green-600 
       
        bg-green-600 hover:text-white transition

ease-in-out delay-150  ml-[-8px] p-2"
                      >
                        Know More <AiFillPlayCircle className="inline mb-1" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* For 2xl */}
        </div>

        {/* 3rd hover */}

        <div
          className="relative bg-[url('../public/banner3.jpeg')] bg-cover bg-center h-[400px] md:h-[600px] 
                overflow-hidden 2xl:h-[700px] "
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          {/* For Md */}
          <div className="hidden md:block lg:hidden">
            <AnimatePresence>
              {value && (
                <motion.div
                  initial={{ x: "30%", y: 0, opacity: 0, zIndex: 0 }}
                  animate={{ x: "30%", y: 60, opacity: 1, zIndex: 50 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  exit={{ x: "30%", opacity: 0, zIndex: 0 }}
                  className="h-96 flex justify-center w-[500px]   flex-col  text-white absolute overflow-hidden"
                >
                  <div className="  text-center w-[500px] ">
                    {" "}
                    <h1 className="text-4xl font-extrabold px-4 py-1">
                      DESCIPLINES
                    </h1>
                    <p className=" px-4 p-2  text-xs  text-center mx-28 ">
                      is simply dummy text of the printing and typesetting
                      industry
                    </p>
                    <div className="flex gap-2 ml-[100px]">
                      <Link
                        href="/"
                        className=" cursor-pointer  mt-1 flex items-center"
                      >
                        <button
                          className=" hover:border 
       
        bg-green-600 hover:text-white transition

ease-in-out delay-150  py-3 px-4"
                        >
                          Know More <AiFillPlayCircle className="inline mb-1" />
                        </button>
                      </Link>
                      <Link
                        href="/"
                        className=" cursor-pointer  mt-1 flex items-center"
                      >
                        <button
                          className=" hover:border 
       
        bg-red-800 hover:text-white transition

ease-in-out delay-150  py-3 px-4"
                        >
                          TAKE A TOUR{" "}
                          <AiFillPlayCircle className="inline mb-1" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* fOR LG */}
          <div className="hidden  lg:block xl:hidden">
            <AnimatePresence>
              {value && (
                <motion.div
                  initial={{ x: 300, y: 0, opacity: 0, zIndex: 0 }}
                  animate={{ y: 100, opacity: 1, zIndex: 50 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  exit={{ opacity: 0, zIndex: 0 }}
                  className="h-96 flex justify-center w-[550px]   flex-col  text-white absolute overflow-hidden"
                >
                  <div className="  text-center w-[500px] ">
                    {" "}
                    <h1 className="text-6xl font-extrabold px-4 py-1">
                      DESCIPLINES
                    </h1>
                    <p className=" px-4 p-2  text-xl leading-6  text-center mx-10  ">
                      is simply dummy text of the printing and typesetting
                      industry
                    </p>
                    <div className="flex gap-6 ml-[70px]">
                      <Link
                        href="/"
                        className=" cursor-pointer  mt-1 flex items-center"
                      >
                        <button
                          className=" hover:border 
       
        bg-green-600 rounded-md hover:text-white transition

ease-in-out delay-150  py-4 px-6"
                        >
                          Know More <AiFillPlayCircle className="inline mb-1" />
                        </button>
                      </Link>
                      <Link
                        href="/"
                        className=" cursor-pointer  mt-1 flex items-center"
                      >
                        <button
                          className=" hover:border 
       
        bg-red-800 hover:text-white transition rounded-md

ease-in-out delay-150  py-4 px-6"
                        >
                          TAKE A TOUR{" "}
                          <AiFillPlayCircle className="inline mb-1" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* FOR Xl */}
          <div className="hidden  xl:block ">
            <AnimatePresence>
              {value && (
                <motion.div
                  initial={{ x: 550, y: 0, opacity: 0, zIndex: 0 }}
                  animate={{ y: 100, opacity: 1, zIndex: 50 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  exit={{ opacity: 0, zIndex: 0 }}
                  className="h-96 flex justify-center w-[550px]   flex-col  text-white absolute overflow-hidden"
                >
                  <div className="  text-center w-[500px] ">
                    {" "}
                    <h1 className="text-7xl font-extrabold px-4 py-1">
                      DESCIPLINES
                    </h1>
                    <p className=" px-4 p-2  text-xl leading-6  text-center mx-10  ">
                      is simply dummy text of the printing and typesetting
                      industry
                    </p>
                    <div className="flex gap-6 ml-[70px]">
                      <Link
                        href="/"
                        className=" cursor-pointer  mt-1 flex items-center"
                      >
                        <button
                          className=" hover:border 
       
        bg-green-600 rounded-md hover:text-white transition

ease-in-out delay-150  py-4 px-6"
                        >
                          Know More <AiFillPlayCircle className="inline mb-1" />
                        </button>
                      </Link>
                      <Link
                        href="/"
                        className=" cursor-pointer  mt-1 flex items-center"
                      >
                        <button
                          className=" hover:border 
       
        bg-red-800 hover:text-white transition rounded-md

ease-in-out delay-150  py-4 px-6"
                        >
                          TAKE A TOUR{" "}
                          <AiFillPlayCircle className="inline mb-1" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* For 2xl */}

          {/* For Mobile */}

          <div className="block md:hidden">
            <AnimatePresence>
              {value && (
                <motion.div
                  initial={{ x: -40, y: 0, opacity: 0, zIndex: 0 }}
                  animate={{ y: 50, opacity: 1, zIndex: 50 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  exit={{ opacity: 0, zIndex: 0 }}
                  className="h-96 flex justify-center w-[400px]   flex-col  text-white absolute overflow-hidden"
                >
                  <div>
                    {" "}
                    <h1 className="text-[40px] font-extrabold px-4 py-1">
                      DESCIPLINES
                    </h1>
                    <p className=" p-2  text-[10px]  text-center mx-28 ">
                      is simply dummy text of the printing and typesetting
                      industry
                    </p>
                    <div className="flex gap-2 ml-[100px]">
                      <Link
                        href="/"
                        className=" cursor-pointer  mt-1 flex items-center"
                      >
                        <button
                          className=" hover:border 
       
        bg-green-600 hover:text-white transition

ease-in-out delay-150  py-2 px-1"
                        >
                          Know More <AiFillPlayCircle className="inline mb-1" />
                        </button>
                      </Link>
                      <Link
                        href="/"
                        className=" cursor-pointer  mt-1 flex items-center"
                      >
                        <button
                          className=" hover:border 
       
        bg-red-800 hover:text-white transition

ease-in-out delay-150  py-2 px-1"
                        >
                          TAKE A TOUR{" "}
                          <AiFillPlayCircle className="inline mb-1" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
