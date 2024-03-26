"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsFiletypeScss, BsGit, BsGithub } from "react-icons/bs";
import { DiJavascript1, DiMysql } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";

function Aboutme() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e) => {
    // Update the position based on the drag event
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 z-[11] mt-14 sm:mt-[15rem] text-gray-400">
      <div className="w-full flex flex-col p-5 sm:p-10">
        <h2 className="px-5 py-2 rounded-full border-[0.5px] border-violet-700 w-fit shadow-[inset_0px_0px_10px_voilet] shadow-violet-500/50 text-white text-sm ">
          Fullstack Developer{" "}
        </h2>
        <h3 className="text-3xl text-violet-700 font-bold my-3 ">Hey!</h3>
        <h3 className="text-2xl text-white/70 mb-5">
          I am{" "}
          <span className="text-5xl font-extrabold text-violet-700 font-mono ">
            PRASHANT SINGH
          </span>
        </h3>
        <p className="text-base text-gray-500/60 mt-3  ">
          Hello, I’m Prashant Singh, a full-stack web developer and a passionate
          learner. I embarked on my web development journey in 2019, starting
          from HTML basics to mastering JavaScript. I’ve built projects using
          HTML, CSS, JavaScript, and SASS, and have experience with ReactJs.
          Currently, I’m expanding my skills with NextJs. I’m proficient in
          MySQL and MongoDB databases, and can work with NodeJs and ExpressJs,
          making me a complete full-stack developer. I’m eager to collaborate
          with professionals to enhance my web development knowledge and
          contribute towards a better future.
        </p>
        <button className="px-5 py-2 my-8 rounded-full border-[0.5px] border-violet-700 w-fit shadow-[inset_0px_0px_10px_voilet] hover:shadow-[inset_0px_0px_20px_voilet] shadow-violet-500/70 hover:shadow-violet-700 text-white text-sm ">
          Learn More{" "}
        </button>
      </div>
      <div className="hidden md:grid h-fit mx-auto my-auto grid-cols-3 w-3/4 gap-10 ">
        <div className="box-2 flashing-anime">
          <FaReact className="text-7xl" />
        </div>

        <div className=" box-2 flashing-anime">
          <SiNextdotjs className="text-7xl " />
        </div>
        <div className="  box-2 flashing-anime  ">
          <DiMongodb className="text-7xl " />
        </div>
        <div className="  box-2 ">
          <TbApi className="text-7xl " />
        </div>
        <div className="  box-2 ">
          <SiTailwindcss className="text-7xl " />
        </div>
        <div className="  box-2 ">
          <BsGithub className="text-7xl " />
        </div>
        <div className="  box-2 ">
          <BsGit className="text-7xl " />
        </div>
        <div className="  box-2 ">
          <DiJavascript1 className="text-7xl " />
        </div>
        <div className="  box-2 ">
          <FaNodeJs className="text-7xl " />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
