import React from "react";
import { TbError404Off } from "react-icons/tb";
import { DiCode, DiResponsive } from "react-icons/di";

function Mywork_page() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-4xl capitalize font-bold text-blue-600 mb-5">What Can I Do</h1>
      <div className="w-3/4 grid grid-cols-2 gap-5 md:grid-cols-3">
        {[
          { title: 'Responsive Design', icon: <DiResponsive className="text-2xl h-[100px] w-[100px] text-blue-500" />, description: 'I can create a responsive website which can adapt to all screen sizes like laptop, mobile, pc, tablet and large screen.' },
          { title: 'Website Development', icon: <DiCode className="text-2xl h-[100px] w-[100px] text-blue-500" />, description: 'I can create better websites that can follow all the parameters of the clients and also I can make websites in NEXT JS, REACT JS and PLAIN HTML.' },
          { title: 'Bug Free Design', icon: <TbError404Off className="text-2xl h-[100px] w-[100px] text-blue-500" />, description: 'I can create websites without any bugs and error.' },
        ].map((skill, index) => (
          <div key={index} className="group relative bg-black/30 shadow-xl rounded overflow-hidden duration-300 ease-in-out hover:shadow-[2px_2px_25px_black] hover:-translate-x-1 hover:-translate-y-1">
            <div className="w-full h-fit grid place-items-center">{skill.icon}</div>
            <div className="w-full text-center flex flex-col p-3">
              <p className="text-lg font-medium capitalize">{skill.title}</p>
            </div>
            <p className="absolute top-0 left-0 w-full h-full bg-black ease-linear duration-300 translate-y-[100%] group-hover:translate-y-0 text-sm p-3 font-normal text-white">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mywork_page;
