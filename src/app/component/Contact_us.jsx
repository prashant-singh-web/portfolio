"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdArrowOutward } from "react-icons/md";
import { FaGithub, FaLinkedin, FaGlobeAmericas } from "react-icons/fa";
import Image from "next/image";

function Contact_us() {
  return (
    <section id="contact" className="w-full py-32 bg-black relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: The "Authority" Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-10" data-aos="fade-right">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-violet-500 font-mono tracking-[0.4em] uppercase text-sm block mb-4"
              >
                Available for Partnerships
              </motion.span>
              <h3 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                Ready to scale <br /> 
                <span className="text-gray-600 italic">your next</span> <br /> 
                big idea?
              </h3>
            </div>

            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
              Stop settling for "just a developer." Secure a technical partner who understands 
              <span className="text-white font-medium"> infrastructure, automation, and full-stack architecture </span> 
              at a professional scale. Currently based in India, operating globally.
            </p>

            <div className="flex flex-wrap gap-10 pt-6">
              <div className="flex flex-col">
                <span className="text-gray-600 text-xs uppercase tracking-widest mb-2 font-bold">Local Time</span>
                <span className="text-white text-xl font-mono">IST (GMT +5:30)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-xs uppercase tracking-widest mb-2 font-bold">Response Time</span>
                <span className="text-white text-xl font-mono">{"< 12 Hours"}</span>
              </div>
            </div>
          </div>

          {/* Right Side: The "Glass Command" Card (5 Cols) */}
          <div className="lg:col-span-5 relative" data-aos="zoom-in">
            <motion.div 
              whileHover={{ rotateY: -5, rotateX: 5 }}
              className="relative p-1 bg-gradient-to-br from-white/20 via-transparent to-white/5 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl"
            >
              <div className="bg-black/90 rounded-[2.4rem] p-5 md:p-10 space-y-8">
                {/* Profile Header */}
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-violet-500/20 rounded-full blur-lg animate-pulse"></div>
                    <Image
                      src="/prashantSingh.png"
                      alt="Prashant Singh"
                      width={80}
                      height={80}
                      className="rounded-full border-2 border-violet-500/50 relative z-10 grayscale brightness-110"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white tracking-tight">Prashant Singh</h4>
                    <p className="text-violet-400 text-sm font-mono tracking-wider">Solution Architect</p>
                  </div>
                </div>

                {/* Connection Links */}
                <div className="space-y-4">
                  <ConnectionLink 
                    icon={<MdEmail className="text-violet-400" />} 
                    label="Direct Email" 
                    value="prashantsingh7559@gmail.com" 
                    href="mailto:prashantsingh7559@gmail.com"
                  />
                  <ConnectionLink 
                    icon={<FaLinkedin className="text-blue-400" />} 
                    label="LinkedIn Professional" 
                    value="in/prashant-singh" 
                    href="https://www.linkedin.com/in/prashant-singh-268854290"
                  />
                  <ConnectionLink 
                    icon={<FaGithub className="text-gray-400" />} 
                    label="Source Code" 
                    value="@prashant-singh-web" 
                    href="https://github.com/prashant-singh-web"
                  />
                  <ConnectionLink 
                    icon={<MdPhone className="text-emerald-400" />} 
                    label="Phone / WhatsApp" 
                    value="+91 76520 21778" 
                    href="tel:+917652021778"
                  />
                </div>

                {/* Location Badge */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between group cursor-help">
                  <div className="flex items-center gap-3">
                    <FaGlobeAmericas className="text-gray-600 group-hover:text-blue-500 transition-colors" />
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Global Operations</span>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400">Jaunpur, IN</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Sub-component for a "Senior" list style */
const ConnectionLink = ({ icon, label, value, href }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ x: 10 }}
    className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all group"
  >
    <div className="flex items-center gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{label}</div>
        <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">{value}</div>
      </div>
    </div>
    <MdArrowOutward className="text-gray-700 group-hover:text-violet-500 transition-colors" />
  </motion.a>
);

export default Contact_us;