"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaDownload, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsFiletypeScss, BsGit, BsGithub } from "react-icons/bs";
import { DiJavascript1, DiMysql, DiMongodb } from "react-icons/di";
import { TbApi } from "react-icons/tb";

function Aboutme() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 z-[11] mt-14 sm:mt-[15rem] text-gray-400 bg-transparent">
      
      {/* Left Content */}
      <div className="w-full flex flex-col p-6 sm:p-12 max-w-5xl mx-auto text-white">
        {/* Badge */}
        <span className="px-5 py-2 rounded-full border border-violet-700 shadow-inner shadow-violet-500/50 text-sm w-fit mb-4 bg-violet-800/10">
          Fullstack Developer
        </span>

        {/* Greeting */}
        <h3 className="text-4xl sm:text-5xl font-bold text-violet-600 mb-2">Hey!</h3>

        {/* Name */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-white/80 mb-4">
          I am{" "}
          <span className="text-4xl sm:text-6xl font-extrabold text-violet-700 font-mono">
            PRASHANT SINGH
          </span>
        </h2>

        {/* Tagline */}
        <p className="text-lg sm:text-xl font-medium text-white/70 mb-6 border-violet-950 border bg-violet-900/20 rounded-md p-2">
          Full-Stack Web Developer | Lifelong Learner | Tech Enthusiast
        </p>

        {/* Bio */}
        <p className="text-base leading-relaxed text-gray-400">
          I began my web development journey in{" "}
          <span className="text-white font-medium">2019</span>, starting with
          the fundamentals of HTML and CSS, and quickly progressed to
          JavaScript and modern frontend technologies. Since then, I’ve built a
          variety of responsive, user-friendly web applications using{" "}
          <span className="text-white font-medium">HTML, CSS, JavaScript, SASS, React.js</span>, and{" "}
          <span className="text-white font-medium">Next.js</span>.
          <br /><br />
          On the backend, I’m confident working with{" "}
          <span className="text-white font-medium">Node.js, Express.js</span>, and databases like{" "}
          <span className="text-white font-medium">MySQL, MongoDB</span>, and{" "}
          <span className="text-white font-medium">PostgreSQL</span>. Im also learning{" "}
          <span className="text-white font-medium">Golang</span> to build scalable and high-performance systems.
          <br /><br />
          I’m well-versed in version control using{" "}
          <span className="text-white font-medium">Git and GitHub</span>, and have experience building websites with{" "}
          <span className="text-white font-medium">WordPress</span> (both custom-coded and with Elementor) as well as{" "}
          <span className="text-white font-medium">Webflow</span> for no-code solutions.
          <br /><br />
          I’m passionate about creating clean, efficient, and impactful digital experiences. Always eager to collaborate,
          learn, and contribute to meaningful projects that make a difference.
        </p>

        {/* Button */}
        <button
          className="flex items-center gap-2 px-6 py-3 mt-10 rounded-full border border-violet-700 text-white text-sm font-semibold shadow-md shadow-violet-500/50 hover:shadow-lg hover:shadow-violet-700 hover:bg-violet-700/20 transition-all duration-300 w-fit"
          onClick={() => window.open("/Prashant_Singh_CV.pdf", "_blank")}
        >
          <FaDownload className="text-white" />
          Download CV
        </button>
      </div>

      {/* Right Icons Grid */}
      <div className="hidden md:grid h-fit mx-auto my-auto grid-cols-3 w-3/4 gap-10">
        <div className="box-2 flashing-anime">
          <FaReact className="text-7xl" />
        </div>
        <div className="box-2 flashing-anime">
          <SiNextdotjs className="text-7xl" />
        </div>
        <div className="box-2 flashing-anime">
          <DiMongodb className="text-7xl" />
        </div>
        <div className="box-2">
          <TbApi className="text-7xl" />
        </div>
        <div className="box-2">
          <SiTailwindcss className="text-7xl" />
        </div>
        <div className="box-2">
          <BsGithub className="text-7xl" />
        </div>
        <div className="box-2">
          <BsGit className="text-7xl" />
        </div>
        <div className="box-2">
          <DiJavascript1 className="text-7xl" />
        </div>
        <div className="box-2">
          <FaNodeJs className="text-7xl" />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
