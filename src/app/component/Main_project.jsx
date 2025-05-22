import React from "react";
import Image from "next/image";

function Main_project() {
  const projects = [
    {
      title: "Growth.cx",
      img: "/growth.cx.png",
      link: "https://growth.cx/",
      tech: "WordPress Theme, Tailwind CSS, Swiper.js,github,dns management transfer aws route53 to hostinger",
    },
    {
      title: "GCX Academy",
      img: "/gcx.png",
      link: "https://www.gcx.academy/",
      tech: "WordPress Theme, Tailwind CSS, Swiper.js,github ,subdomain creation and wordpress installation on hostinger",
    },
    {
      title: "Suitejar",
      img: "/suitejar.png",
      link: "https://suitejar.com/",
      tech: "WordPress Theme, Tailwind CSS, Swiper.js,React js,Typescript,Firebase for Auth,Antd,github",
    },
    {
      title: "Gallery Vision",
      img: "/gallery.png",
      link: "https://gallery.vision/",
      tech: "WordPress Theme, Tailwind CSS, Swiper.js,github",
    },
    {
      title: "Aiotests",
      img: "/aiotest.png",
      link: "https://www.aiotests.com/",
      tech: "webflow",
    },
    {
      title: "P3 LOGIQ",
      img: "/p3logiq.png",
      link: "https://www.p3logiq.com/",
      tech: "webflow",
    },
    {
      title: "Industryapps",
      img: "/indusrtyapps.png",
      link: "https://www.industryapps.net/",
      tech: "webflow",
    },
    {
      title: "Dermamedecon",
      img: "/derma.png",
      link: "https://www.dermamedecon.com/",
      tech: "PHP,filezilla for deployment,Swiper.js",
    },
    {
      title: "unlock360",
      img: "/unlock.png",
      link: "https://unlock360.co/",
      tech: "wordpress site updates",
    },
    {
      title: "Refo",
      img: "/refo.png",
      link: "https://refo-automation.webflow.io/cfpb-1033-open-banking-switch",
      tech: "webflow one page created and developing their monthly newsletter",
    },
    {
      title: "AN Corporation",
      img: "/anCorporation.png",
      link: "https://ancorporationanc.com/",
      tech: "Next js,Tailwind css,Aos,Hostinger",
    },
   
  ];

  return (
    <div
      id="project"
      className="w-[90%] flex flex-col justify-between items-center my-10"
    >
      <p className="text-4xl capitalize font-extrabold p-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-mono mb-6">
        Project
      </p>

      <div className="w-full mx-auto grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-[800px] mx-auto backdrop-blur-sm bg-white/20 border border-white/30 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-lg transition-all duration-300"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={100}
                height={100}
                className="w-full h-full object-cover aspect-video"
                unoptimized
              />
            </a>
            <div className="p-5 flex flex-col justify-between bg-white/60">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  {project.title}
                </h2>
                <p className="text-base text-gray-700">
                  <span className="font-semibold">Tech used:</span> {project.tech}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:scale-105 transition-transform"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      
      
    </div>
  );
}

export default Main_project;
