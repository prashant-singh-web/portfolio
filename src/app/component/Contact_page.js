import Link from "next/link";
import React from "react";
import { CiInstagram } from "react-icons/ci";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Contact_page() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-100 dark:bg-[#111827]">
      <p className="text-2xl capitalize font-bold p-5 text-gray-700 dark:text-white dark:border-white border-gray-900 border-b-2 font-mono mb-6">
        Get in touch
      </p>
      <div className="w-3/4 flex flex-col xsm:w-full md:w-3/4 ">
        <div className="w-full h-fit  grid grid-cols-2 xsm:grid-cols-1 md:grid-cols-2">
          <div className="w-full flex text-gray-500 flex-col text-left mx-3 py-10">
            <p className="text-3xl font-black md:text-5xl ">We{"'"}re here</p>
            <p className="text-sm font-medium mt-4 px-1 xsm:text-xs md:text-sm">
              “Our doors are always open for a productive conversation.”
            </p>
          </div>
          <div className="w-full flex flex-col text-left px-5 py-10 bg-white/50 text-gray-800">
            <p className=" font-black text-3xl md:text-5xl">Let{"'"}s talk</p>
            <p className="text-sm font-medium mt-4">
              “share your excitement with us”
            </p>
            <p className="flex items-center cursor-pointer border-b-2 border-gray-800 w-fit pb-1 group">
              prashantsingh1858@gmail.com{" "}
              <FaArrowRight className="ml-1 group-hover:ml-2 duration-200 ease-in-out" />{" "}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col   py-5 justify-center items-center">
          <ul className="flex flex-row space-x-10 text-gray-400 text-3xl  xsm:my-4 xsm:space-x-7 md:space-x-10">
            {/* put your url in href="url" */}
            <li>
              <Link
                href="https://www.instagram.com/_mr_frontweb_/?utm_source=qr&igshid=ZDExYjZkNGI0OA%3D%3D"
                className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.whatsapp.com/channel/0029VaAUu3O0gcfH9CtTwv1Y"
                className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"
              >
                <FaWhatsapp />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/prashant-singh-268854290/"
                className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"
              >
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link
                href="http://github.com/prashant-singh-web"
                className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"
              >
                <FaGithub />
              </Link>
            </li>
          </ul>
          <p className=" text-sm font-normal text-gray-400 dark:text-gray-700 xsm:mb-3">
            © 2019 - {new Date().getFullYear()} Prashant Singh.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact_page;
