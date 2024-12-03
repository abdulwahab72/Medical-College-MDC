"use client";
import React from "react";

import MapContant from "./MapContant";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
export const Map_s = () => {
  const center = {
    lat: 34.663403899917164,
    lng: 72.03815172157941,
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS}>
      <div>
        <div className="h-[600px]  flex justify-center md:justify-end relative">
          <div className="absolute right-0 z-10 h-[350px] bg-green-600 my-10 w-[420px] md:w-[300px] lg:w-[290px] xl:w-[25%] hidden md:block md:my-16 md:mr-8 xl:mr-20">
            <MapContant />
          </div>
          <Map center={center} zoom={16}>
            <Marker position={center} />
          </Map>
        </div>
        <div className=" h-[350px] bg-green-600 my-10 w-full  md:hidden ">
          <MapContant />
        </div>
      </div>
    </APIProvider>
  );
};
