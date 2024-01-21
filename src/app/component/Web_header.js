import Image from "next/image";
import React from "react";

function Web_header() {
  return (
    <div
      className="w-full py-5 px-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% grid grid-cols-3 xsm:grid-cols-1 xsm:py-5 md:grid-cols-2 md:py-5 " >
      <div className="w-full grid grid-cols-2  sm:grid-cols-4 md:grid-cols-2 pl-11 place-items-center ">
      
      <Image src="/logo.jpg" alt="loge" width={100} height={100} className="w-full h-full object-cover  ring-blue-500 ring-4  rounded-full xsm:w-[50px] xsm:h-[50px] md:w-[70px] md:h-[70px]"/>
        <div className="flex flex-col ">
            <h1 className="font-bold text-2xl xsm:text-lg md:text-xl lg:text-2xl capitalize w-full text-left">prashant singh</h1>
            <p className="xsm:text-base">@web-dev</p>
        </div>
      </div>
    </div>
  );
}

export default Web_header;
