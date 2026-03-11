"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { LucideMousePointer2, Sparkles } from "lucide-react";

// Icons
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const techStack = [
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#FFFFFF" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <TbApi />, name: "API Design", color: "#F05032" },
];

function Aboutme() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-gray-400 overflow-hidden px-5 py-20 pt-36 lg:px-20">
      
      {/* 1. Mouse Spotlight Overlay (Framer Motion) */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-30"
        animate={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.3), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Side: Content (AOS + Framer) */}
        <div className="flex flex-col justify-center">
          <div data-aos="fade-right" className="flex items-center gap-2 mb-6">
            <span className="px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-bold tracking-tighter uppercase flex items-center gap-2">
              <Sparkles size={14} /> Available for Work
            </span>
          </div>

          <h3 data-aos="fade-up" data-aos-delay="200" className="text-3xl text-violet-500 font-mono mb-2">
            const developer = "PRASHANT SINGH";
          </h3>

          <h1 data-aos="fade-up" data-aos-delay="400" className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            Building the <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-500">
              Future Web.
            </span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="600" className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl mb-10">
            I am a <span className="text-white">Senior Frontend Engineer</span> and Fullstack Architect. 
            Since 2019, I have been crafting high-end digital experiences using 
            the modern JavaScript ecosystem. I don't just write code; I build 
            performant, scalable, and beautiful solutions.
          </p>

          <div data-aos="zoom-in" data-aos-delay="800" className="flex flex-wrap gap-5">
            <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Download CV <LucideMousePointer2 size={18} />
              </span>
            </button>
            <button className="px-8 py-4 border border-white/20 hover:border-violet-500/50 hover:bg-violet-500/5 text-white font-bold rounded-2xl transition-all">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side: 3D Tech Cards (react-parallax-tilt) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 content-center">
          {techStack.map((tech, index) => (
            <div key={index} data-aos="flip-left" data-aos-delay={index * 100}>
              <Tilt
                perspective={800}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glareBorderRadius="20px"
                scale={1.05}
                transitionSpeed={1500}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                className="group"
              >
                <div className="relative h-32 md:h-40 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors group-hover:bg-white/10 group-hover:border-violet-500/50">
                  <div 
                    className="text-5xl mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}

export default Aboutme;