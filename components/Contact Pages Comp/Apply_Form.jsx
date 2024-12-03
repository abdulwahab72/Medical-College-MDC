"use client";
import React, { useState } from "react";
import axios from "axios";
const Apply_Form = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phoneNumber: "",
    businesEmail: "",
    jobTitle: "",
  });
  // for Handling State  data
  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // For submiting Data
  const handleSubmite = (event) => {
    event.preventDefault();
    console.log(data);
    axios
      .post("http://192.168.10.11:5000/api/contactForm", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  console.log(data);

  return (
    <form className="md:pb-16 pt-8" onSubmit={(e) => handleSubmite(e)}>
      <div className="lg:ml-3 xl:p-[3em] xl:pr-0 xl:pl-[4em] xl:pb-0">
        <div className="md:flex">
          <div className="m-3">
            <input
              type="text"
              required
              placeholder="FIRST NAME"
              className=" h-[46px] pl-5  text-[12px] outline-none border-l-[1px] placeholder-black
               border-b-[1px] md:w-[45vw] md:m-4 md:mr-0 xl:w-[600px]"
              name="firstName"
              onChange={handleInput}
            />
          </div>

          <div className="m-3">
            <input
              type="text"
              required
              placeholder="LAST NAME"
              className=" h-[46px] pl-5 text-[12px] outline-none border-l-[1px] placeholder-black border-b-[1px] md:w-[45vw] md:m-4 md:mr-0 md:ml-0 xl:w-[600px]"
              name="lastName"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="md:flex ">
          <div className="m-3 md:mt-0">
            <input
              type="text"
              placeholder="COMPANY"
              required
              name="company"
              onChange={handleInput}
              className=" h-[46px] pl-5 text-[12px] outline-none border-l-[1px] placeholder-black border-b-[1px] md:w-[45vw] md:m-4 md:mr-0  xl:w-[600px]"
            />
          </div>
          <div className="m-3 md:mt-0">
            <input
              type="text"
              placeholder="PHONE NUMBER"
              required
              name="phoneNumber"
              onChange={handleInput}
              className=" h-[46px] pl-5 text-[12px] outline-none border-l-[1px] placeholder-black border-b-[1px] md:w-[45vw] md:m-4 md:mr-0 md:ml-0 xl:w-[600px]"
            />
          </div>
        </div>
        <div className="md:flex">
          <div className="m-3 md:mt-0">
            <input
              type="text"
              required
              name="businesEmail"
              onChange={handleInput}
              placeholder="BUISNESS EMAIL"
              className=" h-[46px] pl-5 text-[12px] outline-none border-l-[1px] placeholder-black border-b-[1px] md:w-[45vw] md:m-4 md:mr-0  xl:w-[600px]"
            />
          </div>
          <div className="m-3 md:mt-0">
            <input
              type="text"
              required
              placeholder="JOB TITLE"
              name="jobTitle"
              onChange={handleInput}
              className=" h-[46px] pl-5 text-[12px] outline-none border-l-[1px] placeholder-black border-b-[1px] md:w-[45vw] md:m-4 md:mr-0 md:ml-0 xl:w-[600px]"
            />
          </div>
        </div>
        <button
          className="bg-red-800 py-3 px-6 font-bold 
      rounded-[0.25rem] m-3 ml-0 text-white text-[14px] hover:bg-green-600 md:ml-[2em] "
        >
          Submite
        </button>
      </div>
    </form>
  );
};

export default Apply_Form;
