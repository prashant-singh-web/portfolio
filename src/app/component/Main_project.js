import React from "react";

import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import { FaAmazon, FaWhatsapp } from "react-icons/fa";

function Main_project() {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <p className="text-2xl capitalize font-semibold p-5 border-b-2 font-mono">projects work</p>
      <div className="w-3/4 h-1/4  grid grid-cols-4 gap-2 px-10 py-5 xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ">
        <Link href={`https://amazonin-six.vercel.app/`}>
        <div className="group w-full relative min-h-full bg-gray-200 dark:bg-[#111827] dark:shadow dark:shadow-gray-700 grid-rows-2  rounded overflow-hidden duration-300 ease-in-out  hover:bg-white dark:hover:bg-black/10">
          <div className="group-hover:-z-10 duration-200 ease-in-out w-full h-full absolute inset-0 z-20 grid place-items-center bg-gray-200 dark:bg-[#111827]"> <FaAmazon className="w-[50%] h-[50%] text-gray-400"/></div>
          <div className="w-full h-[150px] grid place-items-center "><FaAmazon className=" w-20 h-20 text-black"/></div>
          <div className="w-full h-[100px] flex flex-col p-3">
            <p className="text-base  font-semibold  capitalize  xsm:text-sm">Amazon</p>
            <p className="text-xs capitalize font-normal text-gray-600 line-clamp-2 xsm:text-xs">next,auth,tailwind,rest-api,express,mongoose</p>
          </div>
        </div>
        </Link>
        <Link href={`https://whatsapp-copy.netlify.app/`}>
        <div className="group w-full relative grid-rows-2 bg-gray-200 dark:bg-[#111827] dark:shadow dark:shadow-gray-700 rounded overflow-hidden duration-300 ease-in-out hover:bg-white dark:hover:bg-black/10">
        <div className="group-hover:-z-10 duration-200 ease-in-out w-full h-full absolute inset-0 z-20 grid place-items-center bg-gray-200 dark:bg-[#111827]"> <FaWhatsapp className="w-[50%] h-[50%] text-gray-400"/></div>
          <div className="w-full h-[150px] grid place-items-center"><FaWhatsapp className=" w-20 h-20 text-green-500"/></div>
          <div className="w-full h-[100px] flex flex-col p-3">
            <p className="text-base capitalize   font-semibold ">Whatsapp</p>
            <p className="text-xs capitalize font-normal text-gray-600 line-clamp-2">react,tailwind</p>
          </div>
        </div>
        </Link>
        <Link href={`https://react-tailwinds.netlify.app/`}>
        <div className="w-full group relative bg-gray-200 dark:bg-[#111827] dark:shadow dark:shadow-gray-700  grid-rows-2  rounded overflow-hidden duration-300 ease-in-out hover:bg-white dark:hover:bg-black/10">
        <div className="group-hover:-z-10 duration-200 ease-in-out w-full h-full absolute inset-0 z-20 grid place-items-center bg-gray-200 dark:bg-[#111827]"> <CgWebsite className="w-[50%] h-[50%] text-gray-400"/></div>

          <div className="w-full h-[150px] grid place-items-center"><CgWebsite className=" w-20 h-20 text-blue-500"/></div>
          <div className="w-full h-[100px] flex flex-col p-3">
            <p className="text-base  font-semibold  capitalize ">React-Tailwind</p>
            <p className="text-xs capitalize font-normal text-gray-600 line-clamp-2">react,tailwind,css</p>
          </div>
        </div>
        </Link>
        <Link href={`https://ancorp.netlify.app/`}>
        <div className="w-full relative group bg-gray-200 dark:bg-[#111827] dark:shadow dark:shadow-gray-700 grid-rows-2  rounded overflow-hidden duration-300 ease-in-out hover:bg-white dark:hover:bg-black/10">
        <div className="group-hover:-z-10 duration-200 ease-in-out w-full h-full absolute inset-0 z-20 grid place-items-center bg-gray-200 dark:bg-[#111827]"> <CgWebsite className="w-[50%] h-[50%] text-gray-400"/></div>

          <div className="w-full h-[150px] grid place-items-center"><CgWebsite className=" w-20 h-20 text-blue-500"/></div>
          <div className="w-full h-[100px] flex flex-col p-3">
            <p className="text-base  font-semibold  capitalize ">An-corp</p>
            <p className="text-xs capitalize font-normal text-gray-600 line-clamp-2">react,tailwind,css</p>
          </div>
        </div>
        </Link>
        
        
        
      </div>
    </div>
  );
}

export default Main_project;
