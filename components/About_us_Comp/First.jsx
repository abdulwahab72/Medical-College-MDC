import React from "react";

const First = () => {
  return (
    <div className="  py-10 xl:py-20 ">
      {/* ThirdCompuent */}
      <div>
        <div className="md:flex justify-between xl:mx-12   ">
          <div className=" lg:w-[700px] md:w-[600px] p-6">
            <h2 className=" text-4xl mb-4  font-bold text-[#2A4356]">
              WHO WE ARE{" "}
            </h2>

            <p className=" text-gray-500 lg:text-xl text-justify">
              Medicaid College of Nursing and Allied Health Sciences, Chakdara,
              is a distinguished institution offering a comprehensive spectrum
              of educational programs. Specializing in BS Emergency, BS Nursing,
              Pharm-D, Pharm-B, FSc Pre-Medical, Engineering, Computer Science,
              DIT, and a myriad of medical diplomas encompassing Health,
              Pathology, Pharmacy, Radiology, Dental, Anaesthesia, as well as
              specialized courses for Lady Health Visitors (LHV) and Community
              Midwives (CMW). Our institution is committed to providing
              high-quality education, equipped with modern facilities and expert
              faculty, ensuring holistic development and professional excellence
              for aspiring individuals in the healthcare and allied fields.
            </p>
          </div>

          <div className="  pt-2  mt-2 md:mr-4 xl:mr-0">
            <img
              src="./banner2.jpeg"
              className="w-[457px] xl:h-[298px] xl:w-[500px] rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
