import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
const ModernSliderTable2 = () => {
  return (
    <div className="overflow-x-scroll bg-white mt-3 xl:ml-[3em] xl:mr-[3em]">
      <table className="w-[170%] md:w-[100%]">
        <thead className="bg-[#e9f4fd] ">
          <tr>
            <th className="border-2 text-start p-3 pl-[2em] text-[14px] text-[#4e5d52]  w-[43%] md:w-[55%]">
              FEES
            </th>
            <th className="border-2 text-start p-3 pl-[2em] text-[14px] text-[#4e5d52] ">
              AMOUNT
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-[11px] border-2 text-start p-3 lg:p-[3em] lg:pl-3">
              <div className="flex">
                <FaGreaterThan className="mt-1 text-[10px] text-[#ff9600]" />
                <div className="pl-3 md:text-[14px]">
                  <p className="text-[#707c82]">ONE TIME PAYMENT</p>
                </div>
              </div>
            </th>
            <th className="text-[12px] border-2 text-start p-3 w-[30vw]">
              <div className="flex">
                <FaGreaterThan className="mt-1 text-[10px] text-[#ff9600] md:mt-3" />
                <div className="pl-3 ">
                  <p className="text-[#707c82] text-[18px] md:text-[20px]">
                    $2500
                  </p>
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th className="text-[11px] border-2 text-start p-3 xl:pb-[7em] xl:pl-3 xl:pt-3">
              <div className="flex">
                <FaGreaterThan className="mt-1 text-[10px] text-[#ff9600]" />
                <div className="pl-3 md:text-[14px]">
                  <p className="text-[#707c82] ">SHORT TERM INSTALLMENT PLAN</p>
                </div>
              </div>
            </th>
            <th className="text-[12px] border-2 text-start p-3">
              <div className="flex">
                <FaGreaterThan className="mt-1 text-[10px] text-[#ff9600] md:mt-3" />
                <div className="pl-3">
                  <p className="text-[#707c82] text-[18px] md:text-[20px]">
                    $2700
                  </p>
                </div>
              </div>
              <div className="flex border-b-2 border-dotted p-2 pl-0  ">
                <AiFillPlayCircle className=" text-[18px] text-[#2C97EA] md:mt-[0.1em]" />
                <p className="text-[#707c82] text-[12px] md:text-[14px] font-sans ">
                  Lorem Ipsum is simply dummy text of the
                </p>
              </div>
              <div className="flex p-2 pl-0">
                <AiFillPlayCircle className=" text-[18px] text-[#2C97EA] md:mt-[0.1em]" />
                <p className="text-[#707c82] text-[12px] md:text-[14px] font-sans">
                  Lorem Ipsum is simply dummy
                </p>
              </div>
            </th>
          </tr>
          <tr>
            <th className="text-[11px] border-2 text-start p-3 xl:pb-[7em] xl:pl-3 xl:pt-3">
              <div className="flex">
                <FaGreaterThan className="mt-1 text-[10px] text-[#ff9600]" />
                <div className="pl-3 md:text-[14px]">
                  <p className="text-[#707c82]">SHORT TERM INSTALLMENT PLAN</p>
                </div>
              </div>
            </th>
            <th className="text-[12px] border-2 text-start p-3">
              <div className="flex">
                <FaGreaterThan className="mt-1 text-[10px] text-[#ff9600] md:mt-3" />
                <div className="pl-3">
                  <p className="text-[#707c82] text-[18px] md:text-[20px]">
                    $3000
                  </p>
                </div>
              </div>
              <div className="flex border-b-2 border-dotted p-2 pl-0">
                <AiFillPlayCircle className=" text-[18px] text-[#2C97EA] md:mt-[0.1em]" />
                <p className="text-[#707c82] text-[12px] md:text-[14px] font-sans">
                  Lorem Ipsum is simply dummy text of the
                </p>
              </div>
              <div className="flex p-2 pl-0">
                <AiFillPlayCircle className=" text-[18px] text-[#2C97EA] md:mt-[0.1em]" />
                <p className="text-[#707c82] text-[12px] md:text-[14px] font-sans">
                  Lorem Ipsum is simply dummy
                </p>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ModernSliderTable2;
