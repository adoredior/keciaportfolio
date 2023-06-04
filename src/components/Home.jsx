import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-cyan-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Kecia Brown
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        As an entry-level software developer, I possess strong skills in full-stack development and a specialization in crafting outstanding digital experiences. Alongside my development expertise, I also have a keen eye for design. My current emphasis is on building responsive full-stack web applications. I am committed to delivering top-notch solutions that cater to client requirements and provide exceptional user experiences. Let's collaborate to transform your ideas into impactful digital solutions
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-600 hover:border-cyan-600'>
            View Projects
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

   