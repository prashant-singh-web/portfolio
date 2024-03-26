import React from "react";
import { TbError404Off } from "react-icons/tb";
import { DiCode, DiResponsive } from "react-icons/di";
import ResponsiveWebsite from "./ResponsiveWebsite";
import OnTimeDelivery from "./OnTimeDelivery";

function Mywork_page() {
  return (
    <div className="w-full flex flex-col items-center space-y-6  py-10">
      <h1 className="text-4xl capitalize font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-violet-500 mb-5">
        What we Offer
      </h1>
      <ResponsiveWebsite/>
      <OnTimeDelivery/>
    </div>
  );
}

export default Mywork_page;
