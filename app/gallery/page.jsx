import React from "react";
import GalleryImg from "./GalleryImg";

const Gallery = () => {
  return (
    <div>
      {/* Banner Start  */}
      <div className=" bg-[url('../public/bg.webp')] bg-cover bg-opacity-8 relative ] py-20">
        <div className="">
          <h2 className=" font-bold text-[30px] text-[#24353B] text-center font-['texgyreadventorbold'] md:text-[46px] md:text-center lg:text-[46px] ">
            GALLERY
          </h2>
          <p className=" text-[14px] text-center text-[#24353B] md:text-[16px] md:text-center md:p-[10rem] md:pt-1 md:pb-0 lg:p-[18rem] lg:pt-1 lg:pb-0 lg:text-[16px] xl:p-[30rem] xl:pt-1 xl:pb-0 ">
            Gallery of our beautiful memories & institute scenaries.
          </p>
        </div>
      </div>
      {/* Banner End  */}
      <GalleryImg />
    </div>
  );
};

export default Gallery;
