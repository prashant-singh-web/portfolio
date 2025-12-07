import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { FaGithub } from "react-icons/fa";


function Web_header() {
  const stars = Array.from({ length: 700 }, (_, i) => i);
  return (
    <Suspense fallback={null}>
      <div id="home" className="w-full relative h-fit flex flex-col">
      {stars.map((star) => (
        <div
          key={star}
          className="fixed bg-white rounded-full z-[1000]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 5 + 1}s infinite`,
            width: `${Math.random() * 2}px`,
            height: `${Math.random() * 2}px`,
            transformOrigin:"center",
          }}
        />
      ))}
      <div className="w-full flex flex-row justify-between fixed z-[50] p-2 lg:p-3 px-10 backdrop-blur shadow-[0px_0px_20px_black] bg-black/5 shadow-violet-500 ">
        <h1 className=" font-bold text-sm lg:text-xl my-auto text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 drop-shadow-lg ">Prashant Singh</h1>
        <div className=" flex-row text-white text-xs sm:text-sm lg:font-bold border border-violet-500/40 shadow shadow-violet-600/60 hidden sm:flex sm:space-x-10 lg:space-x-20 my-auto  px-5 sm:px-10 py-2 bg-black/50 rounded-full ">
          <a href={`#home`}>About me</a>
          <Link href={`#skills`}>Skills</Link>
          <a href={`#project`}>Project</a>
        </div>
       <a href="http://github.com/prashant-singh-web"  > <FaGithub className="my-auto text-xl text-gray-300" /></a>
      </div>
      <video
        width="320"
        height="240"
        loop
        autoPlay
        muted
        className="w-[230%] absolute bg-red-500 -top-[3.7rem] hidden sm:block sm:-top-[8.2rem] sma:-top-[8.6rem] smb:-top-[8.8rem] smc:-top-[9rem] smd:-top-[9.4rem] sme:-top-[9.75rem] md:-top-[10.5rem] mda:-top-[10.9rem] mdb:-top-[11.3rem] mdc:-top-[11.9rem] mdd:-top-[12.5rem] mde:-top-[13.2rem] mdf:-top-[14rem] mdg:-top-[15.2rem] lg:-top-[15rem] lga:-top-[16rem] lgb:-top-[17rem] lgc:-top-[18rem]  xl:-top-[23rem] rotate-180 left-0 z-[8]"
      >
        <source src="/blackhole.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </Suspense>
  );
}

export default Web_header;
