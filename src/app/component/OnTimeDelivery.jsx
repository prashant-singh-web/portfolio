import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";

function OnTimeDelivery() {
  return (
    <div className="w-[90%]">
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      <div className="flex w-full flex-col ">
        <h2 className=" text-5xl lg:text-7xl text-gray-600 leading-[4rem]">
          On Time Delivery
        </h2>
        <p className="text-gray-500 w-full mt-7">
        As developer, we prioritize timely delivery. We respect both our time and our customers’ time. Our commitment is to complete projects promptly and deliver them immediately.
        </p>
      </div>
      <div className="w-full h-full grid place-items-center">
<CiDeliveryTruck className='text-[15rem] text-gray-500/50'/>
      </div>
        
    </div>
  </div>
  )
}

export default OnTimeDelivery
