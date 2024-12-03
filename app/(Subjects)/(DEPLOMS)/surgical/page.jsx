import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { TfiWorld } from "react-icons/tfi";
import { FcDocument } from "react-icons/fc";
import { TiTickOutline } from "react-icons/ti";
import { GoStopwatch } from "react-icons/go";
import { BsJournalText } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";
import ModernSlider from "@/components/ModernSlider";
const page = () => {
  return (
    <div>
      <div>
        {/* SUBJECT TAG DETAIL */}
        <div className=" bg-[url('../public/bg.webp')] bg-cover bg-opacity-8 relative  h-[40vh] md:h-[40vh] md:flex lg:gap-60 lg:h-[40vh] xl:h-[40vh] xl:gap-[500px] ">
          <div className="pt-6 md:pl-3 lg:pt-9 lg:pl-10 xl:pl-[8em] text-[#24353B]">
            <h2 className=" font-bold text-[28px] pl-4 md:text-[42px] md:pt-5 lg:text-[42px] ">
              SURGICAL
            </h2>
            <p className=" w-[80vw] pl-4 text-sm  md:w-[50vw] md:text-[16px] lg:text-[16px] lg:w-[40vw] xl:w-[30vw] xl:mt-2">
              Here You Can Explore All The Details Of BS Emergency.
            </p>
          </div>
          <div className="">
            <Link href="/onlineform">
              <button className="py-5 mx-4 md:flex md:mt-10">
                <div className=" flex">
                  <div className="bg-red-500 flex py-3 px-4 items-center space-x-3 ">
                    <TfiWorld className="text-white text-[35px] " />
                    <p className=" text-white font-bold flex items-center text-start pr-10">
                      APPLY
                      <br /> ONLINE
                    </p>
                  </div>
                  <div className="bg-red-800 px-4 flex items-center  ">
                    <LiaGreaterThanSolid className=" text-white " />
                  </div>
                </div>
              </button>
            </Link>

            <div className="mt-5 ml-3">
              <button>
                <div className="flex ">
                  <FcDocument className="text-[40px]" />
                  <div className="mt-1 ml-0 p-0">
                    <p className=" m-0 p-0 text-[#24353B] text-[11px] text-start">
                      DOWNLOAD:
                    </p>
                    <p className="text-[13px] text-[#24353B] font-semibold text-start">
                      COURSE BROCHURE
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div>{/* <Image src={"/bg.jpg"} width={100} height={100}/> */}</div>
        </div>
        {/* 2ND SECTION AFTER SUBJECT TAG */}
        <section
          id="OnlineSkilledCourses"
          className=" py-10 px-1 lg:h-[500px] lg:mx-10 xl:mt-[2em]"
        >
          {/* Outer Container for ImagesDiv & DescriptionDiv */}
          <div className="OuterContainer flex flex-col ml-3 lg:items-start lg:block lg:flex-row lg:space-x-8 ">
            <div className="lg:flex">
              {/*ImagesDiv Starts */}
              <div className="order-1 HeroDiv py-4 space-y-3 lg:block lg:w-[40%] lg:order-none xl:ml-3">
                <div className="">
                  <img
                    className=" hidden w-[410px] h-[280px] md:w-[720px] md:h-[450px] lg:absolute lg:w-[400px] lg:h-[220px] xl:w-[440px] xl:h-[280px] lg:block rounded-md"
                    src="./WhoWeAre.jpeg"
                    alt=""
                  />
                </div>
                <div className="mr-3 lg:relative lg:pt-[10em] lg:w-[400px] xl:ml-[1.25em]">
                  {/* IMAGE FORM  */}
                  <form action="" className="bg-[#2C97EA] text-white p-5 ">
                    <h1 className="text-[24px] font-bold">ENQUIRE NOW</h1>
                    <input
                      type="text"
                      placeholder="NAME"
                      className="bg-[#60B1F0] text-white w-[100%] border-2 border-white p-2 mt-5 text-[12px] placeholder:text-white mb-3"
                    />
                    <div className="md:flex">
                      <input
                        type="text"
                        placeholder="EMAIL"
                        className="bg-[#60B1F0] text-white w-[100%] border-2 border-white p-2 text-[12px] placeholder:text-white mt-0 mb-3"
                      />
                      <input
                        type="text"
                        placeholder="PHONE"
                        className="bg-[#60B1F0] text-white w-[100%] border-2 border-white p-2 text-[12px] placeholder:text-white mt-0 mb-5 md:mb-3 md:ml-1"
                      />
                    </div>
                    <div className="md:flex">
                      <input
                        type="text"
                        placeholder="PLACE"
                        className="bg-[#60B1F0] text-white w-[100%] border-2 border-white p-2 text-[12px] placeholder:text-white mt-0 mb-3"
                      />
                      <input
                        type="text"
                        placeholder="COURSE"
                        className="bg-[#60B1F0] text-white w-[100%] border-2 border-white p-2 text-[12px] placeholder:text-white mt-0 md:mb-3 md:ml-1"
                      />
                    </div>
                  </form>
                  <div>
                    <button className="bg-red-600 w-[100%] p-3 text-white hover:bg-[#17A43B]">
                      EQUIRE NOW
                    </button>
                  </div>
                </div>
              </div>

              {/*DescriptionDiv Starts */}

              <div className="DescriptionDiv w-[95vw] pr-2 md:mx-4 flex flex-col justify-center lg:ml-[4em] lg:mr-0 lg:text-[14px] lg:w-[60%] lg:h-[500px] lg:items-start lg:justify-start xl:mt-5">
                <h1 className=" text-[24px] md:text-[30px] md:pt-4 md:pb-3 lg:text-[36px] text-[#353434] font-bold">
                  COURSE DESCRIPTION
                </h1>
                <p className=" text-gray-400 text-sm py-4 md:text-[14px] lg:text-[14px] leading-6 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                  <br />
                  <br />
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </span>
                </p>
                <div className="items-center w-[95vw] pr-[1em] md:mx-4 lg:w-[50vw] lg:items-start lg:m-0">
                  <div className="flex">
                    <h1 className="text-[18px]">CERTIFICATION</h1>
                    <hr className="w-[50vw] ml-5 mt-3 md:w-[70vw] lg:w-[50vw] lg:m-0 lg:mt-3" />
                  </div>
                  <p className=" w-[92vw] text-[14px] text-[#999999] pt-3 lg:w-[50vw]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </p>
                </div>

                <div className="pt-[1.5em] pb-[2em] w-[95vw] pr-2 md:mx-4 lg:w-[50vw] lg:ml-0">
                  <div className="md:flex">
                    <div className="flex border-b-2 border-dotted p-3 pl-0 w-[92vw] md:w-[50vw]">
                      <TiTickOutline className=" text-[25px] text-[#2C97EA]" />
                      <p className="text-[#7a7a7a] text-[13px] lg:text-[14px]">
                        Lorem Ipsum is simply dummy text of the
                      </p>
                    </div>
                    <div className="flex border-b-2 border-dotted p-3 pl-0 w-[92vw] md:w-[40vw]">
                      <TiTickOutline className=" text-[25px] text-[#2C97EA]" />
                      <p className="text-[#7a7a7a] text-[13px] lg:text-[14px]">
                        Lorem Ipsum is simply dummy
                      </p>
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="flex border-b-2 border-dotted p-3 pl-0 w-[92vw] md:border-none md:w-[50vw]">
                      <TiTickOutline className=" text-[25px] text-[#2C97EA]" />
                      <p className="text-[#7a7a7a] text-[13px] lg:text-[14px]">
                        Lorem Ipsum is simply dummy
                      </p>
                    </div>
                    <div className="flex border-b-2 border-dotted p-3 pl-0 w-[92vw] md:w-[40vw] md:border-none">
                      <TiTickOutline className=" text-[25px] text-[#2C97EA]" />
                      <p className="text-[#7a7a7a] text-[13px] lg:text-[14px]">
                        Lorem Ipsum is simply dummy text of the
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* DURATION DIV/TABLE */}

            <div className="order-1 border-[1px] mr-2 mt-[3em] md:flex md:justify-center lg:order-none lg:relative lg:mt-[15em] lg:mr-0 lg:ml-0 lg:justify-start xl:mt-[10em]">
              <div className="flex p-4 md:block md:mt-2 md:mb-2 md:pr-[3.5em] md:pb-0 lg:flex lg:p-4 xl:mr-[5em] xl:ml-[2em]">
                <div className="bg-[#edf1f4] rounded-[3em] p-2 h-[11vh] md:w-[7.3vw] md:h-[10.5vh] lg:p-0 lg:m-0 lg:pt-4 lg:pl-4 xl:w-[5vw] xl:pt-3">
                  <GoStopwatch className="text-[40px] text-[#79a2c2]" />
                </div>
                <div className="m-2 ml-3 md:m-0 md:mt-2 lg:m-0 lg:text-center lg:mt-3 lg:ml-2 ">
                  <h1 className="text-[14px] text-[#8F9BA1]">DURATION:</h1>
                  <p className="text-[18px] text-[#4F4A4A] md:font-bold">
                    2 YEAR
                  </p>
                </div>
              </div>
              <hr className="mr-2 ml-2 lg:hidden" />
              <div className="flex p-4 md:block md:border-r-2 md:border-l-2 md:mt-2 md:mb-2 md:pl-[2.5em] lg:flex lg:p-4 xl:mr-[1.5em] xl:ml-[2em] ">
                <div className="bg-[#edf1f4] rounded-[3em] p-2 h-[10vh] md:w-[6.8vw] md:ml-[4em] lg:m-0 lg:pt-4 lg:pl-4 xl:w-[4.7vw] xl:pt-3">
                  <BsJournalText className="text-[37px] text-[#79a2c2]" />
                </div>
                <div className="m-2 ml-3 lg:m-0 lg:ml-2 xl:pr-[1em] ">
                  <h1 className="text-[14px] text-[#8F9BA1] md:ml-[3.5em] lg:m-0 ">
                    ELIGIBILITY:
                  </h1>
                  <p className="text-[18px] text-[#4F4A4A] md:font-bold">
                    GRADUATION/DBA/
                    <br />
                    DIPLOMA/EQUILAVENT
                  </p>
                </div>
              </div>
              <hr className="mr-2 ml-2 lg:hidden" />
              <div className="flex p-4 pb-2 md:block md:mt-2 md:mb-2 lg:flex lg:pl-2 lg:pr-2 lg:pb-0">
                <div className="md:ml-[2.5em] lg:m-0 lg:border-r-2 lg:ml-4 lg:pr-4 lg:h-[12.5vh] xl:pr-[3em]">
                  <p className="text-[14px] text-[#8F9BA1]">COURSE FEE:</p>
                  <p className="text-[#17A43B] text-[36px]">$2500</p>
                </div>
                <div>
                  <button className="bg-red-600 p-3 rounded-[0.25rem] m-3 ml-[3em] text-white text-[14px]  hover:bg-green-600 md:ml-[1em] md:w-[20vw] md:mr-0 lg:w-[15vw] lg:ml-[3em] lg:p-4 lg:mr-0 xl:ml-[4em] xl:mr-0">
                    <div className="flex items-center md:justify-center">
                      <p>APPLY NOW</p>
                      <AiFillPlayCircle className="text-[#dbdbdc] ml-[2px]" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ModernSlider />
    </div>
  );
};

export default page;
