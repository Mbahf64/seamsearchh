"use client";

import * as React from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Dialog, DialogPanel } from '@headlessui/react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="2xl:max-w-[1215px] xl:max-w-[1140px] lg:m-auto max-w-full mx-[16px] md:mx-[49px] my-3 xl:mb-6">


      <div className=" flex items-center justify-between">

        <div className="flex items-center justify-center  gap-4">


          <Bars3Icon
            className="cursor-pointer h-6 w-6 text-[#1d1e1e] lg:hidden"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(true)}
          />

          <img className="h-[50px] w-[140px] lg:h-[66px] lg:w-[183px]" loading="lazy" alt="" src="Logo.png" />
        </div>


        <div className="flex items-center justify-center md:items-center md:justify-center md:gap-7 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse font-text-base-semibold">
          <div>
            <Link href="#" className="hidden lg:block no-underline font-semibold py-2 px-3 md:p-0 text-neutral-100 rounded text-[16px]">Contact us</Link>
          </div>
          <button type="button" className="font-semibold  lg:text-neutral-100 lg:bg-[transparent]  text-[14px]  lg:text-[16px] border-[1px] border-solid lg:border-neutral-30 text-neutral-10 bg-[#16171C] 
            font-text-base-semibold rounded-[100px]  px-[16px] py-[9px]  lg:py-[16px] lg:px-[24px] text-center cursor-pointer ">
            <Link className="no-underline lg:text-neutral-100 text-neutral-10" href="/search">Find Product</Link>
          </button>

        </div>
        <div className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1" id="navbar-cta">
          <div className="flex flex-col font-medium font-text-base-semibold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <div>
              <Link href="#" className="block no-underline font-semibold py-2 px-3 md:p-0  text-neutral-100 rounded " aria-current="page">Home</Link>
            </div>
            <div>
              <Link href="#" className="block no-underline font-semibold py-2 px-3 md:p-0 text-neutral-100 rounded">How to use</Link>
            </div>
            <div>
              <Link href="#" className="block no-underline font-semibold py-2 px-3 md:p-0 text-neutral-100 rounded">FAQ</Link>
            </div>
          </div>
        </div>
      </div>


      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
        <DialogPanel className="fixed inset-y-0 left-0 z-20 w-[200px] overflow-y-auto bg-[#ffffff] px-9 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div>
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="cursor-pointer h-7 w-7 -ml-1 text-[#1d1e1e] lg:hidden"
                aria-hidden="true"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 font-text-base-semibold">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold no-underline leading-7 text-[#1d1e1e] hover:bg-[#F0F0F0]"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold no-underline leading-7 text-[#1d1e1e] hover:bg-[#F0F0F0]"
                >
                  How to use
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold no-underline leading-7 text-[#1d1e1e] hover:bg-[#F0F0F0]"
                >
                  FAQ
                </Link>
              </div>
              <div className="space-y-2 py-6 font-text-base-semibold">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold no-underline leading-7 text-[#1d1e1e] hover:bg-[#F0F0F0]"
                >
                  Contact us
                </Link>
                <Link
                  href="/search"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold no-underline leading-7 text-[#1d1e1e] hover:bg-[#F0F0F0]"
                >
                  Find Product
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>


    </div>
  );
};

export default Header;



