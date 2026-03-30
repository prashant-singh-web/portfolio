"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Growth.cx",
    img: "/growth.cx.png",
    link: "https://growth.cx/",
    tech: ["WordPress", "Tailwind CSS", "AWS Route53", "Hostinger"],
  },
  {
    title: "GCX Academy",
    img: "/gcx.png",
    link: "https://www.gcx.academy/",
    tech: ["WordPress", "Tailwind CSS", "Swiper.js", "Subdomain Mgmt"],
  },
  {
    title: "surakshasewasamarpan",
    img: "/surakshasewasamarpan.png",
    link: "https://surakshasewasamarpan.org/",
    tech: ["WordPress", "Tailwind CSS", "Swiper.js", "DNS Transfer","Animation"],
  },
  {
    title: "KhetiHelp",
    img: "/khetihelp.png",
    link: "https://khetihelp.com/",
    tech: ["WordPress", "Tailwind CSS", "Swiper.js", "DNS Transfer","Animation","Custom Post","SEO Setup"],
  },
  {
    title: "p3logiq",
    img: "/p3logiq.png",
    link: "https://www.p3logiq.com/",
    tech: ["Webflow"],
  },
  {
    title: "AIOTESTS",
    img: "/aiotest.png",
    link: "https://www.aiotests.com/",
    tech: ["Webflow"],
  },
  {
    title: "Suitejar",
    img: "/suitejar.png",
    link: "https://suitejar.com/",
    tech: ["React.js", "TypeScript", "Firebase Auth", "Ant Design"],
  },
  {
    title: "AN Corporation",
    img: "/anc.png",
    link: "https://ancorporationanc.com/",
    tech: ["Wordpress", "Tailwind CSS", "AOS", "Hostinger"],
  },
  {
    title: "Gallery Vision",
    img: "/gallery.png",
    link: "https://gallery.vision/",
    tech: ["WordPress", "Tailwind CSS", "Swiper.js"],
  },
  {
    title: "Dermamedecon",
    img: "/derma.png",
    link: "https://www.dermamedecon.com/",
    tech: ["PHP", "FileZilla", "Swiper.js"],
  },
  // Add others here...
];

function Main_project() {
  return (
    <section id="project" className="py-20 bg-black">
      <div className="w-full mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            SELECTED <span className="text-violet-600">WORKS</span>
          </h2>
          <div className="h-1 w-20 bg-violet-600 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full lg:max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              data-aos="zoom-in-up"
              className="overflow-hidden rounded-3xl"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.2}
                className="h-full"
              >
                <div className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-3xl overflow-hidden h-full flex flex-col transition-all hover:border-violet-500/50">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <a
                        href={project.link}
                        target="_blank"
                        className="p-4 bg-white text-black rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-5 md:p-8 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/50">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
                        {project.title}
                      </h3>
                      <Code2 className="text-violet-500 opacity-50" size={20} />
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 hover:bg-violet-600 text-white font-semibold transition-all"
                    >
                      Visit Case Study <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
       <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-32 text-center"
        >
          <p className="text-gray-500 font-medium mb-4 italic text-lg">Looking for a technical partner to architect your next high-performance build?</p>
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-3 text-white text-3xl font-black border-b-2 border-violet-500 pb-2 hover:text-violet-400 hover:border-white transition-all"
          >
            Let's discuss the architecture <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
    </section>
  );
}

export default Main_project;