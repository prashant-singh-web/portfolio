import React from 'react'

function ResponsiveWebsite() {
  return (
    <div className="w-[90%]">
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex w-full flex-col ">
        <h2 className="text-5xl lg:text-7xl text-gray-600 leading-[4rem]">
          Responsive Design
        </h2>
        <p className="text-gray-500 w-full mt-7">
          As a web developer, I specialize in crafting responsive websites
          using{" "}
          <span className="text-white font-medium">
            Tailwind CSS, plain CSS, Next.js,
          </span>{" "}
          and <span className="text-white font-medium">React</span>. These
          websites seamlessly adapt to a wide range of devices, including
          mobile phones, tablets, laptops, and large desktop screens.
        </p>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className=" w-[16rem] lg:w-[22rem] aspect-video border   rounded-[10px_10px_0px_0px] laptopOuterFrame p-0.5 pb-2 ">
          <div className="w-full h-full rounded-[10px_10px_10px_10px] border p-1.5 lg:p-3 relative ">
            <div className="absolute top-[0.5px] lg:top-1 left-32  lg:left-44 border rounded-full p-[0.5px] lg:p-[1px]">
              <div className="p-[1px] bg-white rounded-full"></div>
            </div>
            <div className="w-full h-full rounded-sm border  grid place-items-center p-1">
              <div className="tablet  w-24 h-36 rounded border py-3 px-0.5 relative ">
              <div className="absolute top-1 left-12 border rounded-full p-[1px] bg-white"></div>
              <div className="absolute bottom-[1.5px] left-[2.6rem] border rounded-full p-1 "></div>
                <div className="w-full h-full border rounded-sm grid place-items-center">
                  <div className="w-12 rounded-sm h-24 border px-0.5 py-1">
                    <div className="w-full h-full rounded-sm border"></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[19rem] lg:w-[25rem] h-1.5 lg:h-3 border   rounded"></div>
      </div>
    </div>
  </div>
  )
}

export default ResponsiveWebsite