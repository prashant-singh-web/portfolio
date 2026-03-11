"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsWordpress } from "react-icons/bs";
import { DiAws, DiPostgresql } from "react-icons/di";
import { FaCss3, FaGithub, FaNodeJs, FaReact, FaServer, FaTerminal, FaGlobe, } from "react-icons/fa";
import { SiN8N,SiHostinger } from "react-icons/si";
import {
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiWebflow,
  SiTypescript,
} from "react-icons/si";
// Removing problematic imports and using stable ones
import { TbApi, TbArrowsLeftRight } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend & Design",
    skills: [
      { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500" },
      { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-400" },
    ],
  },
  // {
  //   title: "Backend & Database",
  //   skills: [
  //     { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
  //     { icon: <SiExpress />, name: "Express", color: "text-gray-300" },
  //     { icon: <SiMongodb />, name: "MongoDB", color: "text-emerald-500" },
  //     { icon: <DiPostgresql />, name: "PostgreSQL", color: "text-blue-400" },
  //   ],
  // },
  {
    title: "CMS & Platform Mastery",
    skills: [
      { icon: <BsWordpress />, name: "WordPress", color: "text-white" },
      { icon: <SiWebflow />, name: "Webflow", color: "text-blue-500" },
      { icon: <TbApi />, name: "Rest APIs", color: "text-rose-400" },
      { icon: <FaGithub />, name: "GitHub", color: "text-gray-200" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      { icon: <SiHostinger />, name: "Hostinger", color: "text-violet-500" }, // Swapped to FaServer
      { icon: <FaTerminal />, name: "SSH / SFTP", color: "text-emerald-400" },
      { icon: <FaGlobe />, name: "DNS Mgmt", color: "text-blue-400" }, // Swapped to FaGlobe
      { icon: <TbArrowsLeftRight />, name: "Migrations", color: "text-orange-400" },
    ],
  },
  {
    title: "Automation & Cloud",
    skills: [
      { icon: <SiN8N />, name: "n8n", color: "text-rose-500" }, // Using a custom SVG below
      { icon: <DiAws />, name: "AWS", color: "text-orange-400" },
      { icon: <SiFirebase />, name: "Firebase", color: "text-yellow-500" },
      { icon: <FaServer />, name: "Hosting", color: "text-sky-500" },
    ],
  },
];

// Simple SVG component for n8n to avoid import errors
// function WorkflowIcon() {
//   return (
//     <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//       <path d="M4 7h3a1 1 0 0 0 1-1V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 0-1 1v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"></path>
//     </svg>
//   );
// }

function MY_Skill() {
  return (
    <section id="skills" className="w-full py-24 bg-black overflow-hidden relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-mono text-violet-500 tracking-[0.3em] uppercase mb-3">
            Technical Arsenal
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white">
            Full-Cycle <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">Expertise</span>
          </h3>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            From local codebases to global production servers. I manage 
            hosting, DNS, and automated workflows to ensure seamless performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((cat, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[1px] w-8 bg-violet-500/50" />
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {cat.title}
                </h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all hover:border-violet-500/50"
                  >
                    {/* Inner Glow on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 blur-xl transition-opacity bg-violet-500" />
                    
                    <div className={`text-4xl mb-3 ${skill.color} transition-transform group-hover:scale-110 duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-tighter text-gray-500 uppercase group-hover:text-white transition-colors text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MY_Skill;