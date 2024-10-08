"use client"

import React, { useState } from "react";
import Filter from "../Store/filter"
import Product from "../Store/product";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import Link from "next/link";


const Store = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);


  return (
    <div className=" bg-neutral-10 text-gray-200 font-body-sub-heading-16-bold mt-5">

      <div className="leading-[140%] text-gray-200 mx-[19px] md:mx-[49px] 2xl:mx-[22rem] xl:mx-[102px] pb-6 border-2  2xl:mt-6 mt-2 border-indigo-500">
        <span>Search Result for</span>
        <span className="font-semibold"> Uploaded Image</span>
      </div>

      <div className="hidden xl:flex 2xl:flex 2xl:max-w-[1215px] h-[1px] bg-[#E1E2E4]  xl:mt-5 2xl:mt-5 xl:mb-[2rem] 2xl:mb-[2rem] xl:mx-[102px] 2xl:mx-[352px]"></div>
      <div className="flex mx-[19px] md:mx-[49px] xl:mx-[97px] 2xl:mx-[352px] h-full">


        <div className="hidden xl:flex xl:flex-col">
          <img
            className="rounded-[16px] w-[188px] h-[170px] object-cover mt-2 mb-0 ml-0"
            alt=""
            src="/plane.jpg"
          />

          <Filter />
          <div className="w-[190px]">
            <FormControl>
              <FormLabel className="text-[8px]">Description</FormLabel>
              <Textarea placeholder="" minRows={2} />
            </FormControl>
          </div>
          <button
            className="capitalize font-[500] text-[16px] text-[#ffff] lg:w-[152px]
             h-[50px] lg:mt-3  shadow-none bg-[#563FEB] hover:bg-[#5c45ee] rounded-lg cursor-pointer"
            size="large"
          >
            <Link href='#' className="no-underline text-[#ffff]">
              Modify Search
            </Link>
          </button>
        </div>


        <Product />
      </div>

      <div className="pt-[3rem] md:pt-[6rem] pb-[2rem]">
        <div className="flex-col-reverse flex md:flex md:flex-row md:justify-between gap-6 mt-[2rem] md:mt-[2rem] mx-[2rem] md:mx-[75px] 2xl:mx-[23rem]">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:justify-between md:gap-[65px] pt-8- md:mr-[rem]">
            <div className="order-1 lg:order-1 text-base text-[#84818A] font-body-sub-heading-16-bold md:text-[14px] lg:text-base ">
              © 2024 Seamsearch. All Rights Reserved.
            </div>
            <div className="text-[#84818A]  order-2 md:order-2 flex flex-row items-center justify-between gap-12 md:gap-7 font-body-sub-heading-16-bold text-base md:text-[14px] lg:text-base">
              <div className="relative">Terms & Conditions</div>
              <div className="relative">Privacy Policy</div>
            </div>
          </div>
          <div className="order-3 lg:order-3 flex flex-row items-center md:justify-between -ml-2 md:ml-[rem] gap-4">
            <img className="w-6 h-6 filter-custom-color" alt="Facebook" src="/rifacebookfill.png" />
            <img className="w-6 h-6 filter-custom-color" alt="Instagram" src="/mdiinstagram.png" />
            <img className="w-6 h-6 filter-custom-color" alt="Twitter" src="/mditwitter.png" />
            <img className="w-6 h-6 filter-custom-color" alt="LinkedIn" src="/mdilinkedin.png" />

            <style jsx>{`
              .filter-custom-color {
                filter: invert(58%) sepia(5%) saturate(10%) hue-rotate(175deg) brightness(97%) contrast(92%);
              }
            `}</style>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Store;


