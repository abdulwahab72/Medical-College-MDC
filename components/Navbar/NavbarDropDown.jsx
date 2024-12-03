"use client";
import Link from "next/link";
import React from "react";

const NavbarDropDown = () => {
  return (
    <div>
      <div class="group inline-block  ">
        <button class="outline-none focus:outline-none px-3 py-1 text-white rounded-sm flex items-center min-w-32 md:px-4 lg:px-6 xl:px-10">
          <span class="pr-1 font-bold flex-1">ACADEMICS</span>
          <span>
            <svg
              class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul class="focus:text-red-600 bg-red-800/75 rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out md:top-[157px] lg:w-[150px] xl:w-[180px]">
          <Link href="/online_course">
            <li class=" DropdownList border-b rounded-sm px-3 py-2 hover:bg-green-600 ">
              OUR COURSES
            </li>
          </Link>
          <li class=" DropdownList border-b rounded-sm relative px-3 py-2 hover:bg-green-600 ">
            <button class="w-full text-left flex items-center outline-none focus:outline-none">
              <span class="pr-1 flex-1">DEPLOMA</span>
              <span class="mr-auto">
                <svg
                  class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul class="focus:text-red-600 bg-red-800/75 rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-leftmin-w-32">
              <Link href="/cardiology">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  CARDIOLOGY
                </li>
              </Link>
              <Link href="/laboratory">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  LABORATORY
                </li>
              </Link>
              <Link href="lvh">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  LHV
                </li>
              </Link>
              <Link href="/physiotherapist">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  PHYSIOTHERAPIST
                </li>
              </Link>
              <Link href="/x-ray">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  X-RAY
                </li>
              </Link>
              <Link href="/surgical">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  SURGICAL
                </li>
              </Link>
              <Link href="/health">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  HEALTH
                </li>
              </Link>
              <Link href="/pharmacy">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  PHARMACY
                </li>
              </Link>
              <Link href="/dialysis">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  DIALYSIS
                </li>
              </Link>
              <Link href="/dental">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  DENTAL
                </li>
              </Link>
              <Link href="anesthetic">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  ANESTHETIC
                </li>
              </Link>
            </ul>
          </li>
          <li class=" DropdownList border-b rounded-sm relative px-3 py-2 hover:bg-green-600 ">
            <button class="w-full text-left flex items-center outline-none focus:outline-none">
              <span class="pr-1 flex-1">BS PROGRAM</span>
              <span class="mr-auto">
                <svg
                  class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul class="focus:text-red-600 bg-red-800/75 rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-leftmin-w-32">
              <Link href="/bsemergency">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  BS EMERGENCY
                </li>
              </Link>
              <Link href="/bsnursing">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  BS NURSING
                </li>
              </Link>
              <Link href="/pharmd">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  PHARM D
                </li>
              </Link>
            </ul>
          </li>
          <li class=" DropdownList border-b rounded-sm relative px-3 py-2 hover:bg-green-600 ">
            <button class="w-full text-left flex items-center outline-none focus:outline-none">
              <span class="pr-1 flex-1">INTERMIDIATE</span>
              <span class="mr-auto">
                <svg
                  class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul class="focus:text-red-600 bg-red-800/75 rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-leftmin-w-32 w-[189px]">
              <Link href="pre-engineering">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  FSC PRE ENGINEERING
                </li>
              </Link>
              <Link href="pre-medical">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  FSC PRE MEDICAL
                </li>
              </Link>
              <Link href="/computer-science">
                <li class=" DropdownList border-b px-3 py-2 hover:bg-green-600 ">
                  FSC COMPUTER SCIENCE
                </li>
              </Link>
            </ul>
          </li>
          <li class=" DropdownList border-b rounded-sm relative px-3 py-2 hover:bg-green-600 ">
            <button class="w-full text-left flex items-center outline-none focus:outline-none">
              <span class="pr-1 flex-1">DIT</span>
              <span class="mr-auto">
                <svg
                  class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul class="focus:text-red-600 bg-red-800/75 rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-leftmin-w-32">
              <li class=" DropdownList border-b px-3 py-1 hover:bg-green-600 ">
                DIT PART 1
              </li>
              <li class=" DropdownList border-b px-3 py-1 hover:bg-green-600 ">
                DIT PART 2
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDropDown;
