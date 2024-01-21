import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact_page() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-4xl capitalize font-bold text-blue-600 mb-5">Contact</h1>
      <div className="w-3/4 grid grid-cols-2 gap-5 md:grid-cols-4">
        {[
          { title: 'Instagram', icon: <CiInstagram className="mr-3 text-3xl font-extrabold text-red-500" />, link: 'https://www.instagram.com/_mr_frontweb_/?utm_source=qr&igshid=ZDExYjZkNGI0OA%3D%3D' },
          { title: 'Whatsapp', icon: <FaWhatsapp className="mr-3 text-3xl font-extrabold text-green-500" />, link: 'https://www.whatsapp.com/channel/0029VaAUu3O0gcfH9CtTwv1Y' },
          { title: 'Github', icon: <FaGithub className="mr-3 text-3xl font-extrabold text-black" />, link: 'http://github.com/prashant-singh-web' },
          { title: 'LinkedIn', icon: <FaLinkedin className="mr-3 text-3xl font-extrabold text-blue-500" />, link: 'https://www.linkedin.com/in/prashant-singh-268854290/' },
        ].map((contact, index) => (
          <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer">
            <div className="flex bg-gray-300 rounded-sm flex-row justify-center items-center py-2 px-4 shadow-[0_0_5px_black] mb-5 duration-300 ease-in-out hover:bg-blue-600/50">
              {contact.icon}
              {contact.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact_page;
