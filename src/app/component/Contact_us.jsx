import React from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

function Contact_us() {
  return (
    <div id="contact" className="w-full flex flex-col items-center py-12 px-4 bg-black">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-violet-500 mb-10">
        Contact
      </h2>

      <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Contact Info */}
        <div className="flex flex-col space-y-6 text-white text-base">
          <div className="flex items-center space-x-4">
            <MdEmail className="text-xl text-violet-500" />
            <a href="mailto:prashantsingh7559@gmail.com" className="hover:underline">
              prashantsingh7559@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <MdPhone className="text-xl text-violet-500" />
            <a href="tel:+917652021778" className="hover:underline">
              +91 7652021778
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaGithub className="text-xl text-violet-500" />
            <a
              href="https://github.com/prashant-singh-web"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              https://github.com/prashant-singh-web
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-xl text-violet-500" />
            <a
              href="https://www.linkedin.com/in/prashant-singh-268854290"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              https://www.linkedin.com/in/prashant-singh-268854290
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <MdLocationOn className="text-xl text-violet-500" />
            <span>Jaunpur, Uttar Pradesh, India</span>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="w-full  justify-center hidden md:flex">
          <Image
            src="/prashantsingh.png"
            alt="Prashant Singh"
            width={350}
            height={350}
            className="rounded-full border border-violet-500 shadow-lg object-cover relative z-[1000]"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact_us;

