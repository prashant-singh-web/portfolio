import Web_header from "./component/Web_header";
import Main_project from "./component/Main_project";

import Skill_info from "./component/Skill_info";
import Contact_page from "./component/Contact_page";
import About_page from "./component/About_page";


export default function Home() {
  return (
    <main className="flex text-white min-h-screen flex-col items-center bg-white">
      <Web_header />
      <About_page />
      <Main_project />

      <Skill_info />

      <Contact_page />
    </main>
  );
}
