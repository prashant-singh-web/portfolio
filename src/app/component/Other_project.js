import React from "react";

function Other_project() {
  const Other_project = [
    {
      project_name: "calcalutor",
    },
    {
      project_name: "stopwatch",
    },
    {
      project_name: "dropdown menu",
    },
    {
      project_name: "wheather app",
    },
    {
      project_name: "signup page",
    },
    {
      project_name: "grade calculator",
    },
  ];
  return (
    <div className="w-full flex flex-col">
      <p className="text-2xl capitalize font-semibold p-5">other project</p>
      <div className="w-full px-10 py-5 ">
        <ul className="list-none  bg-transparent text-base text-white/70 font-medium capitalize rounded-xl  gap-4 grid grid-cols-6 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
         {Other_project.map((item, index) => { return(
           <li key={index} className=" shadow-xl backdrop-blur-3xl bg-black/20 rounded-lg text-center py-1 hover:text-white hover:scale-x-90 duration-200 ease-linear cursor-pointer">
           {item?.project_name}
         </li>
         )
})}
          
        </ul>
      </div>
    </div>
  );
}

export default Other_project;
