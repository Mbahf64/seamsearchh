
"use client"; 

import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState();
  const [fileEnter, setFileEnter] = useState(false);


  const handleDragOver = (e) => {
    e.preventDefault();
    setFileEnter(true);
  };

  const handleDragLeave = () => {
    setFileEnter(false);
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
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
    <div className="flex flex-col items-center">
      {!file ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDragEnd={handleDragEnd}
          onDrop={handleDrop}
          className={`${
            fileEnter ? "border-4" : "border-2"
          }  
          `}
        >
          <label
            htmlFor="file"
            
          >
            <img
              className="w-[114px] relative h-[99.8px]"
              alt=""
              src="/drag.png"
            />

            <div className=" max-w-[300px] lg:w-[333px] relative leading-[140%] font-semibold inline-block">
              <span>{`Drag and drop your image here or `}</span>
              <span className="text-data-analysis-color03 cursor-pointer">{`Browse `}</span>
              <span>to choose file.</span>
            </div>
            <div className="relative text-xs leading-[140%] font-medium text-gray-100">
              PNG, JPG up to 50MB
            </div>
          </label>

          <input
            id="file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <object
            className="absolute top-[15px] left-[71px] 2xl:left-[357px] rounded-2xl  box-border w-[580px] h-[580px] 2xl:w-[580px]  2xl:h-[580px]  overflow-hidden text-center"
            data={file}
            type="image/png"
          />
        </div>
      )}

      <div className="absolute top-[624px] left-[150px] 2xl:left-[480px] flex flex-col items-center justify-start gap-[18px] text-center text-xs text-gray-100">
          <div className="relative leading-[140%] font-medium">
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
  );
};

export default Upload;
