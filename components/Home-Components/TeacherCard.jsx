import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillSkype,
} from "react-icons/ai";

const TeacherCard = () => {
  return (
    <div>
      <div className=" mt-[4em] md:border-r-2 ">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src={"/teacher1.webp"}
              className=" w-[120px] h-[120px] rounded-lg"
            />
          </div>
          <div className="mt-6">
            <p className="text-[14px] font-bold text-[#414a4f]">
              BRUNO ACSELRAD
            </p>
            <p className="text-[12px] text-[#7A7A7A]">Math Teacher</p>
          </div>
          <div className="flex justify-center mb-4 mt-5">
            <button>
              <AiFillTwitterCircle className=" text-[#00A0D1] hover:text-black text-[25px] xl:text-[30px] xl:mr-2" />
            </button>
            <button>
              <AiFillLinkedin className="text-[#0E76A8] hover:text-black text-[25px] xl:text-[30px] xl:mr-2 " />
            </button>
            <button>
              <AiFillSkype className="text-[#00AFF0] hover:text-black text-[25px] xl:text-[30px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
