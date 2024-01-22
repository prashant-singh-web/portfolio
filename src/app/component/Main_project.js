import React from "react";
import { CiMobile1, CiMusicNote1, CiYoutube } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import { FaAmazon, FaWhatsapp } from "react-icons/fa";

function Main_project() {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <p className="text-2xl capitalize font-semibold p-5">projects</p>
      <div className="w-3/4  grid grid-cols-4 gap-5 px-10 py-5 xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        <Link href={`https://amazonin-six.vercel.app/`}>
        <div className="w-full bg-gray-200 grid-rows-2 shadow-xl rounded overflow-hidden duration-300 ease-in-out hover:shadow-[0_0_5px_black] hover:-translate-x-1 hover:-translate-y-1">
          <div className="w-full h-[150px] grid place-items-center "><FaAmazon className=" w-20 h-20 text-black"/></div>
          <div className="w-full h-[100px] flex flex-col p-3">
            <p className="text-base text-black font-semibold  capitalize  xsm:text-sm">Amazon</p>
            <p className="text-xs capitalize font-normal text-gray-600 line-clamp-2 xsm:text-xs">next,auth,tailwind,rest-api,express,mongoose</p>
          </div>
        </div>
        </Link>
        <Link href={`https://whatsapp-copy.netlify.app/`}>
        <div className="w-full grid-rows-2 bg-gray-200 shadow-xl rounded overflow-hidden duration-300 ease-in-out hover:shadow-[0_0_5px_black] hover:-translate-x-1 hover:-translate-y-1">
          <div className="w-full h-[150px] grid place-items-center"><FaWhatsapp className=" w-20 h-20 text-green-500"/></div>
          <div className="w-full h-[100px] flex flex-col p-3">
            <p className="text-base capitalize  text-black font-semibold ">Whatsapp</p>
            <p className="text-xs capitalize font-normal text-gray-600 line-clamp-2">react,tailwind</p>
          </div>
        </div>
        </Link>
        <Link href={`https://react-tailwinds.netlify.app/`}>
        <div className="w-full bg-gray-200 grid-rows-2 shadow-xl rounded overflow-hidden duration-300 ease-in-out hover:shadow-[0_0_5px_black] hover:-translate-x-1 hover:-translate-y-1">
          <div className="w-full h-[150px] grid place-items-center"><CgWebsite className=" w-20 h-20 text-blue-500"/></div>
          <div className="w-full h-[100px] flex flex-col p-3">
            <p className="text-base text-black font-semibold  capitalize ">React-Tailwind</p>
            <p className="text-xs capitalize font-normal text-gray-600 line-clamp-2">react,tailwind,css</p>
          </div>
        </div>
        </Link>
        <Link href={`https://ancorp.netlify.app/`}>
        <div className="w-full bg-gray-200 grid-rows-2 shadow-xl rounded overflow-hidden duration-300 ease-in-out hover:shadow-[0_0_5px_black] hover:-translate-x-1 hover:-translate-y-1">
          <div className="w-full h-[150px] grid place-items-center"><CgWebsite className=" w-20 h-20 text-blue-500"/></div>
          <div className="w-full h-[100px] flex flex-col p-3">
            <p className="text-base text-black font-semibold  capitalize ">An-corp</p>
            <p className="text-xs capitalize font-normal text-gray-600 line-clamp-2">react,tailwind,css</p>
          </div>
        </div>
        </Link>
        
        
        
      </div>
    </div>
  );
}

export default Main_project;
