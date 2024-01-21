import React from 'react';

function Skill_info() {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-gray-100 py-10'>
      <h1 className='text-2xl capitalize font-bold text-blue-600 mb-5'>My Skills</h1>
      <div className="w-3/4 grid grid-cols-1 gap-5 md:grid-cols-4">
        {[
          { title: 'Frontend', skills: ['React Js', 'Next Js', 'HTML'] },
          { title: 'Style', skills: ['CSS', 'SCSS', 'Tailwind Css', 'Material Ui'] },
          { title: 'Backend', skills: ['Express Js', 'Node Js'] },
          { title: 'Database', skills: ['Mongodb', 'Mysql'] },
          { title: 'Api', skills: ['Rest Api'] },
          { title: 'Cloud', skills: ['Github'] },
        ].map((category, index) => (
          <div key={index} className=" shadow-xl rounded overflow-hidden duration-300 ease-in-out   p-5">
            <p className='text-xl capitalize text-black font-semibold text-center mb-3'>{category.title}</p>
            <ul className='text-lg font-medium cursor-pointer my-2 text-black capitalize '>
              {category.skills.map((skill, index) => (
                <li key={index} className='py-1 px-3 mb-2 text-center rounded-md  bg-[#E5E7EB] duration-300 ease-in-out  hover:text-blue-600 '>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill_info;
