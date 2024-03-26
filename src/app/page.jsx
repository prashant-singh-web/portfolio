"use client"
// import Web_header from "./component/Web_header";



import Contact_page from "./component/Contact_page";

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

import Aboutme from "./component/Aboutme";
import Web_header from "./component/Web_header";
import Main_project from "./component/Main_project";
import Mywork_page from "./component/Mywork_page";
import Skills from "./component/Skills";



export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
   
  }, []);
  return (
    <main className="flex w-full dark:bg-[#111827]  min-h-screen flex-col items-center bg-black">
      <Web_header/>
      {/* <Landingpage/> */}
    <Aboutme/>
     
      <Main_project />
     <Mywork_page/>
     <Skills/>
      <Contact_page />
    </main>
  );
}
