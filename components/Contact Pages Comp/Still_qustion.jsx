import React from "react";

const Still_qustion = () => {
  return (
    <div className="pb-6 md:pb-0">
      <div className="min-h-[400px] grid md:grid-cols-3 grid-cols-1 gap-4">
        {/* 1 */}

        <div className="md:border-r border-b md:border-b-0 md:h-[300px]">
          <div className="p-2">
            <div className="flex justify-center">
              <img
                src="./study-time-ico.webp"
                className="w-[56px] h-[56px] my-4"
              />
            </div>

            <h3 className="text-center text-gray-700 text-[18.72 px] uppercase font-bold mb-1">
              HELP CENTER
            </h3>
            <p className="text-xs text-gray-400 text-center py-2">
              Study material available online 24/7. Study in your free time, no
              time management issues, perfect balance between work and study
              time.
              <span className="text-green-600">...more</span>
            </p>
          </div>
        </div>
        {/* 2 */}

        <div className="md:border-r border-b md:border-b-0  md:h-[300px]">
          <div className="p-2">
            <div className="flex justify-center">
              <img src="./faq-ico.webp" className="w-[56px] h-[56px] my-4" />
            </div>

            <h3 className="text-center text-gray-700 text-[18.72 px] font-bold mb-1">
              FAQ
            </h3>

            <p className="text-xs text-gray-400 text-center py-2">
              ITM University Online has access to all of ITM Group’s placement
              resources and alumni network, through which thousands of job
              opportunities are generated
              <span className="text-green-600">...more</span>
            </p>
          </div>
        </div>

        {/* THIRD */}

        <div className="border-r md:h-[300px]">
          <div className="p-2">
            <div className="flex justify-center">
              <img
                src="./easy-access-ico.webp"
                className="w-[56px] h-[56px] my-4"
              />
            </div>

            <h3 className="text-center text-gray-700 text-[18.72 px] font-bold mb-1 uppercase">
              Technical Documents
            </h3>
            <p className="text-xs text-gray-400 text-center py-2">
              There is easy accessibility to online help in terms of online
              teachers and online forums. Teachers can be contacted with the
              help of video chats and e-mails..
              <span className="text-green-600">...more</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Still_qustion;
