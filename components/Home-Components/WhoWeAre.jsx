import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Container from "../Container";

const WhoWeAre = () => {
  return (
    <Container>
      <div className="pb-20 lg:mx-8 md:ml-5 2xl:ml-5 xl:mx-32">
        {/* ThirdCompuent */}
        <div className="">
          <div className=" ">
            <div className=" md:grid-cols-3 grid grid-cols-1 gap-4 xl:gap-0 xl:grid-cols-[500px_minmax(660px,_1fr)_400px]">
              <div className="md:w-64 md:h-64 lg:h-auto lg:w-auto 2xl:h-[500px] mx-4 pt-2 mt-2 xl:col-span-1">
                <img
                  src="./WhoWeAre.jpeg"
                  className="xl:h-80 2xl:w-full rounded-md"
                />
              </div>

              <div className="col-span-2 mx-10 xl:mx-0 xl:col-span-1 2xl:col-span-2 2xl:mx-24">
                <h2 className="text-[#353434] md:text-3xl text-xl p-2 font-bold xl:py-4 xl:text-4xl 2xl:text-4xl ">
                  WHO WE ARE{" "}
                </h2>

                <p className=" text-gray-500 text-sm md:p-2 2xl:leading-8 xl:text-sm xl:leading-6 2xl:text-lg text-justify">
                  Medicaid College of Nursing and Allied Health Sciences,
                  Chakdara, is a distinguished institution offering a
                  comprehensive spectrum of educational programs. Specializing
                  in BS Emergency, BS Nursing, Pharm-D, Pharm-B, FSc
                  Pre-Medical, Engineering, Computer Science, DIT, and a myriad
                  of medical diplomas encompassing Health, Pathology, Pharmacy,
                  Radiology, Dental, Anaesthesia, as well as specialized courses
                  for Lady Health Visitors (LHV) and Community Midwives (CMW).
                  Our institution is committed to providing high-quality
                  education, equipped with modern facilities and expert faculty,
                  ensuring holistic development and professional excellence for
                  aspiring individuals in the healthcare and allied fields.
                </p>
                <div className="flex items-center mt-10 2xl:mt-20 ">
                  {" "}
                  <h2 className="text-[#353434] font-bold 2xl:text-[28px] xl:w-64 2xl:w-96">
                    KNOW MORE{" "}
                  </h2>
                  <AiFillPlayCircle className="text-red-600 ml-1 xl:text-[50px] 2xl:text-[2rem]" />
                  <div className="border-b text-white pr-[152px] ml-4 md:pr-[260px] lg:pr-[400px] xl:w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhoWeAre;
