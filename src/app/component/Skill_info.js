"use client"
import React, { useEffect } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsFiletypeScss, BsGit, BsGithub } from "react-icons/bs";
import { DiJavascript1, DiMysql } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";




function Skill_info() {
  
 
  return (
    <div className="w-full flex flex-col justify-center items-center bg-gray-100 dark:bg-[#111827] py-10">
      <p className="text-2xl capitalize font-semibold p-5 border-b-2 font-mono mb-6">Skills</p>
      <div className="w-[90%] grid grid-cols-4 gap-1 xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div data-aos="zoom-out"  className="w-full duration-300 ease-in-out group grid place-items-center bg-white dark:bg-white/5 dark:hover:bg-white/10 hover:bg-gray-100  py-10">
          <FaReact className="text-gray-400 duration-300 ease-in-out cursor-pointer text-[8rem] group-hover:text-cyan-600" />
        </div>
        <div data-aos="zoom-out" className="w-full duration-300 ease-in-out group grid place-items-center bg-white dark:bg-white/5 dark:hover:bg-white/10 hover:bg-gray-100  py-10">
          <SiNextdotjs className="text-gray-400 duration-300 ease-in-out cursor-pointer text-[8rem] group-hover:text-black" />
        </div>
        <div data-aos="zoom-out" className="w-full duration-300 ease-in-out group grid place-items-center bg-white dark:bg-white/5 dark:hover:bg-white/10 hover:bg-gray-100  py-10">
          <SiTailwindcss className="text-gray-400 duration-300 ease-in-out cursor-pointer text-[8rem] group-hover:text-cyan-400" />
        </div>
        <div data-aos="zoom-out"  className="w-full duration-300 ease-in-out group grid place-items-center bg-white dark:bg-white/5 dark:hover:bg-white/10 hover:bg-gray-100  py-10">
          <DiJavascript1 className="text-gray-400 duration-300 ease-in-out cursor-pointer text-[8rem] group-hover:text-black" />
        </div>
        <div data-aos="zoom-out"  className="w-full duration-300 ease-in-out group grid place-items-center bg-white dark:bg-white/5 dark:hover:bg-white/10 hover:bg-gray-100  py-10">
          <BsFiletypeScss className="text-gray-400 duration-300 ease-in-out cursor-pointer text-[8rem] group-hover:text-pink-400" />
        </div>
        <div data-aos="zoom-out"  className="w-full duration-300 ease-in-out group grid place-items-center bg-white dark:bg-white/5 dark:hover:bg-white/10 hover:bg-gray-100  py-10">
          <TbApi className="text-gray-400 duration-300 ease-in-out cursor-pointer text-[8rem] group-hover:text-lime-400" />
        </div>
        <div data-aos="zoom-out"  className="w-full duration-300 ease-in-out group grid place-items-center bg-white dark:bg-white/5 dark:hover:bg-white/10 hover:bg-gray-100  py-10">
          <DiMongodb className="text-gray-400 duration-300 ease-in-out cursor-pointer text-[8rem] group-hover:text-green-700" />
        </div>
        <div data-aos="zoom-out"  className="w-full duration-300 ease-in-out group grid place-items-center bg-white dark:bg-white/5 dark:hover:bg-white/10 hover:bg-gray-100  py-10">
          <DiMysql className="text-gray-400 duration-300 ease-in-out cursor-pointer text-[8rem] group-hover:text-orange-400" />
        </div>
        <div data-aos="zoom-out"  className="w-full duration-300 ease-in-out group grid place-items-center bg-white dark:bg-white/5 dark:hover:bg-white/10 hover:bg-gray-100  py-10">
          <FaNodeJs className="text-gray-400 duration-300 ease-in-out cursor-pointer text-[8rem] group-hover:text-lime-600" />
        </div>
        <div data-aos="zoom-out"  className="w-full duration-300 ease-in-out group grid place-items-center bg-white dark:bg-white/5 dark:hover:bg-white/10 hover:bg-gray-100  py-10">
          <BsGithub className="text-gray-400 duration-300 ease-in-out cursor-pointer text-[8rem] group-hover:text-black" />
        </div>
        <div data-aos="zoom-out"  className="w-full duration-300 ease-in-out group grid place-items-center bg-white dark:bg-white/5 dark:hover:bg-white/10 hover:bg-gray-100  py-10">
          <SiTypescript className="text-gray-400 duration-300 ease-in-out cursor-pointer text-[8rem] group-hover:text-blue-700" />
        </div>
      </div>
    </div>
  );
}

export default Skill_info;
