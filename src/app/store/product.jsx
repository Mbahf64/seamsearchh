"use client"

import React, { useState } from "react";
import { products } from "../../data/products";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import Textarea from "@mui/joy/Textarea";
// import Button from "@mui/joy/Button";
// import { styled } from '@mui/material/styles';


const ProductGrid = ({ }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div className="">

      <div className="w-[90vw] lg:w-[910px] 2xl:w-[975px] xl:ml-[2rem] grid grid-cols-2 max-[600px]:grid-cols-1
  md:grid-cols-2 lg:grid-cols-3 2xl:gap-8 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className={`relative rounded-2xl box-border h-full border-[px] border-solid  px-3 pt-3 ${selectedProduct === index
              ? "border-blue-500 border-[2px]"
              : "border-neutral-200 border-[1px]"
              }`}
          >
            <img
              className="rounded-2xl w-full h-[278px] object-cover "
              alt=""
              src={product.src}
              onClick={() => setSelectedProduct(index)}
            />
            {selectedProduct === index && (
              <button className="absolute bottom-[8rem] right-6 bg-[#5837FF] text-white p-[1rem] rounded-[2rem] cursor-pointer font-text-base-semibold">
                Visit Store
              </button>
            )}
            <div className="py-4">
              <div className="font-medium">{product.title}</div>
              <div className="inline-block mt-2">
                <span>{product.price}</span>
                <span className="text-xs text-neutral-80 line-through pl-1">
                  {product.oldPrice}
                </span>
              </div>
              <div className={`mt-2 text-xs font-semibold ${product.color}`}>
                {product.stock}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};



export default ProductGrid;





// <div className="">
// <div class="grid grid-rows-3 grid-flow-col gap-4">
//   <div class="row-span-3">
//     <div className="w-[204px] h-[385px]  text-xs text-gray-300 bg-[#F2F4F8] flex justify-center rounded-[8px] ml-[114px]">
//       <img
//         className=" rounded-[16px] w-[188px] h-[170px] object-cover mt-2"
//         alt=""
//         src="/plane.jpg"
//       />
//     </div>
//   </div>

//   <div class="row-span-2 col-span-2 ">

//     <div className="lg:w-[890px]  grid grid-cols-2 max-[600px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-[19px] md:mx-[49px]  absolute lg:left-[19rem]">
//       {products.map((product, index) => (
//         <div
//           key={index}
//           className={`relative rounded-2xl box-border h-full border-[px] border-solid  px-3 pt-3 ${selectedProduct === index
//             ? "border-blue-500 border-[2px]"
//             : "border-neutral-200 border-[1px]"
//             }`}
//         >
//           <img
//             className="rounded-2xl w-full h-[278px] object-cover "
//             alt=""
//             src={product.src}
//             onClick={() => setSelectedProduct(index)}
//           />
//           {selectedProduct === index && (
//             <button className="absolute bottom-[8rem] right-6 bg-[#5837FF] text-white p-[1rem] rounded-[2rem] cursor-pointer font-text-base-semibold">
//               Visit Store
//             </button>
//           )}
//           <div className="py-4">
//             <div className="font-medium">{product.title}</div>
//             <div className="inline-block mt-2">
//               <span>{product.price}</span>
//               <span className="text-xs text-neutral-80 line-through pl-1">
//                 {product.oldPrice}
//               </span>
//             </div>
//             <div className={`mt-2 text-xs font-semibold ${product.color}`}>
//               {product.stock}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
// </div>


// <div className="mt-9 flex ">
//   <div className="w-[204px] h-[385px]  text-xs text-gray-300 bg-[#F2F4F8] flex justify-center rounded-[8px] ml-[114px]">
//     <img
//       className=" rounded-[16px] w-[188px] h-[170px] object-cover mt-2"
//       alt=""
//       src="/plane.jpg"
//     />
{/* <div className=" pt-3 left-[0px] flex flex-col items-center justify-center gap-[12px]">
    <div className="w-[188px] relative h-10">
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-[#E9EBF2] w-[188px] h-10" />
      <img
        className="absolute top-[12px] left-[164px] w-4 h-4 overflow-hidden object-contain"
        alt=""
        src="/chevron-down.png"
      />
      <div className="absolute top-[12px] left-[12px] leading-[140%] font-semibold">
        Filters
      </div>
    </div>
    <div className="w-[190px]">
      <FormControl>
        <FormLabel className="text-[8px]">Description</FormLabel>
        <Textarea placeholder="" minRows={2} />
      </FormControl>
    </div>
  </div> */}

{/* <Button className="mt-3.5 mb-4 -ml-8 rounded-lg bg-data-analysis-color03  py-[11px] px-[31px] text-[13px] text-neutral-10">
    Modify Search
  </Button> */}
//   </div>



// </div>