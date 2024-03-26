import Link from "next/link";
import React from "react";
import { BsPhone } from "react-icons/bs";
import { CgPhone, CgWebsite } from "react-icons/cg";
import { CiInstagram } from "react-icons/ci";
import {
  FaAddressBook,
  FaAddressCard,
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbNumber } from "react-icons/tb";

function Contact_page() {
  return (
    <div className="w-full flex flex-col items-center py-20  p-10 z-[51]">
      <h2 className="text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Contact Me</h2>
      
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-10">
        <div className="flex w-full flex-col justify-center space-y-2 items-center shadow border border-violet-400 rounded-md py-5">
          <FaAddressCard className="w-20 p-5 h-20 bg-violet-500 rounded-full text-white"/>
          <h2 className="text-lg font-medium text-white ">Address</h2>
          <h3 className="text-gray-200/70">Jaunpur,U.P.,222136</h3>
        </div>
        <div className="flex w-full flex-col justify-center space-y-2 items-center shadow border border-violet-400 rounded-md py-5">
          <SiGmail className="w-20 p-5 h-20 bg-violet-500 rounded-full text-white"/>
          <h2 className="text-lg font-medium  text-white">Email</h2>
          <h3 className="text-gray-200/70">prashantsingh7559@gamil.com</h3>
        </div>
        
        <div className="flex w-full flex-col justify-center space-y-2 items-center shadow border border-violet-400 rounded-md py-5">
          <CgWebsite className="w-20 p-5 h-20 bg-violet-500 rounded-full text-white"/>
          <h2 className="text-lg font-medium text-white ">Phone Number</h2>
          <h3 className="text-gray-200/70">+91-7652021778</h3>
        </div>
        <div className="w-full h-full grid grid-cols-2 gap-5 p-5 items-center place-items-center border border-violet-400 rounded-md text-white">
        
              <Link
                href="https://www.instagram.com/_mr_frontweb_/?utm_source=qr&igshid=ZDExYjZkNGI0OA%3D%3D"
                className="hover:text-gray-500  duration-200 ease-linear"
              >
                <FaInstagram className="size-12" />
              </Link>
           
              <Link
                href="https://www.whatsapp.com/channel/0029VaAUu3O0gcfH9CtTwv1Y"
                className="hover:text-gray-600  duration-200 ease-linear"
              >
                <FaWhatsapp  className="size-12"/>
              </Link>
           
              <Link
                href="https://www.linkedin.com/in/prashant-singh-268854290/"
                className="hover:text-gray-600  duration-200 ease-linear "
              >
                <FaLinkedin className="size-12" />
              </Link>
           
              <Link
                href="http://github.com/prashant-singh-web"
                className="hover:text-gray-600  duration-200 ease-linear "
              >
                <FaGithub className="size-12" />
              </Link>
           
        </div>
      </div>
      
      
    </div>
  );
}

export default Contact_page;
