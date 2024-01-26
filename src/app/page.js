"use client"
// import Web_header from "./component/Web_header";
import Main_project from "./component/Main_project";

import Skill_info from "./component/Skill_info";
import Contact_page from "./component/Contact_page";
import About_page from "./component/About_page";
import Homepage from "./component/Homepage";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";



export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
   
  }, []);
  return (
    <main className="flex w-full dark:bg-[#111827] text-white min-h-screen flex-col items-center bg-white">
      {/* <Web_header /> */}
      <Homepage/>
      <About_page />
      <Main_project />
      <Skill_info />
      <Contact_page />
    </main>
  );
}
