
"use client";
import React, { useState } from "react";
import Filter from "../search/filter";
// import Mainfooter from "@/components/";

const ResponsiveGrid = () => {
  const [file, setFile] = useState();
  const [fileEnter, setFileEnter] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setFileEnter(true);
  };

  const handleDragLeave = () => {
    setFileEnter(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFileEnter(false);
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          if (file) {
            let blobUrl = URL.createObjectURL(file);
            setFile(blobUrl);
          }
          console.log(`items file[${i}].name = ${file?.name}`);
        }
      });
    } else {
      [...e.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  };

  const handleFileChange = (e) => {
    console.log(e.target.files);
    let files = e.target.files;
    if (files && files[0]) {
      let blobUrl = URL.createObjectURL(files[0]);
      setFile(blobUrl);
    }
  };

  return (
    <div className="w-full mt-6 lg:pt-12 2xl:pt-[4rem]">
      <div className="md:flex md:items-center md:justify-center mr-[19px] ml-[19px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:w-[1140px]">
          <div className="flex flex-col lg:w-[580px]  lg:items-center lg:justify-center ">
            <div
              className={`flex justify-center items-center rounded-2xl box-border w-full 
                min-h-[343px] lg:min-h-[580px] lg:w-[580px] 2xl:w-[580px] overflow-hidden text-center md:ml-[px]  2xl:-ml-[39px] ${fileEnter ? "border-4" : "border-2"
                } border-dashed border-[#C8CCD5] bg-inherit font-body-sub-heading-16-bold`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <label
                htmlFor="file"
                className="flex flex-col items-center justify-center gap-6"
              >
                {!file ? (
                  <>
                    <img
                      className="w-[114px] h-[99.8px]"
                      alt=""
                      src="/drag.png"
                    />
                    <div className="max-w-[300px] lg:w-[333px] leading-[140%] font-semibold inline-block">
                      <span>{`Drag and drop your image here or `}</span>
                      <span className="text-data-analysis-color03 cursor-pointer">{`Browse `}</span>
                      <span>to choose file.</span>
                    </div>
                    <div className="text-xs leading-[140%] font-medium text-gray-100">
                      PNG, JPG up to 50MB
                    </div>
                  </>
                ) : (
                  <div>
                    <img
                      className="max-w-[500px] max-h-[500px]"
                      src={file}
                      alt="Uploaded preview"
                    />
                  </div>
                )}
              </label>
              <input
                id="file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            <div className="my-5 lg:my-5  2xl:my-5 2xl:-ml-10">
              <div className="flex flex-col items-center justify-center gap-[18px] text-xs text-[#84818A]">
                <div className="relative leading-[140%] font-medium font-body-sub-heading-16-bold">
                  Or try on the examples below:
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="w-16 relative rounded-lg h-12 object-cover"
                    alt=""
                    src="/cream.png"
                  />
                  <img
                    className="w-16 relative rounded-lg h-12 object-cover"
                    alt=""
                    src="/wine.png"
                  />
                  <img
                    className="w-16 relative rounded-lg h-12 object-cover"
                    alt=""
                    src="/orange.png"
                  />
                  <img
                    className="w-16 relative rounded-lg h-12 object-cover"
                    alt=""
                    src="/sneakers.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:ml-[51px]">
            <Filter />
          </div>
        </div>
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

export default ResponsiveGrid;



