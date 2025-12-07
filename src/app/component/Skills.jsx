"use client"
import React from "react";
import { BsWordpress } from "react-icons/bs";
import { DiAws, DiBugsense, DiFirebase, DiPostgresql } from "react-icons/di";
import { FaCss3, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiWebflow,


} from "react-icons/si";



import { TbApi, TbApiApp, TbBrandNextjs } from "react-icons/tb";

function MY_Skill() {

  return (
    <div    id="skills" className="w-full flex flex-col items-center space-y-6 scroll-smooth  py-10">
      <h2 className="text-4xl capitalize font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-violet-500 mb-5">
        My Skills
      </h2>
    
      <div className=" mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
        <SiHtml5 className="box-1 border-red-500 shadow-[inset_0px_0px_30px_skyblue] shadow-red-600" />
        <FaCss3 className="box-1 border-yellow-500 shadow-[inset_0px_0px_30px_skyblue] shadow-yellow-600" />
        <SiTailwindcss className="box-1 border-sky-500 text-sky-500 shadow-[inset_0px_0px_30px_skyblue] shadow-sky-600 " />
        <FaReact className="box-1 border-pink-500 text-pink-500 shadow-[inset_0px_0px_30px_skyblue] shadow-pink-600"  />
        <SiNextdotjs className="box-1 border-emerald-500 shadow-[inset_0px_0px_30px_skyblue] shadow-emerald-600" />
        <FaNodeJs className="box-1 border-green-600 text-green-800 shadow-[inset_0px_0px_30px_skyblue] shadow-green-600" />
        <SiExpress className="box-1 border-violet-500 shadow-[inset_0px_0px_30px_skyblue] shadow-violet-600" />
        <SiMongodb className="box-1 border-green-600 text-green-500 shadow-[inset_0px_0px_30px_skyblue] shadow-green-600" />
        <TbApi className="box-1 border-sky-500 shadow-[inset_0px_0px_30px_skyblue] shadow-sky-600" />
        <FaGithub className="box-1 border-sky-500 shadow-[inset_0px_0px_30px_skyblue] shadow-sky-600 " />
      <SiWebflow className="box-1 border-sky-500 shadow-[inset_0px_0px_30px_skyblue] shadow-sky-600 " />
      <BsWordpress className="box-1 border-white shadow-[inset_0px_0px_30px_white] shadow-white " />
      <SiFirebase className="box-1 border-orange-500 shadow-[inset_0px_0px_30px_orange] shadow-orange-500 text-orange-500 " />
      <DiAws className="box-1 border-orange-500 shadow-[inset_0px_0px_30px_orange] shadow-orange-500 text-orange-500 " />
      <DiPostgresql className="box-1 border-sky-500 shadow-[inset_0px_0px_30px_skyblue] shadow-sky-600 " />

      
      </div>
    </div>
  );
}

export default MY_Skill;
