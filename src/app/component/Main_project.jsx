import React from "react";

import Image from "next/image";

function Main_project() {
  return (
    <div
      id="project"
      className="w-full flex flex-col justify-between items-center my-10"
    >
      <p className="text-4xl capitalize font-extrabold p-5  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-mono mb-6">
        projects work
      </p>
      <div className="w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="w-full bg-white/5 backdrop-blur-sm rounded-md overflow-hidden border border-violet-600">
          <a href="https://ancorporation.vercel.app/">
            <Image
              src={`/anCorporation.png`}
              alt="project 1"
              width={100}
              height={100}
              className="w-full aspect-video"
              unoptimized
            />
          </a>
        </div>
        <div className="w-full bg-white/5 backdrop-blur-sm rounded-md overflow-hidden border border-violet-600">
          <a href="https://react-tailwind-1.vercel.app/">
            <Image
              src={`/reactTailwind.png`}
              alt="project 2"
              width={100}
              height={100}
              className="w-full aspect-video"
              unoptimized
            />
          </a>
        </div>
        <div className="w-full bg-white/5 backdrop-blur-sm rounded-md overflow-hidden border border-violet-600">
          <a href="https://easyloan.vercel.app/">
            <Image
              src={`/easylo.png`}
              alt="project 3"
              width={100}
              height={100}
              className="w-full aspect-video"
              unoptimized
            />
          </a>
        </div>
        <div className="w-full bg-white/5 backdrop-blur-sm rounded-md overflow-hidden border border-violet-600">
          <a href="https://ship-over.vercel.app/">
            <Image
              src={`/ship-over.png`}
              alt="project 4"
              width={100}
              height={100}
              className="w-full aspect-video"
              unoptimized
            />
          </a>
        </div>
        <div className="w-full bg-white/5 backdrop-blur-sm rounded-md overflow-hidden border border-violet-600">
          <a href="https://teeth-help.vercel.app/">
            <Image
              src={`/teeth-help.png`}
              alt="project 5"
              width={100}
              height={100}
              className="w-full aspect-video"
              unoptimized
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main_project;
