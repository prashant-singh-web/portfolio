"use client";
import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineWeb, MdOutlineStorage } from "react-icons/md";
import { SiReact, SiTailwindcss, SiRedux, SiPostgresql, SiGoland, SiWordpress, SiWebflow } from "react-icons/si";
import { IoSend } from "react-icons/io5";

function My_Work_Experience() {
  return (
    <div id="experience" className="w-full flex flex-col items-center space-y-8 py-12 px-4 sm:px-8">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 mb-6">
        Work Experience
      </h2>

      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-xl p-6 border border-violet-500/20 shadow-xl hover:shadow-violet-400/30 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <FaBriefcase className="text-violet-500" />
              Junior Frontend Developer
            </h3>
            <p className="text-white/70 flex items-center gap-2 mt-1">
              <FaMapMarkerAlt className="text-blue-400" />
              growth.cx, Mumbai
            </p>
          </div>
          <p className="text-sm text-white/60 mt-3 sm:mt-0 flex items-center gap-2">
            <FaCalendarAlt className="text-violet-400" />
            May 2024 – Present
          </p>
        </div>

        <ul className="mt-5 text-white/80 space-y-3 text-sm sm:text-base">
          <li className="flex items-start gap-2">
            <MdOutlineWeb className="text-violet-400 mt-1" />
            Developed and deployed the company website.
          </li>
          <li className="flex items-start gap-2">
            <MdOutlineStorage className="text-blue-400 mt-1" />
            Managed hosting and server tasks across multiple projects.
          </li>
          <li className="flex items-start gap-2">
            <SiReact className="text-cyan-400 mt-1" />
            Built client-side UI using React, Tailwind CSS, and Redux.
          </li>
          <li className="flex items-start gap-2">
            <SiGoland className="text-yellow-500 mt-1" />
            Integrated backend APIs using Golang (Fiber) and PostgreSQL.
          </li>
          <li className="flex items-start gap-2">
            <IoSend className="text-pink-400 mt-1" />
            Sent client newsletters via HubSpot and SendFox.
          </li>
          <li className="flex items-start gap-2">
            <SiWordpress className="text-blue-500 mt-1" />
            Delivered WordPress and Webflow websites with responsive design.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default My_Work_Experience;
