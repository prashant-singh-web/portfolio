"use client"
// import Web_header from "./component/Web_header";




import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

import Aboutme from "./component/Aboutme";
import Web_header from "./component/Web_header";
import Main_project from "./component/Main_project";

import MY_Skill from "./component/Skills";
import Contact_us from './component/Contact_us';
import My_Work_Experience from './component/My_Work_Experience';





export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
   
  }, []);
  return (
  
    <main className="flex w-full  text-white min-h-screen flex-col items-center bg-black">
      <Web_header />
      <Aboutme />
      <Main_project />
      <My_Work_Experience/>
     <MY_Skill/>
     <Contact_us/>
     
    </main>
  );
}
