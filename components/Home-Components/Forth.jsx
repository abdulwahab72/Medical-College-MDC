import Image from "next/image";
import React from "react";

const Forth = () => {
  return (
    <div className="min-h-[700px] grid md:grid-cols-3 grid-cols-1 py-10">
      {/* 1 */}

      <div className="border-r">
        <div className="p-2">
          <div className="flex justify-center">
            <img
              src="./study-time-ico.webp"
              className="w-[56px] h-[56px] my-4 2xl:w-[100px] 2xl:h-[80px]"
            />
          </div>

          <h3 className="text-center text-gray-700 text-[18.72 px] uppercase font-bold mb-1 2xl:text-[23px]">
            Malleable Study Time
          </h3>
          <p className="text-xs xl:text-sm text-gray-400 text-center py-2 2xl:text-[18px]  2xl:text-left 2xl:mx-4">
            Study material available online 24/7. Study in your free time, no
            time management issues, perfect balance between work and study time.
          </p>
        </div>
      </div>
      {/* 2 */}

      <div className="border-r">
        <div className="p-2">
          <div className="flex justify-center">
            <img
              src="./placement-ico.webp"
              className="w-[56px] h-[56px] my-4 2xl:w-[100px] 2xl:h-[80px]"
            />
          </div>

          <h3 className="text-center text-gray-700 text-[18.72 px] 2xl:text-[23px] font-bold mb-1">
            PLACEMENT ASSISTANCE
          </h3>
          <p className="text-xs xl:text-sm text-gray-400 text-center py-2 2xl:text-[18px] 2xl:mx-4  2xl:text-left ">
            ITM University Online has access to all of ITM Group’s placement
            resources and alumni network, through which thousands of job
            opportunities are generated.
          </p>
        </div>
      </div>

      {/* THIRD */}

      <div className="border-r">
        <div className="p-2">
          <div className="flex justify-center">
            <img
              src="./easy-access-ico.webp"
              className="w-[56px] h-[56px] 2xl:w-[100px] 2xl:h-[80px] my-4"
            />
          </div>

          <h3 className="text-center text-gray-700 text-[18.72 px] 2xl:text-[23px] font-bold mb-1 uppercase">
            Easy To Access
          </h3>
          <p className="text-xs xl:text-sm text-gray-400 text-center py-2 2xl:text-[18px] 2xl:mx-4  2xl:text-left ">
            There is easy accessibility to online help in terms of online
            teachers and online forums. Teachers can be contacted with the help
            of video chats and e-mails.
          </p>
        </div>
      </div>
      {/* FORTH */}

      <div className="border-r border-t">
        <div className="p-2">
          <div className="flex justify-center">
            <img
              src="./study-go-ico.webp"
              className="w-[56px] h-[56px] my-4 2xl:w-[100px] 2xl:h-[80px] "
            />
          </div>

          <h3 className="text-center text-gray-700 text-[18.72 px] 2xl:text-[23px] font-bold mb-1 uppercase">
            Study on the Go
          </h3>
          <p className="text-xs xl:text-sm text-gray-400 text-center py-2 2xl:text-[18px] 2xl:mx-4 2xl:text-left ">
            LMS that is easily accessible on a number of devices such as mobile
            phones, I-pads, computers and other such devices. Availability of
            ready reckoners such that students can remember the key points of
            study concepts
          </p>
        </div>
      </div>

      {/* 5 */}

      <div className="border-r border-t">
        <div className="p-2">
          <div className="flex justify-center">
            <img
              src="./get-innovative-ico.webp"
              className="w-[56px] h-[56px] mt-3 mb-2 2xl:w-[100px] 2xl:h-[80px] "
            />
          </div>

          <h3 className="text-center text-gray-700 text-[17px] 2xl:text-[23px] font-bold uppercase">
            Get an Innovative ,<br />
            In-depth Transition
          </h3>

          <p className="text-xs xl:text-sm text-gray-400 text-center 2xl:text-[18px] 2xl:mx-4 2xl:text-left py-2">
            The transition to an environment of learning becomes easy with the
            availability of multiple sources of learning such as text books,
            power-point presentations, and story boards on various subjects.
          </p>
        </div>
      </div>
      {/* 6 */}
      <div className="border-r border-t">
        <div className="p-2">
          <div className="flex justify-center">
            <img
              src="./placement-ico.webp"
              className="w-[56px] h-[56px] mt-3 mb-2 2xl:w-[100px] 2xl:h-[80px] "
            />
          </div>

          <h3 className="text-center text-gray-700 text-[18.72 px] 2xl:text-[23px] font-bold mb-1 uppercase">
            Practical & Interactive <br />
            Participation
          </h3>
          <p className="text-xs xl:text-sm text-gray-400 text-center 2xl:text-[18px] 2xl:mx-4 2xl:text-left py-2">
            Assessments and interactivities are given at the end of every
            session such that the practical application of theory learnt can be
            gauged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forth;
