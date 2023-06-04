import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello! I'm Kecia Brown. It's a pleasure to meet you. Please feel free to explore and have a look around.</p>
            </div>
            <div>
              <p>As a newcomer to the industry, I am enthusiastic about delving into the world of software development and utilizing my skills to create valuable solutions. My goal is to build high-quality software that enhances the lives of users and meets their specific needs. Whether it's for individuals, small businesses, or large corporations, I am dedicated to learning and growing in order to deliver effective software solutions. Imagine having a dedicated software professional who is eager to bring your ideas to fruition. How would it feel to have a trusted partner guiding you through the process of creating impactful software?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;