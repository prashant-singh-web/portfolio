import React from "react";

function About_page() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-4xl capitalize font-bold text-blue-600 mb-5">About Me</h1>
      <div className="w-3/4 bg-white shadow-lg rounded-lg p-8 text-gray-700">
        <p className="text-lg font-medium leading-relaxed">
          Hi, my name is Prashant Singh and I am a web development enthusiast. I am a full stack web developer.
          <br /><br />
          I started learning web development back in 2019 when I didn’t even know about HTML. But today, I am on the way to learn NextJs. Many times, I found it hard but slowly and with patience, I learnt HTML, then CSS, and afterwards JavaScript – the soul of all the websites. Still, I am a keen learner in the field of web development.
          <br /><br />
          I studied and made some projects using basic HTML, CSS, and JavaScript. Afterwards, I learnt SASS- the preprocessor of CSS, then ReactJs- a popular frontend JavaScript library. Now, I am learning NextJs.
          <br /><br />
          I also know about MySQL database as well as about MongoDB – a popular NoSQL based database. I am able to use NodeJs and ExpressJs. This way, I am able to work with a complete full stack.
          <br /><br />
          I would like to work with professionals in the field and under their guidance, I will be able to improve my knowledge further in the domain of web development. In this way, I would be able to contribute to our world towards a better future.
        </p>
      </div>
    </div>
  );
}

export default About_page;
