"use client";
import Cards_Background from "@/components/Cards_Background";
import Fifth_hs from "@/components/Home-Components/Fifth_hs";
import ProgramCardSlider from "@/components/Home-Components/ProgramCardSlider";
import TeacherSlider from "@/components/Home-Components/TeacherSlider";
import OnlineCourses from "@/components/OnlineCourses";
import Slideheader from "@/components/Slideheader";

import React from "react";

const page = () => {
  return (
    <div>
      <Slideheader />
      <OnlineCourses />
      <ProgramCardSlider />
      <TeacherSlider />
      <Fifth_hs />
    </div>
  );
};

export default page;
